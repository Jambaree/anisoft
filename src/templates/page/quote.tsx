import type { WpPage } from "@nextwp/core";
import GravityForm from "../../components/form/GravityForm";
import PageHeader2 from "../../components/PageHeader2";

export default function QuotePageTemplate({ data }: { data: WpPage }) {
  const { title, content, acf } = data;

  return (
    <div>
      <PageHeader2 text={content?.rendered} title={title?.rendered} />
      <div className="my-[65px]">
        <GravityForm formId={acf?.form?.form_id} />
      </div>
    </div>
  );
}
