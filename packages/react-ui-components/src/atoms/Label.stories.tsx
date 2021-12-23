import {Meta, Story} from "@storybook/react";
import Label, { LabelProps } from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Base = Template.bind({});
Base.args = {
    label: 'Base Label'
}

export const XSLabel = Template.bind({});
XSLabel.args = {
  label: 'XS Label',
  xs: true,
};

export const SMLabel = Template.bind({});
SMLabel.args = {
  label: 'SM Label',
  sm: true,
};

export const MDLabel = Template.bind({});
MDLabel.args = {
  label: 'MD Label',
  md: true,
};

export const LGLabel = Template.bind({});
LGLabel.args = {
  label: 'LG Label',
  lg: true,
};

export const XLLabel = Template.bind({});
XLLabel.args = {
  label: 'XL Label',
  xl: true,
};
