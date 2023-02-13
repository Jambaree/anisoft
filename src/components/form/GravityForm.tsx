"use client";
import { use } from "react";
import { gql, request } from "graphql-request";
import Form from "./Form";

type GravityFormProps = {
  formId: string;
};

export default function GravityForm({ formId }: GravityFormProps) {
  const form = use(getForm({ formId }));

  return <Form form={form} />;
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
          }
          ... on EmailField {
            label
            isRequired
          }
          ... on TextAreaField {
            label
            isRequired
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
    throw new Error("Missing NEXT_PUBLIC_WP_URL environment variable");
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
