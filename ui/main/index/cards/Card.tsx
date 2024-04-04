
"use client"

import React from "react";
import { motion } from "framer-motion";
import { cardsDataOne, cardsDataTwo } from "@/constants/cards";
import Cards from "@/ui/sub/index/card/Cards";
import { staggerContainer } from "@/utils/viewMotions";
import { slideInFromTop } from "@/utils/motion";
import Headers from "@/ui/sub/headers/Headers";
import TestCards from "../../cards/TestCards";


const Card = () => {
  return (
    <motion.div
      variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col items-center justify-center py-20 md:mt-[-10rem] mt-[-18rem]"
      id="happening"
    >
      <Headers first="HAPPENINGS" middle="&" last="INSIGHTS" />
      <div className="h-full w-full flex flex-col md:flex-row justify-between md:justify-center gap-2 px-2 md:px-10">
        {cardsDataOne.map(( card, index ) => (
          <TestCards
            key={index}
            index={index}
            src={card.src}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="h-full w-full flex flex-col md:flex-row justify-center gap-2 px-2 md:px-10 md:pt-10">
        {cardsDataTwo.map(( card, index ) => (
          <TestCards
          key={index}
          index={index}
          src={card.src}
          title={card.title}
          description={card.description}
        />
        ))}
      </div>
    </motion.div>
  );
};

export default Card;