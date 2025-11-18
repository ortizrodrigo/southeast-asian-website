import "./SenateSection.css";
import SenatorCard from "./SenatorCard";
import SenateLinks from "./SenateLinks";
import { sydneeThyInformation, abigailVerinoInformation } from "./data";
import { Center } from "../../components";

function SenateSection() {
  return (
    <section id="senate" className="senate-section">
      <Center column>
        <h2 className="senate-section-title">Senate</h2>
        <SenatorCard {...sydneeThyInformation} />
        <SenateLinks />
        <SenatorCard {...abigailVerinoInformation} />
      </Center>
    </section>
  );
}

export default SenateSection;
