import { Meta, Story } from '@storybook/react';
import { SimpleLoginForm, SimpleLoginFormProps } from './SimpleLoginForm';

export default {
  title: 'Organisms/SimpleLoginForm',
  component: SimpleLoginForm,
} as Meta;

const Template: Story<SimpleLoginFormProps> = (args) => (
  <SimpleLoginForm {...args} />
);

export const Base = Template.bind({});
Base.args = {};

export const HideCaption = Template.bind({});
HideCaption.args = {
  hideCaption: true,
};
