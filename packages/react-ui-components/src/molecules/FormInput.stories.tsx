import { Meta, Story } from '@storybook/react';
import { FormInput, FormInputProps } from './FormInput';

export default {
  title: 'Molecules/FormInput',
  component: FormInput,
} as Meta;

const Template: Story<FormInputProps> = (args) => <FormInput {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'Base Form Input',
};

export const XSFormInput = Template.bind({});
XSFormInput.args = {
  label: 'XS Form Input',
  xs: true,
};

export const SMFormInput = Template.bind({});
SMFormInput.args = {
  label: 'SM Form Input',
  sm: true,
};

export const MDFormInput = Template.bind({});
MDFormInput.args = {
  label: 'MD Form Input',
  md: true,
};

export const LGFormInput = Template.bind({});
LGFormInput.args = {
  label: 'LG Form Input',
  lg: true,
};

export const XLFormInput = Template.bind({});
XLFormInput.args = {
  label: 'XL Form Input',
  xl: true,
};

export const FormInputError = Template.bind({});
FormInputError.args = {
  label: 'Error Form Imput',
  error: 'olar',
};
