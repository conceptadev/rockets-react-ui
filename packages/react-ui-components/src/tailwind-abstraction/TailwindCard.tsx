import React from 'react';

export type TailwindCardProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const TailwindCard: React.FC<TailwindCardProps> = ({children, ...props}) => {
  return (
      <div className="bg-white py-8 px-4 shadow " {...props}>
        {children}
      </div>
  );
};
