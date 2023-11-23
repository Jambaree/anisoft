import type { WpPage } from "@jambaree/next-wordpress/types";
import GravityForm from "../../components/form/GravityForm";
import PageHeader2 from "../../components/PageHeader2";

export default function QuotePageTemplate({ data }: { data: WpPage }) {
  const {
    title: { rendered: title },
    content: { rendered: content },
    acf,
  } = data;

  return (
    <div>
      <PageHeader2 text={content} title={title} />
      <GravityForm formId={acf?.form?.form_id} />
    </div>
  );
}
