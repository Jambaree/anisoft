import {
  getOptionsPage,
  type WpImage,
  type WpLink,
  type WpPage,
} from "@jambaree/next-wordpress";
import FooterTopperCTA from "@/components/FooterTopperCTA";
import QuickFacts from "@/components/QuickFacts";
import { TextInfo } from "@/components/blocks/TextInfo";
import PageHeader from "@/components/PageHeader";

interface PostData extends WpPage {
  acf?: {
    facts?: {
      title?: string;
      description?: string;
      icon?: WpImage;
    }[];
    text1?: string;
    text2?: string;
    background_gradient?: boolean;
    button1?: WpLink;
    button2?: WpLink;
    headline?: string;
    image?: WpImage;
    tag?: string;
    text?: string;
  };
}

export default async function DefaultPostTemplate({
  data,
}: {
  data: PostData;
}) {
  const themeOptions = (await getOptionsPage({
    slug: "theme-options",
  })) as {
    footer_topper_cta?: {
      text?: string;
      button_text?: string;
      button_link?: string;
    };
  };

  return (
    <div>
      <PageHeader
        content={data.content?.rendered}
        title={data.title?.rendered}
      />

      {data.acf?.facts ? (
        <QuickFacts
          facts={data.acf.facts}
          text1={data.acf.text1}
          text2={data.acf.text2}
        />
      ) : null}

      <TextInfo
        backgroundGradient={data.acf?.background_gradient}
        button1={data.acf?.button1}
        button2={data.acf?.button2}
        headline={data.acf?.headline}
        image={data.acf?.image}
        tag={data.acf?.tag}
        text={data.acf?.text}
      />

      <FooterTopperCTA data={themeOptions.footer_topper_cta} />
    </div>
  );
}
