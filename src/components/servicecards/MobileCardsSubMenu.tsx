"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function MobileCardsSubMenu({ isOpen, setIsOpen, menu, activeIndex }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <aside
          onMouseLeave={() => {
            setIsOpen(false);
          }}
        >
          <div className="absolute top-[100%] left-0 z-10  bg-darkPurple  border-b-[#0E0A30] w-[274px]">
            <div>
              {menu?.map(
                (item, index) =>
                  index !== activeIndex && (
                    <div
                      className="flex flex-col text-left ml-[30px] relative"
                      key={index}
                    >
                      <a
                        className="nav text-white leading-[24px] mb-[35px] flex flex-row justify-between "
                        href={`#${item.name}`}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div className="bg-lightGreen  h-[2px] w-[15px] -top-[4px] left-0 absolute nav " />
                        {item.name}
                      </a>
                    </div>
                  )
              )}
            </div>
          </div>
        </aside>
      ) : null}
    </AnimatePresence>
  );
}

export default MobileCardsSubMenu;
