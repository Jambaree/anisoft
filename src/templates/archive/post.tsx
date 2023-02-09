import ServiceCards from "../../components/servicecards/ServiceCards";
import PageHeader from "../../components/blocks/PageHeader";
import data from "../../components/blocks/data.json";
export default async function DefaultPostArchiveTemplate({ uri }) {
  return (
    <>
      <PageHeader data={data.pageHeader} />
      <ServiceCards />
    </>
  );
}
