import React from "react";
import Image from "next/image";
import type { WpImage } from "@nextwp/core";
import Edges from "./Edges";
import FadeInUp from "./FadeInUp";
import RichTextComponents from "./RichTextComponents";

function QuickFacts({
  text1,
  text2,
  facts,
}: {
  text1?: string;
  text2?: string;
  facts?: {
    title?: string;
    description?: string;
    icon?: WpImage;
  }[];
}) {
  return (
    <div className="primaryRadialBg pt-[75px] pb-[125px]">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {facts?.map((fact, index) => {
              return (
                <FadeInUp className={`delay-${handleDelay(index)}`} key={index}>
                  <div className="flex flex-col text-white mr-[32px] mb-[25px] md:mb-0">
                    {fact.icon?.url ? (
                      <div className="relative">
                        <FadeInUp className="delay-1000 relative z-20">
                          <div className="w-[35px] h-[35px] relative mb-[27px]">
                            <Image
                              alt={fact.icon.alt}
                              className=" z-10 w-auto"
                              height="35"
                              src={fact.icon.url}
                              width="35"
                            />
                          </div>
                        </FadeInUp>
                      </div>
                    ) : null}
                    <div className="mb-[21px] text-[1.375rem] leading-[26.4px] font-maven">
                      {fact.title}
                    </div>
                    <RichTextComponents html={fact.description} />
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </Edges>
    </div>
  );
}

export default QuickFacts;

const handleDelay = (index) => {
  if (index === 0) {
    return 200;
  } else if (index === 1) {
    return 300;
  } else if (index === 2) {
    return 500;
  }
};
