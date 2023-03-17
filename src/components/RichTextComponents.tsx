import React from "react";

function RichTextComponents({ html }) {
  return (
    <div className="richText" dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default RichTextComponents;
