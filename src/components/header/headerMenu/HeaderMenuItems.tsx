"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { WpLink, WpMenuItem } from "@nextwp/core";
import Button from "../../Button";
import { getUrlPath } from "../../../utils/getUrlPath";
import SubMenu from "./SubMenu";
import MegaNavSubMenu from "./MegaNavSubMenu";

function MenuItems({
  menuItems,
  button,
}: {
  menuItems: WpMenuItem[];
  button?: WpLink;
}) {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const pathname = usePathname();

  return (
    <ul className="flex-row justify-between  items-center hidden md:flex">
      {menuItems.map((item, index) => (
        <li
          className="relative"
          key={index}
          onMouseEnter={() => {
            setHoverIndex(index);
          }}
          onMouseLeave={() => {
            setHoverIndex(-1);
          }}
        >
          <div className="relative flex flex-col">
            <div className="nav text-lightBlue px-[16px] py-[40px] group">
              {item.childItems.length > 0 && item.classes[0] === "megaNav" ? (
                <Link
                  className="cursor-pointer"
                  dangerouslySetInnerHTML={{ __html: item.label }}
                  href={getUrlPath(item.url) || "/"}
                />
              ) : (
                <Link
                  dangerouslySetInnerHTML={{ __html: item.label }}
                  href={getUrlPath(item.url) || "/"}
                />
              )}
              <div className="group-hover:block hidden absolute bg-lightGreen bottom-9 w-[24px] h-[5px] " />

              {item.url.includes(pathname) && pathname !== "/" ? (
                <div className=" absolute bg-lightGreen bottom-9 w-[24px] h-[5px] " />
              ) : null}
            </div>
          </div>

          {hoverIndex === index &&
          item.childItems.length > 0 &&
          item.classes[0] === "megaNav" &&
          item ? (
            <MegaNavSubMenu childItems={item.childItems} />
          ) : null}

          {hoverIndex === index &&
          item.childItems.length > 0 &&
          item.classes[0] !== "megaNav" &&
          item ? (
            <SubMenu childItems={item.childItems} />
          ) : null}
        </li>
      ))}

      {button?.url ? (
        <div className="ml-[16px] mr-[26px] lg:mr-0">
          <Button href={button.url} variant="medium">
            {button.title}
          </Button>
        </div>
      ) : null}
    </ul>
  );
}

export default MenuItems;
