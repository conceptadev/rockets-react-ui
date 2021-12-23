import React from 'react';
import { TailwindThemeProps } from '../themeUtils';

export type TailwindCheckboxProps = {};

export const TailwindCheckbox = (
  props: TailwindCheckboxProps & TailwindThemeProps,
) => {
  return <input type="checkbox" className={`${styles.base} ${ props.size ? styles[props.size] : ''}`} />;
};

const styles = {
  base: `
    text-indigo-600 
    focus:ring-indigo-500 
    border-gray-300 
    rounded
  `,
  xs: ` h-3 w-3 `,
  sm: ` h-3.5 w-3.5 `,
  md: ` h-4 w-4 `,
  lg: ` h-5 w-5 `,
  xl: ` h-6 w-6 `,
};
