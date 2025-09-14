import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import PatientRegistrationPage from "./Pages/PatientRegistrationPage";
import Dashboard from "./Pages/Dashboard"
import PatientDashboard from "./Pages/PatientDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<PatientRegistrationPage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient_dashboard" element={<PatientDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
