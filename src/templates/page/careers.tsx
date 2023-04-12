import { getData } from "@jambaree/next-wordpress";
import { notFound } from "next/navigation";
import PageHeader2 from "../../components/PageHeader2";
import GravityForm from "../../components/form/GravityForm";

export default async function CareersPagetemplate({
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
      template: { form },
    },
  } = data;

  return (
    <div>
      <PageHeader2 text={content} title={title} />
      <GravityForm formId={form?.formId} />
    </div>
  );
}

const query = /* GraphQL */ `
  query CareerPageQuery($id: ID!, $idType: PageIdType) {
    page(id: $id, idType: $idType) {
      __typename
      id
      title
      uri
      slug
      content
      template {
        ... on Template_Careers {
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
