import HeroContent from "@/ui/sub/index/heroContent/HeroContent";
import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-x-hidden flex flex-col h-full w-full" id="hero">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute hidden md:block md:top-[-290px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;