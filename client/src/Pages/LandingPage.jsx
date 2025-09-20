import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import FallingLeaf from "../components/FallingLeaf";
import Preloader from "../components/Preloader";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Show loader for 3s
    return () => clearTimeout(timer);
  }, []);

  const leaves = Array.from({ length: 10 });

  if (loading) return <Preloader />;

  return (
    <div className="bg-[var(--light-bg)] font-sans relative overflow-hidden">
      {leaves.map((_, i) => (
        <FallingLeaf
          key={i}
          style={{
            "--random-left": Math.random(),
            "--random-delay": Math.random(),
          }}
        />
      ))}
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
