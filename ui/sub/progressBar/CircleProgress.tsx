import * as React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import ICircleProgress from './ICircleProgress';

export const CircularProgressChildren = ({value} : ICircleProgress) => {
  return (
    <div className='flex h-[150px] w-1/4 justify-center items-center '>
      {/* <CircularProgress color="warning">
        <WarningIcon color="warning" />
      </CircularProgress> */}
      <CircularProgress size="lg" determinate value={value}>
      </CircularProgress>
      {/* <CircularProgress color="danger" sx={{ '--CircularProgress-size': '80px' }}>
        <ReportIcon color="danger" />
      </CircularProgress> */}
    </div>
  );
}