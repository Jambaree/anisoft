import React from "react";
import Button from "../Button";
import Edges from "../Edges";
import FadeInUp from "../FadeInUp";
import RichTextComponents from "../RichTextComponents";

function TextInfo({ headline, tag, button1, button2, text }) {
  return (
    <div className="bg-white py-[100px] md:py-[150px]">
      <Edges size="lg">
        <div className="flex w-full h-full flex-wrap  text-black items-start justify-center">
          <div className="w-full  mb-[30px] md:mb-0">
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
              <div className="pt-[50px] flex wrap gap-[30px] flex-wrap-reverse w-auto mr-[50px]">
                {button1?.url && (
                  <Button variant="large" href={button1?.url}>
                    {button1?.title}
                  </Button>
                )}
                {button2?.url && (
                  <Button variant="basic" href={button2?.url}>
                    {button2?.title}
                  </Button>
                )}
              </div>
            </FadeInUp>
          </div>
        </div>
      </Edges>
    </div>
  );
}

export default TextInfo;
