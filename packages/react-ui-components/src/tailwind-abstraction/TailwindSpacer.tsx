import React from 'react';

/**
 * Spacer Props.
 * size valid values: mt-0 , mt-0.5 , mt-1 , mt-1.5 , mt-2 , mt-2.5 , mt-3 , mt-3.5 , mt-4 , mt-5 , mt-6 , mt-7 , mt-8 , mt-9 , mt-10 , mt-11 , mt-12 , mt-13 , mt-14 , mt-15 , mt-16 , mt-17 , mt-18 , mt-19 , mt-20 , mt-21 , mt-22 , mt-23 , mt-24 , mt-25 , mt-26 , mt-27 , mt-28 , mt-29 , mt-30 , mt-31 , mt-32 , mt-33 , mt-34 , mt-35 , mt-36 , mt-37 , mt-38 , mt-39 , mt-40 , mt-41 , mt-42 , mt-43 , mt-44 , mt-45 , mt-46 , mt-47 , mt-48 , mt-49 , mt-50 , mt-51 , mt-52 , mt-53 , mt-54 , mt-55 , mt-56 , mt-57 , mt-58 , mt-59 , mt-60 , mt-61 , mt-62 , mt-63 , mt-64 , mt-65 , mt-66 , mt-67 , mt-68 , mt-69 , mt-70 , mt-71 , mt-72 , mt-73 , mt-74 , mt-75 , mt-76 , mt-77 , mt-78 , mt-79 , mt-80 , mt-81 , mt-82 , mt-83 , mt-84 , mt-85 , mt-86 , mt-87 , mt-88 , mt-89 , mt-90 , mt-91 , mt-92 , mt-93 , mt-94 , mt-95 , mt-96 , ml-0 , ml-0.5 , ml-1 , ml-1.5 , ml-2 , ml-2.5 , ml-3 , ml-3.5 , ml-4 , ml-5 , ml-6 , ml-7 , ml-8 , ml-9 , ml-10 , ml-11 , ml-12 , ml-13 , ml-14 , ml-15 , ml-16 , ml-17 , ml-18 , ml-19 , ml-20 , ml-21 , ml-22 , ml-23 , ml-24 , ml-25 , ml-26 , ml-27 , ml-28 , ml-29 , ml-30 , ml-31 , ml-32 , ml-33 , ml-34 , ml-35 , ml-36 , ml-37 , ml-38 , ml-39 , ml-40 , ml-41 , ml-42 , ml-43 , ml-44 , ml-45 , ml-46 , ml-47 , ml-48 , ml-49 , ml-50 , ml-51 , ml-52 , ml-53 , ml-54 , ml-55 , ml-56 , ml-57 , ml-58 , ml-59 , ml-60 , ml-61 , ml-62 , ml-63 , ml-64 , ml-65 , ml-66 , ml-67 , ml-68 , ml-69 , ml-70 , ml-71 , ml-72 , ml-73 , ml-74 , ml-75 , ml-76 , ml-77 , ml-78 , ml-79 , ml-80 , ml-81 , ml-82 , ml-83 , ml-84 , ml-85 , ml-86 , ml-87 , ml-88 , ml-89 , ml-90 , ml-91 , ml-92 , ml-93 , ml-94 , ml-95 , ml-96
 */
export interface TailwindSpacerProps {
  vertical?: boolean;
  size: number;
}

/**
 * Spacer Component.
 * @component spacer
 */
export const TailwindSpacer: React.FC<TailwindSpacerProps> = (props) => {
  return (
    <div
      className={`${styles.base} ${
        props.vertical
          ? `${styles.top}${props.size}`
          : `${styles.left}${props.size}`
      }`}
    />
  );
};

const styles = {
  base: 'block',
  left: 'ml-',
  top: 'mt-',
};