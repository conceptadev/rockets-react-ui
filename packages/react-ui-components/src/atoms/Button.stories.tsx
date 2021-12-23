import {Meta, Story} from "@storybook/react";
import Button, { ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'Base Button',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  secondary: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined Button',
  outlined: true,
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  label: 'Left Icon',
  leftIcon: 'MailIcon',
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: 'Right Icon',
  rightIcon: 'MailIcon',
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Rounded Button',
  rounded: true
};

export const IconButton = Template.bind({});
IconButton.args = {
  rounded: true,
  leftIcon: 'MailIcon',
};

export const XSButton = Template.bind({});
XSButton.args = {
  label: 'XS Button',
  xs: true,
};

export const SMButton = Template.bind({});
SMButton.args = {
  label: 'SM Button',
  sm: true
};

export const MDButton = Template.bind({});
MDButton.args = {
  label: 'MD Button',
  md: true
};

export const LGButton = Template.bind({});
LGButton.args = {
  label: 'LG Button',
  lg: true
};

export const XLButton = Template.bind({});
XLButton.args = {
  label: 'XL Button',
  xl: true
};