import "./Hero.css";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImage})`,
      }}
    >
      <div className="hero-nav">
        <button className="hero-nav-button" onClick={() => scrollTo("about")}>
          About
        </button>
        <button className="hero-nav-button" onClick={() => scrollTo("community")}>
          Community
        </button>
        <button className="hero-nav-button" onClick={() => scrollTo("resources")}>
          Resources
        </button>
        <button className="hero-nav-button" onClick={() => scrollTo("senate")}>
          ASUC Leadership
        </button>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
        <div className="hero-arrow">↓</div>
      </div>
    </section>
  );
}

export default Hero;
