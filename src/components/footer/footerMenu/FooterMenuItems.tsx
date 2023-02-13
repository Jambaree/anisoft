import React from "react";
import Link from "next/link";

const MenuItems = ({ menuItems }) => {
  // const half = Math.ceil(menuItems.length / 2);
  // const firstHalfMenuItems = menuItems.slice(0, half);
  // const secondHalfMenuitems = menuItems.slice(half, menuItems.length);

  return (
    <ul className="flex flex-row ">
      {/* <div>
        {firstHalfMenuItems.map((item, index) => (
          <div key={index} className="relative max-w-[180px] w-full">
            <li className="nav text-white z-0 mb-[12px]" key={index}>
              <Link href={item?.url || "/"}>{item?.label}</Link>
            </li>
          </div>
        ))}
      </div>
      <div className="ml-[24px]">
        {secondHalfMenuitems.map((item, index) => (
          <div key={index} className="relative max-w-[180px] w-full">
            <li className="nav text-white z-0 mb-[12px]" key={index}>
              <Link href={item?.url || "/"}>{item?.label}</Link>
            </li>
          </div>
        ))}
      </div> */}
    </ul>
  );
};

export default MenuItems;
