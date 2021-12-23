import {
  TailwindHeader,
  TailwindHeaderProps,
} from '../tailwind-abstraction/TailwindHeader';
import { ThemeProps, withTheme } from '../themeUtils';

export type HeaderProps = TailwindHeaderProps & ThemeProps;

const Header: React.FC<HeaderProps> = withTheme(TailwindHeader, 'Header');

export default Header;
