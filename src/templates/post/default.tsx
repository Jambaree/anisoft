import QuickFacts from "../../components/QuickFacts";
import ContactQuickFacts from "../../components/ContactQuickFacts";
import StatsModule from "../../components/StatsModule";
export default function DefaultPostTemplate({ uri }) {
  return (
    <div>
      <StatsModule />
      <ContactQuickFacts />
      <QuickFacts />
    </div>
  );
}
