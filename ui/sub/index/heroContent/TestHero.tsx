"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Counter from "../../counter/Counter";

function TestHero() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative md:flex flex-row item-center justify-center px-5 md:px-20 mt-40 w-full z-[20] md:h-screen "
    >
      <motion.div
        variants={slideInFromTop}
        className="w-full h-[100px] md:gap-10 absolute top-0 mt-[-6rem] flex-row flex justify-center items-center px-2 ml-[-1.3rem] gap-1"
      >
        <button className="w-[1/3] z-[5] flex justify-center items-center px-5 py-2 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-900 to-cyan-800 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500 text-white">
          SPONSORS ENQUIRY
        </button>
        <button className="w-[1/3] z-[5] flex justify-center items-center px-5 py-2 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-900 to-cyan-800 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500 text-white ">
          SPEAKERS ENQUIRY
        </button>
        <button className="w-[1/3] z-[5] flex justify-center items-center px-5 py-2 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-900 to-cyan-800 mt-4 text-[10px]  hover:from-cyan-500 hover:to-purple-500 text-white">
          BUY TICKETS
        </button>
      </motion.div>
      <motion.div
        style={{ borderRight: "2px solid white" }}
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl text-bold text-white max-w-[600px] w-auto h-[180px]"
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

      <motion.div
        variants={slideInFromRight(0.8)}
        className="relative w-full h-[250px] md:h-[200px] flex justify-center items-center md:pl-10"
      >
        <Counter />
        <h1 className="absolute bottom-0 text-white text-xl">
          8th AUGUST 2024 BENGALURU, INDIA
        </h1>
      </motion.div>

      <div className="w-full h-auto  absolute left-0 md:mt-[13rem] px-3 md:px-10 py-2">
        <div
          className="w-full h-auto"
          style={{ borderTop: "2px solid white" }}
        >
          <h1 className="text-white text-2xl font-extrabold flex justify-start items-center">
            INITIATIVE BY{" "}
            <img className="h-[22px]" src="/images/PNGs/dits.png" alt="" />
          </h1>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 w-full mt-5 text-justify"
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
        </div>
      </div>
    </motion.div>
  );
}

export default TestHero;
