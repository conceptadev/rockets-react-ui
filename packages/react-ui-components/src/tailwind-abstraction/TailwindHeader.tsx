import React from 'react';
import { TailwindThemeProps } from '../themeUtils';

export interface TailwindHeaderProps {
  label: string;
}

export const TailwindHeader = (
  props: TailwindHeaderProps & TailwindThemeProps,
) => {
  switch (props.size) {
    case 'xs':
      return (
        <h5
          className={`${styles.base} ${props.size ? styles[props.size] : ''}`}
        >
          {props.label}
        </h5>
      );
    case 'sm':
      return (
        <h4
          className={`${styles.base} ${props.size ? styles[props.size] : ''}`}
        >
          {props.label}
        </h4>
      );
    case 'md':
      return (
        <h3
          className={`${styles.base} ${props.size ? styles[props.size] : ''}`}
        >
          {props.label}
        </h3>
      );
    case 'lg':
      return (
        <h2
          className={`${styles.base} ${props.size ? styles[props.size] : ''}`}
        >
          {props.label}
        </h2>
      );
    default:
      return (
        <h1
          className={`${styles.base} ${props.size ? styles[props.size] : ''}`}
        >
          {props.label}
        </h1>
      );
      break;
  }
};

const styles = {
  base: `
    text-center 
    font-extrabold 
    text-gray-900`,
  xs: ` text-1xl `,
  sm: ` text-2xl `,
  md: ` text-3xl `,
  lg: ` text-4xl `,
  xl: ` text-5xl `,
};
