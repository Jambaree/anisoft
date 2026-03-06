/* eslint-disable @typescript-eslint/no-unnecessary-condition -- handling dynamic refs so we dont know */
"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Edges from "../Edges";
import ChevronUp from "../../../public/chevron-up.svg";

function CardsNavBar({ services, activeIndex }) {
  const refArray = useRef([]);
  const [activeNav, setActiveNav] = useState(-1);

  const [buttonWidth, setWidth] = useState(0);
  const [buttonHeight, setHeight] = useState(0);
  const [buttonLeft, setLeft] = useState(0);

  const handleScrollNav = () => {
    const theRef = refArray?.current?.[activeIndex];

    setWidth(theRef?.offsetWidth);
    setHeight(theRef?.offsetHeight);
    setLeft(theRef?.offsetLeft);

    if (window.scrollY === 0) {
      setActiveNav(-1);
    } else {
      setActiveNav(activeIndex);
    }
  };

  const handleResize = () => {
    setWidth(refArray?.current?.[activeNav]?.offsetWidth);
    setHeight(refArray?.current?.[activeNav]?.offsetHeight);
    setLeft(refArray?.current?.[activeNav]?.offsetLeft);
  };

  useEffect(() => {
    if (activeNav >= 0) {
      if (typeof window !== "undefined") {
        window.addEventListener("resize", handleResize);
      }
    }

    window.addEventListener("scroll", handleScrollNav);
  }, [activeNav, activeIndex, handleResize, handleResize]);

  return (
    <div className="md:block hidden w-full bg-darkPurple sticky top-[100px] z-40">
      <Edges
        className="relative flex flex-row items-center py-[22px]"
        size="lg"
      >
        <div className="flex flex-row relative overflow-x-auto scrollbar-hide pr-[60px] lg:pr-[160px]" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {activeNav >= 0 && (
            <AnimatePresence>
              <motion.div
                animate={{
                  width: `${buttonWidth.toString()}px`,
                  height: `${buttonHeight.toString()}px`,
                  left: `${buttonLeft.toString()}px`,
                }}
                className="border-[1px] rounded-full border-white  px-[17px] mr-[15px] absolute z-10 "
                style={{
                  width: `${buttonWidth.toString()}px`,
                  height: `${buttonHeight.toString()}px`,
                  left: `${buttonLeft.toString()}px`,
                }}
              />
            </AnimatePresence>
          )}

          {services.map((service, index) => {
            return (
              <a
                className="target:rounded-full target:border-[1px] z-20 mr-[15px]"
                href={`#${service.name}`}
                key={index}
                ref={(ref) => {
                  refArray.current[index] = ref;
                }}
              >
                <p className="text-white h-[39px] px-[17px] py-0 whitespace-nowrap flex justify-center items-center text-[0.938rem] xl:text-[1rem] ">
                  {service?.name}
                </p>
              </a>
            );
          })}
        </div>
        <a className="absolute right-0 bg-darkPurple pl-[15px] pr-[15px]" href="#top">
          <p className="text-white flex flex-row items-center whitespace-nowrap">
            <ChevronUp className="lg:mr-[10px]" />
            <span className="hidden lg:inline">Return to top</span>
          </p>
        </a>
      </Edges>
    </div>
  );
}

export default CardsNavBar;
