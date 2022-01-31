import {
  TailwindButton,
  TailwindButtonProps,
} from '../tailwind-abstraction/TailwindButton';
import { TailwindButton2 } from '../tailwind-abstraction/TailwindButton2';
import { ThemeProps, withTheme } from '../themeUtils';

export type ButtonProps = TailwindButtonProps & ThemeProps;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = withTheme(
  TailwindButton,
  'Button',
);

export default Button;

const Button2: React.FC<React.PropsWithChildren<ButtonProps>> = withTheme(
  TailwindButton2,
  'Button2',
);

export { Button2 };
