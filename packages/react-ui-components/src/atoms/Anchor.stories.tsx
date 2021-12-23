import {Meta, Story} from "@storybook/react";
import Anchor, { AnchorProps } from './Anchor';

export default {
  title: 'Atoms/Anchor',
  component: Anchor,
} as Meta;

const Template: Story<AnchorProps> = (args) => <Anchor {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'Base Anchor' ,
  href: 'https://www.test.com/'
};

export const XSAnchor = Template.bind({});
XSAnchor.args = {
  label: 'XS Anchor',
  xs: true,
  href: 'https://www.test.com/'
};

export const SMAnchor = Template.bind({});
SMAnchor.args = {
  label: 'SM Anchor',
  sm: true,
  href: 'https://www.test.com/'
};

export const MDAnchor = Template.bind({});
MDAnchor.args = {
  label: 'MD Anchor',
  md: true,
  href: 'https://www.test.com/'
};

export const LGAnchor = Template.bind({});
LGAnchor.args = {
  label: 'LG Anchor',
  lg: true,
  href: 'https://www.test.com/'
};

export const XLAnchor = Template.bind({});
XLAnchor.args = {
  label: 'XL Anchor',
  xl: true,
  href: 'https://www.test.com/'
};
