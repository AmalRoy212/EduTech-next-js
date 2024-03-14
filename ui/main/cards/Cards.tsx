import React from "react";
import CardsProvider from "@/ui/sub/cardsProvider/CardsProvider";
import { CircularProgressChildren } from "@/ui/sub/progressBar/CircleProgress";
import ProgressBar from "../index/progressbar/bar/ProgressBar";
import SubHeadings from "@/ui/sub/headers/SubHeadings";

function Cards() {
  const currentCardData = [
    {
      img: "/images/cards/flowchart.png",
      title: "Ministries & Authorities",
      content:
        "Government institutions and regulators responsible for setting standards and framework for the education eco-system",
    },
    {
      img: "/images/cards/collage.png",
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
      value: 45,
      title: "SCHOOLS",
      color: "primary",
    },
    {
      value: 50,
      title: "GOVERNMENT",
      color: "warning",
    },
    {
      value: 45,
      title: `MINISTRY OF EDUCATION`,
      color: "success",
    },
    {
      value: 68,
      title: "ACADEMICS",
      color: "danger",
    },
  ];

  const progressBarData = [
    {
      title: "HEAD OF SCHOOL 45%",
      value: 45
    },
    {
      title: "MINISTRIES & AUTHORITIES 40%",
      value: 40
    },
    {
      title: "KEY STAKEHOLDERS 50%",
      value: 50
    },
    {
      title: "INVESTORS & OWNERS 78%",
      value: 78
    },
    {
      title: "ENTERPRISE COMPANIES 36%",
      value: 36
    },
    {
      title: "HEAD OF DEPARTMENTS 46%",
      value: 46
    },
  ]

  return (
    <>
      <div className="text-[40px] z-[9] font-medium text-center text-gray-200">
        WHO
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          SHOULD{" "}
        </span>
        ATTEND ?
      </div>
      <div className="md:flex md:mt-[-6rem] mr-8 md:mr-0 flex-row justify-center items-center px-10">
        {currentCardData.map((data, index) => (
          <CardsProvider key={index} data={data} index={index} />
        ))}
      </div>
      <div className="md:flex mr-8 md:mr-0 flex-row justify-center items-center px-10 mt-[-6rem]">
        {currentCardDataTwo.map((data, index) => (
          <CardsProvider key={index} data={data} index={index} />
        ))}
      </div>
      <div className="md:flex justify-center items-center gap-5">
        <div className="md:w-1/2 h-full">
          <SubHeadings fontSize={10} heading="INDUSTRIES" />
          {/* First Line */}
          <div className="flex flex-row justify-center items-center h-auto w-full md:w-full gap-5 p-5">
            {progressData.slice(0, 2).map((data, index) => (
              <CircularProgressChildren
                color={data.color}
                key={index}
                index={index}
                value={data.value}
                title={data.title}
              />
            ))}
          </div>
          {/* Second Line */}
          <div className="flex flex-row justify-center items-center h-auto w-full md:w-full gap-5 p-5">
            {progressData.slice(2).map((data, index) => (
              <CircularProgressChildren
                color={data.color}
                key={index + 2}
                index={index + 2}
                value={data.value}
                title={data.title}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 h-full p-10 ">
          <div className="md:mt-[-4rem]">
            <SubHeadings fontSize={10} heading="BY JOB TITLE" />
          </div>
          {progressBarData.map((data, index) => (
            <ProgressBar key={index} value={data.value} maxValue={100} index={index} title={data.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
