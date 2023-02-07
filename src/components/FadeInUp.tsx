"use client";
import React, { useRef } from "react";

import { useInView } from "framer-motion";
import classNames from "classnames";

const FadeInUp = (props) => {
  const { children, alwaysVisible = false, playOnce = true, className } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: playOnce });

  return (
    <div
      ref={ref}
      className={classNames(
        "transition-[opacity, transform] delay-100 duration-500",
        isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        alwaysVisible && "opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FadeInUp;
