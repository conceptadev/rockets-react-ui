import {Meta, Story} from "@storybook/react";
import Icon, { IconProps } from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Base = Template.bind({});
Base.args = {
  icon: 'XIcon'
};

export const XSIcon = Template.bind({});
XSIcon.args = {
  xs: true,
  icon: 'XIcon'
};

export const SMIcon = Template.bind({});
SMIcon.args = {
  sm: true,
  icon: 'XIcon'
};

export const MDIcon = Template.bind({});
MDIcon.args = {
  md: true,
  icon: 'XIcon'
};

export const LGIcon = Template.bind({});
LGIcon.args = {
  lg: true,
  icon: 'XIcon'
};

export const XLIcon = Template.bind({});
XLIcon.args = {
  xl: true,
  icon: 'XIcon'
};
