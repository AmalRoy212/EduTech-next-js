
"use client"

import { slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'

function End() {
    return (
        <div className='w-full h-[140vh] md:h-screen overflow-hidden flex justify-center items-center'>
            <div className="flex flex-row relative items-center justify-center min-h-screen w-full md:h-full h-[135vh]">
                <div className="absolute w-auto h-auto top-0 z-[5]">
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

                <div style={{ backgroundColor: "rgba(3, 0, 20, 0.674)" }} className='w-[90%] h-[65%] rounded-xl absolute top-[11rem] flex justify-center items-center z-[9]'>
                    <p className='text-[14px] text-center text-slate-400 p-10'>
                        Live interactive workshops organized by ParXcellence will be held at EduTech Oman 2040 conference. The objective is to empower educators on various advancements in the education and training sector. It is a series of professional development workshops for educators in Oman. Power-packed sessions are conducted over 2 days. The workshops are attended by teachers, trainers, senior management, academicians and professors of education institutions from all across the country.

                        EduTech Oman 2040 Workshops allow teachers, trainers and faculty members to explore multiple facets of:

                        Implementation and impact of technological advancements, Curriculum changes, Inclusive environments. Sports integration and Other breakthroughs, both internationally and nationally.

                        Conducted by prominent companies, the workshops train educators in:

                        Enhancing Teaching and Learning, Exploring aspects in using and implementing of technological advancements, Meeting Faculty development and technology needs, Formulating and discussing new initiatives.
                    </p>
                </div>

                <div className="w-full h-[120vh] items-start justify-center top-[8rem] absolute hidden md:flex">
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