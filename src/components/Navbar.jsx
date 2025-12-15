export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">
  Sammunat <span className="accent">Growth</span>
</h2>

        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#growth-steps">Growth Journey</a></li>
          
        </ul>

        <div className="nav-actions">
          <a href="#footer" className="btn-outline">Get in Touch</a>
          <a href="#audit" className="btn-primary">Book Free Audit</a>
        </div>
      </div>
    </nav>
  );
}
