import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import Offerings from "../components/Offerings";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Stats />
        <WhyChooseUs />
        <Offerings />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
