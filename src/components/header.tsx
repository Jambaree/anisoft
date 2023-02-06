"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import HeaderMenuItems from "./headerMenu/HeaderMenuItems";
// @ts-ignore
import Edges from "./Edges";
import Logo from "./logos/logo";
import Image from "next/image";
import MobileMenu from "./headerMenu/mobileMenu";

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
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window?.document && isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isOpen]);
  return (
    <>
      <div className="bg-white h-[72px] "></div>
      <div className=" fixed bg-white w-full border-b-[1px] border-b-[#0E0A30] top-0 z-10">
        <Edges size="lg">
          <div className="flex flex-row justify-between items-center ">
            <Link href="/" className="my-[31px]">
              <Logo />
            </Link>
            <HeaderMenuItems menuItems={menuItems} />
            <div className="md:hidden flex">
              {!isOpen && (
                <button
                  className="w-[30px] h-[30px] relative"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <Image
                    src="/hamburger.svg"
                    alt="hamburger-menu"
                    width="30"
                    height="30"
                  />
                </button>
              )}
            </div>
          </div>
        </Edges>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} menu={menuItems} />
    </>
  );
}
