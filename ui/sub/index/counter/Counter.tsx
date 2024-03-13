import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ICounter } from "./ICounter";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

export const Counter: React.FC<ICounter> = ({ label, countTo, duration, index }) => {
  const [counterValue, setCounterValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            animateCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5, // Change this threshold as needed
      }
    );

    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateCounter = () => {
    let start = 0;
    const step = Math.ceil(countTo / duration);

    const timer = setInterval(() => {
      setCounterValue((prevValue) => {
        const newValue = prevValue + step;
        if (newValue >= countTo) {
          clearInterval(timer);
          return countTo;
        }
        return newValue;
      });
    }, 1);
  };

  return (
    <div
      ref={ref}
      data-aos-duration={index * 300}
      data-aos="fade-left"
      className={`md:w-1/5 sm:w-1/2 p-2 flex justify-center items-center flex-col-reverse ${isVisible ? "aos-animate" : ""}`}
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mt-2"
      >
        <h1 className="Welcome-text text-[15px] mx-3">{label}</h1>
      </motion.div>
      <div className="w-[150px] h-[150px] flex justify-center items-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500">
        <span className="font-extrabold text-5xl text-white">
          {" "}
          {counterValue}{"+"}
        </span>
      </div>
    </div>
  );
};
