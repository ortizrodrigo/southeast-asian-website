import "./SenateSection.css";
import SenatorCard from "./SenatorCard";
import { sydneeThyInformation, abigailVerinoInformation } from "./data";
import { Center } from "../../components";

function SenateSection() {
  return (
    <section className="senate-section">
      <Center>
        <SenatorCard {...sydneeThyInformation} />
        <SenatorCard {...abigailVerinoInformation} />
      </Center>
    </section>
  );
}

export default SenateSection;
