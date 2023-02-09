"use client";

import Image from "next/image";
import Button from "../Button";
import Edges from "../Edges";
import Tilt from "react-parallax-tilt";
import FadeInUp from "../FadeInUp";

export default function Hero({ data }) {
  const { headline, subHeadline, button1, button2, image } = data;
  return (
    <div className="primaryRadialBg py-[100px] md:py-[150px]">
      <Edges size="lg">
        <div className="flex w-full h-full flex-wrap-reverse mds:flex-nowrap text-white items-center justify-center">
          <div>
            {headline && (
              <FadeInUp className="delay-100">
                <h1 className="heroHeadline max-w-[985px] text-[2.5rem]  sm:text-[3.75rem]">
                  {headline}
                </h1>
              </FadeInUp>
            )}
            {subHeadline && (
              <FadeInUp className="delay-300">
                <p className="max-w-[575px] pt-[40px]">{subHeadline}</p>
              </FadeInUp>
            )}
            <FadeInUp className="delay-500">
              <div className="pt-[50px] flex wrap gap-[30px] flex-wrap-reverse w-auto mr-[50px]">
                {button1?.url && (
                  <Button variant="large" href={button1?.url} reverse={true}>
                    {button1?.title}
                  </Button>
                )}
                {button2?.url && (
                  <Button
                    variant="basicWhite"
                    href={button2?.url}
                    reverse={true}
                    className="heroButton"
                  >
                    {button2?.title}
                  </Button>
                )}
              </div>
            </FadeInUp>
          </div>
          <div>
            {image?.sourceUrl && (
              <FadeInUp className="flex items-center justify-center ">
                <Tilt>
                  <div className="relative w-[350px] h-[350px] cursor-pointer">
                    <Image
                      className="pb-[30px] cmd:pb-0"
                      src={image?.sourceUrl}
                      // src={heroImage}
                      alt={image?.altText}
                      fill
                    />
                  </div>
                </Tilt>
              </FadeInUp>
            )}
          </div>
        </div>
      </Edges>
    </div>
  );
}
