import Row from '../layout-helpers/Row';
import Icon from './Icon';
import {
  TailwindInput,
  TailwindInputProps,
} from '../tailwind-abstraction/TailwindInput';
import { ThemeProps, withTheme } from '../themeUtils';
import Column from '../layout-helpers/Column';
import { useState } from 'react';

export type InputProps = TailwindInputProps & ThemeProps & {};
const ThemedInput = withTheme(TailwindInput, 'Input');

const Input: React.FC<InputProps> = (props) => {
  const [type, setType] = useState<string>('password');

  return (
    <Row align="center">
      <ThemedInput {...{ ...props, type }} />
      {type === 'password' ? (
        <Column absolute right>
          <Icon
            icon="EyeIcon"
            styles="text-gray-400"
            onClick={() => setType('')}
          />
        </Column>
      ) : (
        <Column absolute right>
          <Icon
            icon="EyeOffIcon"
            styles="text-gray-400"
            onClick={() => setType('password')}
          />
        </Column>
      )}
    </Row>
  );
};

export default Input;
