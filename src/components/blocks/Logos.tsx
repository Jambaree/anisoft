import React from "react";
import Edges from "../Edges";
import Image from "next/image";
import FadeInUp from "../FadeInUp";
import classNames from "classnames";
import Link from "next/link";

const LogoModule = ({ header, logos }) => {
  const half = Math.ceil(logos.length / 2);

  return (
    <div className="w-full h-auto">
      <Edges size="md">
        <div className="flex flex-col justify-center items-center py-[115px]">
          <FadeInUp>
            <h1 className="mb-[48px]">{header}</h1>
          </FadeInUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 grid-rows-2 gap-[30px] gap-y-[48px]">
            {logos?.map(({ logo, link }, index) => {
              const isFirstHalf = index < half;
              return (
                logo?.sourceUrl && (
                  <FadeInUp
                    key={index}
                    className={classNames(
                      isFirstHalf ? "delay-100" : "delay-300",
                      "relative w-[170px] min-h-[45px] max-h-[45px] h-[45px] md:col-span-2 min-w-[170px] max-w-[170px]",
                      logos.length % 4 !== 0 &&
                        index === logos.length - 3 &&
                        "md:col-start-2"
                    )}
                  >
                    <Link href={link?.url || ""} target="_blank">
                      <Image
                        src={logo?.sourceUrl}
                        alt={logo?.altText || "logo-image"}
                        fill
                        className=" object-contain"
                      />
                    </Link>
                  </FadeInUp>
                )
              );
            })}
          </div>
        </div>
      </Edges>
    </div>
  );
};

export default LogoModule;
