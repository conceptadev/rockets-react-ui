import React from 'react';

export interface TailwindDividerProps {
  label?: string;
}

export const TailwindDivider: React.FC<TailwindDividerProps> = (props) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-white text-gray-500">{props.label}</span>
      </div>
    </div>
  );
};