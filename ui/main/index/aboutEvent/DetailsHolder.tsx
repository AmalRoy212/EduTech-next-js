"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import DetailsProvider from "@/ui/sub/index/aboutEvent/DetailsProvider";
import Occation from "@/ui/sub/index/aboutEvent/Occation";

const Encryption = () => {
  return (
    <div className="w-[100%] overflow-hidden md:mt-0 mt-[10rem]">
      <div id="about-us" className="w-[100%] overflow-hidden h-auto z-[5]">
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
      <DetailsProvider />
      <Occation />
    </div>
  );
};

export default Encryption;