import {
  TailwindCheckbox,
  TailwindCheckboxProps,
} from '../tailwind-abstraction/TailwindCheckbox';
import { ThemeProps, withTheme } from '../themeUtils';

export type CheckboxProps = TailwindCheckboxProps & ThemeProps;

const Checkbox: React.FC<CheckboxProps> = withTheme(
  TailwindCheckbox,
  'Checkbox',
);

export default Checkbox;
