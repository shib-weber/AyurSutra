    import React from "react";

    const HeroSection = () => {
    return (
        <section className="flex justify-center py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--light-bg)]">
        <div className="text-center max-w-4xl">
            <h1 className=" text-4xl text-emerald-900 sm:text-5xl md:text-6xl font-extrabold leading-tight pb-4 ">
            Welcome to AyurSutra
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-dark)]/80 max-w-3xl mx-auto pb-8">
            Your comprehensive solution for Ayurveda and Panchakarma management.
            Streamline your practice, enhance patient care, and embrace the wisdom of ancient healing.
            </p>
            <div className="buttons flex w-[100%] gap-3 align-middle justify-center">
            <button className="btn-filled bg-emerald-900 text-amber-50  px-8 h-14 text-lg rounded-full hover:scale-105 transform transition">
            Get Started with Therapy
            </button>
            <button className="btn-filled bg-emerald-900 text-amber-50  px-8 h-14 text-lg rounded-full hover:scale-105 transform transition">
            I am an Affiliated Doctor
            </button>
            </div>

        </div>
        </section>
    );
    };

    export default HeroSection;
