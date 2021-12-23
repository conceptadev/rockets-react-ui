import {Meta, Story} from "@storybook/react";
import Header, { HeaderProps } from './Header';

export default {
  title: 'Atoms/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'Base Header'
}

export const XSHeader = Template.bind({});
XSHeader.args = {
  label: 'XS Header',
  xs: true,
};

export const SMHeader = Template.bind({});
SMHeader.args = {
  label: 'SM Header',
  sm: true,
};

export const MDHeader = Template.bind({});
MDHeader.args = {
  label: 'MD Header',
  md: true,
};

export const LGHeader = Template.bind({});
LGHeader.args = {
  label: 'LG Header',
  lg: true,
};

export const XLHeader = Template.bind({});
XLHeader.args = {
  label: 'XL Header',
  xl: true,
};
