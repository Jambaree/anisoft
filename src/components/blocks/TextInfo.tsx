import React from "react";
import classNames from "classnames";
import Image from "next/image";
import type { WpLink, WpImage } from "@nextwp/core";
import Button from "../Button";
import Edges from "../Edges";
import FadeInUp from "../FadeInUp";
import RichTextComponents from "../RichTextComponents";

export function TextInfo({
  headline,
  tag,
  button1,
  button2,
  text,
  image,
  backgroundGradient,
}: {
  headline?: string;
  tag?: string;
  button1?: WpLink;
  button2?: WpLink;
  text?: string;
  image?: WpImage;
  backgroundGradient?: boolean;
}) {
  return (
    <div className="relative">
      {image?.url ? (
        <div className="h-[292px] w-screen relative border-[6px] border-darkPurple">
          <Image
            alt={image.alt}
            className="object-cover object-center"
            fill
            src={image.url}
          />
        </div>
      ) : null}
      <div
        className={classNames(
          backgroundGradient ? "primaryRadialBg" : "bg-white",
          "pt-[75px] md:pt-[100px]"
        )}
        id={tag}
      >
        <Edges className="relative" size="lg">
          <div
            className={classNames(
              backgroundGradient ? "text-white" : "text-black",
              "flex w-full h-full flex-wrap  items-start justify-center"
            )}
          >
            <div className="w-full  mb-[30px]">
              {tag ? (
                <FadeInUp className="delay-300">
                  <p className="max-w-[575px]">{tag}</p>
                </FadeInUp>
              ) : null}

              {headline ? (
                <FadeInUp className="delay-100">
                  <h2 className=" max-w-[985px] text-[2rem]  sm:text-[2.5rem]">
                    {headline}
                  </h2>
                </FadeInUp>
              ) : null}
            </div>

            <div className="w-full md:w-[60%]">
              {text ? (
                <FadeInUp className="flex items-center justify-center ">
                  <div>
                    <div className="relative">
                      <RichTextComponents className="" html={text} />
                    </div>
                  </div>
                </FadeInUp>
              ) : null}

              <FadeInUp className="delay-500">
                <div className="pt-[50px] flex wrap gap-[30px] flex-wrap w-auto mr-[50px]">
                  {button1?.url ? (
                    <Button
                      href={button1.url}
                      reverse={Boolean(backgroundGradient)}
                      variant="large"
                    >
                      {button1.title}
                    </Button>
                  ) : null}

                  {button2?.url ? (
                    <Button
                      href={button2.url}
                      reverse={Boolean(backgroundGradient)}
                      variant="basic"
                    >
                      {button2.title}
                    </Button>
                  ) : null}
                </div>
              </FadeInUp>
            </div>
          </div>
        </Edges>
      </div>
    </div>
  );
}
