import { type WpPage } from "@jambaree/next-wordpress/types";
import { FlexibleContent, getOptionsPage } from "@jambaree/next-wordpress";
// import { DataDiff } from "@/components/data-diff";
import { deepCamelCase } from "@/utils/deep-camel-case-helper";
import FooterTopperCTA from "../../components/FooterTopperCTA";
import * as blocks from "../../components/blocks";

export default async function DefaultPageTemplate({
  uri,
  data,
}: {
  uri: string;
  data: WpPage;
}) {
  const modifiedData: any = deepCamelCase(data);

  const {
    title,
    acf: { modules, has_footer_cta },
  } = modifiedData;

  const themeOptions = deepCamelCase(
    await getOptionsPage({
      slug: "theme-options",
    })
  );

  return (
    <>
      {/* <DataDiff data1={data} data2={modifiedData} /> */}
      <div>
        <FlexibleContent blocks={blocks} data={{ title, uri }} rows={modules} />
        {has_footer_cta ? (
          <FooterTopperCTA data={themeOptions.footerTopperCta} />
        ) : null}
      </div>
    </>
  );
}
