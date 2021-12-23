# nestjs-access-control

Advanced access control guard for NestJS

## IMPORTANT

When building your ACL, you need to remember these!

> This module only helps you apply a pattern. There is no magic, you are ultimately responsible for
checking that your ACL works in all contexts.

Here is the pattern:

* Giving `any` access implies that the role IS NOT restricted by ownership, or other rules, to that action/resource combination.
* Giving `own` access implies that the role IS restricted by ownership to that action/resource combination
(it is often required to enforce this rule with a filter to check the data layer when not all information required to
check ownership exists in the parameters or query string.) 

!!! Important !!!

> All roles that are given `any` access to a resource will NOT be passed through access filters since `any` implies they should have all access.

## Example

These are very rough examples. We intend to improve them ASAP.

### Simple User Entity

```typescript
import {
  Entity,
  Column,
  ManyToMany,
  Unique,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Role } from '../auth/role.entity';

@Entity()
@Unique(['username'])
export class User {
  @Column()
  username!: string;

  @Column()
  @Exclude()
  password!: string;

  @Column()
  @Exclude()
  salt!: string;

  @ManyToMany(() => Role, role => role.users, {
    eager: true,
    onDelete: 'CASCADE',
  })
  roles!: Role[];
}
```

### Your custom AccessControlService

```typescript
import { AccessControlService } from 'nestjs-access-control';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/user.entity';

export class ACService implements AccessControlService {
  async getUser<T>(context: ExecutionContext): Promise<T> {
    const request = context.switchToHttp().getRequest();
    return request.user as T;
  }
  async getUserRoles(context: ExecutionContext): Promise<string | string[]> {
    const user = await this.getUser<User>(context);
    if (!user || !user.roles) throw new UnauthorizedException();
    return user.roles.map(role => role.name);
  }
}
```

### Your custom ACL rules

```typescript
import { AccessControl } from 'accesscontrol';

export enum AppRole {
  SuperAdmin = 'SuperAdmin',
  User = 'User',
}

export enum AppResource {
  User = 'user',
  UserList = 'user-list',
}

const allResources = Object.values(AppResource);
const allRoles = Object.values(AppRole);

export const acRules: AccessControl = new AccessControl();

// admins can do whatever they want
acRules
  .grant([AppRole.SuperAdmin])
  .resource(allResources)
  .createOwn()
  .createAny()
  .readOwn()
  .readAny()
  .updateOwn()
  .updateAny()
  .deleteOwn()
  .deleteAny();

// regular users can read self
acRules.grant(AppRole.User).resource([AppResource.User]).readOwn();

// make sure nobody can delete themselves
acRules.deny(allRoles).resource(AppResource.User).deleteOwn();
```

### Import the module into your app

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccessControlModule } from 'nestjs-access-control';
import { ACService } from './modules/auth/access-control.service';
import { acRules } from './app.acl';

@Module({
  imports: [
    // ...
    AccessControlModule.register({ service: ACService, rules: acRules }),
    // ...
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### Implement on your controller (nestjsx CRUD module with Passport guard example)

```typescript
import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AppResource } from '../../app.acl';
import {
  AccessControlCreateOne,
  AccessControlDeleteOne,
  AccessControlGuard,
  AccessControlReadMany,
  AccessControlReadOne,
  AccessControlUpdateOne,
  UseAccessControl,
} from '@rockts-org/nestjs-access-control';
import { UserDto, CreateUserDto, UpdateUserDto } from './dto';
import { UserAccessControlFilterService } from './user-access-control-filter.service';

@ApiTags(AppResource.User)
@ApiBearerAuth()
@Crud({
  model: {
    type: UserDto,
  },
  dto: {
    create: CreateUserDto,
    update: UpdateUserDto,
  },
  routes: {
    only: [
      'getManyBase',
      'getOneBase',
      'createOneBase',
      'updateOneBase',
      'deleteOneBase',
    ],
    getManyBase: {
      decorators: [
        ApiOperation({
          operationId: 'user_getMany',
        }),
        AccessControlReadMany(AppResource.UserList),
      ],
    },
    getOneBase: {
      decorators: [
        ApiOperation({
          operationId: 'user_getOne',
        }),
        AccessControlReadOne(
          AppResource.User,
          async (params: {id: string}, user: User, service: UserAccessControlFilterService): Promise<boolean> => {
            return params.id === user.id && true === service.userCanRead(id, user);
          }
        ),
      ],
    },
    createOneBase: {
      decorators: [
        ApiOperation({
          operationId: 'user_createOne',
        }),
        AccessControlCreateOne(AppResource.User),
      ],
    },
    updateOneBase: {
      decorators: [
        ApiOperation({
          operationId: 'user_updateOne',
        }),
        AccessControlUpdateOne(AppResource.User),
      ],
    },
    deleteOneBase: {
      decorators: [
        ApiOperation({
          operationId: 'user_deleteOne',
        }),
        AccessControlDeleteOne(AppResource.User),
      ],
    },
  },
})
@Controller(AppResource.User)
@UseGuards(AuthGuard(), AccessControlGuard)
@UseAccessControl({ service: UserAccessControlFilterService })
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
```
