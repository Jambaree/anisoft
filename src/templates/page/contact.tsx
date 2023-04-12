import { getData } from "@jambaree/next-wordpress";
import { notFound } from "next/navigation";
import PageHeader2 from "../../components/PageHeader2";
import ContactQuickFacts from "../../components/ContactQuickFacts";
import Contact from "../../components/Contact";

export default async function ContactPageTemplate({
  uri,
  isPreview,
  searchParams,
}) {
  const data = await getData({
    variables: { id: uri, idType: "URI" },
    query,
    isPreview,
    searchParams,
  });
  if (!data) {
    notFound();
  }

  const {
    page: {
      title,
      content,
      template: { contactQuickFacts, map },
    },
  } = data;

  return (
    <div>
      <PageHeader2 text={content} title={title} />
      <ContactQuickFacts quickData={contactQuickFacts} />
      <Contact data={map} />
    </div>
  );
}

const query = /* GraphQL */ `
  query ContactPageQuery($id: ID!, $idType: PageIdType) {
    page(id: $id, idType: $idType) {
      __typename
      id
      title
      uri
      slug
      content
      template {
        ... on Template_Contact {
          templateName
          contactQuickFacts {
            fieldGroupName
            facts {
              description
              fieldGroupName

              title
              icon {
                sourceUrl
                altText
              }
            }
          }
          map {
            fieldGroupName
            headline
            tag
            text
            locations {
              title
              phone
              faxNumber
              longitude
              latitude
              fieldGroupName
              address
            }
          }
        }
      }
    }
  }
`;
