import React from "react";
import Link from "next/link";

const menuItems = {
  nodes: [
    {
      name: "About Anisoft",
      link: "/",
    },
    {
      name: "Data Management",
      link: "/",
    },
    {
      name: "Security & Data Protection",
      link: "/",
    },
    {
      name: "Enterprise Servers",
      link: "/",
    },
    {
      name: "Networking Technology",
      link: "/",
    },
    {
      name: "High Performance Solutions",
      link: "/",
    },

    {
      name: "Services & Support",
      link: "/",
    },

    {
      name: "Contact",
      link: "/",
    },

    {
      name: "Request a Quote",
      link: "/",
    },

    {
      name: "Careers",
      link: "/",
    },
  ],
};
const half = Math.ceil(menuItems.nodes.length / 2);
const firstHalfMenuItems = menuItems.nodes.slice(0, half);
const secondHalfMenuitems = menuItems.nodes.slice(half, menuItems.nodes.length);

const MenuItems = () => {
  return (
    <ul className="flex flex-row ">
      <div>
        {firstHalfMenuItems.map((item, index) => (
          <div key={index} className="relative max-w-[180px] w-full">
            <li className="nav text-white z-0 mb-[12px]" key={index}>
              <Link href={item?.link}>{item?.name}</Link>
            </li>
          </div>
        ))}
      </div>
      <div className="ml-[24px]">
        {secondHalfMenuitems.map((item, index) => (
          <div key={index} className="relative max-w-[180px] w-full">
            <li className="nav text-white z-0 mb-[12px]" key={index}>
              <Link href={item?.link}>{item?.name}</Link>
            </li>
          </div>
        ))}
      </div>
    </ul>
  );
};

export default MenuItems;
