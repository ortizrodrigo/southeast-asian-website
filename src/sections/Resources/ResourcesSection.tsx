import "./ResourcesSection.css";
import { SplitView, Center, ImageCard, ExternalLink, List } from "../../components";
import { tegallalangRiceTerracesBaliPortrait } from "../../assets";
import {
  courses,
  coursesUrl,
  scholarships,
  scholarshipsUrl,
  museumAndCulturalCenters,
} from "./data";
function ResourcesSection() {
  return (
    <section id="resources" className="resources-section">
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
        <Center gap={16} padding={16} column>
          <Center column>
            <h3 className="resources-section-header">
              <ExternalLink href={coursesUrl} underline bold>
                Courses Offered At Berkeley
              </ExternalLink>
            </h3>
            <List entries={courses} center />
          </Center>
          <Center column>
            <h3 className="resources-section-header">
              <ExternalLink href={scholarshipsUrl} underline bold>
                Scholarships
              </ExternalLink>
            </h3>
            <List entries={scholarships} center />
          </Center>
          <Center column>
            <h3 className="resources-section-header">Museum and Cultural Centers</h3>
            <List entries={museumAndCulturalCenters} center />
          </Center>
        </Center>
      </SplitView>
    </section>
  );
}

export default ResourcesSection;
