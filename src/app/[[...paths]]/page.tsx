import { WordpressTemplate } from "@jambaree/next-wordpress";
import templates from "../../templates";

export default function PageTemplate(props: {
  params: { paths: string[] };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  return (
    <WordpressTemplate
      params={props.params}
      searchParams={props.searchParams}
      templates={templates}
    />
  );
}

export {
  generateStaticParams,
  generateMetadata,
} from "@jambaree/next-wordpress";
