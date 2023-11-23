import { getData } from "@jambaree/next-wordpress";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Edges from "../../components/Edges";
import PageHeader2 from "../../components/PageHeader2";

export default async function BlankPageTemplate({
  uri,
  isPreview,
  searchParams,
}) {
  const { page, categories } = await getData({
    variables: { id: uri, idType: "URI" },
    query,
    isPreview,
    searchParams,
  });
  if (!page) {
    notFound();
  }

  const { title, content } = page;
  const { nodes } = categories;
  const filteredCategories = nodes.filter(
    (category) => category?.posts.nodes.length > 0
  );

  return (
    <div>
      <PageHeader2 text={content} title={title} />
      {filteredCategories?.length > 0 &&
        filteredCategories.map((cat, idx) => {
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
                  {cat?.posts?.nodes?.length > 0 &&
                    [...cat?.posts?.nodes].reverse().map((post, idx) => {
                      return (
                        <Link
                          className="w-full  bg-darkPurple p-[30px] flex flex-col gap-4 items-start justify-start"
                          href={post?.uri || "/"}
                          key={idx}
                        >
                          {post?.title ? (
                            <h4 className="text-white w-auto sm:w-fit text-[1.45rem] whitespace-nowrap">
                              {post?.title}
                            </h4>
                          ) : null}

                          {post?.content ? (
                            <div
                              className="text-white archiveText overflow-hidden  overflow-ellipsis 	h-[55px]"
                              dangerouslySetInnerHTML={{
                                __html: post?.content,
                              }}
                            />
                          ) : null}

                          {post?.featuredImage?.url ? (
                            <div className="relative w-full h-[220px]">
                              <Image
                                alt={post?.featuredImage?.alt}
                                fill
                                src={post?.featuredImage?.url}
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

const query = /* GraphQL */ `
  query PageQuery($id: ID!, $idType: PageIdType) {
    page(id: $id, idType: $idType) {
      __typename
      id
      title
      uri
      slug
      content
      template {
        ... on Template_Blank {
          templateName
        }
      }
    }
    categories {
      nodes {
        posts {
          nodes {
            title
            content
            uri
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
        id
        name
        description
      }
    }
  }
`;
