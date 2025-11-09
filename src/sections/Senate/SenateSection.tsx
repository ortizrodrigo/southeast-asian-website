import "./SenateSection.css";
import SenatorCard from "./SenatorCard";
import SenateLinks from "./SenateLinks";
import { sydneeThyInformation, abigailVerinoInformation } from "./data";
import { Center } from "../../components";

function SenateSection() {
  return (
    <section className="senate-section">
      <Center column>
        <h2 className="senate-section-title">Senate</h2>
        <SenatorCard {...sydneeThyInformation} />
        <SenatorCard {...abigailVerinoInformation} />
        <SenateLinks />
      </Center>
    </section>
  );
}

export default SenateSection;
