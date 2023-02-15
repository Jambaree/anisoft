import {
  WordpressTemplate,
  generateMetadata,
  generateStaticParams,
} from "@jambaree/next-wordpress";

import templates from "../../templates";

export default async function PageTemplate(props: {
  params: { paths: string[] };
}) {
  const {
    params: { paths },
  } = props;

  return (
    <>
      {/* current issue with app directory*/}
      {/* @ts-expect-error Server Component */}
      <WordpressTemplate paths={paths} templates={templates} />{" "}
    </>
  );
}

export { generateMetadata, generateStaticParams };
