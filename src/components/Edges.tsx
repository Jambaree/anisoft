import React from "react";

import classNames from "classnames";

interface IEdgesProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const Edges: React.FC<IEdgesProps> = (props) => {
  const { className, size = "md", ...rest } = props;

  return (
    <div
      className={classNames(
        size === "sm"
          ? "max-w-screen-sm"
          : size === "md"
          ? "max-w-screen-md"
          : size === "lg"
          ? "max-w-screen-lg"
          : size === "2xl"
          ? "max-w-screen-2xl"
          : "max-w-screen-lg",

        "mx-auto",
        "w-full",

        className
      )}
      {...rest}
    />
  );
};

export default Edges;
