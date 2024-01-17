import CardsProvider from "@/ui/sub/cardsProvider/CardsProvider";
import React from "react";
import CircleProgressBar from "../index/progressbar/circle/CircleProgressBar";
import { CircularProgress } from "@mui/joy";
import { CircularProgressChildren } from "@/ui/sub/progressBar/CircleProgress";

function Cards() {
  const currentCardData = [
    {
      img: "/images/cards/flowchart.png",
      title: "Ministries & Authorities",
      content:
        "Government institutions and regulators responsible for setting standards and framework for the education eco-system",
    },
    {
      img: "/images/cards/Collage.png",
      title: "Head of Educational Institutions",
      content:
        "Executive Principal, Principal, Head Teacher, Deputy Head, Head of Primary & Secondary, Head of Universities etc",
    },
    {
      img: "/images/cards/Inversiones.png",
      title: "Investors & Owners",
      content:
        "Private Equity, Venture Capital, Impact Investors, Family Businesses & Investment Authorities",
    },
  ];

  const currentCardDataTwo = [
    {
      img: "/images/cards/network.png",
      title: "Key Stakeholders",
      content: "Active players in the education ecosystem",
    },
    {
      img: "/images/cards/flowchart.png",
      title: "Head of Departments",
      content:
        "Academics, Inclusion, Teaching & Learning, Learning Technologies, Admissions, Curriculum, STEM etc",
    },
    {
      img: "/images/cards/enterpriser.png",
      title: "Enterprise Organizations",
      content:
        "Service / Solution providers, product suppliers, consultants, technology vendors & companies supporting the education eco-system",
    },
  ];

  const progressData = [
    {
        value : 20,
        title : "SCHOOLS",
        color : "primary"
    },
    {
        value : 50,
        title : "GOVERNMENT",
        color : "warning"
    },
    {
        value : 45,
        title : `MINISTRY OF EDUCATION`,
        color : "success"
    },
    {
        value : 68,
        title : "ACADEMICS",
        color : "danger"
    },
  ]

  return (
    <>
      <div className="md:flex mr-8 md:mr-0 flex-row justify-center items-center px-10">
        {currentCardData.map((data, index) => (
          <CardsProvider key={index} data={data} index={index} />
        ))}
      </div>
      <div className="md:flex mr-8 md:mr-0 flex-row justify-center items-center px-10 mt-[-6rem]">
        {currentCardDataTwo.map((data, index) => (
          <CardsProvider key={index} data={data} index={index} />
        ))}
      </div>
      <div className="flex mr-8 md:mr-0 flex-col md:flex-row justify-center items-center px-5 w-full">
        {progressData.map((data, index) => (
            <CircularProgressChildren color={data.color} key={index} index={index} value={data.value} title={data.title}/>
        ))}
      </div>
    </>
  );
}

export default Cards;
