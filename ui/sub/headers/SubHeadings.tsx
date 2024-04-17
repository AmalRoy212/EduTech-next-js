import React from "react";

interface SubHeadings{
    heading : string
    fontSize : number
}

function SubHeadings({heading,fontSize} : SubHeadings) {
  return (
    <div data-aos="flip-down" className="w-full h-[10vh] flex justify-center items-center z-[19]">
      <h1 className=" `md:text-[28px] text-[21px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        {heading}
      </h1>
    </div>
  );
}

export default SubHeadings;
