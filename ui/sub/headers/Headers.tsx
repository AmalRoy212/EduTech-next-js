
"use client"

import { slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'
import Props from './IHeaders'

function Headers({ first, middle, last } : Props) {
  return (
    <div className="w-[100%] overflow-hidden flex justify-center items-center h-[40vh] z-[9]">
        <motion.div
          variants={slideInFromTop}
          initial='visible'
          className="text-[40px] font-medium text-center text-gray-200"
        >
          {first}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            {middle}{" "}
          </span>
          {last}  
        </motion.div>
      </div>
  )
}

export default Headers