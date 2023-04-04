import React from "react";
import Button from "../Button";
import Edges from "../Edges";
import FadeInUp from "../FadeInUp";
import RichTextComponents from "../RichTextComponents";
import classNames from "classnames";
import Image from "next/image";

function TextInfo({
  headline,
  tag,
  button1,
  button2,
  text,
  image,
  backgroundGradient,
}) {
  return (
    <div className="relative">
      {image?.sourceUrl && (
        <div className="h-[292px] w-screen relative">
          <Image
            src={image?.sourceUrl}
            alt={image?.altText}
            fill
            className="object-cover object-top"
          />
        </div>
      )}
      <div
        id={tag}
        className={classNames(
          backgroundGradient ? "primaryRadialBg" : "bg-white",
          "py-[75px] md:py-[125px]"
        )}
      >
        <Edges className="relative" size="lg">
          <div
            className={classNames(
              backgroundGradient ? "text-white" : "text-black",
              "flex w-full h-full flex-wrap  items-start justify-center"
            )}
          >
            <div className="w-full  mb-[30px]">
              {tag && (
                <FadeInUp className="delay-300">
                  <p className="max-w-[575px]">{tag}</p>
                </FadeInUp>
              )}
              {headline && (
                <FadeInUp className="delay-100">
                  <h1 className="heroHeadline max-w-[985px] text-[40px]  sm:text-[60px]">
                    {headline}
                  </h1>
                </FadeInUp>
              )}
            </div>
            <div className="w-full md:w-[60%]">
              {text && (
                <FadeInUp className="flex items-center justify-center ">
                  <div>
                    <div className="relative">
                      <RichTextComponents html={text} />
                    </div>
                  </div>
                </FadeInUp>
              )}
              <FadeInUp className="delay-500">
                <div className="pt-[50px] flex wrap gap-[30px] flex-wrap w-auto mr-[50px]">
                  {button1?.url && (
                    <Button
                      variant="large"
                      reverse={backgroundGradient ? true : false}
                      href={button1?.url}
                    >
                      {button1?.title}
                    </Button>
                  )}
                  {button2?.url && (
                    <Button
                      variant="basic"
                      reverse={backgroundGradient ? true : false}
                      href={button2?.url}
                    >
                      {button2?.title}
                    </Button>
                  )}
                </div>
              </FadeInUp>
            </div>
          </div>
        </Edges>
      </div>
    </div>
  );
}

export default TextInfo;
