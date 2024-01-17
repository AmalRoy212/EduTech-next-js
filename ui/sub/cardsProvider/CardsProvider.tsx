import Image from "next/image";
import React from "react";

interface ICards {
  data: {
    img: string,
    title : string,
    content : string
  };
  index: number;
}

function CardsProvider({ data, index }: ICards) {
  return (
    <div className="relative m-5 flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border md:h-[60vh] h-[40vh] rounded-xl md:w-1/3 w-full ">
      <div className="p-6"> 
        <Image className="mb-10" src={data.img} alt="image" width={70} height={70}></Image>
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
         {data.title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {data.content}
        </p>
      </div>
      <div className="p-2 md:p-6 pt-0 absolute bottom-0">
        <a href="#" className="inline-block">
          <button
            className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}

export default CardsProvider;
