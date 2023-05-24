"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = ({ menuItems, productMenuItems }) => {
  const urlName = usePathname();

  const correctMenuItems = menuItems;

  const third = Math.ceil(correctMenuItems.length / 3);
  const firstHalfMenuItems = correctMenuItems.slice(0, third );
  const secondMenuitems = correctMenuItems.slice(third , 2 * third );
  const thirdMenuitems = correctMenuItems.slice(
    2 * third,
    correctMenuItems.length
  );

  return (
    <div className="flex flex-row flex-wrap gap-[25px] md:gap-[35px]">
      <ul>
        {firstHalfMenuItems.map((item, index) => (
          <li key={index} className="relative max-w-[350px] group w-full">
            <div
              className="nav text-white z-0 mb-[12px] hover:text-lightGreen"
              key={index}
            >
              {item?.url.includes("#") ? (
                <a href={item?.url || "/"}>{item?.label}</a>
              ) : (
                <Link href={item?.url || "/"}>{item?.label}</Link>
              )}
            </div>
          </li>
        ))}
      </ul>
      <ul className="">
        {secondMenuitems.map((item, index) => (
          <li key={index} className="relative max-w-[350px] w-full group">
            <div
              className="nav text-white z-0 mb-[12px] hover:text-lightGreen"
              key={index}
            >
              {item?.url.includes("#") ? (
                <a href={item?.url || "/"}>{item?.label}</a>
              ) : (
                <Link href={item?.url || "/"}>{item?.label}</Link>
              )}
            </div>
          </li>
        ))}
      </ul>
      <ul className="">
        {thirdMenuitems.map((item, index) => (
          <li key={index} className="relative max-w-[350px] w-full group">
            <div
              className="nav text-white z-0 mb-[12px] hover:text-lightGreen"
              key={index}
            >
              {item?.url.includes("#") ? (
                <a href={item?.url || "/"}>{item?.label}</a>
              ) : (
                <Link href={item?.url || "/"}>{item?.label}</Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
