// import QuickFacts from "../../components/QuickFacts";
import Testimonials from "../../components/Testimonials";
import ServiceCards from "../../components/servicecards/ServiceCards";
import PageHeader from "../../components/blocks/PageHeader";
import data from "../../components/blocks/data.json";

export default function DefaultPostTemplate({ uri }) {
  return (
    <div>
      <PageHeader data={data.pageHeader} />
      <ServiceCards />
      <Testimonials />
    </div>
  );
}
