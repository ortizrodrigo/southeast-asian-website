import "./ResourcesSection.css";
import { SplitView, Center, ImageCard } from "../../components";
import { tegallalangRiceTerracesBaliPortrait } from "../../assets";
function ResourcesSection() {
  return (
    <section className="resources-section">
      <SplitView>
        <Center width={"60%"}>
          <ImageCard
            image={tegallalangRiceTerracesBaliPortrait}
            description="Tegallalang Rice Terraces in Bali, Indonesia"
          />
        </Center>
        <Center>
          <ImageCard
            image={tegallalangRiceTerracesBaliPortrait}
            description="Tegallalang Rice Terraces in Bali, Indonesia"
          />
        </Center>
      </SplitView>
    </section>
  );
}

export default ResourcesSection;
