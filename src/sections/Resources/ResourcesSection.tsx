import "./ResourcesSection.css";
import { SplitView, Center, ImageCard, Link, List } from "../../components";
import { tegallalangRiceTerracesBaliPortrait } from "../../assets";
import { courses, coursesUrl, scholarshipsUrl } from "./data";
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
        <Center gap={16} padding={16} column>
          <Center column>
            <h3 className="resources-section-header">
              <Link href={coursesUrl} underline bold>
                Courses Offered At Berkeley
              </Link>
            </h3>
            <List entries={courses} center />
          </Center>
          <Center>
            <h3 className="resources-section-header">
              <Link href={scholarshipsUrl} underline bold>
                Scholarships
              </Link>
            </h3>
          </Center>
          <Center>
            <h3 className="resources-section-header">Museum and Cultural Centers</h3>
          </Center>
        </Center>
      </SplitView>
    </section>
  );
}

export default ResourcesSection;
