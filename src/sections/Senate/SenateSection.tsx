import "./SenateSection.css";
import SenatorCard from "./SenatorCard";
import SenateLinks from "./SenateLinks";
import { sydneeThyInformation, abigailVerinoSenatorInformation, abigailVerinoPresidentInformation } from "./data";
import { Center } from "../../components";

function SenateSection() {
  return (
    <section id="senate" className="senate-section">
      <Center column>
        <h2 className="senate-section-title">ASUC Leadership</h2>
        <SenatorCard {...sydneeThyInformation} />
        <SenateLinks />
        <SenatorCard {...abigailVerinoPresidentInformation} />
        <SenatorCard {...abigailVerinoSenatorInformation} />
      </Center>
    </section>
  );
}

export default SenateSection;
