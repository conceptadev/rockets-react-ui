import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Base = Template.bind({});

// export const WithClearInput = Template.bind({});
// WithClearInput.args = {
//   showClear: true,
// };

export const XSInput = Template.bind({});
XSInput.args = {
  xs: true,
};

export const SMInput = Template.bind({});
SMInput.args = {
  sm: true,
};

export const MDInput = Template.bind({});
MDInput.args = {
  md: true,
};

export const LGInput = Template.bind({});
LGInput.args = {
  lg: true,
};

export const XLInput = Template.bind({});
XLInput.args = {
  xl: true,
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  error: 'Some error',
  errored: true,
};
