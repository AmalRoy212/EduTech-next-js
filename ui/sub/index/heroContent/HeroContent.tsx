"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import Counter from "../../counter/Counter";

function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative md:flex flex-row item-center justify-center px-5 md:px-20 mt-40 w-full z-[20] "
    >
      <motion.div
        variants={slideInFromRight(0.8)}
        className="relative w-full h-[20vh] mt-[-4rem] flex md:hidden justify-center items-center"
      >
        <motion.div
          variants={slideInFromRight(0.9)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <div className="w-full h-[80vh] flex flex-col justify-center items-center pb-[5rem] px-10">
            <div >
              <div className="w-full h-auto flex gap-3">
                <button className="w-[1/3] z-[5] flex justify-center items-center px-5 py-2 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-900 to-cyan-800 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500">
                  Sponsors Enquiry
                </button>
                <button className="w-[1/3] z-[5] flex justify-center items-center px-5 py-1 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-900 to-cyan-800 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500">
                  Speakers Enquiry
                </button>
                <button className="w-[1/3] z-[5] flex justify-center items-center px-5 py-1 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-900 to-cyan-800 mt-4 text-[10px]  hover:from-cyan-500 hover:to-purple-500">
                  Delegates Enquiry
                </button>
              </div>
              <span className="text-center text-xl w-full ml-3">
                7 - 8 AUGUST BENGALURU
                {/* <span className='text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>7 - 8 AUGUST BANGALORE</span> */}
              </span>
            </div>
          </div>
        </motion.div>
        <Counter/>

        {/* <Image src='/images/index/mainIconsdark.png' className="absolute top-0" alt='work icons' height={650} width={650} /> */}
      </motion.div>
      <div className="h-full w-full flex flex-col mt-[-50px] md:mt-[0px] gap-5  justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] md:flex hidden border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] px-5">BENGALURU</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            GLOBAL
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              FUTURE EDUCATION{" "}
            </span>
            SUMMIT
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] md:mt-[0] mt-[10rem] text-justify"
        >
          The Global Future Education Summit is a premier gathering of
          educators, policymakers, and innovators worldwide. It's a platform for
          discussing the future of education, embracing technological
          advancements, and sharing insights to shape innovative learning
          approaches. Through workshops, keynotes, and collaborations, it aims
          to drive meaningful changes in education globally.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Link href={"/about-event"}>Learn More!</Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="relative w-full h-auto hidden md:flex justify-center items-center"
        >
        <motion.div
          variants={slideInFromRight(0.9)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
          >
          <div className="w-full h-[80vh] flex flex-col justify-center items-center pb-[5rem] px-10">
            <div >
              <span className="text-center text-4xl">
                7 - 8 AUGUST BENGALURU
                {/* <span className='text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>7 - 8 AUGUST BANGALORE</span> */}
              </span>
            </div>
              <div className="w-full h-auto flex flex-row gap-3">
                <button className="w-[1/3] z-[5] flex justify-center items-center px-5 py-2 shadow-md shadow-[#7042f861]/50  rounded-xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-00 mt-4 text-[16px] hover:from-cyan-500 hover:to-purple-500">
                  Sponsors
                </button>
                <button className="w-[1/3] z-[5] flex justify-center items-center px-5 py-1 shadow-md shadow-[#7042f861]/50  rounded-xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-00 mt-4 text-[16px] hover:from-cyan-500 hover:to-purple-500">
                  Speakers
                </button>
                <button className="w-[1/3] z-[5] flex justify-center items-center px-5 py-1 shadow-md shadow-[#7042f861]/50  rounded-xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-00 mt-4 text-[16px] hover:from-cyan-500 hover:to-purple-500">
                  Delegates
                </button>
              </div>
          </div>
          <Counter/>
        </motion.div>
      </motion.div>
    </motion.div>

  );
}

export default HeroContent;
