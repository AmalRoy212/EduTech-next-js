"use client";

import React, { useEffect, useState } from "react";

function Counter() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = Date.now(); // current timestamp in milliseconds
      const eventDate = new Date("2024-08-07").getTime(); // event date timestamp in milliseconds

      const timeDifference = eventDate - currentDate;

      // Convert the time difference to days, hours, minutes, and seconds
      setDays(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeDifference % (1000 * 60)) / 1000));
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div
      data-aos="fade-up"
      data-aos-duration={3000}
      className="w-full h-auto flex absolute justify-center items-center z-20 md:top-0 md:mt-[2rem] mt-[46rem]"
    >
      <div className="w-full md:h-[130px] h-[120px] rounded-2xl bg-gradient-to-r from-purple-800 to-cyan-00 flex  p-1">
        <div className="w-[25%] h-full rounded-2xl flex flex-col justify-center items-center">
          <h1 className="text-white mb-5 md:text-[40px] text-[30px]">{days}</h1>
          <h1 className="text-white rounded-lg text-[10px] md:text-[15px] border p-2">
            DAYS
          </h1>
        </div>
        <div className="w-[25%] h-full rounded-2xl   flex flex-col justify-center items-center">
          <h1 className="text-white mb-5 md:text-[40px] text-[30px]">
            {hours}
          </h1>
          <h1 className="text-white rounded-lg text-[10px] md:text-[15px] border  p-2">
            HOURS
          </h1>
        </div>
        <div className="w-[25%] h-full rounded-2xl flex flex-col justify-center items-center">
          <h1 className="text-white mb-5 md:text-[40px] text-[30px]">
            {minutes}
          </h1>
          <h1 className="text-white rounded-lg text-[10px] border md:text-[15px] p-2">
            MINUTES
          </h1>
        </div>
        <div className="w-[25%] h-full rounded-2xl flex flex-col justify-center items-center">
          <h1 className="text-white mb-5 md:text-[40px] text-[30px]">
            {seconds}
          </h1>
          <h1 className="text-white rounded-lg text-[10px] border md:text-[15px] p-2">
            SECONDS
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Counter;
