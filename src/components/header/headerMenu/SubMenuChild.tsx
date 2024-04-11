"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ConditionalLink from "@/components/ConditionalLink";
import { getUrlPath } from "../../../utils/getUrlPath";

function SubMenuChild({ childItems }) {
  const [hoverIndex, setHoveredIndex] = useState(-1);

  return (
    <div className=" flex flex-col w-[330px]">
      {childItems?.map((item, index) => {
        return (
          <ConditionalLink
            className=" py-[20px] flex-1"
            href={getUrlPath(item?.url) || "/"}
            key={index}
            onMouseEnter={() => {
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              setHoveredIndex(-1);
            }}
          >
            <div className="relative w-fit">
              <motion.div
                animate={{
                  width: hoverIndex === index ? "63%" : "15px",
                }}
                className="bg-lightGreen  h-[2px] -top-1 left-0 absolute nav max-w-[50px]"
                initial={{ width: "15px" }}
                transition={{ duration: 0.3 }}
              />

              <p
                className="text-[1rem] font-maven font-normal"
                dangerouslySetInnerHTML={{ __html: item.label }}
              />

              {item?.description ? (
                <span
                  className="font-light font-mukta text-grey text-sm"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              ) : null}
            </div>
          </ConditionalLink>
        );
      })}
    </div>
  );
}

export default SubMenuChild;
