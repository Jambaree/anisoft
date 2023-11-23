// import { getData } from "@jambaree/next-wordpress";
// import Edges from "../Edges";
// import Form from "./Form";

type GravityFormProps = {
  formId: string;
};

const GravityForm: React.FC<GravityFormProps> = async ({
  formId,
}: GravityFormProps) => {
  // const req =
  //   await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/gf/v2/forms/${formId}
  // `);
  // const form = await req.json();
  const form = { formId, message: "form not yet added" };

  return (
    <div>
      <pre>
        <code>{JSON.stringify({ form }, null, 2)}</code>
      </pre>
    </div>
  );

  // return (
  //   <div className="my-[65px]">
  //     <Edges size="md">
  //       <div className="max-w-[620px] mx-auto">
  //         <Form form={form?.gfForm} />
  //       </div>
  //     </Edges>
  //   </div>
  // );
};
export default GravityForm;

// const query = /* GraphQL */ `
//   query getForm($formId: ID!) {
//     gfForm(id: $formId, idType: DATABASE_ID) {
//       id
//       databaseId
//       title
//       formFields {
//         nodes {
//           id
//           type
//           displayOnly
//           visibility
//           ... on TextField {
//             label
//             isRequired
//             size
//           }
//           ... on EmailField {
//             label
//             isRequired
//             size
//           }
//           ... on TextAreaField {
//             label
//             isRequired
//             size
//           }
//           ... on PhoneField {
//             label
//             isRequired
//             size
//           }
//           ... on RadioField {
//             id
//             choices {
//               value
//               text
//               isSelected
//               isOtherChoice
//             }
//             label
//             type
//             value
//             visibility
//           }
//           ... on FileUploadField {
//             id
//             label
//             type
//             value
//             isRequired
//             visibility
//             fileUploadValues {
//               url
//               filename
//               baseUrl
//               basePath
//             }
//           }
//         }
//       }
//       formId
//       description
//     }
//   }
// `;
