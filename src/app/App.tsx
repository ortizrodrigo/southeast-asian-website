import "./App.css";
import { Hero } from "../components";
import { tegallalangRiceTerracesBaliLandscape } from "../assets";
import { AboutSection } from "../sections";

function App() {
  return (
    <>
      <Hero
        title="Southeast Asian Community"
        subtitle="at Cal"
        backgroundImage={tegallalangRiceTerracesBaliLandscape}
      />
      <AboutSection />
    </>
  );
}

export default App;
