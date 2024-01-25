
'use client'

import HoverButton from '@/ui/sub/hoverButton/HoverButton';
import Image from 'next/image'
import React, { useState } from 'react'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import MobileNav from '../mobileNav/MobileNav';
import { IoCloseCircleSharp } from "react-icons/io5";

function Navbar() {

  const [popup, setPopup] = useState(false)

  return (
    <div className='w-[100%] h-[65px] fixed top-0 bg-[#03001417] backdrop-blur-md z-[50] px-2 md:px-10'>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            data-aos='flip-right'
            data-aos-duration={600}
            src="/images/logos/GG_WHITE.png"
            alt="logo"
            width={90}
            height={90}
            className="cursor-pointer hover:animate-slowspin"
          />

          {/* <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            GENFINITY GLOBAL
          </span> */}
        </a>

        <div className='w-[500px] h-full hidden md:flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            <a href="#about-us" className='cursor-pointer'>About us</a>
            <a href="#happening" className='cursor-pointer'>Happening</a>
            <a href="#attendies" className='cursor-pointer'>Attendies</a>
            <a href="#topics" className='cursor-pointer'>topics</a>
          </div>
        </div>

        <div className="md:flex hidden flex-row gap-5">
          {/* {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))} */}
          <HoverButton type={'social'} />
          <HoverButton type={'contact'} />
          <HoverButton type={'person'} />
        </div>
        {
          popup ? (<button data-aos='flip-up'  onClick={() => setPopup(false)} className='text-white md:hidden flex' >
            <IoCloseCircleSharp size={30} />
          </button>) : (
            <button data-aos='flip-down'  data-aos-duration={900} onClick={() => setPopup(true)} className='text-white md:hidden flex' >
              <BsFillMenuButtonWideFill size={30} />
            </button>
          )
        }


      </div>
      {
        popup && <MobileNav setPopup={setPopup}/>
      }
    </div>

  )

}

export default Navbar
