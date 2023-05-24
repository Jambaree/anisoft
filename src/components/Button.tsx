"use client";
import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { motion } from "framer-motion";
import ChevronRight from "../../public/chevron-right.svg";
import { getUrlPath } from "../utils/getUrlPath";

interface IButtonProps {
  children: React.ReactNode;
  reverse?: boolean;
  variant?: "large" | "medium" | "basic" | "basicWhite" | "full";
  href: string;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  reverse,
  children,
  variant,
  href,
  disabled,
  className,
}) => {
  const [isHovered, setHovered] = useState(false);
  return href ? (
    <Link
      aria-label="button"
      href={getUrlPath(href) || "/"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
    >
      {!variant?.includes("basic") && (
        <motion.div
          initial={{ right: "25%" }}
          animate={{ right: isHovered ? "56%" : "25%" }}
          transition={{ duration: 0.3 }}
          className="absolute bg-lightGreen -top-[4px] w-[18%] h-[17%] rounded-sm"
        ></motion.div>
      )}
      {children}

      {variant?.includes("basic") && (
        <motion.div
          className="absolute"
          animate={{ right: isHovered ? "-32px" : "-20px" }}
          transition={{ duration: 0.3 }}
        >
          {variant === "basicWhite" ? (
            <ChevronRight className="fill-white h-[13px] w-[8px]" />
          ) : (
            <ChevronRight className=" fill-black h-[13px] w-[8px]" />
          )}
        </motion.div>
      )}
    </Link>
  ) : (
    <button
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
    >
      {!variant?.includes("basic") && (
        <motion.div
          initial={{ right: "25%" }}
          animate={{ right: isHovered ? "56%" : "25%" }}
          transition={{ duration: 0.3 }}
          className="absolute bg-lightGreen -top-[4px] w-[18%] h-[17%] rounded-sm"
        ></motion.div>
      )}
      {children}

      {variant?.includes("basic") && (
        <motion.div
          className="absolute"
          animate={{ right: isHovered ? "-32px" : "-20px" }}
          transition={{ duration: 0.3 }}
        >
          {variant === "basicWhite" ? (
            <ChevronRight className="fill-white h-[13px] w-[8px]" />
          ) : (
            <ChevronRight className=" fill-white h-[13px] w-[8px]" />
          )}
        </motion.div>
      )}
    </button>
  );
};

export default Button;
