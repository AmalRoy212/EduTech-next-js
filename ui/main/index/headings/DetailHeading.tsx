"use client"

import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import React from 'react'
import IDetailHeading from './IDetailHeading'


function DetailHeading({ nanoHeading, mainHeading, miniHeading} : IDetailHeading) {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            {/* <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[13px] mx-5'>
                    {nanoHeading && nanoHeading}
                </h1>
            </motion.div> */}

            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[30px] text-white font-medium mt-[10x] text-center mb-[15px]'
            >
                {mainHeading && mainHeading}
            </motion.div>

            <motion.div
                variants={slideInFromRight(0.5)}
                className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
            >
               {miniHeading && miniHeading}
            </motion.div>

        </div>
    )
}

export default DetailHeading