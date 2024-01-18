import * as React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import ICircleProgress from './ICircleProgress';

export const CircularProgressChildren = ({value, title, index, color} : ICircleProgress) => {
  return (
    <div data-aos-duration={index*300} data-aos="flip-up" key={index} className='relative flex h-auto p-3 w-1/4 justify-center items-center '>
      <CircularProgress color="primary"  sx={{ '--CircularProgress-size': '200px' }} determinate value={value}>
        {value + "% "}
        <br />
        <p className='absolute bottom-3 text-[12px] mb-[8rem] text-white'>{title}</p>
      </CircularProgress>
      {/* <CircularProgress color="danger" sx={{ '--CircularProgress-size': '80px' }}>
        <ReportIcon color="danger" />
      </CircularProgress> */}
    </div>
  );
}
