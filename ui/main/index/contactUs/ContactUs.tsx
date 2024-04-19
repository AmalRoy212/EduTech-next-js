import Image from 'next/image'
import React from 'react'
import AboutUs from '../aboutUs/AboutUs'

function ContactUs() {
  return (
    <div className='relative w-full min-h-[80vh] mt-[25rem] md:mt-32'>
      <div data-aos="fade-left" data-aos-duration={300} className="text-[40px] w-full flex justify-center items-center absolute top-0 font-medium text-center text-gray-200 mt-[-3rem] z-10">
        ORGANIZED
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ml-3">
          {" "}
          BY{" "}
        </span>
      </div>
      <div data-aos="flip-left" data-aos-duration={400} className='w-full flex flex-row justify-center items-center'>
        <Image src="/images/logos/GG_WHITE.png" alt='image' width={150} height={200} />
        {/* <Image src="/images/logos/eventLogo.png" alt='image' width={200} height={200} /> */}
      </div>
      <p className='text-white md:px-28 text-center px-3 '>Genfinity Global specializes in organizing global B2B conferences and exhibitions, collaborating with both private and government entities to catalyze transformative journeys for organizations. Our mission is to craft dynamic business platforms that foster innovation, facilitate expansion of client bases, provide opportunities to learn about cutting-edge technologies, and encourage the exchange of best practices worldwide. With a commitment to excellence, we strive to create impactful events that connect industry leaders, foster collaboration, and drive positive change on a global scale.</p>
      {/* <AboutUs /> */}
    </div>
  )
}

export default ContactUs