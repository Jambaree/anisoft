// import { getData } from "@jambaree/next-wordpress";
// import { notFound } from "next/navigation";
// import { deepCamelCase } from "@/utils/deep-camel-case-helper";
import PageHeader2 from "../../components/PageHeader2";
import ContactQuickFacts from "../../components/ContactQuickFacts";
import Contact from "../../components/Contact";

export default async function ContactPageTemplate({ uri, data }) {
  const {
    title: { rendered: title },
    content: { rendered: content },
    acf,
  } = data;

  // console.log(acf);

  return (
    <div>
      <PageHeader2 text={content} title={title} />
      {/* <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre> */}
      <ContactQuickFacts quickData={acf.contact_quick_facts} />
      <Contact data={acf.map} />
    </div>
  );
}

// const query = /* GraphQL */ `
//   query ContactPageQuery($id: ID!, $idType: PageIdType) {
//     page(id: $id, idType: $idType) {
//       __typename
//       id
//       title
//       uri
//       slug
//       content
//       template {
//         ... on Template_Contact {
//           templateName
//           contactQuickFacts {
//             fieldGroupName
//             facts {
//               description
//               fieldGroupName

//               title
//               icon {
//                 sourceUrl
//                 altText
//               }
//             }
//           }
//           map {
//             fieldGroupName
//             headline
//             tag
//             text
//             locations {
//               title
//               phone
//               faxNumber
//               longitude
//               latitude
//               fieldGroupName
//               address
//             }
//           }
//         }
//       }
//     }
//   }
// `;
