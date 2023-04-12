import React from "react";
import { getData } from "@jambaree/next-wordpress";
import PageHeader from "../../components/PageHeader";
import ServiceCards from "../../components/servicecards";

export default async function ServicePageTemplate({
  uri,
  isPreview,
  searchParams,
}) {
  const { page } = await getData({
    variables: { id: uri, idType: "URI" },
    query,
    isPreview,
    searchParams,
  });

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

const query = /* GraphQL */ `
  query ServicePageQuery($id: ID!, $idType: PageIdType) {
    page(id: $id, idType: $idType) {
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
  }
`;
