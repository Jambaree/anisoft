import {
  WordpressTemplate,
  getSeedData,
  getYoastData,
} from "@jambaree/next-wordpress";
import type { Metadata } from "next";
import templates from "../../templates";

export default async function PageTemplate(props: {
  params: { paths: string[] };
}) {
  const {
    params: { paths },
  } = props;

  return (
    <>
      {/* THIS IS BEING USED - current issue with app directory*/}
      {/* @ts-expect-error Server Component */}
      <WordpressTemplate paths={paths} templates={templates} />{" "}
    </>
  );
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const uri = params?.paths?.join?.("/") || "/";
  const seedData = await getSeedData({ uri });

  // const uri = paths?.join?.("/") || "/";
  // const seedData = await getSeedData({ uri });

  const yoastData = await getYoastData({
    uri,
    name: seedData?.name || seedData?.contentTypeName || "page",
  });

  return {
    title: yoastData?.seo?.title,
    description: yoastData?.seo?.metaDesc,
    openGraph: {
      title: yoastData?.seo?.opengraphTitle,
      description: yoastData?.seo?.opengraphDescription,
      url: yoastData?.seo?.opengraph?.url,
      siteName: yoastData?.seo?.opengraphDescription,
      // images: [
      //   {
      //     url: 'https://nextjs.org/og.png',
      //     width: 800,
      //     height: 600,
      //   },
      //   {
      //     url: 'https://nextjs.org/og-alt.png',
      //     width: 1800,
      //     height: 1600,
      //     alt: 'My custom alt',
      //   },
      // ],
      locale: "en-US",
      type: "website",
    },
  };
}
