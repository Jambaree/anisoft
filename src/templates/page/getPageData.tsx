import { gql, request } from "graphql-request";

const queryDocumentByUri = gql`
  query PageQueryUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      id
    }
  }
`;

const queryDocumentById = gql`
  query PageQueryId($id: ID!) {
    page(id: $id, idType: ID) {
      __typename
      id
      title
      uri
      slug
    }
  }
`;

export default async function getPageData({ uri }: { uri: string }) {
  if (!process.env.NEXT_PUBLIC_WP_URL) {
    throw new Error("Missing WP_URL environment variable");
  }
  const uriRes = await request({
    url: process.env.NEXT_PUBLIC_WP_URL,
    variables: {
      uri,
    },
    document: queryDocumentByUri,
  });

  const idRes = await request({
    url: process.env.NEXT_PUBLIC_WP_URL,
    variables: {
      id: uriRes?.page?.id,
    },
    document: queryDocumentById,
  });

  const page = idRes?.page;
  return page;
}
