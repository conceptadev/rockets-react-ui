import { Meta, Story } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Base = Template.bind({});

export const XSCheckbox = Template.bind({});
XSCheckbox.args = {
  xs: true,
};

export const SMCheckbox = Template.bind({});
SMCheckbox.args = {
  sm: true,
};

export const MDCheckbox = Template.bind({});
MDCheckbox.args = {
  md: true,
};

export const LGCheckbox = Template.bind({});
LGCheckbox.args = {
  lg: true,
};

export const XLCheckbox = Template.bind({});
XLCheckbox.args = {
  xl: true,
};
