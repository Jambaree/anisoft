import React from "react";
import Image from "next/image";
import classNames from "classnames";

import FadeInUp from "../FadeInUp";
import Edges from "../Edges";
import ConditionalLink from "../ConditionalLink";

export function Logos({ header, logos }) {
  const half = Math.ceil(logos.length / 2);

  return (
    <div className="w-full h-auto">
      <Edges size="md">
        <div className="flex flex-col justify-center items-center py-[95px]">
          <FadeInUp>
            <h1 className="mb-[48px]">{header}</h1>
          </FadeInUp>
          <div className="flex flex-wrap justify-center max-w-[970px]">
            {logos?.map(({ logo, link }, index) => {
              const isFirstHalf = index < half;
              return (
                logo?.url && (
                  <FadeInUp
                    className={classNames(
                      isFirstHalf ? "delay-100" : "delay-300",
                      "relative w-[170px] min-h-[45px] max-h-[45px] h-[45px]  min-w-[170px] max-w-[170px] my-[24px] mx-[10px]"
                    )}
                    key={index}
                  >
                    <ConditionalLink href={link?.url || ""}>
                      <Image
                        alt={logo?.alt || "logo-image"}
                        className=" object-contain"
                        fill
                        src={logo?.url}
                      />
                    </ConditionalLink>
                  </FadeInUp>
                )
              );
            })}
          </div>
        </div>
      </Edges>
    </div>
  );
}
