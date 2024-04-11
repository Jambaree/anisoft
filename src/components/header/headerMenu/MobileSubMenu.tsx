"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WpMenuItem } from "@nextwp/core";
import ConditionalLink from "@/components/ConditionalLink";
import ChevronLeft from "../../../../public/chevron-left.svg";
import { getUrlPath } from "../../../utils/getUrlPath";

function MobileSubMenu({
  isOpen,
  setIsOpen,
  menuItems,
  openedMenu,
  menuIndex,
  setIsOpen2,
}: {
  menuItems: WpMenuItem[];
}) {
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
    <AnimatePresence>
      {isOpen && openedMenu === menuIndex ? (
        <motion.aside
          animate={{ width: "100%" }}
          className="overflow-y-scroll mobileMenu"
          initial={{ width: 0 }}
        >
          <motion.div
            animate="open"
            className="fixed z-50 overflow-y-scroll mobileMenu pb-[300px] h-full"
            initial="closed"
            variants={sideVariants}
          >
            <motion.div className="" variants={itemVariants}>
              {menuItems.map((item, index) => (
                <div className="flex flex-col text-left ml-[15px]" key={index}>
                  {index <= 0 && (
                    <button
                      className="flex flex-row mb-[35px] items-center w-screen"
                      onClick={() => setIsOpen(!isOpen)}
                      type="button"
                    >
                      <ChevronLeft
                        className="mr-[11px] w-[6px] h-[10px] fill-black"
                        width="6"
                      />
                      <div className="text-[1rem] leading-[24px] font-mukta font-semibold">
                        BACK
                      </div>
                    </button>
                  )}
                  <div>
                    <span
                      className="nav text-darkPurple leading-[24px] mb-[35px] flex flex-row justify-between font-medium uppercase"
                      dangerouslySetInnerHTML={{ __html: item.label }}
                    />
                    <div className="flex flex-col pl-[30px]">
                      {item.childItems.length > 0 &&
                        item.childItems.map((childItem, index: number) => (
                          <ConditionalLink
                            className="nav text-darkPurple leading-[24px] mb-[35px]"
                            dangerouslySetInnerHTML={{
                              __html: childItem.label,
                            }}
                            href={getUrlPath(childItem.url) || "/"}
                            key={index}
                            onClick={() => setIsOpen2(false)}
                            passHref
                          />
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}

export default MobileSubMenu;
