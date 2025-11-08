import "./CommunitySection.css";
import { Center, InlineLine, SplitView, AlignTopLeft } from "../../components";
import { authors, locations, restaurants, studentOrganizations } from "./data";
import MenuSection from "./MenuSection";
import SimpleMenuSection from "./SimpleMenuSection";

function CommunitySection() {
  return (
    <section className="community-section">
      <Center width={"80%"}>
        <h2 className="community-section-title">Our Community</h2>
        <InlineLine />
        <p className="community-section-location">Berkeley</p>
      </Center>
      <SplitView gap="16px" width={"80%"} alignItems="flex-start">
        <AlignTopLeft>
          <MenuSection title="Authors and Publications" entries={authors} />
          <SimpleMenuSection title="Student Organizations" entries={studentOrganizations} />
        </AlignTopLeft>
        <AlignTopLeft>
          <MenuSection title="Locations" entries={locations} />
          <MenuSection title="Restaurants We Recommend" entries={restaurants} />
        </AlignTopLeft>
      </SplitView>
    </section>
  );
}

export default CommunitySection;
