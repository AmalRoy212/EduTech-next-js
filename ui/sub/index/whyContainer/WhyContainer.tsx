import Image from 'next/image'
import React from 'react'

function WhyContainer() {
  return (
    <div className='w-full flex flex-row h-[60vh] z-[99] p-5'>
        <div className='h-full md:w-1/4'>
            <Image src="/images/PNGs/manglore.png" className='h-2/3 w-full' width={1200} height={1200} alt='mangalore'/>
        </div>
        {/* <div className='h-full md:w-1/4 flex items-center justify-center'>
            <Image src="/images/PNGs/node.png" className='h-[400px] w-full' width={1200} height={1200} alt='mangalore'/>
        </div> */}
        <div className='flex justify-center items-center w-'></div>
    </div>
  )
}

export default WhyContainer