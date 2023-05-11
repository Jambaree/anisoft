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
  video,
}) {
  return (
    <div className=" relative h-[calc(100vh-103px)] w-full flex justify-center items-center">
      <div className="z-10 h-[calc(100vh-103px)] w-full bottom-0 top-0">
        <div className="absolute bottom-0 top-0 left-0 animate-fade-in w-full videoRadialBg"></div>
        <video
          className="w-screen h-full md:h-[calc(100vh-103px)] object-cover z-10"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={video?.mediaItemUrl} type="video/mp4" />
        </video>
      </div>
      <div className=" max-w-screen-lg mx-auto flex w-full h-full  z-40 absolute top-0  bottom-0 flex-wrap-reverse mds:flex-nowrap text-white items-center justify-center px-[45px]">
        <div className=" w-full md:w-1/2 py-6 md:py-0 ">
          {headline && (
            <h1 className="heroHeadline text-[2.5rem]  sm:text-[3.75rem] max-w-[600px]">
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
        <div className="w-full  md:w-1/2  object-cover z-10 md:m-auto h-auto max-h-full flex justify-center items-center ">
          {/* <video
            className=" hidden w-full md:w-[85%] max-w-[400px] md:max-w-[700px] h-auto  "
            autoPlay
            muted
            playsInline
            loop
          >
            <source src="/square2.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
      {/* <div className="absolute top-0 bottom-0 right-0  z-30  opacity-50 md:opacity-100">
        <video className="block w-full h-full " autoPlay muted playsInline loop>
          <source src="/square2.mp4" type="video/mp4" />
        </video>
      </div> */}
    </div>
  );
}
