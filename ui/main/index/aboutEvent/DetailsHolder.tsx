"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import DetailsProvider from "@/ui/sub/index/aboutEvent/DetailsProvider";
import Occation from "@/ui/sub/index/aboutEvent/Occation";

const Encryption = () => {
  return (
    <>
      <div id="about" className="w-auto h-auto z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          ABOUT
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            THE{" "}
          </span>
          CONFERENCE  
        </motion.div>
      </div>
      <div className="z-[20] px-[5px] md:mt-[-5rem] mt-[-4rem]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Where we are planning and Why ?
        </div>
      </div>
      <DetailsProvider />
      <Occation />
    </>
  );
};

export default Encryption;