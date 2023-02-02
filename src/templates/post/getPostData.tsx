import { gql, request } from "graphql-request";

const queryDocumentByUri = gql`
  query PostQueryUri($uri: ID!) {
    post(id: $uri, idType: URI) {
      id
    }
  }
`;

const queryDocumentById = gql`
  query PostQueryId($id: ID!) {
    post(id: $id, idType: ID) {
      __typename
      id
      title
      uri
      slug
    }
  }
`;

export default async function getPostData({
  uri,
}: {
  uri: string;
  asPreview?: boolean;
  jwtAuthToken?: string;
}) {
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
      id: uriRes?.post?.id,
    },
    document: queryDocumentById,
  });

  const post = idRes?.post;
  return post;
}
