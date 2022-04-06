import React, { useState } from 'react';

import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';
import Anchor from '../atoms/Anchor';
import Header from '../atoms/Header';
import Caption from '../atoms/Caption';
import Row from '../layout-helpers/Row';
import Spacer from '../layout-helpers/Spacer';
import Card from '../templates/Card';
import Column from '../layout-helpers/Column';
import Divider from '../atoms/Divider';

interface UserData {
  user: string;
  password: string;
}
export interface SimpleLoginFormProps {
  onSignIn(userData: UserData): void;
  logo?: React.ReactNode;
  errors?: {
    user: string;
    password: string;
  };
  title?: React.ReactNode | string;
  caption?: React.ReactNode | string;
  hideCaption?: boolean;
  hideTitle?: boolean;
}

export const SimpleLoginForm: React.FC<SimpleLoginFormProps> = ({
  onSignIn,
  errors,
  logo,
  title = '',
  caption = '',
  hideCaption = false,
  hideTitle = false,
}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Column backgroundClass="bg-outlined-50" padding={10}>
      <Spacer vertical size={10} />

      {logo && <Row justify="center">{logo}</Row>}

      <Spacer vertical size={5} />

      {typeof title === 'string' ? (
        <Row justify="center">
          <Spacer size={10} />
          <Header label={title || 'Welcome'} />
          <Spacer size={10} />
        </Row>
      ) : (
        !hideTitle && title
      )}
      <Spacer vertical size={5} />
      {!hideCaption && typeof caption === 'string' ? (
        <Row justify="center">
          <Caption label={caption || 'Sign in to continue!'} />
        </Row>
      ) : (
        !hideCaption && caption
      )}

      <Spacer vertical size={5} />

      <Card
        style={{
          minWidth: '375px',
          borderRadius: '6px',
        }}
      >
        <Spacer vertical size={5} />

        <FormInput
          label="Username"
          fullWidth
          error={errors && errors.user}
          value={user}
          onChange={(value) => setUser(value)}
        />

        <Spacer vertical size={5} />

        <FormInput
          label="Password"
          type="password"
          fullWidth
          error={errors && errors.password}
          value={password}
          onChange={(value) => setPassword(value)}
        />
        <Spacer vertical size={5} />

        <Row justify="center">
          <Anchor label="Forgot your password?" href="#" />
        </Row>

        <Spacer vertical size={5} />

        <Button
          label="Sign in"
          fullWidth
          onClick={() => onSignIn({ user, password })}
        />
        <Spacer vertical size={8} />

        <Divider label="Or continue with" />

        <Spacer vertical size={8} />

        <Row justify="center">
          <Button outlined fullWidth>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Row>

        <Spacer vertical size={8} />

        <Row justify="center">
          <Anchor label="No account? Sign up" href="#" />
        </Row>
      </Card>
      <Spacer vertical size={10} />
    </Column>
  );
};

export default SimpleLoginForm;
