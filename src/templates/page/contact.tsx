import type { WpPage } from "@nextwp/core";
import PageHeader2 from "@/components/PageHeader2";
import ContactQuickFacts from "@/components/ContactQuickFacts";
import Contact from "@/components/Contact";

export default function ContactPageTemplate({ data }: { data: WpPage }) {
  const {
    title: { rendered: title },
    content: { rendered: content },
    acf,
  } = data;

  return (
    <div>
      <PageHeader2 text={content} title={title} />
      <ContactQuickFacts quickData={acf.contact_quick_facts} />
      <Contact data={acf.map} />
    </div>
  );
}
