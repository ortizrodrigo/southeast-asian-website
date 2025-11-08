import "./ResourcesSection.css";
import { SplitView, Center, ImageCard, Link } from "../../components";
import { tegallalangRiceTerracesBaliPortrait } from "../../assets";
function ResourcesSection() {
  return (
    <section className="resources-section">
      <Center>
        <h2 className="resources-section-title">Resources</h2>
      </Center>
      <SplitView>
        <Center width={"60%"}>
          <ImageCard
            image={tegallalangRiceTerracesBaliPortrait}
            description="Tegallalang Rice Terraces in Bali, Indonesia"
          />
        </Center>
        <Center width={"60%"}>
          <h3 className="resources-section-header">
            <Link
              href="https://docs.google.com/spreadsheets/d/1CqSYPL2n4ygXc4MLq1Ow9EoF7TIW35804HzYpsbfgU8/edit?gid=0#gid=0"
              underline
              bold
            >
              Courses Offered At Berkeley
            </Link>
          </h3>

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
