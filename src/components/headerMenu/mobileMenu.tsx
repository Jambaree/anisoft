"use client";
import React, { useState } from "react";

import Edges from "../Edges";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";
import MobileSubMenu from "./MobileSubMenu";

const MobileMenu = ({ isOpen, setIsOpen, menu }) => {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
        >
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
            className="fixed z-30 h-full w-full bg-white"
          >
            <Edges size="lg">
              <motion.div variants={itemVariants} className="mt-[60px]">
                {menu?.nodes?.map((item, index) => (
                  <div key={index}>
                    {!subMenuIsOpen && (
                      <div className=" flex flex-col text-left">
                        <Link
                          onClick={() => setSubMenuIsOpen(!subMenuIsOpen)}
                          href={item.link}
                          className="nav text-darkPurple leading-[24px] mb-[35px] flex flex-row justify-between "
                        >
                          {item.name}
                          {item?.childItems && (
                            <Image
                              src="/mobile-chevron-right.svg"
                              alt="chevron-right"
                              width="6"
                              height="10"
                            />
                          )}
                        </Link>
                      </div>
                    )}
                    <MobileSubMenu
                      isOpen={subMenuIsOpen}
                      setIsOpen={setSubMenuIsOpen}
                      menu={item?.childItems}
                    />
                  </div>
                ))}
                {!subMenuIsOpen && (
                  <Button variant="medium" href="/">
                    Get Started
                  </Button>
                )}
              </motion.div>
            </Edges>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
