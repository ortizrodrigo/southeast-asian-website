import "./Hero.css";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div>
        <h1 className="hero-title">{title}</h1>
        {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
        <div className="hero-arrow">↓</div>
      </div>
    </section>
  );
}

export default Hero;
