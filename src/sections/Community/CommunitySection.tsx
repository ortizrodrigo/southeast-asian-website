import "./CommunitySection.css";
import { Center, InlineLine } from "../../components";
function CommunitySection() {
  return (
    <section className="community-section">
      <Center width={"60%"}>
        <h2 className="community-section-title">Our Community</h2>
        <InlineLine />
        <p>Berkeley</p>
      </Center>
    </section>
  );
}

export default CommunitySection;
