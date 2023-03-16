import React from "react";
import Edges from "../components/Edges";
import Image from "next/image";
import FadeInUp from "./FadeInUp";
import parser from "html-react-parser";

const handleDelay = (index) => {
  if (index === 0) {
    return 200;
  } else if (index === 1) {
    return 300;
  } else if (index === 2) {
    return 500;
  }
};
const QuickFacts = ({ data }) => {
  const { facts, text1, text2 } = data;
  return (
    <div className="primaryRadialBg pt-[112px] pb-[136px]">
      <Edges size="lg">
        <div className="flex flex-col">
          <div className="flex flex-col text-white mb-[122px]">
            <FadeInUp className="delay-75">
              <h1>{text1}</h1>
            </FadeInUp>
            <FadeInUp className="delay-150">
              <h1>{text2}</h1>
            </FadeInUp>
          </div>
          <div className="flex flex-col md:flex-row">
            {facts?.map((fact, index) => {
              return (
                <FadeInUp className={`delay-${handleDelay(index)}`} key={index}>
                  <div className="flex flex-col text-white mr-[32px] mb-[25px] md:mb-0">
                    <div className="relative">
                      <Image
                        src={`/${fact?.factIcon}.svg`}
                        alt=""
                        width="35"
                        height="35"
                        className="mb-[27px] z-10 w-auto"
                      />
                      <FadeInUp className="delay-1000 absolute top-[2px] left-[7px] z-20">
                        <Image
                          src={`/inverted-${fact?.factIcon}.svg`}
                          alt=""
                          width="34"
                          height="34"
                          className="w-auto"
                        />
                        <p className="text-[#FF0000] top-[14px] absolute left-[15px] text-[1.125rem] font-thin z-30 ">
                          FPO
                        </p>
                      </FadeInUp>
                    </div>
                    <div className="mb-[21px] text-[1.375rem] leading-[26.4px] font-maven">
                      {fact.title}
                    </div>
                    <p>{parser(fact.description)}</p>
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
