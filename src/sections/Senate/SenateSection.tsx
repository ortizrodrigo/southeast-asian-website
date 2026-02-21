import "./SenateSection.css";
import SenatorCard from "./SenatorCard";
import SenateLinks from "./SenateLinks";
import {
  sydneeThyInformation,
  abigailVerinoSenatorInformation,
  abigailVerinoPresidentInformation,
} from "./data";
import { Center } from "../../components";
import { senateLinksSydneeThy, senateLinksAbigailVerino } from "./data";

function SenateSection() {
  return (
    <section id="senate" className="senate-section">
      <Center column>
        <h2 className="senate-section-title">ASUC Leadership</h2>
        <SenatorCard {...sydneeThyInformation} />
        <SenateLinks links={senateLinksSydneeThy} />
        <SenatorCard {...abigailVerinoPresidentInformation} />
        <SenateLinks links={senateLinksAbigailVerino} />
        <SenatorCard {...abigailVerinoSenatorInformation} />
      </Center>
    </section>
  );
}

export default SenateSection;
