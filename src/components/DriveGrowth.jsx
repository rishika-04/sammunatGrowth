export default function DriveGrowth() {
  return (
    <section id="growth-steps" className="section light reveal">
        
      <div className="section-container">
        <h2 className="center-heading">
  How We Drive <span className="accent">Growth</span>
</h2>


        <p className="section-subtext">
          A simple, proven process focused on clarity, execution, and measurable
          improvement — not guesswork.
        </p>

        <div className="card-grid">
          {[
            {
              step: "01",
              title: "Audit",
              desc: "We review your product, website, and existing growth efforts to understand what’s working and what’s not.",
              img: "/steps/audit.png",
            },
            {
              step: "02",
              title: "Diagnose",
              desc: "We identify bottlenecks, missed opportunities, and friction points holding your growth back.",
              img: "/steps/diagnose.png",
            },
            {
              step: "03",
              title: "Improve",
              desc: "We refine design, performance, and messaging to improve conversions and engagement.",
              img: "/steps/improve.png",
            },
            {
              step: "04",
              title: "Scale",
              desc: "Once the foundation is strong, we help you scale acquisition and systems sustainably.",
              img: "/steps/scale.png",
            },
          ].map((item, i) => (
            <div className="card hover-card case-card" key={i}>
              
              {/* Image space */}
              <div className="case-image">
                <img src={item.img} alt={item.title} />
              </div>

              <span className="case-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
