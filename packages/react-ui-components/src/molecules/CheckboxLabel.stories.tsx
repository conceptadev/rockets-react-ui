import {Meta, Story} from "@storybook/react";
import { CheckboxLabel, CheckboxLabelProps } from './CheckboxLabel';

export default {
  title: 'Molecules/CheckboxLabel',
  component: CheckboxLabel,
} as Meta;

const Template: Story<CheckboxLabelProps> = (args) => <CheckboxLabel {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'Base CheckboxLabel',
};

export const XSCheckboxLabel = Template.bind({});
XSCheckboxLabel.args = {
  label: 'XS CheckboxLabel',
  xs: true,
};

export const SMCheckboxLabel = Template.bind({});
SMCheckboxLabel.args = {
  label: 'SM CheckboxLabel',
  sm: true,
};

export const MDCheckboxLabel = Template.bind({});
MDCheckboxLabel.args = {
  label: 'MD CheckboxLabel',
  md: true,
};

export const LGCheckboxLabel = Template.bind({});
LGCheckboxLabel.args = {
  label: 'LG CheckboxLabel',
  lg: true,
};

export const XLCheckboxLabel = Template.bind({});
XLCheckboxLabel.args = {
  label: 'XL CheckboxLabel',
  xl: true,
};

