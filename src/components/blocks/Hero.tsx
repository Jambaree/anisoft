"use client";

import Image from "next/image";
import type { WpLink, WpImage } from "@nextwp/core";
import clsx from "clsx";
import Button from "../Button";

export function Hero(props: {
  headline?: string;
  subHeadline?: string;
  button_1?: {
    title?: string;
    url?: string;
  };
  button_2?: {
    title?: string;
    url?: string;
  };
  image?: WpImage;
  video?: {
    url?: string;
  };
  banner?: {
    label?: string;
    button?: WpLink;
  };
  /**
   * Increase the max width of the content from 800px to 1200px
   */
  wide_content?: boolean;
}) {
  const {
    headline,
    subHeadline,
    button_1,
    button_2,
    image,
    video,
    wide_content,
    banner,
  } = props;

  return (
    <div className="relative bg-darkPurple w-full flex justify-center items-center">
      {video?.url ? (
        <div className="z-10 h-[calc(100vh-103px)] w-full bottom-0 top-0">
          <div className="absolute bottom-0 top-0 left-0 animate-fade-in w-full videoRadialBg" />
          <video
            autoPlay
            className="w-screen h-full md:h-[calc(100vh-103px)] object-cover z-10"
            loop
            muted
            playsInline
          >
            <source src={video.url} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="z-10 h-[calc(80vh-103px)]  w-full bottom-0 top-0">
          <div className="  w-screen h-full md:h-[calc(80vh-103px)] object-cover z-10 max-h-[540px]">
            {image ? <Image alt={image.alt} fill src={image.url} /> : null}
          </div>
        </div>
      )}

      <div className=" max-w-screen-lg mx-auto flex w-full h-full  z-40 absolute top-0  bottom-0 flex-wrap-reverse mds:flex-nowrap text-white items-center justify-center px-[45px]">
        <div
          className={clsx(
            "w-full py-6 md:py-0 mds:min-w-[600px]",

            wide_content ? "md:w-3/4" : "md:w-1/2"
          )}
        >
          {headline ? (
            <h1 className="heroHeadline text-[2rem]  sm:text-[3rem] max-w-[600px] ">
              {headline}
            </h1>
          ) : null}
          {subHeadline ? (
            <p className="max-w-[800px] text-[1.3rem] pt-[40px]">
              {subHeadline}
            </p>
          ) : null}

          <div className="pt-[50px] flex gap-[30px] flex-wrap w-auto mr-[50px]">
            {button_1?.url ? (
              <Button href={button_1.url} reverse variant="xlarge">
                {button_1.title}
              </Button>
            ) : null}
            {button_2?.url ? (
              <Button
                className="heroButton"
                href={button_2.url}
                reverse
                variant="basicWhite"
              >
                {button_2.title}
              </Button>
            ) : null}
          </div>
        </div>
        <div className="w-full  md:w-1/2  object-cover z-10 md:m-auto h-auto max-h-full flex justify-center items-center " />

        {banner?.label ? (
          <div className="absolute top-[50px] right-0 flex justify-center items-center py-3 px-7 border-lightGreen border rounded-full">
            <span className="mr-6 font-medium text-lg">{banner.label}</span>
            <Button href={banner.button?.url} reverse variant="medium">
              {banner.button?.title}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
