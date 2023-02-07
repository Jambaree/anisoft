import React from "react";
import Edges from "../Edges";
import Image from "next/image";

const LogoModule = ({ data }) => {
  return (
    <Edges size="md">
      <div className="flex flex-col justify-center items-center py-[115px]">
        <h1 className="mb-[48px]">{data?.header}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-2 gap-[24px] gap-y-[48px]">
          {data?.logos?.map((logo) => {
            console.log(logo);
            return (
              <Image
                src={logo?.url}
                alt={logo?.alt}
                width="195"
                height="85"
                className=" object-contain"
              />
            );
          })}
        </div>
      </div>
    </Edges>
  );
};

export default LogoModule;
