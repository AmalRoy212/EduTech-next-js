"use client";

import React, { useState } from "react";

type MixBlendModeType = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';


interface Props {
  src: string;
  title: string;
  description: string;
  index: number;
}

function TestCards({ src, title, description, index }: Props) {
  const [blendMode, setBlendMode] = useState<MixBlendModeType>("normal");

  const toggleBlendMode = () => {
    setBlendMode(blendMode === "normal" ? "difference" : "normal");
  };

  return (
    <div
      data-aos-duration={index * 300}
      data-aos="fade-right"
      className="relative flex flex-col justify-center overflow-hidden z-[20] rounded-2xl"
      style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
    >
      <div className="group relative cursor-pointer overflow-hidden  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-[20] h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[11]"></span>
        <div className="relative z-[20] mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                className="overlay"
                style={{ mixBlendMode: blendMode }} // Correct syntax for React
                onClick={toggleBlendMode}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M17.43555,6.76953c-0.29198,-0.01912 -0.60433,0.00128 -0.93945,0.06641c-2.716,0.528 -2.8043,2.73633 -2.2793,5.86133c0.249,1.48 2.29492,10.37695 2.29492,10.37695c0,0 -2.43766,-3.4668 -5.22266,-3.4668c-1.541,0 -3.28906,1.34844 -3.28906,3.89844c0,2.925 2.75998,3.96484 5.58398,9.21484c0.982,1.825 3.9167,4.80867 4.8457,6.01367c0.368,0.476 -0.20211,1.9245 0.21289,2.5625c0.414,0.638 1.11481,0.70313 1.38281,0.70313h6.51758c1.467,0 2.96484,-2.14648 2.96484,-2.14648c0,0 1.19305,2.14648 3.37305,2.14648h1.51953c1.191,0 2.24109,-0.43608 2.49609,-0.83008c0.255,-0.394 -0.02734,-1.67008 -0.02734,-2.83008c0,-4.374 4.12695,-4.53625 4.12695,-12.90625c0,-0.65 0.00391,-3.07334 0.00391,-3.65234c0,-1.277 -0.57059,-3.03438 -2.30859,-3.73437c-1.914,-0.772 -3.39844,0.34375 -3.39844,0.34375c0,0 -0.83409,-2.00737 -3.24609,-2.23437c-1.847,-0.173 -3.13672,0.98633 -3.13672,0.98633c0,0 -0.86527,-1.39391 -2.94727,-1.62891c-1.695,-0.191 -2.91016,0.79102 -2.91016,0.79102c0,0 -1.04339,-3.71231 -1.65039,-5.19531c-0.87588,-2.14025 -1.92296,-4.20601 -3.9668,-4.33984zM17.2832,7.75977c1.29028,0.08833 2.29522,1.59002 3.21484,3.83789c0.58,1.416 1.91516,5.69405 2.53516,8.99805c0.11,0.582 0.91473,0.65078 0.80273,-0.19922c-0.4,-3.038 -0.12953,-3.58775 1.35547,-3.84375c1.506,-0.259 3.41139,0.86116 3.77539,3.53516c0.071,0.524 0.83705,0.60105 0.87305,-0.12695c0.036,-0.727 -0.89561,-2.8915 2.02539,-2.8125c1.573,0.042 2.86452,1.47086 3.10352,3.63086c0.074,0.673 0.75666,0.51252 0.72266,-0.02148c-0.079,-1.253 0.46798,-2.04456 1.70898,-1.97656c2.375,0.13 2.60756,2.5282 2.60156,3.0332c-0.006,0.505 -0.01758,3.61914 -0.01758,3.61914c0,4.576 -1.26367,6.47201 -2.38867,8.16602c-0.887,1.337 -1.73437,2.62223 -1.73437,4.74023c0,0.472 0.21275,2.17983 0.09375,2.29883c-0.12,0.119 -2.07422,0.36719 -2.07422,0.36719c-0.001,-0.001 -2.39753,-0.06739 -3.51953,-1.65039c-0.666,-0.94 -1.2932,-0.67399 -1.6582,-0.08398c-0.187,0.301 -1.49716,1.72852 -2.16016,1.72852c-0.001,-0.001 -6.02814,0 -6.36914,0c-0.341,0 -0.53067,-0.00794 -0.63867,-0.21094c-0.116,-0.22 0.15259,-1.62419 -0.06641,-2.24219c-0.355,-1.002 -3.87684,-4.19358 -4.96484,-6.26758c-1.267,-2.415 -2.58947,-3.97794 -3.60547,-5.21094c-1.186,-1.439 -1.89648,-2.26545 -1.89648,-3.56445c0,-2.159 1.37416,-2.89648 2.28516,-2.89648c1.948,0 4.37395,2.53872 5.87695,5.13672c0.361,0.624 1.17912,0.378 0.95313,-0.375c-0.436,-1.451 -2.63009,-11.32867 -2.87109,-12.76367c-0.616,-3.67 -0.1052,-4.41892 1.4668,-4.79492c0.1965,-0.047 0.38599,-0.0634 0.57031,-0.05078zM24.5,27c-0.276,0 -0.5,0.224 -0.5,0.5v7c0,0.276 0.224,0.5 0.5,0.5c0.276,0 0.5,-0.224 0.5,-0.5v-7c0,-0.276 -0.224,-0.5 -0.5,-0.5zM28.5,27c-0.276,0 -0.5,0.224 -0.5,0.5v7c0,0.276 0.224,0.5 0.5,0.5c0.276,0 0.5,-0.224 0.5,-0.5v-7c0,-0.276 -0.224,-0.5 -0.5,-0.5zM32.5,27c-0.276,0 -0.5,0.224 -0.5,0.5v7c0,0.276 0.224,0.5 0.5,0.5c0.276,0 0.5,-0.224 0.5,-0.5v-7c0,-0.276 -0.224,-0.5 -0.5,-0.5z"></path>
                </g>
              </g>
            </svg>
          </span>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p className="opacity-0 group-hover:opacity-100 h-[300px] overflow-y-auto scrollbar-hidden">
              {description}.
            </p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a
                href="#"
                className="text-sky-500 transition-all duration-300 group-hover:text-white"
              >
                {title} &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCards;
