"use client";
import Link from "next/link";
import React, { useState } from "react";
import { getUrlPath } from "../../../utils/getUrlPath";
import { motion } from "framer-motion";
import parse from "html-react-parser";

const SubMenu = ({ childItems }) => {
  const [hoverIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="absolute bg-white z-10 border-b-[1px] border-b-[#0E0A30] border-x-[1px] border-t-none">
      <div className=" flex flex-col w-fit px-[30px] pb-[30px]">
        {childItems?.nodes?.map((item, index) => {
          return (
            <Link
              key={index}
              href={getUrlPath(item?.url) || "/"}
              className=" pt-[30px] flex-1"
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
                <p className="text-[1rem] font-maven font-normal  whitespace-nowrap	">
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
    </div>
  );
};

export default SubMenu;
