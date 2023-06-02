import { getData } from "@jambaree/next-wordpress";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Edges from "../../components/Edges";
import GravityForm from "../../components/form/GravityForm";
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

  const { title, content, template } = page;
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
              key={idx}
              className={classNames(
                idx % 2 === 0 ? "bg-white" : "bg-lightGreyBg",
                "py-[80px] w-full h-full flex flex-col justify-center items-start"
              )}
            >
              <Edges size="lg">
                {cat?.name && <h1 className="pb-[30px]">{cat?.name}s</h1>}

                {cat?.description && (
                  <p className="pb-[60px]">{cat?.description}</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-16">
                  {cat?.posts?.nodes?.length > 0 &&
                    cat?.posts?.nodes.map((post, idx) => {
                      return (
                        <Link
                          href={post?.uri || "/"}
                          key={idx}
                          className="w-full  bg-darkPurple p-[30px] flex flex-col gap-4 items-start justify-start"
                        >
                          {post?.title && (
                            <h3 className="text-white">{post?.title}</h3>
                          )}

                          {post?.content && (
                            <div
                              className="text-white archiveText overflow-hidden  overflow-ellipsis 	h-[80px]"
                              dangerouslySetInnerHTML={{
                                __html: post?.content,
                              }}
                            />
                          )}

                          {post?.featuredImage?.node?.sourceUrl && (
                            <div className="relative w-full h-[220px]">
                              <Image
                                src={post?.featuredImage?.node?.sourceUrl}
                                alt={post?.featuredImage?.node?.altText}
                                fill
                              />
                            </div>
                          )}
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
