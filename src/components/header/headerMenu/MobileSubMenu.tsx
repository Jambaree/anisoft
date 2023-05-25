"use client";
import React from "react";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeft from "../../../../public/chevron-left.svg";
import { getUrlPath } from "../../../utils/getUrlPath";

const MobileSubMenu = ({
  isOpen,
  setIsOpen,
  menu,
  openedMenu,
  menuIndex,
  setIsOpen2,
}) => {
  const sideVariants = {
    closed: {
      x: "100%",
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        type: `tween`,
        stiffness: 50,
        duration: 0.3,
      },
    },
    open: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
        type: `tween`,
        stiffness: 50,
        duration: 0.3,
      },
    },
  };
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };

  return (
    <div className="h-full overflow-y-scroll">
      <AnimatePresence>
        {isOpen && openedMenu === menuIndex && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="overflow-y-scroll mobileMenu"
          >
            <motion.div
              initial="closed"
              animate="open"
              variants={sideVariants}
              className="fixed z-50 overflow-y-scroll mobileMenu pb-[300px] min-h-fit"
            >
              <motion.div variants={itemVariants} className="">
                {menu?.nodes?.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col text-left ml-[15px]"
                  >
                    {index <= 0 && (
                      <button
                        className="flex flex-row mb-[35px] items-center w-screen"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <ChevronLeft
                          width="6"
                          className="mr-[11px] w-[6px] h-[10px] fill-black"
                        />
                        <div className="text-[1rem] leading-[24px] font-mukta font-semibold">
                          BACK
                        </div>
                      </button>
                    )}
                    <div>
                      <span className="nav text-darkPurple leading-[24px] mb-[35px] flex flex-row justify-between font-medium uppercase">
                        {item.label}
                      </span>
                      <div className="flex flex-col pl-[30px]">
                        {item.childItems?.nodes?.length > 0 &&
                          item.childItems?.nodes?.map((child, index) => (
                            <Link
                              className="nav text-darkPurple leading-[24px] mb-[35px] "
                              key={index}
                              href={getUrlPath(child?.url) || "/"}
                              onClick={() => setIsOpen2(false)}
                              passHref
                            >
                              {child?.label}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileSubMenu;
