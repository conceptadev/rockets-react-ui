import React from 'react';

/**
 * Container Props.
 * padding valid values: p-0 , p-0.5 , p-1 , p-1.5 , p-2 , p-2.5 , p-3 , p-3.5 , p-4 , p-5 , p-6 , p-7 , p-8 , p-9 , p-10 , p-11 , p-12 , p-13 , p-14 , p-15 , p-16 , p-17 , p-18 , p-19 , p-20 , p-21 , p-22 , p-23 , p-24 , p-25 , p-26 , p-27 , p-28 , p-29 , p-30 , p-31 , p-32 , p-33 , p-34 , p-35 , p-36 , p-37 , p-38 , p-39 , p-40 , p-41 , p-42 , p-43 , p-44 , p-45 , p-46 , p-47 , p-48 , p-49 , p-50 , p-51 , p-52 , p-53 , p-54 , p-55 , p-56 , p-57 , p-58 , p-59 , p-60 , p-61 , p-62 , p-63 , p-64 , p-65 , p-66 , p-67 , p-68 , p-69 , p-70 , p-71 , p-72 , p-73 , p-74 , p-75 , p-76 , p-77 , p-78 , p-79 , p-80 , p-81 , p-82 , p-83 , p-84 , p-85 , p-86 , p-87 , p-88 , p-89 , p-90 , p-91 , p-92 , p-93 , p-94 , p-95 , p-96
 */
export interface TailwindContainerProps {
  column?: boolean;
  justify?: 'center' | 'between';
  align?: 'center';
  absolute?: boolean;
  right?: boolean;
  backgroundClass?: string;
  customClass?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  fullHeightVP?: boolean;
  padding?: number;
}

/**
 * Container Component.
 * @component container
 */
export const TailwindContainer: React.FC<TailwindContainerProps> = (props) => {
  return (
    <div
      className={`${styles.base} ${props.column ? styles.column : ''} ${
        props.justify ? styles.justify[props.justify] : ''
      } ${props.align ? styles.align[props.align] : ''} 
      ${props.absolute ? styles.absolute : styles.relative} 
      ${props.right ? styles.right : ''}
      ${props.backgroundClass}
      ${props.customClass}
      ${props.fullWidth ? ' w-full ' : ''} 
      ${props.fullHeight && !props.fullHeightVP ? ' h-full ' : ''} 
      ${props.fullHeightVP ? ' h-[100vh] ' : ''} 
      ${styles.padding}${props.padding}`}
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
  padding: 'p-',
};
