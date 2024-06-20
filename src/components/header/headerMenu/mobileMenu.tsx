"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WpLink, WpMenu } from "@nextwp/core";
import parse from "html-react-parser";
import ConditionalLink from "@/components/ConditionalLink";
import Edges from "../../Edges";
import Button from "../../Button";
import ChevonRight from "../../../../public/chevron-left.svg";
import { getUrlPath } from "../../../utils/getUrlPath";
import MobileSubMenu from "./MobileSubMenu";

function MobileMenu({
  isOpen,
  menuItems,
  button,
  setIsOpen,
}: {
  isOpen: boolean;
  menuItems?: WpMenu;
  button?: WpLink;
  setIsOpen: (isOpen: boolean) => void;
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

  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);
  const [openedMenu, setOpenedMenu] = useState(-1);

  const handleSubMenu = (
    subMenuIsOpen: boolean,
    childItems: WpMenu,
    index: number
  ) => {
    if (childItems.length <= 0) {
      setSubMenuIsOpen(false);
      subMenuIsOpen(false);
    } else {
      setOpenedMenu(index);
      setSubMenuIsOpen(!subMenuIsOpen);
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.aside
          animate={{ width: "100%" }}
          className="h-full overflow-y-scroll"
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
          initial={{ width: 0 }}
        >
          <motion.div
            animate="open"
            className="fixed z-[9999999999] h-full w-full bg-white overflow-y-scroll mobileMenu"
            exit="closed"
            initial="closed"
            variants={sideVariants}
          >
            <Edges size="lg">
              <motion.div className="mt-[60px]" variants={itemVariants}>
                {menuItems?.map((item, index) => (
                  <div key={index}>
                    {!subMenuIsOpen && (
                      <div className=" flex flex-col text-left">
                        {item.childItems.length > 0 ? (
                          <button
                            className="cursor-pointer nav text-darkPurple leading-[24px] pb-[35px] flex flex-row justify-between ml-[15px] items-center"
                            onClick={() => {
                              handleSubMenu(
                                subMenuIsOpen,
                                item.childItems,
                                index
                              );
                            }}
                            type="button"
                          >
                            {parse(item.label)}
                            <ChevonRight
                              className="mr-[11px] w-[6px] h-[10px] fill-black rotate-180"
                              width="6"
                            />
                          </button>
                        ) : (
                          <ConditionalLink
                            className="nav text-darkPurple leading-[24px] pb-[35px] flex flex-row justify-between ml-[15px]"
                            dangerouslySetInnerHTML={{ __html: item.label }}
                            href={item.url ? getUrlPath(item.url) : "/"}
                            onClick={() => {
                              handleSubMenu(
                                subMenuIsOpen,
                                item.childItems,
                                index
                              );
                            }}
                          />
                        )}
                      </div>
                    )}

                    <MobileSubMenu
                      isOpen={subMenuIsOpen}
                      menuIndex={index}
                      menuItems={item.childItems}
                      openedMenu={openedMenu}
                      setIsOpen={setSubMenuIsOpen}
                      setIsOpen2={setIsOpen}
                    />
                  </div>
                ))}
                {!subMenuIsOpen && (
                  <div
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <Button
                      className="ml-[15px]"
                      href={button?.url ? getUrlPath(button.url) : "/"}
                      variant="medium"
                    >
                      {button?.title}
                    </Button>
                  </div>
                )}
                {console.log(isOpen)}
              </motion.div>
            </Edges>
          </motion.div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}

export default MobileMenu;
