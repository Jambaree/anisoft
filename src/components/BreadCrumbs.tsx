"use client";
import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import ConditionalLink from "@/components/ConditionalLink";

function BreadCrumbs(props) {
  const { className, basePath } = props;

  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav
      className={classNames(
        "py-2 font-medium text-gray-500 leading-relaxed",
        className
      )}
    >
      {basePath ? (
        <ConditionalLink href={`/${basePath}`}>
          <span className="p-details hover:text-lightGreen capitalize">
            {basePath}
          </span>
        </ConditionalLink>
      ) : (
        <ConditionalLink href="/">
          <span className="p-details hover:text-lightGreen">Home</span>
        </ConditionalLink>
      )}
      {paths.map((path, index) => {
        const label = path
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());

        if (label !== "Solutions And Products") {
          return (
            <React.Fragment key={index}>
              <span className="mx-2">/</span>
              <ConditionalLink
                className="inline"
                href={`/${paths.slice(0, index + 1).join("/")}` || "/"}
              >
                <span className="p-details hover:text-lightGreen">
                  {label}
                </span>
              </ConditionalLink>
            </React.Fragment>
          );
        }
        return (
          <React.Fragment key={index}>
            <span className="mx-2">/</span>
            <span className="p-details">{label}</span>
          </React.Fragment>
        );
      })}
    </nav>
  );
}
export default BreadCrumbs;
