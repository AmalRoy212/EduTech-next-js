"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import SummitAttendees from "../attendies/Attedies";
import CircleProgressBar from "../progressbar/circle/CircleProgressBar";
import { CircularProgressChildren } from "@/ui/sub/progressBar/CircleProgress";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Attendees
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Industries
        </motion.div>
      </div>

      <div className="absolute z-[20] md:top-[3rem] top-[8rem]  px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Who will be attending the event ?
        </div>
      </div>

      <div className="flex flex-row items-center absolute z-[20] w-full h-auto">
        {/* <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/images/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/images/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div> */}
        <SummitAttendees />
      </div>
      <div className=" flex-row items-center justify-center  z-[20] w-full h-auto hidden md:flex">
        <CircularProgressChildren  value={0}/>
      </div>
      <div className="absolute z-[20] md:bottom-[10px] bottom-[0]  px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          What are the industries on focus ?
        </div>
      </div>

      <div className="w-full h-[100vh] items-start justify-center absolute hidden md:flex">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto object-cover"
          src="/videos/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;