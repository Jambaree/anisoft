import { WordpressTemplate } from "@nextwp/core";
import templates from "../../templates";

export default function PageTemplate(props: {
  params: { paths: string[] };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  return <WordpressTemplate params={props.params} templates={templates} />;
}

export { generateStaticParams, generateMetadata } from "@nextwp/core";
