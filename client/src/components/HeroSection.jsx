import React from "react";
import { useNavigate } from "react-router-dom"; // <-- import

const HeroSection = () => {
  const navigate = useNavigate(); // <-- hook

  return (
    <section className="flex justify-center py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--light-bg)]">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl text-[#1a544a] sm:text-5xl md:text-6xl font-extrabold leading-tight pb-4">
          Welcome to AyurSutra
        </h1>
        <p className="text-lg sm:text-xl text-[var(--text-dark)]/80 max-w-3xl mx-auto pb-8">
          Your comprehensive solution for Ayurveda and Panchakarma management.
          Streamline your practice, enhance patient care, and embrace the wisdom of ancient healing.
        </p>
        <div className="buttons flex w-full gap-3 align-middle justify-center">
          {/* ✅ Route to /register */}
          <button
            onClick={() => navigate("/register")}
            className="btn-filled bg-[#1a544a] text-amber-50 px-8 h-14 text-lg rounded-full hover:scale-105 transform transition"
          >
            Get Started with Therapy
          </button>

          {/* Example second button — you can set a different route here */}
          <button
            onClick={() => navigate("/doctor-login")}
            className="btn-filled bg-[#1a544a] text-amber-50 px-8 h-14 text-lg rounded-full hover:scale-105 transform transition"
          >
            I am an Affiliated Doctor
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
