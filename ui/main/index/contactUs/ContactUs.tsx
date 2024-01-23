import Image from 'next/image'
import React from 'react'

function ContactUs() {
  return (
    <div className='w-full h-[auto] pt-10 '>
        <div className='w-full h-auto flex justify-center items-center'>
            <div className='md:w-1/2 w-full h-auto p-10 '></div>
        </div>
        <div className='w-full h-auto flex flex-row justify-center items-center'>
            <Image src="/images/logos/GG_WHITE.png" alt='image' width={150} height={200} />
            {/* <Image src="/images/logos/eventLogo.png" alt='image' width={200} height={200} /> */}
        </div>
    </div>
  )
}

export default ContactUs