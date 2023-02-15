"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = ({ menuItems, productMenuItems }) => {
  console.log(productMenuItems);
  const urlName = usePathname();

  console.log(urlName);

  const correctMenuItems = urlName.includes("products")
    ? productMenuItems
    : menuItems;

  const half = Math.ceil(correctMenuItems.length / 2);
  const firstHalfMenuItems = correctMenuItems.slice(0, half);
  const secondHalfMenuitems = correctMenuItems.slice(
    half,
    correctMenuItems.length
  );

  return (
    <div className="flex flex-row ">
      <ul>
        {firstHalfMenuItems.map((item, index) => (
          <li key={index} className="relative max-w-[180px] w-full">
            <div className="nav text-white z-0 mb-[12px]" key={index}>
              <Link href={item?.url || "/"}>{item?.label}</Link>
            </div>
          </li>
        ))}
      </ul>
      <ul className="ml-[24px]">
        {secondHalfMenuitems.map((item, index) => (
          <li key={index} className="relative max-w-[180px] w-full">
            <div className="nav text-white z-0 mb-[12px]" key={index}>
              <Link href={item?.url || "/"}>{item?.label}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
