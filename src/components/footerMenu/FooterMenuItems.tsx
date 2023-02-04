import React from "react";
import Link from "next/link";

const menuItems = {
  nodes: [
    {
      name: "About Anisoft",
      link: "/",
    },
    {
      name: "High Performance Solutions",
      link: "/",
    },
    {
      name: "Data Management",
      link: "/",
    },
    {
      name: "Services & Support",
      link: "/",
    },
    {
      name: "Security & Data Protection",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
    {
      name: "Enterprise Servers",
      link: "/",
    },
    {
      name: "Request a Quote",
      link: "/",
    },
    {
      name: "Networking Technology",
      link: "/",
    },
    {
      name: "Careers",
      link: "/",
    },
  ],
};

const FooterMenuItems = () => {
  return (
    <ul className="flex flex-col flex-wrap max-h-[245px]">
      {menuItems.nodes.map((item, index) => (
        <div key={index} className="relative  w-full">
          <div className="relative flex flex-col">
            <li className="nav text-white z-0" key={index}>
              <Link href={item?.link}>{item?.name}</Link>
            </li>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default FooterMenuItems;
