import React from "react";
import { getData } from "@jambaree/next-wordpress";
import PageHeader from "../../components/PageHeader";
import ServiceCards from "../../components/servicecards";

export default async function ServicePageTemplate({ uri }) {
  const { page } = await getData({ variables: { uri }, query });

  const {
    template: { services },
  } = page;

  return (
    <div>
      <PageHeader data={page} />
      <ServiceCards {...services} />
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
