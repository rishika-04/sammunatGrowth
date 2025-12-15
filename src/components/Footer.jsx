export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col">
          <h3 className="footer-logo">Sammunat Growth</h3>
          <p className="footer-desc">
            We help ambitious teams unlock sustainable growth through
            clarity, strategy, and execution.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/icons/twitter.svg" alt="Twitter" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Get Started */}
        <div className="footer-col">
          <h4>Get Started</h4>
          <ul>
            <li><a href="#audit">Book Free Audit</a></li>
            <li><a href="#contact">Talk to an Expert</a></li>
            <li><a href="#case-studies">How We Work</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#services">What We Do</a></li>
            <li><a href="#growth-stories">Growth Stories</a></li>
            <li><a href="#why-us">Why Sammunat</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li>
              <a href="mailto:hello@sammunatgrowth.com">
                hello@sammunatgrowth.com
              </a>
            </li>
            <li><a href="#contact">Contact Form</a></li>
            <li><a href="#callback">Request Callback</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Sammunat Growth. All rights reserved.
      </div>
    </footer>
  );
}

