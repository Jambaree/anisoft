"use client";

import Image from "next/image";
import Button from "../Button";
import Edges from "../Edges";
import Tilt from "react-parallax-tilt";
import FadeInUp from "../FadeInUp";

export default function Hero({
  headline,
  subHeadline,
  button1,
  button2,
  image,
}) {
  return (
    <div className=" relative h-screen w-full">
      <div className="-z-10 h-screen w-full bottom-0 top-0">
        <div
          className="absolute bottom-0 top-0 left-0 animate-fade-in 
 w-full videoRadialBg"
        ></div>
        <video
          className="w-screen h-full md:h-screen object-cover z-10"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex w-full  z-40 absolute top-0  bottom-0 flex-wrap-reverse mds:flex-nowrap text-white items-center justify-center px-[45px]">
        <Edges
          size="lg"
          className=" w-full md:w-1/2 max-w-[600px]"
        >
          <div>
            {headline && (
              <h1 className="heroHeadline max-w-[985px] text-[2.5rem]  sm:text-[3.75rem]">
                {headline}
              </h1>
            )}
            {subHeadline && (
              <p className="max-w-[575px] pt-[40px]">{subHeadline}</p>
            )}

            <div className="pt-[50px] flex gap-[30px] flex-wrap w-auto mr-[50px]">
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
          </div>
        </Edges>
        <video
          className="w-full md:w-1/2 object-cover z-10 my-auto"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/anisoft-hero-square.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
