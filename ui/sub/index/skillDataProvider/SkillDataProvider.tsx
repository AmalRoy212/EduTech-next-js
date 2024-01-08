"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Props from './ISkillDataProvider'
import Image from 'next/image';



function SkillDataProvider({ src, width, height, index } : Props ) {

  const { ref, inView } = useInView({
    triggerOnce : true
  });

  const imageVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const animationDelay = 0.3

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariant}
      animate={ inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{delay : index * animationDelay}}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt='skillImage'
      />
    </motion.div>
  )
}

export default SkillDataProvider
