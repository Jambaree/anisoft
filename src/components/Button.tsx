/* eslint-disable no-nested-ternary -- avoid nesting so many ternaries in the future */
"use client";
import React, { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { stripWpUrl } from "@/utils/strip-wp-url";
import ChevronRight from "../../public/chevron-right.svg";
import ConditionalLink from "./ConditionalLink";

interface ButtonProps {
  children: React.ReactNode;
  reverse?: boolean;
  variant?: "large" | "xlarge" | "medium" | "basic" | "basicWhite" | "full";
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  reverse,
  children,
  variant,
  href,
  disabled,
  className,
  type,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return href ? (
    <ConditionalLink
      ariaLabel="button"
      className={classNames(
        className,
        reverse && "text-white border-white",
        !reverse && variant === "large" && "text-darkPurple border-darkPurple",
        !reverse && variant === "medium" && "text-lightBlue border-lightBlue",

        variant === "full"
          ? "p  w-full h-[48px] rounded-full border-[1px] flex items-center text-[1.125rem] justify-center uppercase font-mukta leading-[150%] font-light pt-1"
          : variant === "xlarge"
          ? "p  w-[300px] h-[48px] rounded-full border-[1px] flex items-center text-[1.125rem] justify-center uppercase font-mukta leading-[150%] font-light pt-1"
          : variant === "large"
          ? "p  w-[199px] h-[48px] rounded-full border-[1px] flex items-center text-[1.125rem] justify-center uppercase font-mukta leading-[150%] font-light pt-1"
          : variant === "medium"
          ? "  lg:mr-0 mr-[26px] rounded-full border-[1px] w-[145px] h-[35px] flex items-center justify-center uppercase font-maven text-[0.875rem] "
          : variant === "basicWhite"
          ? "text-white flex flex-row items-center justify-center font-mukta text-[1.125rem] font-light pt-1"
          : "text-darkPurple flex flex-row items-center justify-center font-mukta text-[1.125rem] font-light pt-1",
        "relative "
      )}
      href={stripWpUrl(href) || "/"}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {!variant?.includes("basic") && (
        <motion.div
          animate={{ right: isHovered ? "56%" : "25%" }}
          className="absolute bg-lightGreen -top-[4px] w-[18%] h-[17%] rounded-sm"
          initial={{ right: "25%" }}
          transition={{ duration: 0.3 }}
        />
      )}
      {children}

      {variant?.includes("basic") ? (
        <motion.div
          animate={{ right: isHovered ? "-32px" : "-20px" }}
          className="absolute"
          transition={{ duration: 0.3 }}
        >
          {variant === "basicWhite" ? (
            <ChevronRight className="fill-white h-[13px] w-[8px]" />
          ) : (
            <ChevronRight className=" fill-black h-[13px] w-[8px]" />
          )}
        </motion.div>
      ) : null}
    </ConditionalLink>
  ) : (
    <button
      className={classNames(
        className,
        reverse && "text-white border-white",
        !reverse && variant === "large" && "text-darkPurple border-darkPurple",
        !reverse && variant === "medium" && "text-lightBlue border-lightBlue",
        variant === "full"
          ? "p  w-full h-[48px] rounded-full border-[1px] flex items-center text-[1.125rem] justify-center uppercase font-mukta leading-[150%] font-light pt-1"
          : variant === "large"
          ? "p  w-[199px] h-[48px] rounded-full border-[1px] flex items-center text-[1.125rem] justify-center uppercase font-mukta leading-[150%] font-light pt-1"
          : variant === "medium"
          ? "  lg:mr-0 mr-[26px] rounded-full border-[1px] w-[145px] h-[35px] flex items-center justify-center uppercase font-maven text-[0.875rem] "
          : variant === "basicWhite"
          ? "text-white flex flex-row items-center justify-center font-mukta text-[1.125rem] font-light pt-1"
          : "text-darkPurple flex flex-row items-center justify-center font-mukta text-[1.125rem] font-light pt-1",
        "relative "
      )}
      disabled={disabled}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      type={type}
    >
      {!variant?.includes("basic") && (
        <motion.div
          animate={{ right: isHovered ? "56%" : "25%" }}
          className="absolute bg-lightGreen -top-[4px] w-[18%] h-[17%] rounded-sm"
          initial={{ right: "25%" }}
          transition={{ duration: 0.3 }}
        />
      )}
      {children}

      {variant?.includes("basic") ? (
        <motion.div
          animate={{ right: isHovered ? "-32px" : "-20px" }}
          className="absolute"
          transition={{ duration: 0.3 }}
        >
          {variant === "basicWhite" ? (
            <ChevronRight className="fill-white h-[13px] w-[8px]" />
          ) : (
            <ChevronRight className=" fill-white h-[13px] w-[8px]" />
          )}
        </motion.div>
      ) : null}
    </button>
  );
}

export default Button;
