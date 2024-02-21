import { generateSitemap } from "@nextwp/core";

export default function sitemap() {
  return generateSitemap({
    postTypes: ["pages", "posts", "solutions-products"],
  });
}
