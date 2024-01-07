
"use client"

import React from 'react';
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';

function HeroContent() {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex flex-row item-center justify-center px-20 mt-40 w-full z-[20] '
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center mt-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
          <h1 className='Welcome-text text-[13px]'>7 - 8 AUGUST 2024 MANGALORE</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
        >
          <span>
            GLOBAL
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> FUTURE EDUCATION </span>
            SUMMIT
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          The Global Future Education Summit is a premier gathering of educators, policymakers, and innovators worldwide. It's a platform for discussing the future of education, embracing technological advancements, and sharing insights to shape innovative learning approaches. Through workshops, keynotes, and collaborations, it aims to drive meaningful changes in education globally.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
      >
        <Image src='/images/mainIconsdark.svg' alt='work icons' height={650} width={650} />
      </motion.div>

    </motion.div>
  )
}

export default HeroContent
