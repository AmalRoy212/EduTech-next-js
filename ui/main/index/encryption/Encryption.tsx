"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import SummitAttendees from "../attendies/Attedies";

const Encryption = () => {
  return (
    <div id="attendies" className="flex flex-row relative items-center justify-center min-h-screen pt-[8rem] w-full md:h-full h-[135vh]">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          ATTENDEES
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          INDUSTRIES
        </motion.div>
      </div>

      <div className="flex flex-row items-center md:mt-[8rem] absolute z-[20] w-full h-auto py-10">
        <SummitAttendees />
      </div>
      {/* <div className="absolute z-[20] md:bottom-[10px] bottom-[0]  px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          What are the industries on focus ?
        </div>
      </div> */}

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