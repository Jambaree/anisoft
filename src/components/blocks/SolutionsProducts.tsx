"use client";
import React, { useRef, useEffect, useState } from "react";
import { animate } from "framer-motion";
import Image from "next/image";
import Edges from "../Edges";

export default async function SolutionsProducts({
  headline,
  description,
  backgroundColor,
  categoryName,
}) {
  // const query = /* GraphQL */ `
  //   query CategoryQuery($categoryName: String!) {
  //     posts(where: { categoryName: $categoryName }) {
  //       nodes {
  //         id
  //         title
  //       }
  //     }
  //   }
  // `;
  // const {
  //   posts: { nodes: SelectedPosts },
  // } = await getData({ query });
  return (
    <div className="relative primaryRadialBg pb-[115px] md:pb-0">
      <Edges size="lg">
        {/* <div>
          {SelectedPosts &&
            SelectedPosts.length > 0 &&
            SelectedPosts.map((post) => {
              return (
                <div key={post.id}>
                  <h1>{post.title}</h1>
                </div>
              );
            })}
        </div> */}
        <div></div>
      </Edges>
    </div>
  );
}
