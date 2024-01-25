import HeroContent from "@/ui/sub/index/heroContent/HeroContent";
import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-x-hidden flex flex-col h-full bg-inherit w-full" id="hero">
      <div style={{backgroundColor:"rgba(3, 0, 20, 0.674)"}} className="absolute w-full h-full top-0 left-0 z-10"></div>
      <div className="absolute w-full h-[20px] backdrop-blur-3xl bottom-0 mb-[5rem] left-0 z-10"></div>
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute hidden md:block md:top-[-290px] lg:top-[-350px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero