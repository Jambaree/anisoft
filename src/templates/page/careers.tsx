import { getData } from '@jambaree/next-wordpress';
import { notFound } from 'next/navigation';
import PageHeader2 from '../../components/PageHeader2';
import GravityForm from '../../components/form/GravityForm';

export default async function CareersPagetemplate({ uri }) {
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
			<PageHeader2
				text={content}
				title={title}
			/>
			<GravityForm formId={form?.formId} />
		</div>
	);
}

const query = `
  query CareerPageQuery($uri: ID!) {
    page(id: $uri, idType: URI) {
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
  }`;
