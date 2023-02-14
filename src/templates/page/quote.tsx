import { getData } from "@jambaree/next-wordpress";
import { notFound } from "next/navigation";
import GravityForm from "../../components/form/GravityForm";
import PageHeader2 from "../../components/PageHeader2";

export default async function QuotePageTemplate({ uri }) {
  const { page } = await getData({ uri, query });
  if (!page) {
    notFound();
  }

  const {
    title,
    content,
    template: { form },
  } = page;

  return (
    <div>
      <PageHeader2 text={content} title={title} />
      <GravityForm formId={form?.formId} />
    </div>
  );
}

const query = `
  query PageQuery($uri: ID!) {
    page(id: $uri, idType: URI) {
      __typename
      id
      title
      uri
      slug
      content
      template {
        ... on Template_Quote {
          templateName
          form {
            fieldGroupName
            formId
          }
        }
      }
    }
  }`;
