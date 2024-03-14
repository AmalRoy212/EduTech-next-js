"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/motion";
import { FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
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
            <div>
              <div className="w-full h-auto flex gap-3">
                <button className="w-[1/3] z-[5] flex justify-center items-center px-5 py-2 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-900 to-cyan-800 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500">
                  SPONSORS ENQUIRY
                </button>
                <button className="w-[1/3] z-[5] flex justify-center items-center px-5 py-1 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-900 to-cyan-800 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500">
                  SPEAKERS ENQUIRY
                </button>
                <button className="w-[1/3] z-[5] flex justify-center items-center px-5 py-1 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-900 to-cyan-800 mt-4 text-[10px]  hover:from-cyan-500 hover:to-purple-500">
                  BUY TICKETS
                </button>
              </div>
              <span className="text-center gap-2 text-sm w-full ml-3 flex justify-center items-center mt-9">
              <CiCalendarDate />8th-AUG-2024 <FaLocationDot size={18} /> BENGALURU, INDIA
                {/* <span className='text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>7 - 8 AUGUST BANGALORE</span> */}
              </span>
            </div>
          </div>
        </motion.div>
        <Counter />

        {/* <Image src='/images/index/mainIconsdark.png' className="absolute top-0" alt='work icons' height={650} width={650} /> */}
      </motion.div>
      <div className=" flex h-full w-full  flex-col mt-[-50px] md:mt-[0px] gap-5  justify-center text-start">
        {/* <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] md:flex hidden border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] px-5">BENGALURU</h1>
        </motion.div> */}

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="relative flex flex-col gap-6 mt-6 text-5xl md:text-6xl text-bold text-white max-w-[600px] w-auto md:h-auto h-[220px]"
        >
          <span>
            GLOBAL
            <span className="mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              FUTURE EDUCATION{" "}
            </span>
            SUMMIT
          </span>
          <span className='md:hidden absolute bottom-0 right-0 mt-[1rem] flex justify-center font-extrabold text-transparent text-[20px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>INITIATIVE BY <img width={50} height={15} src="/images/PNGs/dits.png" alt="" /></span>

        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-[15px] text-gray-400 my-5 max-w-[600px] md:mt-[0] mt-[10rem] text-justify"
        >
          The Global Future Education Summit is a premier business focussed
          event driven by visionary insights, delving into the most recent
          challenges and technological trends in the education technology
          innovation sectors of India and Bengaluru. This summit establishes a
          standard for technological advancement in the area, forging
          connections between global edtech experts, innovators, and emerging
          companies with a curated group of executives, encompassing CEOs,
          Directors, School Owners, Executive Principals, University Heads,
          Department Heads, Chief Technology Officers, Innovation Leaders,
          government officials, policy makers and tech investors in Bengaluru.
          The summit presents a diverse lineup of activities, featuring
          enlightening keynotes, demonstrations of real-world applications,
          product exhibitions, panel discussions, and educational tech talks.
          Participants will have the chance to observe state-of-the-art
          technological solutions presented by worldwide tech pioneers and
          assess their significance and influence on various organizations.
        </motion.p>

        {/* <motion.div
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Link href={"/about-event"}>Learn More!</Link>
        </motion.div> */}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="relative w-full h-auto hidden md:flex justify-center items-center"
      >
        <motion.div
          variants={slideInFromRight(0.9)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <div className="w-full h-[80vh] flex flex-col justify-start items-center pb-[5rem] px-10">
            <div>
              <span className="md:absolute md:top-5 md:w-full md:left-0 text-center text-2xl flex justify-center items-center gap-1">
              <CiCalendarDate />8th-AUG-2024 <FaLocationDot size={18} /> BENGALURU, INDIA
                {/* <span className='text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>7 - 8 AUGUST BANGALORE</span> */}
              </span>
              <span className='md:absolute md:top-12 md:w-full md:left-0 flex justify-center font-extrabold text-transparent text-[20px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>INITIATIVE BY <img width={50} height={15} src="/images/PNGs/dits.png" alt="" /></span>
            </div>
          </div>
          <Counter />
          <img className="md:flex hidden absolute left-0  ml-5 mt-[12rem]" src="https://cdn.unischolarz.com/blog/wp-content/uploads/2021/05/24174938/IAFOR-ECE-ECLL2019-Conference-Montage.jpg" alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
