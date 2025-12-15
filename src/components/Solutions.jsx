export default function Solutions() {
  const solutions = [
    {
      title: "Product & Web Engineering",
      desc: "We build fast, reliable platforms that scale as your business grows.",
      img: "/solutions/web-engineering.png"
    },
    {
      title: "UI / UX & Brand Experience",
      desc: "Conversion-focused UI/UX and branding that builds trust and drives action.",
      img: "/solutions/ui-ux.png"
    },
    {
      title: "Growth Marketing & SEO",
      desc: "Data-driven marketing and SEO strategies to attract, convert, and retain users.",
      img: "/solutions/growth-marketing.png"
    },
    {
      title: "Analytics & Automation",
      desc: "Analytics and automation systems that turn data into actionable growth insights.",
      img: "/solutions/analytics.png"
    }
  ];

  return (
    <section id="services" className="section light reveal">
      <div className="section-container">
        <h2>
          Our{" "}
          <span className="highlight">Services</span>
        </h2>

        <div className="card-grid">
          {solutions.map((item, i) => (
            <div className="card hover-card solution-card" key={i}>
              <img
                src={item.img}
                alt={item.title}
                className="solution-image"
              />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
