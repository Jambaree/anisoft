import classNames from "classnames";
import React from "react";

function RichTextComponents({ html, className }) {
  return (
    <div
      className={classNames(className, "richText")}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default RichTextComponents;
