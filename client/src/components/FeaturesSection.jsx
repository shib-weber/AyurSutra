    import React from "react";
    import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "The Science of Life",
    description:
      "Ayurveda emphasizes balance of body, mind, and spirit for optimal health using natural therapies, diet, and lifestyle changes.",
    icon: (

<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

  <path d="M10 2h4v4l4.5 8.5a4 4 0 01-3.5 5.5H9a4 4 0 01-3.5-5.5L10 6V2z" 
        stroke="#064e3b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.5 15.5c1.2.8 2.5 1.2 4.5 1.2s3.3-.4 4.5-1.2" 
        stroke="#064e3b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="12" cy="12" r="0.7" fill="#064e3b"/>
  <circle cx="13.5" cy="10" r="0.5" fill="#064e3b"/>
  <circle cx="11" cy="9" r="0.4" fill="#064e3b"/>
</svg>

    ),
  },
  {
    title: "Featured Treatments",
    description:
      "Explore therapies like Abhyanga (herbal oil massage), Shirodhara (oil stream on forehead), and personalized herbal remedies.",
    icon: (
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="7" y="3" width="10" height="3" rx="0.8" stroke="#064e3b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="6.2" y="6.5" width="11.6" height="13" rx="1.2" stroke="#064e3b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.5 11.5h5M12 9v5" stroke="#064e3b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.5" y1="17" x2="17.5" y2="17" stroke="#064e3b" strokeWidth="1" strokeLinecap="round"/>
</svg>

    ),
  },
  {
    title: "Benefits of Panchakarma",
    description:
      "Panchakarma detoxifies, restores doshic balance, and improves vitality through a series of five therapies.",
    icon: (
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="9" stroke="#064e3b" strokeWidth="1.8"/>
  <circle cx="9" cy="10" r="1" fill="#064e3b"/>
  <circle cx="15" cy="10" r="1" fill="#064e3b"/>

  <path d="M8 14c1 1.5 2.5 2.5 4 2.5s3-1 4-2.5" 
        stroke="#064e3b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ),
  },
];


    const FeaturesSection = () => {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--light-bg)]">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl text-emerald-900 sm:text-4xl font-bold ">
            Discover Ayurveda with AyurSutra
            </h2>
            <p className="mt-4 text-lg text-[var(--text-dark)]/80 max-w-3xl mx-auto">
            Embrace a holistic approach to wellness with ancient Ayurvedic wisdom, tailored for 
            </p>
            <p>modern life.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default FeaturesSection;
