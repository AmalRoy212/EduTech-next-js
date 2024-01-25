import Link from 'next/link'
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import React from 'react'

function MobileNav({ setPopup }: any) {
    return (
        <div data-aos='fade-left' className='w-full left-0 fixed h-screen md:hidden flex justify-center items-center pb-[5rem]  px-3  '>
            <div className='w-full h-full bg-[rgba(2,2,2,0.7)] filter blur z-[-1]'></div>
            <div className='w-full h-full inset-0 absolute backdrop-blur flex flex-col px-10 rounded-2xl py-5  z-10'>
                <a onClick={() => setPopup(false)} href="#about-us" data-aos='fade-left' data-aos-duration={300} className='cursor-pointer z-[19] text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>About event</a>
                <a onClick={() => setPopup(false)} href="#happening" data-aos='fade-left' data-aos-duration={400} className='cursor-pointer text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>Happening</a>
                <a onClick={() => setPopup(false)} href="#attendies" data-aos='fade-left' data-aos-duration={500} className='cursor-pointer text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>Attendies</a>
                <a onClick={() => setPopup(false)} href="#topics" data-aos='fade-left' data-aos-duration={600} className='cursor-pointer text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>Topics</a>
                <Link href={"Sponosors"} data-aos='fade-left' data-aos-duration={700} className='cursor-pointer text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>Sponosors</Link>
                <Link href={"Speakers"} data-aos='fade-left' data-aos-duration={800} className='cursor-pointer text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>Speakers</Link>
                <Link href={"Delegates"} data-aos='fade-left' data-aos-duration={900} className='cursor-pointer text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>Delegates</Link>
                <div className='w-full mt-[200px] flex items-center text-white p-3 justify-between'>
                    <a target="_blank" data-aos='fade-up' data-aos-duration={700} href="https://www.instagram.com/genfinityglobal/">
                        <RiInstagramFill size={40} />
                    </a>
                    <a target="_blank" data-aos='flip-up' data-aos-duration={800} href="https://twitter.com/GenfinityGlobal">
                        <FaSquareXTwitter size={40} />
                    </a>
                    <a target="_blank" data-aos='fade-down' data-aos-duration={700} href="https://in.linkedin.com/company/genfinity-global">
                        <FaLinkedin size={40} />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default MobileNav