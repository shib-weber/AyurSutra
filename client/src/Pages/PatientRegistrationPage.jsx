import React, { useState } from "react";
import RegistrationSidebar from "../components/PatientRegistrationSidebar";
import RegistrationFormStep from "../components/PatientRegistrationFormStep";
import StepNavigation from "../components/StepNavigation";
import { useNavigate } from "react-router-dom";

const PatientRegistrationPage = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Step 0 - Basic Details
    firstName: "",
    lastName: "",
    motherName: "",
    fatherName: "",
    age: "",
    maritalStatus: "",

    // Step 1 - Diseases
    diseases: [],

    // Step 2 - Previous Therapies
    previousTherapies: [],

    // Step 3 - Address
    address: "",
    nation: "",
    state: "",
    pincode: "",

    // Step 4 - ID Proof
    idProof: null,
    idProofType: "",

    // Step 5 - Account & Terms
    email: "",
    mobile: "",
    username: "",
    password: "",
    rePassword: "",
    acceptedTerms: false,
  });

  const handleFinish = () => {
    console.log("✅ Registration Data Submitted:", formData);
    navigate("/patient_dashboard");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar with step indicators */}
      <RegistrationSidebar currentStep={step} />

      {/* Main content */}
      <main className="flex-1 p-10 bg-gray-50 rounded-r-2xl overflow-y-auto">
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
