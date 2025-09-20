import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import FallingLeaf from "../components/FallingLeaf";
import Preloader from "../components/Preloader";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ patients: 0, doctors: 0, blogs: 0 });

  useEffect(() => {
    // Preloader timeout
    const timer = setTimeout(() => setLoading(false), 3000);

    // Fetch backend stats
    axios
      .get("http://localhost:5000/api/patient/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Error fetching stats:", err));

    return () => clearTimeout(timer);
  }, []);

  const leaves = Array.from({ length: 10 });

  if (loading) return <Preloader />;

  return (
    <div className="bg-[var(--light-bg)] font-sans relative overflow-hidden">
      {/* Falling leaves animation */}
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

      <main className="text-center p-6">
        <HeroSection />

        {/* Live stats from backend */}
        <section className="my-10">
          <h2 className="text-2xl font-bold mb-4">Our Community</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-lg font-semibold">Patients</h3>
              <p className="text-3xl">{stats.patients}</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-lg font-semibold">Doctors</h3>
              <p className="text-3xl">{stats.doctors}</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-lg font-semibold">Blogs</h3>
              <p className="text-3xl">{stats.blogs}</p>
            </div>
          </div>
        </section>

        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
