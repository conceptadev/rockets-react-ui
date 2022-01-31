import { TailwindThemeProps } from '../themeUtils';
import { TailwindIcon } from './TailwindIcon';
import '../tailwind.css';

export interface TailwindButtonProps {
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
  onClick?(): void;
}

export const TailwindButton = (
  props: TailwindThemeProps & React.PropsWithChildren<TailwindButtonProps>,
) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${styles.base} ${props.fullWidth} ${
        props.label ? styles.baseLabel : ''
      } ${styles[props.themeType || 'default']} ${
        props.rounded ? styles[props.rounded] : ''
      } 
      ${props.label && props.size ? styles[props.size] : ''}`}
    >
      {props.leftIcon && (
        <span className={props.label ? styles.leftIcon : ''}>
          <TailwindIcon icon={props.leftIcon} />
        </span>
      )}
      {props.label ? props.label : props.children}
      {props.rightIcon && (
        <span className={props.label ? styles.rightIcon : ''}>
          <TailwindIcon icon={props.rightIcon} />
        </span>
      )}
    </button>
  );
};

const defaultStyles = `
    border 
    border-transparent 
    shadow-sm 
    text-white 
    bg-primary-600 
    dark:bg-primary-dark-600 
    hover:bg-primary-700 
    dark:hover:bg-primary-dark-700 
    focus:ring-primary-600
    `;

const styles = {
  base: `
    inline-flex 
    items-center 
    justify-center 
    rounded-md
    p-1.5 
    font-medium
    focus:ring-2
    focus:outline-none 
    focus:ring-offset-2`,
  baseLabel: `
  `,
  xs: ` text-xs px-2.5 py-1.5 `,
  sm: ` text-sm px-3 py-2 leading-4 `,
  md: ` text-sm px-4 py-2 `,
  lg: ` text-base px-4 py-2 `,
  xl: ` text-base px-6 py-3 `,
  default: defaultStyles,
  primary: defaultStyles,
  secondary: `
    border 
    border-transparent 
    text-secondary-700 
    dark:text-secondary-dark-700 
    bg-secondary-100 
    dark:bg-secondary-dark-100 
    hover:bg-secondary-200 
    dark:hover:bg-secondary-dark-200 
    focus:ring-secondary-700`,
  outlined: `
    text-outlined-700 
    dark:text-outlined-dark-700 
    bg-outlined-0 
    dark:bg-outlined-dark-0 
    hover:bg-outlined-50 
    dark:hover:bg-outlined-dark-50
    border-2 
    border-outlined-300
    focus:ring-offset-2 
    focus:ring-primary-600`,
  rounded: `
    rounded-full 
    shadow-sm 
    `,
  leftIcon: `
    -ml-0.5 mr-2
    `,
  rightIcon: `
    -mr-0.5 ml-2
    `,
};
