"use client";
import React, { useState, useRef, useEffect } from "react";

import ChevronUp from "../../../public/chevron-up.svg";
import MobileCardsSubMenu from "./MobileCardsSubMenu";
const CardsNavBar = ({ services, activeIndex }) => {
  const refArray = useRef([]);
  const [activeNav, setActiveNav] = useState(-1);

  const [isOpen, setIsOpen] = useState(false);
  //   const [buttonWidth, setWidth] = useState(0);
  //   const [buttonHeight, setHeight] = useState(0);
  //   const [buttonLeft, setLeft] = useState(0);

  const handleScrollNav = () => {
    // setWidth(refArray.current[activeIndex].offsetWidth);
    // setHeight(refArray.current[activeIndex].offsetHeight);
    // setLeft(refArray.current[activeIndex].offsetLeft);

    if (window.scrollY === 0) {
      setActiveNav(-1);
    } else {
      setActiveNav(activeIndex);
    }
  };

  const handleResize = () => {
    // setWidth(refArray.current[activeNav].offsetWidth);
    // setHeight(refArray.current[activeNav].offsetHeight);
    // setLeft(refArray.current[activeNav].offsetLeft);
  };

  useEffect(() => {
    if (activeNav >= 0) {
      if (typeof window !== "undefined") {
        window.addEventListener("resize", handleResize);
      }
    }

    window.addEventListener("scroll", handleScrollNav);
  }, [activeNav, activeIndex]);

  return (
    <div className=" md:hidden w-full bg-darkPurple sticky top-[100px] z-40 flex flex-row items-center justify-between py-[22px] px-[30px]">
      <div className="flex flex-row relative">
        {services.map((service, index) => {
          return (
            index === activeIndex && (
              <a
                onMouseOver={() => {
                  setIsOpen(true);
                }}
                href={`#${service.name}`}
                key={index}
                ref={(ref) => {
                  refArray.current[index] = ref;
                }}
                target="_blank"
                className="target:rounded-full target:border-[1px] z-20 mr-[31px] flex flex-row items-center relative"
              >
                <div className="bg-lightGreen  h-[2px] w-[15px] top-0 left-0 absolute nav"></div>
                <p
                  className="text-white h-[39px] py-0 whitespace-nowrap flex justify-center items-center "
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {service?.name}
                </p>
                <ChevronUp
                  className="ml-[10px] rotate-180"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                />
              </a>
            )
          );
        })}
      </div>

      <MobileCardsSubMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menu={services}
        activeIndex={activeIndex}
      />
      <a href="#top">
        <p
          className="text-white flex flex-row items-center"
          onClick={() => setActiveNav(-1)}
        >
          <ChevronUp className="mr-[10px]" />
          Return to top
        </p>
      </a>
    </div>
  );
};

export default CardsNavBar;
