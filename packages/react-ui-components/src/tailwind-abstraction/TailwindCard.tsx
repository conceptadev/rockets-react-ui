import React from 'react';

export const TailwindCard: React.FC = (props) => {
  return (
      <div className="bg-white py-8 px-4 shadow ">
        {props.children}
      </div>
  );
};
