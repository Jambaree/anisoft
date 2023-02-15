import { getData } from "@jambaree/next-wordpress";
import { notFound } from "next/navigation";
import PageHeader2 from "../../components/PageHeader2";
import ContactQuickFacts from "../../components/ContactQuickFacts";
import Contact from "../../components/Contact";

export default async function ContactPageTemplate({ uri }) {
  const { page } = await getData({ variables: { uri }, query });
  if (!page) {
    notFound();
  }

  const {
    title,
    content,
    template: { contactQuickFacts, map },
  } = page;

  return (
    <div>
      <PageHeader2 text={content} title={title} />
      <ContactQuickFacts quickData={contactQuickFacts} />
      <Contact data={map} />
    </div>
  );
}

const query = `
  query ContactPageQuery($uri: ID!) {
    page(id: $uri, idType: URI) {
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
              icon
              title
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
              longitude
              latitude
              fieldGroupName
              address
            }
          }
        }
      }
    }
  }`;
