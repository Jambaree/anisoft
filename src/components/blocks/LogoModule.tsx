import React from "react";
import Edges from "../Edges";
import Image from "next/image";
import FadeInUp from "../FadeInUp";

const LogoModule = ({ data }) => {
  const half = Math.ceil(data.logos.length / 2);

  return (
    <Edges size="md">
      <div className="flex flex-col justify-center items-center py-[115px]">
        <FadeInUp>
          <h1 className="mb-[48px]">{data?.header}</h1>
        </FadeInUp>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-2 gap-[24px] gap-y-[48px]">
          {data?.logos?.map((logo, index) => {
            const isFirstHalf = index < half;
            return (
              <FadeInUp className={isFirstHalf ? "delay-100" : "delay-300"}>
                <Image
                  key={index}
                  src={logo?.url}
                  alt={logo?.alt}
                  width="195"
                  height="85"
                  className=" object-contain"
                />
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </Edges>
  );
};

export default LogoModule;
