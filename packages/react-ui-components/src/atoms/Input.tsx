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
    error?: string;
  };
const ThemedInput = withTheme(TailwindInput, 'Input');

const Input: React.FC<InputProps> = ({ error = '', ...props }) => {
  return (
    <Row column>
      <ThemedInput {...props} errored={error.length > 0} />
      {/* {showClear && (
        <Column absolute right>
          <Icon icon="XIcon" />
        </Column>
      )} */}
      {error && <span className="text-xs text-red-700">{error}</span>}
    </Row>
  );
};

export default Input;
