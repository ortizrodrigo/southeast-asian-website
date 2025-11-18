import "./AboutSection.css";
import {
  sohotonCoveBucasGrandePhilippines,
  lotusFlower,
  theEmpireBruneiJerudongOld,
  theEmpireBruneiJerudongNight,
} from "../../assets";
import { Gallery, SplitView, Center } from "../../components";

function AboutSection() {
  const galleryItems = [
    { image: sohotonCoveBucasGrandePhilippines, description: "Sohoton Cove" },
    { image: lotusFlower, description: "Lotus Flower" },
    { image: theEmpireBruneiJerudongOld, description: "The Empire Brunei (Sunset)" },
    { image: theEmpireBruneiJerudongNight, description: "The Empire Brunei (Night)" },
  ];

  return (
    <section id="about" className="about-section">
      <SplitView gap="16px" padding="16px">
        <Center width="80%">
          <SplitView column>
            <h2 className="about-section-title">About Us</h2>
            <p className="about-section-text">
              Berkeley is home to students from various backgrounds, especially within the Southeast
              Asian diaspora. Through the initiatives of the Office of (former) ASUC Senator Abigail
              Verino and the Office of ASUC Senator Sydnee Thy, this website was created to share
              information about and resources for the Southeast Asian student community at Cal.
            </p>
          </SplitView>
        </Center>
        <Gallery items={galleryItems} columns={2} />
      </SplitView>
    </section>
  );
}

export default AboutSection;
