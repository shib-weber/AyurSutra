import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Stats from "../../components/Stats";
import WhyChooseUs from "../../components/WhyChooseUs";
import Offerings from "../../components/Offerings";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader"; // make sure this exists
import { useState, useEffect } from "react";
import axios from "axios"; // ✅ fixed import

export default function LandingPage() {
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

  if (loading) return <Preloader />;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Stats stats={stats} /> {/* pass stats if your Stats component needs them */}
        <WhyChooseUs />
        <Offerings />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
