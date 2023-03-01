"use client";
import React, { useState } from "react";
import SubMenuChild from "./SubMenuChild";

const SubMenu = ({ childItems }) => {

  return (
    <div className="absolute bg-white z-10 border-b-[1px] border-b-[#0E0A30] border-x-[1px] border-t-none w-[672px]">
      <div className=" flex flex-row gap-[25px]">
        {childItems?.nodes?.map((item, index) => {
          return (
            <div
              key={index}
              className=" px-[28px]  py-[25px]"
           
            >
              <div className="relative w-fit ">
                <span className="text-[1rem] font-maven font-semibold">

                {item?.label}
                </span>
              
                {item.childItems?.nodes?.length > 0 && (
                  <SubMenuChild childItems={item.childItems} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
