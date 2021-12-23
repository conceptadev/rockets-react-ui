import React from 'react';
import { TailwindThemeProps } from '../themeUtils';

export interface TailwindLabelProps {
  label: string;
}

export const TailwindLabel = (
  props: TailwindLabelProps & TailwindThemeProps,
) => {
  return <label className={`${styles.base} ${props.size ? styles[props.size] : ''}`}>{props.label}</label>;
};

const styles = {
  base: `
    block 
    font-medium 
    text-gray-700 `,
  xs: ` text-xs `,
  sm: ` text-sm `,
  md: ` text-sm `,
  lg: ` text-base `,
  xl: ` text-base `,
};
