import {Meta, Story} from "@storybook/react";
import { Notification, NotificationProps } from './Notification';

export default {
  title: 'Molecules/Notification',
  component: Notification,
} as Meta;

const Template: Story<NotificationProps> = (args) => <Notification {...args} />;

export const Base = Template.bind({});
Base.args = {
  title: 'Base',
  messageType: 'success',
  message: 'Base Notification',
};

export const Success = Template.bind({});
Success.args = {
  title: 'Success',
  messageType: 'success',
  message: 'Success Notification',
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning',
  messageType: 'warning',
  message: 'Warning Notification',
};

export const Info = Template.bind({});
Info.args = {
  title: 'Info',
  messageType: 'info',
  message: 'Info Notification',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error',
  messageType: 'error',
  message: 'Error Notification',
};