"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import HeaderMenuItems from "./headerMenu/HeaderMenuItems";
// @ts-ignore
import Edges from "../Edges";
import Logo from "../logos/logo";
import Image from "next/image";
import MobileMenu from "./headerMenu/mobileMenu";

export default function Header({ menuItems, data }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window?.document && isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isOpen]);
  return (
    <>
      <div className=" h-[100px] z-20 relative"></div>
      <div className="z-50 fixed bg-white w-full border-b-[1px] border-b-[#0E0A30] top-0 ">
        <Edges size="lg">
          <div className="flex flex-row justify-between items-center relative">
            <Link href="/" className="my-[31px]" aria-label="logo-home-link">
              <Logo />
            </Link>
            <HeaderMenuItems menuItems={menuItems} data={data} />
            <div className="md:hidden flex ml-[10px] md:ml-0">
              {!isOpen ? (
                <button
                  className="w-[30px] h-[30px] relative"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <Image
                    priority
                    src="/hamburger.svg"
                    alt="hamburger-menu"
                    width="30"
                    height="30"
                  />
                </button>
              ) : (
                <button className="w-[30px] h-[30px] relative ml-[10px] md:ml-0">
                  <Image
                    src="/close.svg"
                    alt="close-icon"
                    className=" cursor-pointer "
                    width="18"
                    height="18"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  />
                </button>
              )}
            </div>
          </div>
        </Edges>
      </div>
      <div className="md:hidden flex">
        <MobileMenu isOpen={isOpen} menu={menuItems} />
      </div>
    </>
  );
}
