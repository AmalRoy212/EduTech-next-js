"use client";

import React from "react";
import { motion } from "framer-motion";
import IBgCard from "./IBgCards";
import { slideInFromLeft } from "@/utils/motion";

function BgCards({ data, index }: IBgCard) {
  return (
    <motion.div
      key={index}
      variants={slideInFromLeft(index * 0.3)}
      initial="hidden"
      whileInView="visible"
      className="flex-col md:w-1/4 w-full md:h-[50vh] justify-start items-start"
    >
      <div className="flex justify-center items-center p-0 m-0 h-full w-full relative">
        <h1 className="absolute md:left-13 left-[5rem]  md:mt-[-9rem] mt-[-9rem] text-7xl md:m-[-1rem] font-bold text-slate-200">
          {data.number === '25%' && <span className="text-[26px]">CAGR </span>}{data.number}
        </h1>
        <p className="font-bold text-1xl text-slate-300 absolute">
          {data.title}
        </p>
        
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full md:flex h-full object-contain hidden"
          src="/videos/cards_bg.mp4/"
        />
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full flex h-full object-contain md:hidden"
          src="/videos/"
        />
      </div>
    </motion.div>
  );
}

export default BgCards;
