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

const MenuItems = () => {
  return (
    <ul className="flex flex-col sm:flex-row flex-wrap">
      {menuItems.nodes.map((item, index) => (
        <div key={index} className="relative max-w-[180px] w-full">
          <div className="relative flex flex-col">
            <li className="nav text-white z-0 mb-[12px]" key={index}>
              <Link className="mr-[12px]" href={item?.link}>
                {item?.name}
              </Link>
            </li>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default MenuItems;
