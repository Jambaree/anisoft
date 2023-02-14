import { gql, request } from "graphql-request";

export default async function getPageData() {
  if (!process.env.NEXT_PUBLIC_WP_URL) {
    throw new Error("Missing WP_URL environment variable");
  }
  const queryDocument = gql`
    query MenuQuery {
      themeOptions {
        options {
          footer {
            link2 {
              title
              url
            }
            link1 {
              title
              url
            }
            copyrightText
            contactInformation {
              email
              phoneNumber
              socials {
                icon
                url
              }
            }
          }
        }
      }
    }
  `;

  const res = await request({
    url: process.env.NEXT_PUBLIC_WP_URL,

    document: queryDocument,
  });

  return res;
}
