import React from 'react';
import { Counter } from '@/ui/sub/index/counter/Counter';
import DetailHeading from '../headings/DetailHeading';
import { attendies_Data } from '@/constants/attendies';


const SummitAttendees: React.FC = () => {
  return (
    <div className="container mx-auto py-10 z-11 w-full h-auto">
      {/* <DetailHeading mainHeading='SUMMIT ATTENDEES' miniHeading='something' nanoHeading='amal' /> */}
      <div className="flex flex-wrap justify-center items-center m-2 pt-10 mt-5">
        {attendies_Data.map(( attend, index ) => (
          <Counter key={index} label={attend.label} countTo={attend.toCount} duration={2000} />
        ))}
      </div>
    </div>
  );
};

export default SummitAttendees;
