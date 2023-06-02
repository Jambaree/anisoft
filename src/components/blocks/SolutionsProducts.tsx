import React, { useRef, useEffect, useState } from "react";
import { animate } from "framer-motion";
import Image from "next/image";
import Edges from "../Edges";
// import PostsCards from "../PostsCards";

export default function SolutionsProducts({
  headline,
  description,
  backgroundColor,
  categoryName,
  allPosts,
}) {
  {
    console.log(allPosts);
  }
  return (
    <div className="relative primaryRadialBg pb-[115px] md:pb-0">
      <Edges size="lg">
        <div>
          {/* <PostsCards categoryName={categoryName} /> */}
        </div>
      </Edges>
    </div>
  );
}
