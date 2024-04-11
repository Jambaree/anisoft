"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import type { WpLink, WpMenu } from "@nextwp/core";
import Edges from "../Edges";
import Logo from "../logos/logo";
import HeaderMenuItems from "./headerMenu/HeaderMenuItems";
import MobileMenu from "./headerMenu/mobileMenu";
import ConditionalLink from "../ConditionalLink";

export default function Header({
  menuItems,
  button,
}: {
  menuItems: WpMenu;
  button: WpLink;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isOpen]);

  return (
    <>
      <div className=" h-[100px] z-20 relative" />
      <div className="z-50 fixed bg-white w-full border-b-[1px] border-b-[#0E0A30] top-0 ">
        <Edges size="lg">
          <div className="flex flex-row justify-between items-center relative">
            <ConditionalLink
              ariaLabel="logo-home-link"
              className="my-[31px]"
              href="/"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Logo />
            </ConditionalLink>
            <HeaderMenuItems button={button} menuItems={menuItems} />
            <div className="md:hidden flex ml-[10px] md:ml-0">
              {!isOpen ? (
                <button
                  className="w-[30px] h-[30px] relative"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  type="button"
                >
                  <Image
                    alt="hamburger-menu"
                    height="30"
                    priority
                    src="/hamburger.svg"
                    width="30"
                  />
                </button>
              ) : (
                <button
                  className="w-[20px] h-[20px] relative ml-[10px] md:ml-0"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  type="button"
                >
                  <Image
                    alt="close-icon"
                    className=" cursor-pointer  max-w-[20px] max-h-[20px]"
                    height="20"
                    src="/close.svg"
                    width="20"
                  />
                </button>
              )}
            </div>
          </div>
        </Edges>
      </div>
      <div className="md:hidden flex">
        <MobileMenu
          button={button}
          isOpen={isOpen}
          menuItems={menuItems}
          setIsOpen={setIsOpen}
        />
      </div>
    </>
  );
}
