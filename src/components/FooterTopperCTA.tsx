import React from "react";
import Button from "./Button";
import Image from "next/image";
import Edges from "./Edges";
import FadeInUp from "./FadeInUp";

const FooterTopperCTA = ({ data }) => {
  const { button, text1, text2 } = data;
  return (
    <div className="relative bg-lightGreyBg">
      <div className="secondaryRadialBg  absolute top-[35%] md:top-[50%] left-0 right-0 py-[42px]">
        <Edges
          size="md"
          className="flex flex-row flex-wrap justify-between items-center"
        >
          <div className="flex flex-col mb-[30px] md:mb-0">
            <FadeInUp className="delay-100">
              <h2 className="text-white">{text1}</h2>
            </FadeInUp>
            <FadeInUp className="delay-300">
              <h2 className="text-white">{text2}</h2>
            </FadeInUp>
          </div>
          <Button
            variant="large"
            className="w-[235px]"
            reverse
            href={button?.url}
          >
            {button?.title}
          </Button>
        </Edges>
      </div>
      <Image
        src="/bigA.svg"
        alt="big-A"
        width="516"
        height="596"
        className="ml-auto h-auto w-auto"
        priority
      ></Image>
    </div>
  );
};

export default FooterTopperCTA;
