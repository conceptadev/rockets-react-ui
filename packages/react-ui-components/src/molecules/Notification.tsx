import {
    TailwindNotification,
    TailwindNotificationProps,
  } from '../tailwind-abstraction/TailwindNotification';
  import { ThemeProps, withTheme } from '../themeUtils';
  
  export type NotificationProps = TailwindNotificationProps & ThemeProps;
  
  export const Notification: React.FC<React.PropsWithChildren<NotificationProps>> = withTheme(
    TailwindNotification,
    'TailwindNotification',
  );
  
  export default Notification;
  