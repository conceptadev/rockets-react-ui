import Label, { LabelProps } from '../atoms/Label';
import Input, { InputProps } from '../atoms/Input';
import Spacer from '../layout-helpers/Spacer';
import Column from '../layout-helpers/Column';
import PasswordInput from '../atoms/PasswordInput';

export type FormInputProps = InputProps &
  LabelProps & {
    password?: boolean;
  };

export const FormInput: React.FC<FormInputProps> = ({ password, ...props }) => {
  return (
    <Column>
      <Label {...props} />
      <Spacer vertical size={1} />
      {password ? <PasswordInput {...props} /> : <Input {...props} />}
    </Column>
  );
};

export default FormInput;
