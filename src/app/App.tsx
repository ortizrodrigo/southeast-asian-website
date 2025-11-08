import "./App.css";
import { Hero } from "../components";
import { tegallalangRiceTerracesBaliOld } from "../assets";

function App() {
  return (
    <>
      <Hero
        title="Southeast Asian Community"
        subtitle="at Cal"
        backgroundImage={tegallalangRiceTerracesBaliOld}
      ></Hero>
    </>
  );
}

export default App;
