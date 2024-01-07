
"use client"

import React from 'react';
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';

function VideoHolder() {

  const videoVariat = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };


  return (
    <div className='flex flex-col lg:flex-row  justify-start items-center w-full h-[60vh] p-10 '>
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        className="h-full w-full md:w-3/4   gap-10 px-10"
      >
        <video
          autoPlay
          muted
          loop
          className="h-full w-full z-[1] object-cover"
          style={{ borderRadius: "20px" }}
        >
          <source src="/videos/meeting.mp4" type="video/webm" />
        </video>
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        whileInView="visible"
        className='h-full w-full md:w-2/4 bg-dark'
      >
        <p className='text-sm font-thin text-center text-slate-700 dark:text-slate-500 p-5 mt-5'>In the future,<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> EDUCATION</span>  will be a thrilling journey 
        tailored just for you! Imagine learning that feels like an adventure, 
        where high-tech tools and smart systems understand how you learn best. 
        You'll dive into subjects through virtual reality, where history, science, 
        or art come alive right before your eyes.

        Forget the old one-size-fits-all approach! 
        Future education is all about <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> YOU</span>. Want to zoom ahead or 
        take your time? No problem! It's like having a personalized learning genie. 
        Plus, teamwork and hands-on projects will be key, helping you think sharp and 
        solve real-world puzzles.
        </p>
      </motion.div>
    </div>
  )
}

export default VideoHolder
