    import React, { useState } from "react";
    import RegistrationSidebar from "../components/PatientRegistrationSidebar";
    import RegistrationFormStep from "../components/PatientRegistrationFormStep";
    import StepNavigation from "../components/StepNavigation";
    import { useNavigate } from "react-router-dom";

    const PatientRegistrationPage = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        illness: "",
        previousTherapy: "",
        address: "",
        idProof: null,
    });

    const handleFinish = () => {
        console.log("Registration Data:", formData);
        navigate("/registration-success");
    };

    return (
        <div className="flex h-screen">
        <RegistrationSidebar currentStep={step} />

        <main className="flex-1 p-10 bg-gray-50 rounded-r-2xl">
            <RegistrationFormStep
            step={step}
            formData={formData}
            setFormData={setFormData}
            />
            <StepNavigation
            step={step}
            setStep={setStep}
            totalSteps={6}
            onFinish={handleFinish}
            />
        </main>
        </div>
    );
    };

    export default PatientRegistrationPage;
