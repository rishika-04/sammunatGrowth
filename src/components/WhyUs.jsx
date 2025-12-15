export default function WhyUs() {
  return (
    <section id="why-us" className="section reveal">
      <div className="why-container">

        {/* LEFT IMAGE */}
        <div className="why-image">
  <div className="why-blob">
    <img src="/why-us.png" alt="Why choose us" />
  </div>
</div>


        {/* RIGHT CONTENT */}
        <div className="why-content">
          <h2>
            Why Businesses Choose <span className="accent">Us</span>
          </h2>

          <p className="why-desc">
            We partner with growing businesses to deliver thoughtful,
            data-driven digital solutions that create real, measurable impact —
            not just good-looking work.
          </p>

          <div className="why-features">
            <div className="why-card">
              <div className="why-icon">📊</div>
              <div>
                <h4>Strategy-First Execution</h4>
                <p>Every decision is guided by clear business goals.</p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">📈</div>
              <div>
                <h4>Measurable ROI</h4>
                <p>Outcomes you can track, measure, and scale.</p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">⚙️</div>
              <div>
                <h4>Scalable Solutions</h4>
                <p>Built to grow with your business, not block it.</p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">🤝</div>
              <div>
                <h4>Transparent Collaboration</h4>
                <p>Clear communication at every stage of execution.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
