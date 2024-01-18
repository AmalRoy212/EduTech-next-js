
"use client"

import Image from "next/image";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from "next/link";
import React from "react";
import './topics.css';

interface Topic {
  data: {
    img: string;
    dis: string;
  };
  index: number;
}

function Topics({ data, index }: Topic) {

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
      key={index}
      className="relative w-full md:w-1/6 flex flex-col-reverse justify-center items-center border-gradient-blue-purple m-3 p-5 cursor-pointer z-[20]"
      style={{ height: '200px' }}
    >
      <div className="absolute top-0 p-2 flex justify-center items-center h-[50%]">
        <Image src={data.img} alt="image" width={90} height={90} />
      </div>
      <div className="absolute bottom-0 p-3 text-slate-300 flex justify-center items-center w-full h-[50%]">
        <p className="text-[13px]">{data.dis}</p>
      </div>
      <Link href="/dashboard">Learn More</Link>
    </motion.div>
  );
}

export default Topics;
