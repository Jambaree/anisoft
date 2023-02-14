import Form from "./Form";
import Edges from "../Edges";
import { getData } from "@jambaree/next-wordpress";

type GravityFormProps = {
  formId: string;
};

export default async function GravityForm({ formId }: GravityFormProps) {
  const form = await getData({ uri: "", query, variables: { formId } });
  return (
    <div className="my-[65px]">
      <Edges size="md">
        <div className="max-w-[620px] mx-auto">
          <Form form={form?.gfForm} />
        </div>
      </Edges>
    </div>
  );
}

const query = `query getForm($formId: ID!) {
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
