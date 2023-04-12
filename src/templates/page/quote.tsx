import { getData } from "@jambaree/next-wordpress";
import { notFound } from "next/navigation";
import GravityForm from "../../components/form/GravityForm";
import PageHeader2 from "../../components/PageHeader2";

export default async function QuotePageTemplate({
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

const query = /* GraphQL */ `
  query PageQuery($id: ID!, $idType: PageIdType) {
    page(id: $id, idType: $idType) {
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
  }
`;
