import {
  getOptionsPage,
  type WpImage,
  type WpLink,
  type WpPage,
} from "@nextwp/core";
import FooterTopperCTA from "@/components/FooterTopperCTA";
import QuickFacts from "@/components/QuickFacts";
import { TextInfo } from "@/components/blocks/TextInfo";
import PageHeader from "@/components/PageHeader";
import Edges from "@/components/Edges";

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

export function DefaultPostTemplate({ data }: { data: PostData }) {
  return (
    <div>
      <PageHeader
        breadcrumbs={{
          basePath: "insights",
        }}
        title={data.title?.rendered}
      />

      <Edges className="mb-24" size="lg">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: data.content?.rendered || "" }}
        />
      </Edges>
    </div>
  );
}
