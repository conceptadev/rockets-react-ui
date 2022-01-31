import {Meta, Story} from "@storybook/react";
import { SigninTemplate, SigninTemplateProps } from "./SigninTemplate";

export default {
  title: 'Templates/SigninTemplate',
  component: SigninTemplate,
} as Meta;

const Template: Story<SigninTemplateProps> = (args) => <SigninTemplate {...args} />;

export const Base = Template.bind({});
Base.args = {
};
