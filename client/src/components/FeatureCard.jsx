    import React from "react";

    const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="bg-[var(--card-bg)] rounded-xl shadow-lg p-8 border border-[var(--border-color)] hover:-translate-y-2 transition-transform duration-300">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--secondary-teal)]/20 text-[var(--primary-green)] mb-5">
            {icon}
        </div>
        <h3 className="text-xl text-left text-emerald-900 font-bold mb-3">{title}</h3>
        <p className="text-[var(--text-dark)]/80 text-left">{description}</p>
        </div>
    );
    };

    export default FeatureCard;
