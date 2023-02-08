"use client";
import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { motion } from "framer-motion";
import ChevronRight from "../../public/chevron-right.svg";

interface IButtonProps {
  children: React.ReactNode;
  reverse?: boolean;
  variant?: "large" | "medium" | "basic" | "basicWhite";
  href: string;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({
  reverse,
  children,
  variant,
  href,
  className,
}) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={classNames(
        className,
        reverse && "text-white border-white",
        !reverse && variant === "large" && "text-darkPurple border-darkPurple",
        !reverse && variant === "medium" && "text-lightBlue border-lightBlue",
        variant === "large"
          ? "p  w-[199px] h-[48px] rounded-full border-[1px] flex items-center text-[18px] justify-center uppercase font-mukta leading-[150%] font-light pt-1"
          : variant === "medium"
          ? "  lg:mr-0 mr-[26px] rounded-full border-[1px] w-[145px] h-[35px] flex items-center justify-center uppercase font-maven text-[14px] "
          : variant === "basicWhite"
          ? "text-white flex flex-row items-center justify-center font-mukta text-[18px] font-light pt-1"
          : "text-darkPurple flex flex-row items-center justify-center font-mukta text-[18px] font-light pt-1",
        "relative "
      )}
    >
      {!variant.includes("basic") && (
        <motion.div
          initial={{ right: "25%" }}
          animate={{ right: isHovered ? "56%" : "25%" }}
          transition={{ duration: 0.3 }}
          className="absolute bg-lightGreen -top-[4px] w-[18%] h-[17%] rounded-sm"
        ></motion.div>
      )}
      {children}

      {variant.includes("basic") && (
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
    </Link>
  );
};

export default Button;
