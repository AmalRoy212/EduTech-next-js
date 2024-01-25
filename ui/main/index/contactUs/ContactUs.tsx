import Image from 'next/image'
import React from 'react'
import AboutUs from '../aboutUs/AboutUs'

function ContactUs() {
  return (
    <div className='relative w-full h-auto mt-[-25rem] md:mt-10 '>
        <div className="text-[40px] w-full flex justify-center items-center absolute top-0 font-medium text-center text-gray-200 mt-[-3rem] z-10">
        ORGANIZED
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ml-3">
          {" "}
          BY{" "}
        </span>
      </div>
        <div className='w-full h-auto flex flex-row justify-center items-center mt-10'>
            <Image src="/images/logos/GG_WHITE.png" alt='image' width={150} height={200} />
            {/* <Image src="/images/logos/eventLogo.png" alt='image' width={200} height={200} /> */}
        </div>
        <AboutUs />
    </div>
  )
}

export default ContactUs