import Label, { LabelProps } from '../atoms/Label';
import Input, { InputProps } from '../atoms/Input';
import Spacer from '../layout-helpers/Spacer';
import Column from '../layout-helpers/Column';

export type FormInputProps = InputProps & LabelProps;

export const FormInput: React.FC<FormInputProps> = (props) => {
    return (
       <Column>
         <Label {...props}/>
         <Spacer vertical size={1} />
         <Input {...props}/>
       </Column>
    );
  };

export default FormInput;
   