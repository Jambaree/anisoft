"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import parse from "html-react-parser";

const SubMenuChild = ({ childItems }) => {
  const [hoverIndex, setHoveredIndex] = useState(-1);

  return (
    <div className=" flex flex-col ">
      {childItems?.nodes?.map((item, index) => {
        return (
          <Link
            key={index}
            href={item?.url || "/"}
            className=" py-[20px] flex-1"
            onMouseEnter={() => {
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              setHoveredIndex(-1);
            }}
          >
            <div className="relative w-fit">
              <motion.div
                className="bg-lightGreen  h-[2px] -top-1 left-0 absolute nav max-w-[50px]"
                initial={{ width: "15px" }}
                animate={{
                  width: hoverIndex === index ? "63%" : "15px",
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <p className="text-[1rem] font-maven font-normal">
                {item?.label}
              </p>
              {item?.description && (
                <span className="font-light font-mukta text-grey text-sm">
                  {parse(item?.description)}
                </span>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SubMenuChild;
