import React from "react";
import { getData } from "@jambaree/next-wordpress";
import PageHeader from "../../components/PageHeader";
// import Services from "../../components/"

export default async function ServicePageTemplate({ uri }) {
  const { page } = await getData({ uri, query });

  return (
    <div>
      <PageHeader data={page} />
    </div>
  );
}

const query = `
  query ServicePageQuery($uri: ID!) {
    page(id: $uri, idType: URI) {
      template {
        ... on Template_Service {
          templateName
          services {
            services {
              description
              name
              points {
                text
              }
              image {
                sourceUrl
              }
            }
          }
        }
      }
      content
      title
    }
  }`;
