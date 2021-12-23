import React from 'react';
import { TailwindThemeProps } from '../themeUtils';
import Icon from '../atoms/Icon';

export interface TailwindNotificationProps {
    title: string;
    message: string;
    messageType: 'success' | 'warning' | 'error' | 'info';
    icon?: string
}

export const TailwindNotification = (
  props: TailwindNotificationProps & TailwindThemeProps,
) => {
  return <div className={`rounded-md p-4 ${styles.base} ${styles[props.messageType]}`}>
            <div className="flex">
                <div className="flex-shrink-0">
                    <Icon icon={icons[props.messageType]} styles={`icon${props.messageType}-400`}  />
                </div>
                <div className="ml-3">
                    <h3 className={`text-sm font-medium ${props.messageType}-800`}>{props.title}</h3>
                    <div className={`mt-2 text-sm ${props.messageType}-700`}>
                        <p>{props.message}</p>
                    </div>
                </div>
            </div>
        </div>
  };

const icons = {
    success: 'CheckCircleIcon',
    warning: 'ExclamationIcon',
    error: 'XCircleIcon',
    info: 'InformationCircleIcon'
}

const styles = {
  base: ` absolute right-2 top-5 `,
  success: ` bg-green-50 `,
  warning: ` bg-yellow-50 `,
  error: ` bg-red-50 `, 
  info: ` bg-blue-50 `,
  iconsuccess: ` text-green-400 `,
  iconwarning: ` text-yellow-400 `,
  iconerror: ` text-red-400 `,
  iconinfo: ` text-blue-400 `,
};


