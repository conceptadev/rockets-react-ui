import React from 'react';

export interface TailwindSpacerProps {
  vertical?: boolean;
  size: number;
};

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
  