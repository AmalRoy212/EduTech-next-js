import HeroContent from "@/ui/sub/index/heroContent/HeroContent";
import React from "react";

const Hero = () => {
  return (
    <div data-aos="zoom-in" className="relative overflow-x-hidden flex flex-col md:h-full h-auto bg-inherit w-full" id="hero">
      <div style={{backgroundColor:"rgba(3, 0, 20, 0.674)"}} className="absolute w-full h-full top-0 left-0 z-10"></div>
      <div
        className="w-full md:flex hidden h-[100px] md:gap-10 absolute left-0 top-0 mt-14 z-20 flex-row justify-end items-center px-2 ml-[-1.3rem] gap-1"
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
      </div>
      <div className="absolute w-full h-[20px] backdrop-blur-3xl bottom-0 left-0 z-10"></div>
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute hidden md:block md:top-[-290px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent/>
    </div>
  );
};

export default Hero