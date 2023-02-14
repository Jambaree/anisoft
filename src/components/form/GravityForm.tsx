'use client';
import { use } from 'react';
import { gql, request } from 'graphql-request';
import Form from './Form';
import Edges from '../Edges';

type GravityFormProps = {
	formId: string;
};

export default function GravityForm({ formId }: GravityFormProps) {
	const form = use(getForm({ formId }));

	return (
		<div className='my-[65px]'>
			<Edges size='md'>
				<div className='max-w-[620px] mx-auto'>
				<Form form={form} />
				</div>
			</Edges>
		</div>
	);
}

const formQueryDocument = gql`
	query getForm($formId: ID!) {
		gfForm(id: $formId, idType: DATABASE_ID) {
			id
			databaseId
			title
			formFields {
				nodes {
					id
					type
					displayOnly
					visibility
					... on TextField {
						label
						isRequired
						size
					}
					... on EmailField {
						label
						isRequired
						size
					}
					... on TextAreaField {
						label
						isRequired
						size
					}
					... on PhoneField {
						label
						isRequired
						size
					}
					... on RadioField {
						id
						choices {
							value
							text
							isSelected
							isOtherChoice
						}
						label
						type
						value
						visibility
					}
					... on FileUploadField {
						id
						label
						type
						value
						isRequired
						visibility
						fileUploadValues {
							url
							filename
							baseUrl
							basePath
						}
					}
				}
			}
			formId
			description
		}
	}
`;

async function getForm({ formId }: { formId: string }) {
	if (!process.env.NEXT_PUBLIC_WP_URL) {
		throw new Error('Missing NEXT_PUBLIC_WP_URL environment variable');
	}

	const res = await request({
		url: process.env.NEXT_PUBLIC_WP_URL,
		variables: {
			formId,
		},
		document: formQueryDocument,
	});

	return res?.gfForm;
}
