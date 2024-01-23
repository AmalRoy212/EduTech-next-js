import React from "react";
import { MdPermContactCalendar } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaHouseFire } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TbSocial } from "react-icons/tb";
import "tailwindcss/tailwind.css";
import Link from "next/link";

interface Iprops {
  type: string;
}

const HoverButton = ({ type }: Iprops) => {
  return (
    <div className="m-0 p-0 mt-2 w-full">
      {type === "social" && (
        <button className="text-white relative group">
          <TbSocial size={30} />
          <span className="hidden absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md group-hover:block">
            <a target="_blank" href="https://www.instagram.com/genfinityglobal/">
                <RiInstagramFill />
            </a>
            <a target="_blank" href="https://twitter.com/GenfinityGlobal">
                <FaSquareXTwitter />
            </a>
            <a target="_blank" href="https://in.linkedin.com/company/genfinity-global">
                <FaLinkedin />
            </a>
          </span>
        </button>
      )}

      {type === "contact" && (
        <button className="text-white relative group">
          <MdPermContactCalendar size={30} />
          <span className="hidden absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md group-hover:block">
            <a className="w-full px-5 py-1 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 text-[10px]">
              Contact
            </a>
          </span>
        </button>
      )}

      {type === "person" && (
        <button className="text-white relative group">
          <FaHouseFire size={30} />
          <span className="hidden flex-col-reverse absolute top-full p-5 transform -translate-x-1/2 bg-slate-800 text-white rounded-lg group-hover:block">
          <a className="w-full px-5 py-1 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500">
                Sponsors
            </a>
            <br />
            <a className="w-full px-5 py-1 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500">              
                Deleagtes
            </a>
            <br />
            <a className="w-full px-5 py-1 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500">
              Speakers
            </a>
          </span>
        </button>
      )}
    </div>
  );
};

export default HoverButton;
