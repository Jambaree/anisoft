import { WordpressTemplate } from "@nextwp/core";
import templates from "../../templates";

// Revalidate all pages every 60 seconds (ISR)
export const revalidate = 60;

export default function PageTemplate(props: {
  params: { paths: string[] };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  return <WordpressTemplate params={props.params} templates={templates} />;
}

export { generateStaticParams, generateMetadata } from "@nextwp/core";
