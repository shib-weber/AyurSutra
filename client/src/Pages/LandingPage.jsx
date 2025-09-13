    import React from "react";
    import Header from "../components/Header";
    import HeroSection from "../components/HeroSection";
    import FeaturesSection from "../components/FeaturesSection";
    import Footer from "../components/Footer";
    import FallingLeaf from "../components/FallingLeaf";

    const LandingPage = () => {
    const leaves = Array.from({ length: 10 }); // Number of falling leaves

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
