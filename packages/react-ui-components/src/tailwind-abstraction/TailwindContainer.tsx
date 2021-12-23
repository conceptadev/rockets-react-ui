import React from 'react';
import { TailwindThemeProps } from '../themeUtils';

export interface TailwindContainerProps {
  column?: boolean;
  justify?: 'center' | 'between';
  align?: 'center';
  absolute?: boolean;
  right?: boolean;
  backgroundClass?: string
  fullWidth?: boolean;
}

export const TailwindContainer: React.FC<TailwindContainerProps> = (props) => {
  return (
    <div
      className={`${styles.base} ${props.column ? styles.column : ''} ${
        props.justify ? styles.justify[props.justify] : ''
      } ${props.align ? styles.align[props.align] : ''} 
      ${props.absolute ? styles.absolute : styles.relative} 
      ${props.right ? styles.right : ''}
      ${props.backgroundClass} ${props.fullWidth ? ' w-full ' : ''}`}
    >
      {props.children}
    </div>
  );
};

const styles = {
  base: 'flex fit-content',
  column: 'flex-col',
  justify: {
    center: 'justify-center',
    between: 'justify-between',
  },
  align: {
    center: 'items-center',
  },
  absolute: 'absolute',
  right: 'right-2',
  relative: 'relative',
};
