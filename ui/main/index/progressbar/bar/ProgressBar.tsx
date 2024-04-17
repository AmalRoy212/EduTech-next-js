import React from 'react';
import IProgressBar from "../IProgressBar";

const ProgressBar = ({ value, maxValue, index, title } : IProgressBar) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div data-aos-duration={index*300} data-aos="flip-down" className='my-5'>
      <h3 className='tex-2xl text-slate-200'>{title}</h3>
      <div className="w-full h-4 bg-gray-200 rounded-md">
        <div
          className="h-full bg-blue-500 rounded-md"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
