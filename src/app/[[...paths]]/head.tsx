import { YoastSEO, getYoastData, getSeedData } from "@jambaree/next-wordpress";

export default async function Head(props: { params: { paths: string[] } }) {
  const {
    params: { paths },
  } = props;

  const uri = paths?.join?.("/") || "/";
  const seedData = await getSeedData({ uri });

  const yoastData = await getYoastData({
    uri,
    name: seedData?.name || seedData?.contentTypeName || "page",
  });

  return (
    <head>
      <YoastSEO ogUrl={uri} seo={yoastData?.seo} />
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
        rel="stylesheet"
      />
    </head>
  );
}
