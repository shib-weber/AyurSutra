import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import PatientRegistrationPage from "./Pages/PatientRegistrationPage";
import Dashboard from "./Pages/Dashboard"
import PatientDashboard from "./Pages/PatientDashboard";
import DemoPage from "./Pages/Demopage";
import AppointmentBooking from "./Pages/Appointment";
import AppointmentSuccess from "./Pages/AppointmentSuccess";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<PatientRegistrationPage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient_dashboard" element={<PatientDashboard />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/appointment" element={<AppointmentBooking/>} />
        <Route path="/appointment-success" element={<AppointmentSuccess/>} />
      </Routes>
    </Router>
  );
};

export default App;
