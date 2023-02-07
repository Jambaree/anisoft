"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import Edges from "./Edges";
import FadeInUp from "./FadeInUp";

const footerComponent = {
  button: { text: "Get Started", link: "/" },
  text1: "Are you ready to get",
  text2: "started with your project?",
};

const FooterTopperCTA = () => {
  return (
    <div className="relative">
      <div className="secondaryRadialBg  absolute top-[35%] md:top-[50%] left-0 right-0 py-[42px]">
        <Edges
          size="lg"
          className="flex flex-row flex-wrap justify-between items-center"
        >
          <div className="flex flex-col mb-[30px] md:mb-0">
            <FadeInUp className="delay-100">
              <h2 className="text-white">{footerComponent?.text1}</h2>
            </FadeInUp>
            <FadeInUp className="delay-300">
              <h2 className="text-white">{footerComponent?.text2}</h2>
            </FadeInUp>
          </div>
          <Button
            variant="large"
            className="w-[235px]"
            reverse
            href={footerComponent?.button?.link}
          >
            {footerComponent?.button?.text}
          </Button>
        </Edges>
      </div>
      <Image
        src="/bigA.svg"
        alt="big-A"
        width="516"
        height="596"
        className="ml-auto"
      ></Image>
    </div>
  );
};

export default FooterTopperCTA;
