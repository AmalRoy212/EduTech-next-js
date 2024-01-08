import { Socials } from '@/constants/data'
import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2ADE61]/50 bg-[#03001417] backdrop-blur-md z-[50] px-10'>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/images/logos/primeLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            GFES
          </span>
        </a>

        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            <a href="#about-us" className='cursor-pointer'>About us</a>
            <a href="#happening" className='cursor-pointer'>Happening</a>
            <a href="#attendies" className='cursor-pointer'>Attendies</a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
