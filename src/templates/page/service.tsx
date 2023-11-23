import type { WpPage } from "@jambaree/next-wordpress/types";
import React from "react";
import PageHeader from "../../components/PageHeader";
import ServiceCards from "../../components/servicecards";

export default function ServicePageTemplate({ data }: { data: WpPage }) {
  return (
    <div>
      <PageHeader content={data.content.rendered} title={data.title.rendered} />

      {/* <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre> */}

      <ServiceCards services={data.acf?.services} />
    </div>
  );
}

// const query = /* GraphQL */ `
//   query ServicePageQuery($id: ID!, $idType: PageIdType) {
//     page(id: $id, idType: $idType) {
//       template {
//         ... on Template_Service {
//           templateName
//           services {
//             services {
//               description
//               name
//               points {
//                 text
//               }
//               image {
//                 sourceUrl
//               }
//             }
//           }
//         }
//       }
//       content
//       title
//     }
//   }
// `;
