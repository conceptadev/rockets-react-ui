import Row from '../layout-helpers/Row';
import Icon from './Icon';
import {
  TailwindInput,
  TailwindInputProps,
} from '../tailwind-abstraction/TailwindInput';
import { ThemeProps, withTheme } from '../themeUtils';
import Column from '../layout-helpers/Column';

export type InputProps = TailwindInputProps &
  ThemeProps & {
    showClear?: boolean;
  };
const ThemedInput = withTheme(TailwindInput, 'Input');

const Input: React.FC<InputProps> = (props) => {
  return (
    <Row align="center">
      <ThemedInput {...props} />
      {props.showClear && (
        <Column absolute right>
          <Icon icon="XIcon" />
        </Column>
      )}
    </Row>
  );
};

export default Input;
