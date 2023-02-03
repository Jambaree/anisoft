import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SubMenu = ({ childItems }) => {
  const [hoverIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="absolute bg-white z-0 border-b-[1px] border-b-[#0E0A30] border-x-[1px] border-t-none w-[274px]">
      <div className=" flex flex-col">
        {childItems?.nodes?.map((item, index) => {
          return (
            <Link
              key={index}
              href="/"
              className=" pl-[28px] whitespace-nowrap py-[25px]"
              onMouseEnter={() => {
                setHoveredIndex(index);
              }}
            >
              <div className="relative w-fit text-[16px] font-maven">
                <motion.div
                  className="bg-lightGreen  h-[14%] -top-1 left-0 absolute nav"
                  initial={{ width: "15px" }}
                  animate={{
                    width: hoverIndex === index ? "63%" : "15px",
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                {item?.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
