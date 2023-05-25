"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

function BreadCrumbs(props) {
  const { className } = props;

  const pathname = usePathname();
  const paths = pathname?.split("/").filter(Boolean);

  return (
    <nav
      className={classNames(
        "flex items-center justify-between py-2 font-medium  text-gray-500",
        className
      )}
    >
      <div className="flex items-center">
        <Link className="" href={`/`}>
          <span className="p-details hover:text-lightGreen">Home</span>
        </Link>
        {paths.map((path, index) => {
          if (
            path
              .replace(/[-_]/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase()) !==
            "Solutions And Products"
          ) {
            return (
              <Link
                className={`${
                  index === 0 ? "max-w-[175px] " : "max-w-[125px] "
                }  overflow-hidden whitespace-nowrap overflow-ellipsis sm:max-w-full`}
                key={index}
                href={`/${paths.slice(0, index + 1).join("/")}` || "/"}
              >
                <span className="mx-2">/</span>
                <span className="p-details hover:text-lightGreen">
                  {path
                    .replace(/[-_]/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </span>
              </Link>
            );
          } else {
            return (
              <div
                className={`${
                  index === 0 ? "max-w-[175px]" : "max-w-[125px]"
                }  overflow-hidden whitespace-nowrap overflow-ellipsis`}
                key={index}
              >
                <span className="mx-2">/</span>
                {/* {console.log(
                  path
                    .replace(/[-_]/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase()) ===
                    "Solutions And Products"
                )} */}
                <span className="p-details">
                  {path
                    .replace(/[-_]/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </span>
              </div>
            );
          }
        })}
      </div>
    </nav>
  );
}
export default BreadCrumbs;
