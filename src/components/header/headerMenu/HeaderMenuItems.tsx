"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../../Button";
import SubMenu from "./SubMenu";
import { usePathname } from "next/navigation";
import { getUrlPath } from "../../../utils/getUrlPath";
import MegaNavSubMenu from "./MegaNavSubMenu";

const MenuItems = ({ menuItems, data }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const pathname = usePathname();
  return (
    <>
      <ul className="flex-row justify-between  items-center hidden md:flex">
        {menuItems?.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            <div className="relative flex flex-col">
              <div
                className="nav text-lightBlue px-[16px] py-[40px] group"
                key={index}
              >
                {item?.childItems?.nodes.length > 0 &&
                item?.cssClasses[0] === "megaNav" ? (
                  <Link
                    href={getUrlPath(item?.url) || "/"}
                    className="cursor-pointer"
                  >
                    {item?.label}
                  </Link>
                ) : (
                  <Link href={getUrlPath(item?.url) || "/"}>{item?.label}</Link>
                )}
                <div className="group-hover:block hidden absolute bg-lightGreen bottom-9 w-[24px] h-[5px] "></div>

                {item?.url.includes(pathname) && pathname !== "/" && (
                  <div className=" absolute bg-lightGreen bottom-9 w-[24px] h-[5px] "></div>
                )}
              </div>
            </div>

            {hoverIndex === index &&
              item?.childItems?.nodes.length > 0 &&
              item?.cssClasses[0] === "megaNav" &&
              item && <MegaNavSubMenu childItems={item?.childItems} />}

            {hoverIndex === index &&
              item?.childItems?.nodes.length > 0 &&
              item?.cssClasses[0] !== "megaNav" &&
              item && <SubMenu childItems={item?.childItems} />}
          </li>
        ))}

        {data?.button && (
          <div className="ml-[16px] mr-[26px] lg:mr-0">
            <Button variant="medium" href={data?.button?.url}>
              {data?.button?.title}
            </Button>
          </div>
        )}
      </ul>
    </>
  );
};

export default MenuItems;
