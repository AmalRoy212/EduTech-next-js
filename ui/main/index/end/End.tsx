
"use client"

import { slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'

function End() {
    return (
        <div className='w-full h-[140vh] mt-[-10rem] md:mt-0 overflow-hidden flex justify-center items-center'>
            <div className="flex flex-row relative items-center justify-center min-h-screen w-full md:h-full h-[135vh]">
                <div className="absolute w-auto h-auto top-0 z-[19]">
                    <motion.div
                        variants={slideInFromTop}
                        className="text-[40px] font-medium text-center text-gray-200"
                    >
                        WORKSHOPS AT
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            EDUTECH {" "}
                        </span>
                        BENGALURU 2024
                    </motion.div>
                </div>

                <div className="absolute w-auto h-auto bottom-0 z-[19]">
                    
                    <button className='w-[120px]  h-[35px] cursor-pointer shadow-md shadow-[#7042f861]/50 text-white rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-800 to-transparent mt-4 text-[16px] hover:from-transparent hover:to-purple-800'>
                            Register now
                        </button>
                </div>

                <div className='w-full h-full absolute top-0 left-0 bg-white'></div>

                <div style={{ backgroundColor: "rgba(3, 0, 20, 0.674)" }} className='w-full md:w-[70%] h-[60%] rounded-xl absolute top-[11rem] flex-col justify-center items-center md:px-[50px] z-[9]'>
                    <p className='text-[14px] text-slate-400 px-5 md:mt-[10rem] mt-[2rem] md:p-10 text-justify'>
                        Live interactive workshops organized by ParXcellence will be held at EduTech Oman 2040 conference. The objective is to empower educators on various advancements in the education and training sector. It is a series of professional development workshops for educators in Oman. Power-packed sessions are conducted over 2 days. The workshops are attended by teachers, trainers, senior management, academicians and professors of education institutions from all across the country.

                        EduTech Oman 2040 Workshops allow teachers, trainers and faculty members to explore multiple facets of:

                        Implementation and impact of technological advancements, Curriculum changes, Inclusive environments. Sports integration and Other breakthroughs, both internationally and nationally.

                        Conducted by prominent companies, the workshops train educators in:

                        Enhancing Teaching and Learning, Exploring aspects in using and implementing of technological advancements, Meeting Faculty development and technology needs, Formulating and discussing new initiatives.
                    </p>

                        {/* <button className='w-[120px]  h-[35px] cursor-pointer shadow-md shadow-[#7042f861]/50 text-white rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-800 to-transparent mt-4 text-[16px] hover:from-transparent hover:to-purple-800'>
                            Register now
                        </button> */}
                </div>
                

                <div className="w-full h-[100vh] items-start justify-center top-[8rem] absolute hidden md:flex z-[9]">
                    <video
                        loop
                        muted
                        autoPlay
                        playsInline
                        preload="false"
                        className="w-full h-auto object-cover"
                        src="/videos/endObe.mp4/"
                    />
                </div>
            </div>
        </div>
    )
}

export default End