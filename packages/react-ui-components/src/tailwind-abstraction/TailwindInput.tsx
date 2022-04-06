import React from 'react';
import { TailwindThemeProps } from '../themeUtils';

export interface TailwindInputProps {
  value?: string;
  type?: string;
  onChange?(value: string): void;
  errored?: boolean;
}

export const TailwindInput = ({
  errored = false,
  ...props
}: TailwindInputProps & TailwindThemeProps) => {
  return (
    <input
      className={`${styles.base} ${props.fullWidth} ${
        errored && styles.error
      } ${props.size ? styles[props.size] : ''}`}
      value={props.value}
      type={props.type}
      onChange={(e) => props.onChange?.(e.target.value)}
    />
  );
};

const styles = {
  base: `
    appearance-none 
    px-2
    block 
    border 
    border-gray-300 
    rounded-md 
    shadow-sm 
    placeholder-gray-400 
    focus:outline-none 
    focus:ring-indigo-500 
    focus:border-indigo-500
  `,
  xs: ` text-xs py-1`,
  error: ` border-red-700`,
  sm: ` text-sm py-1.5  leading-4 `,
  md: ` text-sm py-1.5 `,
  lg: ` text-base py-2 `,
  xl: ` text-base py-2.5 `,
};
