export default function FreeGrowthAudit() {
  const stayOnPage = (e) => {
    e.preventDefault(); // prevents navigation
  };

  return (
    <section id="audit" className="section reveal audit-section">
      <div className="split">

        {/* LEFT CONTENT */}
        <div className="split-text">
          <h2>
            Get a <span className="accent">Free Growth Audit</span>
          </h2>

          <p>
            We review your website, product, and growth strategy to uncover
            missed opportunities and clear next steps — no fluff, no obligation.
          </p>

          <div className="audit-box-list">
            <div className="audit-box">
              <span>📊</span>
              <p>Website & funnel performance review</p>
            </div>

            <div className="audit-box">
              <span>🎯</span>
              <p>Growth bottleneck identification</p>
            </div>

            <div className="audit-box">
              <span>📈</span>
              <p>Actionable improvement recommendations</p>
            </div>

            <div className="audit-box">
              <span>🧭</span>
              <p>Clear, prioritized next steps</p>
            </div>
          </div>

          {/* Button stays on same page */}
          <a
            href="#"
            onClick={stayOnPage}
            className="btn-primary no-underline"
          >
            Book Free Audit
          </a>

          <small className="audit-note">
            Limited slots available each month
          </small>
        </div>

        {/* RIGHT VISUAL */}
        <div className="split-image">
          <div className="audit-card">
            <h4>What You’ll Receive</h4>

            <div className="audit-stats">
              <div className="audit-stat">
                <strong className="nowrap">30–45 min</strong>
                <p>Strategy Review</p>
              </div>

              <div className="audit-stat">
                <strong>100%</strong>
                <p>Tailored Insights</p>
              </div>

              <div className="audit-stat">
                <strong>₹0</strong>
                <p>No Cost</p>
              </div>
            </div>

            <p className="audit-card-text">
              Practical insights you can act on immediately — whether or not
              you work with us.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
