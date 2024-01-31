import React from "react";

function StartUp() {
  return (
    <div id="startup" className="flex flex-col relative items-center justify-center min-h-screen w-full h-[70vh] md:h-auto md:mb-[5rem]">
      <div className="text-[40px] absolute top-0 font-medium text-center text-gray-200 mt-[-3rem]">
        Startup pitch
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          competition - Elevating{" "}
        </span>
        Startups to Success
      </div>
      <div className="md:h-[99vh] md:w-[78%] px-5 absolute bg-black md:mt-[10rem]">
        <h1 className="text-white text-center text-[20px] absolute md:mt-[10rem] mt-[1rem] md:ml-[220px]">Stand a chance to win Genfinity credit valued at upto 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold"> $9999</span>
        </h1>
        <p className="text-slate-400 md:p-10 text-justify flex w-full h-full md:mt-[0] mt-[6rem] justify-center items-center">
          Starup Pitch Competition serves as a premier fundraising platform, catering to companies in various stages of development. Whether you are in the initial stages of launching your business or an established entity aiming for expansion, this platform offers an exclusive opportunity. Here, you can present your business propositions before a distinguished audience, comprising global investors such as venture capitalists, angel investors, and influential government authorities. It stands as a professional avenue for securing financial support and advancing your business endeavors
        </p>
      </div>
      <div className='w-full h-auto z-[999] flex justify-center mt-[30rem]'>
        <button className='w-[120px]  h-[35px] cursor-pointer shadow-md shadow-[#7042f861]/50 text-white rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-800 to-transparent mt-4 text-[16px] hover:from-transparent hover:to-purple-800'>
          Apply now
        </button>
      </div>
      <div className="w-full h-[100vh] items-start justify-center absolute hidden md:flex z-[-3]">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto object-cover"
          src="/videos/about_background.mp4/"
        />
      </div>
    </div>
  );
}

export default StartUp;
