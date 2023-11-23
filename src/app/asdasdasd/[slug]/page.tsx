import { getSingleItem, getOptionsPage } from "@jambaree/next-wordpress";
import FooterTopperCTA from "@/components/FooterTopperCTA";
import QuickFacts from "@/components/QuickFacts";
import TextInfo from "@/components/blocks/TextInfo";
import PageHeader from "@/components/PageHeader";

export default async function DefaultPostTemplate({ params: { slug } }) {
  const data = await getSingleItem({
    slug,
    postTypeRestBase: "posts",
  });

  const themeOptions = await getOptionsPage({
    slug: "theme-options",
  });

  return (
    <div>
      <PageHeader
        content={data?.content?.rendered}
        title={data?.title?.rendered}
      />

      {data?.acf?.facts ? (
        <QuickFacts
          facts={data?.acf?.facts}
          text1={data?.acf?.text1}
          text2={data?.acf?.text2}
        />
      ) : null}

      <TextInfo
        backgroundGradient={data?.acf?.background_gradient}
        button1={data?.acf?.button1}
        button2={data?.acf?.button2}
        headline={data?.acf?.headline}
        image={data?.acf?.image}
        tag={data?.acf?.tag}
        text={data?.acf?.text}
      />

      <FooterTopperCTA data={themeOptions.footer_topper_cta} />
    </div>
  );
}
