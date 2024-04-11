import { type WpPage, getFeaturedImage } from "@nextwp/core";
import ConditionalLink from "@/components/ConditionalLink";
import { stripWpUrl } from "@/utils/strip-wp-url";
import { ImageWithBlur } from "../image-with-blur";

export function PostsGrid({ posts }: { posts?: WpPage[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-16">
      {posts?.length
        ? posts.map((post) => {
            const featuredImage = getFeaturedImage(post);
            const relativeUrl = stripWpUrl(post.link!);

            return (
              <ConditionalLink
                className="w-full bg-darkPurple p-[30px] flex flex-col gap-4 items-start justify-start"
                href={relativeUrl}
                key={post.id}
              >
                {featuredImage?.url ? (
                  <div className="w-full">
                    <div className="relative w-full h-[220px]">
                      <ImageWithBlur
                        alt={featuredImage.alt || ""}
                        fill
                        src={featuredImage.url}
                      />
                    </div>
                  </div>
                ) : null}
                {post.title?.rendered ? (
                  <h4
                    className="text-white w-auto sm:w-fit text-[1.45rem]"
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }}
                  />
                ) : null}
              </ConditionalLink>
            );
          })
        : null}
    </div>
  );
}
