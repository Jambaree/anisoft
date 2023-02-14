"use client";
import React, { useState, useRef, useEffect } from "react";
import Edges from "../Edges";
import { motion, AnimatePresence } from "framer-motion";

import ChevronUp from "../../../public/chevron-up.svg";

const CardsNavBar = ({ services, activeIndex, handleScrollToTop }) => {
  const refArray = useRef([]);
  const [activeNav, setActiveNav] = useState(-1);

  const [buttonWidth, setWidth] = useState(0);
  const [buttonHeight, setHeight] = useState(0);
  const [buttonLeft, setLeft] = useState(0);

  const handleScrollNav = () => {
    setWidth(refArray.current[activeIndex].offsetWidth);
    setHeight(refArray.current[activeIndex].offsetHeight);
    setLeft(refArray.current[activeIndex].offsetLeft);

    if (window.scrollY === 0) {
      setActiveNav(-1);
    } else {
      setActiveNav(activeIndex);
    }
  };

  const handleResize = () => {
    setWidth(refArray.current[activeNav].offsetWidth);
    setHeight(refArray.current[activeNav].offsetHeight);
    setLeft(refArray.current[activeNav].offsetLeft);
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
        size="lg"
        className="flex flex-row items-center justify-between py-[22px]"
      >
        <div className="flex flex-row relative">
          {activeNav >= 0 && (
            <AnimatePresence>
              <motion.div
                animate={{
                  width: buttonWidth.toString() + "px",
                  height: buttonHeight.toString() + "px",
                  left: buttonLeft.toString() + "px",
                }}
                style={{
                  width: buttonWidth.toString() + "px",
                  height: buttonHeight.toString() + "px",
                  left: buttonLeft.toString() + "px",
                }}
                className="border-[1px] rounded-full border-white  px-[17px] mr-[31px] absolute z-10 "
              ></motion.div>
            </AnimatePresence>
          )}

          {services.map((service, index) => {
            return (
              <a
                href={`#${service.name}`}
                key={index}
                ref={(ref) => {
                  refArray.current[index] = ref;
                }}
                className="target:rounded-full target:border-[1px] z-20 mr-[31px]"
              >
                <p className="text-white h-[39px] px-[17px] py-0 whitespace-nowrap flex justify-center items-center ">
                  {service?.name}
                </p>
              </a>
            );
          })}
        </div>
        <a href="#top">
          <p className="text-white flex flex-row items-center">
            <ChevronUp className="mr-[10px]" />
            Return to top
          </p>
        </a>
      </Edges>
    </div>
  );
};

export default CardsNavBar;
