import { getItems } from "@nextwp/core/src/api/get-items";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import Edges from "../../components/Edges";
import PageHeader2 from "../../components/PageHeader2";

export default async function BlankPageTemplate({ data }) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/categories`
  );
  const categoriesList = await req.json();

  const posts = await getItems({
    restBase: "posts",
  });

  const categories = categoriesList
    .map((cat) => {
      return {
        ...cat,
        posts: posts.filter((post) => {
          return post.categories.includes(cat.id);
        }),
      };
    })
    ?.filter((cat) => cat.posts.length > 0);

  return (
    <div>
      <PageHeader2 text={data.content.rendered} title={data.title.rendered} />

      {categories?.length > 0 &&
        categories.map((cat, idx) => {
          return (
            <div
              className={classNames(
                idx % 2 === 0 ? "bg-white" : "bg-lightGreyBg",
                "py-[80px] w-full h-full flex flex-col justify-center items-start"
              )}
              key={idx}
            >
              <Edges size="lg">
                {cat?.name ? <h1 className="pb-[30px]">{cat?.name}s</h1> : null}

                {cat?.description ? (
                  <p className="pb-[60px]">{cat?.description}</p>
                ) : null}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-16">
                  {cat?.posts?.length > 0 &&
                    cat.posts.reverse().map((post, idx) => {
                      const image = post?._embedded["wp:featuredmedia"]?.[0];

                      return (
                        <Link
                          className="w-full  bg-darkPurple p-[30px] flex flex-col gap-4 items-start justify-start"
                          href={post?.path || "/"}
                          key={idx}
                        >
                          {post?.title?.rendered ? (
                            <h4
                              className="text-white w-auto sm:w-fit text-[1.45rem] whitespace-nowrap"
                              dangerouslySetInnerHTML={{
                                __html: post?.title?.rendered,
                              }}
                            />
                          ) : null}

                          {post?.content?.rendered ? (
                            <div
                              className="text-white archiveText overflow-hidden  overflow-ellipsis 	h-[55px]"
                              dangerouslySetInnerHTML={{
                                __html: post?.content?.rendered,
                              }}
                            />
                          ) : null}

                          {image.source_url ? (
                            <div className="relative w-full h-[220px]">
                              <Image
                                alt={image.alt}
                                fill
                                src={image.source_url}
                              />
                            </div>
                          ) : null}
                        </Link>
                      );
                    })}
                </div>
              </Edges>
            </div>
          );
        })}
    </div>
  );
}
