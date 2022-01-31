import React from 'react';
import { TailwindThemeProps } from '../themeUtils';

export interface TailwindCaptionProps {
  label: string;
}

export const TailwindCaption = (
  props: TailwindCaptionProps & TailwindThemeProps,
) => {
  return (
    <span
      className={`${styles.base} 
      ${props.size ? styles[props.size] : ''}`}
    >
      {props.label}
    </span>
  );
};

const styles = {
  base: `
    text-indigo-600 
  `,
  xs: ` text-xs `,
  sm: ` text-sm leading-4 `,
  md: ` text-sm `,
  lg: ` text-base `,
  xl: ` text-base leading-8`,
};
