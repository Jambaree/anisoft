import React from "react";
import Edges from "../components/Edges";
import Image from "next/image";
import FadeInUp from "./FadeInUp";
import parse from "html-react-parser";

// const quickData = {
//   facts: [
//     {
//       icon: "square",
//       title: "Give Us A Call",
//       description: "Call us Toll Free at <br> +1 (800)-704-8834",
//     },
//     {
//       icon: "square",
//       title: "Send us a message",
//       description:
//         "Please direct general business e-mail inquiries to <br> info@anisoftgroup.com",
//     },
//     {
//       icon: "square",
//       title: "Work with Us",
//       description:
//         "To apply, please send your resume to: <br> careers@anisoftgroup.com",
//     },
//   ],
// };

const handleDelay = (index) => {
  if (index === 0) {
    return 200;
  } else if (index === 1) {
    return 300;
  } else if (index === 2) {
    return 500;
  }
};
const QuickFacts = ({ quickData }) => {
  return (
    <div className="pt-[112px] pb-[136px]">
      <Edges size="md">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-row-1">
            {quickData?.facts?.map((fact, index) => {
              return (
                <FadeInUp
                  className={`delay-${handleDelay(index)} mb-[35px] sm:mb-0`}
                  key={index}
                >
                  <div className="flex flex-col text-black mb-[25px] md:mb-0 items-center justify-center text-center">
                    <div className="relative">
                      <Image
                        src={`/${fact?.icon}.svg`}
                        alt=""
                        width="35"
                        height="35"
                        className="mb-[27px] z-10 w-auto"
                      />
                      <FadeInUp className="delay-1000 absolute top-[4px] -right-[4px] z-20">
                        <Image
                          src={`/inverted-${fact?.icon}.svg`}
                          alt=""
                          width="34"
                          height="34"
                          className="w-auto"
                        />
                        <p className="text-[#FF0000] top-[4px] absolute left-[13px] text-[1.125rem] font-thin z-30 ">
                          FPO
                        </p>
                      </FadeInUp>
                    </div>
                    <h3 className="mb-[21px]  font-maven">{fact.title}</h3>
                    <p>{parse(fact.description)}</p>
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
