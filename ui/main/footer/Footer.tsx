import React from "react";
import { RxSewingPin, RxLinkedinLogo } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]  mt-[-10rem] z-[10]">
      <div className="w-full rounded-xl p-10 flex flex-col items-center justify-center m-auto bg-slate-900">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[999]">
            <div className="font-bold text-[16px]">Event Location</div>
            <p data-aos="fade-right" data-aos-duration={200} className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxSewingPin />
              <span className="text-[15px] ml-[6px]">Bangalore</span>
            </p>
            <div data-aos="fade-right" data-aos-duration={300} className="font-bold text-[16px]">GFES</div>
            <a data-aos="fade-right" data-aos-duration={400} href="#hero">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <IoHome />
                <span className="text-[15px] ml-[6px]">Home</span>
              </p>
            </a>
            <a data-aos="fade-right" data-aos-duration={500} href="#about">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FcAbout />
                <span className="text-[15px] ml-[6px]">About</span>
              </p>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[999]">
            <div className="font-bold text-[16px]">Social Media</div>
            <a data-aos="fade-right" data-aos-duration={600} target="_blank" href="https://www.instagram.com/genfinityglobal/">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaInstagram />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </a>
            <a data-aos="fade-right" data-aos-duration={700} target="_blank" href="https://twitter.com/GenfinityGlobal">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaXTwitter />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </p>
            </a>
            <a data-aos="fade-right" data-aos-duration={800} target="_blank" href="https://www.linkedin.com/company/genfinity-global/">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <RxLinkedinLogo />
                  <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </a>                                              
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[999]">
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] font-bold ml-[6px]">Learn More</span>
            </p>
            <p data-aos="fade-right" data-aos-duration={900} className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">	info@genfinityglobal.com</span>
            </p>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-duration={1000} className="mb-[20px] text-[15px] text-center">
          &copy; 2024 All rights reserved by Genfinity Global
        </div>
      </div>
    </div>
  )
}

export default Footer