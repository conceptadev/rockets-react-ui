import {
    TailwindIcon, TailwindIconProps,
} from '../tailwind-abstraction/TailwindIcon';
import { ThemeProps, withTheme } from '../themeUtils';

const ThemedIcon = withTheme(TailwindIcon, 'Icon');

export type IconProps = TailwindIconProps & ThemeProps;

const Icon: React.FC<IconProps> = (props) => {
  return (
    <ThemedIcon {...props} />
  );
};

export default Icon;

