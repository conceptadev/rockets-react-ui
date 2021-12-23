import Label, { LabelProps } from '../atoms/Label';
import Checkbox, { CheckboxProps } from '../atoms/Checkbox';
import Row from '../layout-helpers/Row';
import Spacer from '../layout-helpers/Spacer';

export type CheckboxLabelProps = CheckboxProps & LabelProps;

export const CheckboxLabel: React.FC<CheckboxLabelProps> = (props) => {
  return (
    <Row align="center">
      <Checkbox {...props} />
      <Spacer size={2} />
      <Label {...props} />
    </Row>
  );
};

export default CheckboxLabel;
