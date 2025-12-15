export default function Testimonials() {
  return (
    <section className="section reveal testimonial-section">
      <div className="split">

        {/* LEFT TEXT */}
        <div className="split-text">
          <h2>
            What Clients <span className="accent">Say</span>
          </h2>

          <p className="testimonial-quote">
            “Working with Sammunat Growth brought much-needed clarity to our growth efforts.
            They took the time to understand our product and users, then translated
            insights into practical improvements we could execute quickly.”
          </p>

          <div className="testimonial-author">
            <strong>Head of Growth</strong>
            <span>B2B SaaS Company</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="testimonial-image">
          <div className="blob-bg testimonial-blob">
            <img src="/testimonial.png" alt="Client testimonial" />
          </div>
        </div>

      </div>
    </section>
  );
}
