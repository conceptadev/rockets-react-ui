import {
  TailwindLabel,
  TailwindLabelProps,
} from '../tailwind-abstraction/TailwindLabel';
import { ThemeProps, withTheme } from '../themeUtils';

export type LabelProps = TailwindLabelProps & ThemeProps;

const Label: React.FC<LabelProps> = withTheme(TailwindLabel, 'Label');

export default Label;