import React from "react";
import Edges from "../components/Edges";
import Image from "next/image";
import FadeInUp from "./FadeInUp";

const quickData = {
  text1: "AniSoft has certified and technical",
  text2: "resources who specialize in server solutions. ",
  facts: [
    {
      icon: "triangle",
      title: "IBM Power Systems",
      description:
        "secure, flexible and open platforms designed for computing power and large data workloads that require security, resiliency and high availability.",
    },
    {
      icon: "square",
      title: "Lenovo servers",
      description:
        "cost-effective simplified solutions that contain flexible architecture that can support an organization’s current and future needs (Microsoft® Windows®, Linux® and virtualization).",
    },
    {
      icon: "circle",
      title: "Other Servers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.",
    },
  ],
};

const handleDelay = (index) => {
  if (index === 0) {
    return 200;
  } else if (index === 1) {
    return 300;
  } else if (index === 2) {
    return 500;
  }
};
const QuickFacts = () => {
  return (
    <div className="primaryRadialBg pt-[112px] pb-[136px]">
      <Edges size="lg">
        <div className="flex flex-col">
          <div className="flex flex-col text-white mb-[122px]">
            <FadeInUp className="delay-75">
              <h1>{quickData?.text1}</h1>
            </FadeInUp>
            <FadeInUp className="delay-150">
              <h1>{quickData?.text2}</h1>
            </FadeInUp>
          </div>
          <div className=" flex flex-col md:flex-row">
            {quickData?.facts?.map((fact, index) => {
              return (
                <FadeInUp className={`delay-${handleDelay(index)}`} key={index}>
                  <div className="flex flex-col text-white mr-[32px] mb-[25px] md:mb-0">
                    <div className="relative">
                      <Image
                        src={`/${fact?.icon}.svg`}
                        alt=""
                        width="35"
                        height="35"
                        className="mb-[27px] z-10 w-auto"
                      />
                      <FadeInUp className="delay-1000 absolute top-[2px] left-[7px] z-20">
                        <Image
                          src={`/inverted-${fact?.icon}.svg`}
                          alt=""
                          width="34"
                          height="34"
                          className="w-auto"
                        />
                        <p className="text-[#FF0000] top-[14px] absolute left-[15px] text-[18px] font-thin z-30 ">
                          FPO
                        </p>
                      </FadeInUp>
                    </div>
                    <div className="mb-[21px] text-[22px] leading-[26.4px] font-maven">
                      {fact.title}
                    </div>
                    <p>{fact.description}</p>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </Edges>
    </div>
  );
};

export default QuickFacts;
