    import React from "react";

    const steps = [
    "Basic Details",
    "Illness / Pain Level",
    "Previous Therapy",
    "Address",
    "ID Proof Upload",
    "Start",
    ];

    const PatientRegistrationSidebar = ({ currentStep }) => {
    return (
        <aside className="w-64 bg-emerald-900 text-white p-6 rounded-l-2xl">
        <h2 className="text-xl font-bold mb-6">Registration</h2>
        <ul className="space-y-4">
            {steps.map((step, index) => (
            <li
                key={index}
                className={`p-2 rounded-lg transition ${
                currentStep === index
                    ? "bg-emerald-600 font-semibold"
                    : "hover:bg-emerald-700"
                }`}
            >
                {step}
            </li>
            ))}
        </ul>
        </aside>
    );
    };

    export default PatientRegistrationSidebar;
