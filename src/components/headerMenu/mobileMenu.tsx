"use client";
import React from "react";

import Edges from "../Edges";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
            className="fixed top-0 z-50 h-full w-full bg-white"
          >
            <div className="w-[30px] h-[30px] ml-auto relative  mt-[35px] mr-[35px]">
              <Image
                src="/close.svg"
                alt="close-icon"
                className=" cursor-pointer "
                width="30"
                height="30"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
            </div>

            <Edges
              size="sm"
              className="align-center my-auto flex h-full w-full flex-col items-center justify-center font-normal text-white md:items-end"
            >
              <motion.div
                className="border-r-[1px]  pr-[33px]"
                variants={itemVariants}
              >
                <div className="mb-[61px] ml-auto w-fit">
                  {menu?.nodes?.map((item, index) => (
                    <div key={index} className=" flex flex-col text-right">
                      <Link
                        onClick={() => setIsOpen(!isOpen)}
                        href={item.link}
                        className="font-mukta text-darkPurple mb-2 text-2xl  text-[45px] leading-[54px]"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Edges>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
