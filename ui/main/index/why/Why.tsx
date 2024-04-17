import React from 'react';
import DetailHeading from '../headings/DetailHeading';
import WhyContainer from '@/ui/sub/index/whyContainer/WhyContainer';

function Why() {
  return (
    <>
      <DetailHeading 
        nanoHeading={`The Bangalore EdTech market is growing rapidly`} 
        mainHeading={`Why Mangaluru ?`}
        miniHeading={`The city's large and young population`}
      />
      <WhyContainer/>
    </>
  )
}

export default Why