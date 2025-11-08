import "./CommunitySection.css";
import { Center, InlineLine, SplitView } from "../../components";
function CommunitySection() {
  return (
    <section className="community-section">
      <Center width={"60%"}>
        <h2 className="community-section-title">Our Community</h2>
        <InlineLine />
        <p>Berkeley</p>
      </Center>
      <SplitView>
        <SplitView direction="column">
          <h3 className="community-section-menu-header">Authors and Publications</h3>
          <h3 className="community-section-menu-header">Student Organizations</h3>
        </SplitView>
        <SplitView direction="column">
          <h3 className="community-section-menu-header">Locations</h3>
          <h3 className="community-section-menu-header">Restaurants We Recommend</h3>
        </SplitView>
      </SplitView>
    </section>
  );
}

export default CommunitySection;
