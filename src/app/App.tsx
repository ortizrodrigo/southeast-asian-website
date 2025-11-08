import "./App.css";
import { Hero } from "../components";
import { tegallalangRiceTerracesBaliLandscape } from "../assets";
import { AboutSection, CommunitySection, ResourcesSection, SenateSection } from "../sections";

function App() {
  return (
    <>
      <Hero
        title="Southeast Asian Community"
        subtitle="at Cal"
        backgroundImage={tegallalangRiceTerracesBaliLandscape}
      />
      <AboutSection />
      <CommunitySection />
      <ResourcesSection />
      <SenateSection />
    </>
  );
}

export default App;
