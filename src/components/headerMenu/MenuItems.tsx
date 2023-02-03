"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button";
import SubMenu from "./SubMenu";

const menuItems = {
  nodes: [
    {
      name: "Solutions & Products",
      link: "/",
      childItems: {
        nodes: [
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
        ],
      },
    },
    {
      name: "Services & Support",
      link: "/",
      childItems: {
        nodes: [
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
        ],
      },
    },
    {
      name: "About Us",
      link: "/",
      childItems: {
        nodes: [
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
        ],
      },
    },
    {
      name: "Contact Us",
      link: "/",
      childItems: {
        nodes: [
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
        ],
      },
    },
  ],
};

const MenuItems = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <ul className="flex flex-row justify-between  items-center">
      {menuItems.nodes.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(-1)}
        >
          <div className="relative flex flex-col">
            <li
              className="nav text-lightBlue px-[16px] py-[31px] z-10"
              key={index}
            >
              <Link href={item?.link}>{item?.name}</Link>
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
  );
};

export default MenuItems;
