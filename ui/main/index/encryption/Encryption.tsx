"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import SummitAttendees from "../attendies/Attedies";

const Encryption = () => {
  return (
    <>
    <div className="w-ful h-auto top-0 z-[5]">
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
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full md:h-full h-[130vh]">
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto pt-[5rem]">
          <SummitAttendees />
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/videos/encryption.webm/"
        />
      </div>
    </div>
    </>
  );
};

export default Encryption;