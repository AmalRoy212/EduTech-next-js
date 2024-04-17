"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponsor.css";
import { sponsorsDataProvider, sponsorsDataProviderTwo } from "@/constants/sponsorsDataProvider";
import SponsordsData from "@/ui/sub/index/sponsors/SponsordsData";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

function Sponsors() {
  const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
  return(
      <div className="mainContainer">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200 mb-10"
        >
          Some of the 

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Sponsors and <br /> Partners{" "}
          </span>
          from the Recent Past
        </motion.div>
        <Slider className="w-full bg-white py-5 px-10" {...settings}>
          {sponsorsDataProvider.map((img) => (
            img && <SponsordsData imgSrc={img}/>
          ))}
        </Slider>
        <Slider className="w-full bg-white py-5 px-10" {...settings}>
          {sponsorsDataProviderTwo.map((img) => (
            img && <SponsordsData imgSrc={img}/>
          ))}
        </Slider>
      </div>
    );
}

export default Sponsors;
