"use client";
import React from "react";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeft from "../../../public/chevron-left.svg";

const MobileCardsSubMenu = ({ isOpen, setIsOpen, menu, activeIndex }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <aside
          onMouseLeave={() => {
            setIsOpen(false);
          }}
        >
          <div className="absolute top-[100%] left-0 z-10  bg-darkPurple  border-b-[#0E0A30] w-[274px]">
            <div>
              {menu?.map(
                (item, index) =>
                  index !== 0 && (
                    <div
                      key={index}
                      className="flex flex-col text-left ml-[30px] relative"
                    >
                      <a
                        href={`#${item.name}`}
                        className="nav text-white leading-[24px] mb-[35px] flex flex-row justify-between "
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div className="bg-lightGreen  h-[2px] w-[15px] -top-[4px] left-0 absolute nav "></div>
                        {item.name}
                      </a>
                    </div>
                  )
              )}
            </div>
          </div>
        </aside>
      )}
    </AnimatePresence>
  );
};

export default MobileCardsSubMenu;
