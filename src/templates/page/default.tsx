import { notFound } from "next/navigation";

import { getData, FlexibleContent } from "@jambaree/next-wordpress";
import FooterTopperCTA from "../../components/FooterTopperCTA";
import * as blocks from "../../components/blocks";

export default async function DefaultPageTemplate({ uri }) {
  const { page } = await getData({ variables: { uri }, query });
  if (!page) {
    notFound();
  }

  const {
    title,
    template: {
      footerTopperCta,
      acf: { modules },
    },
  } = page;

  return (
    <div>
      <FlexibleContent blocks={blocks} rows={modules} data={{ title, uri }} />
      <FooterTopperCTA data={footerTopperCta} />
    </div>
  );
}
const query = /* GraphQL */ `
  query PageQuery($uri: ID!) {
    page(id: $uri, idType: URI) {
      __typename
      id
      title
      uri
      slug
      template {
        templateName
        ... on DefaultTemplate {
          footerTopperCta {
            button {
              title
              url
            }
            text1
            text2
          }
          templateName
          acf {
            modules {
              __typename
              ... on DefaultTemplate_Acf_Modules_Anisoft {
                fieldGroupName
                headline
                tag
                text
                button {
                  title
                  url
                }
              }
              ... on DefaultTemplate_Acf_Modules_Hero {
                fieldGroupName
                headline
                button2 {
                  title
                  url
                }
                button1 {
                  title
                  url
                }
                image {
                  sourceUrl
                  altText
                }
                subHeadline
              }
              ... on DefaultTemplate_Acf_Modules_InfoCallout {
                fieldGroupName
                headline
                tag
                text
                button2 {
                  title
                  url
                }
                button1 {
                  url
                  title
                }
              }
              ... on DefaultTemplate_Acf_Modules_Logos {
                fieldGroupName
                header
                logos {
                  logo {
                    sourceUrl
                    altText
                  }
                }
              }
              ... on DefaultTemplate_Acf_Modules_ProductsSlider {
                fieldGroupName
                headline
                products {
                  text
                  buttonText
                  product {
                    ... on Post {
                      id
                      uri
                      title
                      featuredImage {
                        node {
                          sourceUrl
                          altText
                        }
                      }
                    }
                  }
                }
                tag
              }
              ... on DefaultTemplate_Acf_Modules_Stats {
                description
                fieldGroupName
                image {
                  sourceUrl
                }
                stats {
                  stat
                  label
                }
                title
              }
              ... on DefaultTemplate_Acf_Modules_TextInfo {
                tag
                headline
                button1 {
                  title
                  url
                  target
                }
                button2 {
                  title
                  url
                  target
                }
                text
              }
              ... on DefaultTemplate_Acf_Modules_Testimonials {
                fieldGroupName
                testimonials {
                  description
                  name
                  title
                  image {
                    sourceUrl
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
