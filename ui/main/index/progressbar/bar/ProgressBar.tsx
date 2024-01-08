import React from 'react';
import IProgressBar from "../IProgressBar";

const ProgressBar = ({ value, maxValue } : IProgressBar) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="w-full h-4 bg-gray-200 rounded-md">
      <div
        className="h-full bg-blue-500 rounded-md"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
