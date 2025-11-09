import "./SenateSection.css";
import SenatorHeader from "./SenatorHeader";
import { Center, SplitView, List, ImageCard } from "../../components";

export interface SenatorCardProps {
  name: string;
  logo: string;
  picture: string;
  startYear: number;
  endYear: number;
  description: string[];
}

function SenatorCard({ name, logo, picture, startYear, endYear, description }: SenatorCardProps) {
  return (
    <Center column>
      <SenatorHeader logo={logo} startYear={startYear} endYear={endYear} />
      <SplitView>
        <Center width={"80%"}>
          <h3>{name}</h3>
          <List entries={description} center />
        </Center>
        <Center width={"40%"}>
          <ImageCard image={picture} description={name} preserveAspectRatio />
        </Center>
      </SplitView>
    </Center>
  );
}

export default SenatorCard;
