// import { Backdrop } from '@react-three/drei'
import Link from 'next/link'
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import React from 'react'

function MobileNav() {
    return (
        <div className='w-full left-0 fixed h-screen backdrop-blur flex justify-center items-center pb-[5rem]  px-3 z-[999]'>
            <div className='w-full h-full bg-slate-800 flex flex-col px-10 rounded-2xl py-5'>
                <a href="#about-us" className='cursor-pointer text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>About us</a>
                <a href="#happening" className='cursor-pointer text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>Happening</a>
                <a href="#attendies" className='cursor-pointer text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>Attendies</a>
                <a href="#topics" className='cursor-pointer text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>Topics</a>
                <Link href={"Sponosors"} className='cursor-pointer text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>Sponosors</Link>
                <Link href={"Speakers"} className='cursor-pointer text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>Speakers</Link>
                <Link href={"Delegates"} className='cursor-pointer text-[18px] text-center py-2  w-auto mx-15 my-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500'>Delegates</Link>
                <div className='w-full mt-[200px] flex justify-center items-center text-white p-3 justify-between'>
                    <a target="_blank" href="https://www.instagram.com/genfinityglobal/">
                        <RiInstagramFill size={40} />
                    </a>
                    <a target="_blank" href="https://twitter.com/GenfinityGlobal">
                        <FaSquareXTwitter size={40} />
                    </a>
                    <a target="_blank" href="https://in.linkedin.com/company/genfinity-global">
                        <FaLinkedin size={40} />
                    </a>

                </div>
            </div>
        </div>

    )
}

export default MobileNav