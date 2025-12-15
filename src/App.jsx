import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import WhyUs from "./components/WhyUs";
import DriveGrowth from "./components/DriveGrowth";

import Testimonials from "./components/Testimonials";
import FreeGrowthAudit from "./components/FreeGrowthAudit";

import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <WhyUs />
      <DriveGrowth />
      <Testimonials />
      <FreeGrowthAudit />

      <Footer />
    </>
  );
}
