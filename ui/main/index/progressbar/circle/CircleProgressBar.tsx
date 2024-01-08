import React from 'react';
import IProgressBar from "../IProgressBar";

const CircleProgressBar = ({ value, maxValue } : IProgressBar) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="w-32 h-32 relative">
      <svg
        className="absolute"
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="fill-current text-gray-200"
          r="15.9155"
          cx="16"
          cy="16"
        ></circle>
        <circle
          className="fill-current text-blue-500"
          r="15.9155"
          cx="16"
          cy="16"
          style={{
            strokeDasharray: `${percentage} 100`,
            transformOrigin: '50% 50%',
            transform: 'rotate(-90deg)',
          }}
        ></circle>
      </svg>
      <div className="w-full h-full flex items-center justify-center absolute inset-0">
        <span className="text-xl font-bold">{percentage.toFixed(0)}%</span>
      </div>
    </div>
  );
};

export default CircleProgressBar;
