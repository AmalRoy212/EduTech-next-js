import React from 'react';

const Right = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px">
      <g fill="none" stroke="#22AE73" strokeWidth="1">
        <circle cx="12.5" cy="12.5" r="12" style={{ strokeDasharray: '75px', strokeDashoffset: '150px' }}></circle>
        <circle id="colored" fill="#22AE73" cx="12.5" cy="12.5" r="12" style={{ strokeDasharray: '75px', strokeDashoffset: '150px' }}></circle>
        <polyline className="st0" stroke="#fff" strokeWidth="3" points="8.5,12.5 10.5,15.5 14,9.5 " style={{ strokeDasharray: '25px', strokeDashoffset: '50px' }}/>
      </g>
    </svg>
  );
};

export default Right;
