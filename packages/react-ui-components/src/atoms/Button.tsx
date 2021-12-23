import {
  TailwindButton,
  TailwindButtonProps,
} from '../tailwind-abstraction/TailwindButton';
import { ThemeProps, withTheme } from '../themeUtils';

export type ButtonProps = TailwindButtonProps & ThemeProps;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = withTheme(
  TailwindButton,
  'Button',
);

export default Button;
