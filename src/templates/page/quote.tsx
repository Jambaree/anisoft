import React from "react";
import { getData } from "@jambaree/next-wordpress";
import { notFound } from "next/navigation";
import PageHeader2 from "../../components/PageHeader2";

export default async function QuotePageTemplate({ uri }) {
  const { page } = await getData({ uri, query });
  if (!page) {
    notFound();
  }

  const { title, content } = page;
  return (
    <div>
      {" "}
      <PageHeader2 text={content} title={title} />
    </div>
  );
}

const query = `
  query QuotePageQuery($uri: ID!) {
    page(id: $uri, idType: URI) {
      __typename
      id
      title
      uri
      slug
      content
    }
  }`;
