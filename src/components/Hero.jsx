export default function Hero() {
  return (
    <section id="home" className="hero reveal">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="line">Accelerate Business</span>
            <span className="line highlight big">Growth</span>
            <span className="line">With Data-Driven Digital Solutions</span>
          </h1>

          <p>
            We help businesses scale faster through strategy, technology,
            and measurable digital execution.
          </p>

          <div className="hero-buttons">
            <a href="#audit" className="btn-primary">
              Get a Free Consultation
            </a>

            <a href="#services" className="btn-outline">
              View Services
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/hero-dashboard.png"
            alt="Business growth dashboard"
          />
        </div>
      </div>
    </section>
  );
}
