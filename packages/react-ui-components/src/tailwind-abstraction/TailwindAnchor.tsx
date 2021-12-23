import React from 'react';
import { TailwindThemeProps } from '../themeUtils';

export interface  TailwindAnchorProps{
  label: string;
  href: string;
};

export const TailwindAnchor = (props: TailwindAnchorProps & TailwindThemeProps) => {
  return (
    <a
      href={props.href}
      className={`${styles.base} 
      ${props.size ? styles[props.size] : ''}`}
    >
      {props.label}
    </a>
  );
};

const styles = {
  base: `
    text-indigo-600 
    hover:text-indigo-500
  `,
  xs: ` text-xs `,
  sm: ` text-sm leading-4 `,
  md: ` text-sm `,
  lg: ` text-base `,
  xl: ` text-base leading-8`,
};
