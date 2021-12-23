import {Meta, Story} from "@storybook/react";
import { SignInForm, SignInformProps } from "./SignInForm";

export default {
  title: 'Organisms/SignInForm',
  component: SignInForm,
} as Meta;

const Template: Story<SignInformProps> = (args) => <SignInForm {...args} />;

export const Base = Template.bind({});
Base.args = {};
