"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../../Button";
import SubMenu from "./SubMenu";

const MenuItems = ({ menuItems }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <>
      <ul className="flex-row justify-between  items-center hidden md:flex">
        {menuItems?.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            <div className="relative flex flex-col">
              <li
                className="nav text-lightBlue px-[16px] py-[40px]"
                key={index}
              >
                <Link href={item?.url || "/"}>{item?.label}</Link>
              </li>
            </div>
            {hoverIndex === index && <SubMenu childItems={item?.childItems} />}
          </div>
        ))}

        <div className="ml-[16px] mr-[26px] lg:mr-0">
          <Button variant="medium" href="/">
            Get Started
          </Button>
        </div>
      </ul>
    </>
  );
};

export default MenuItems;
