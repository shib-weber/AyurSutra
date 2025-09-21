import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Import pages
import LandingPage from "./Pages/general/LandingPage";
import PatientLoginPage from "./Pages/patient/PatientLoginPage";
import PatientRegistrationPage from "./Pages/patient/PatientRegistrationPage";
import Dashboard from "./Pages/Dashboard";
import PatientDashboard from "./Pages/patient/PatientDashboard";
import ProfileUpdate from "./components/ProfileUpdate";
import AppointmentBooking from "./Pages/patient/Appointment";
import AppointmentSuccess from "./Pages/patient/AppointmentSuccess";
import Preloader from "./components/Preloader";

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (location.pathname === "/") {
      setLoading(false);
      return;
    }

    // simulate delay (like waiting for page data)
    const timer = setTimeout(() => setLoading(false), 800);

    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return <Preloader />;

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<PatientLoginPage />} />
      <Route path="/new_register" element={<PatientRegistrationPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/patient_dashboard" element={<PatientDashboard />} />
      <Route path="/profile" element={<ProfileUpdate />} />
      <Route path="/appointment" element={<AppointmentBooking />} />
      <Route path="/appointment-success" element={<AppointmentSuccess />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
