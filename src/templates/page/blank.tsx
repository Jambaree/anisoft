import { getItems } from "@nextwp/core/src/api/get-items";
import classNames from "classnames";
import Image from "next/image";
import { getFeaturedImage } from "@nextwp/core";
import ConditionalLink from "@/components/ConditionalLink";
import Edges from "../../components/Edges";
import PageHeader2 from "../../components/PageHeader2";

export default async function BlankPageTemplate({ data }) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/service-type`
  );
  const serviceTypes = await req.json();

  const posts = await getItems({
    restBase: "solutions-products",
  });

  const sections = serviceTypes
    .map((serviceType) => {
      return {
        ...serviceType,
        posts: posts.filter((post) => {
          return post["service-type"]?.includes(serviceType.id);
        }),
      };
    })
    ?.filter((section) => section.posts.length > 0);

  return (
    <div>
      <PageHeader2 text={data.content.rendered} title={data.title.rendered} />

      {sections?.length > 0 &&
        sections.map((section, index) => {
          return (
            <div
              className={classNames(
                index % 2 === 0 ? "bg-white" : "bg-lightGreyBg",
                "py-[80px] w-full h-full flex flex-col justify-center items-start"
              )}
              key={index}
            >
              <Edges size="lg">
                {section?.name ? (
                  <h2 className="pb-[30px]">{section?.name}</h2>
                ) : null}

                {section?.description ? (
                  <p className="pb-[60px]">{section?.description}</p>
                ) : null}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-16">
                  {section?.posts?.length > 0 &&
                    section.posts.reverse().map((post, index) => {
                      const featuredImage = getFeaturedImage(post);

                      return (
                        <ConditionalLink
                          className="w-full  bg-darkPurple p-[30px] flex flex-col gap-4 items-start justify-start"
                          href={post?.path || "/"}
                          key={index}
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

                          {featuredImage?.url ? (
                            <div className="relative w-full h-[220px]">
                              <Image
                                alt={featuredImage.alt || ""}
                                fill
                                src={featuredImage.url}
                              />
                            </div>
                          ) : null}
                        </ConditionalLink>
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
