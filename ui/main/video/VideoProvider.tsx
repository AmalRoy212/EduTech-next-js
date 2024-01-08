
"use client"

import React from 'react';
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion';
import VideoHolder from '@/ui/sub/videoHolder/VideoHolder';

function VideoProvider() {
  return (
    <div>
      <motion.div
        variants={slideInFromTop}
        initial="visible"
        // whileInView="visible"
        className='flex flex-row justify-center items-center'
      >
        <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
          CONFERENCESS
        </h1>
      </motion.div>
      <VideoHolder />
    </div>
  )
}

export default VideoProvider
