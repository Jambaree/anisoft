"use client";
import React from "react";
import SubMenuChild from "./SubMenuChild";

function MegaNavSubMenu({ childItems }) {
  return (
    <div className="absolute bg-white z-10 border-b-[1px] border-b-[#0E0A30] border-x-[1px] border-t-none">
      <div className=" flex flex-row gap-[30px] p-[30px]">
        {childItems?.map((item, index) => {
          return (
            <div className=" " key={index}>
              <div className="relative w-fit ">
                <span className="text-[1rem] font-maven font-medium uppercase">
                  {item?.label}
                </span>

                {item.childItems?.length > 0 && (
                  <SubMenuChild childItems={item.childItems} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MegaNavSubMenu;
