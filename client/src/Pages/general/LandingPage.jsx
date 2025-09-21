import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Stats from "../../components/Stats";
import WhyChooseUs from "../../components/WhyChooseUs";
import Offerings from "../../components/Offerings";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader";
import { useState, useEffect } from "react";
import api from "../../api/axiosInstance"

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ patients: 0, doctors: 0, blogs: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);

      api.get("/api/patient/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Error fetching stats:", err));

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="bg-background-light overflow-x-hidden dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex flex-col">
        {/* Add IDs to link sections */}
        <section id="home">
          <Hero />
        </section>
        <section id="stats">
          <Stats stats={stats} />
        </section>
        <section id="about">
          <WhyChooseUs />
        </section>

        <section id="therapies">
          <Offerings />
        </section>

        <section id="blog">
          <Blog />
        </section>


      </main>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
