import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/general/LandingPage";
import PatientLoginPage from "./Pages/patient/PatientLoginPage";
import PatientRegistrationPage from "./Pages/patient/PatientRegistrationPage"
import Dashboard from "./Pages/Dashboard"
import PatientDashboard from "./Pages/patient/PatientDashboard";
import ProfileUpdate from "./components/ProfileUpdate";
import AppointmentBooking from "./Pages/patient/Appointment";
import AppointmentSuccess from "./Pages/patient/AppointmentSuccess";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<PatientLoginPage/>} />
        <Route path="/new_register" element={<PatientRegistrationPage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient_dashboard" element={<PatientDashboard />} />
        <Route path="/profile" element={<ProfileUpdate />} />
        <Route path="/appointment" element={<AppointmentBooking/>} />
        <Route path="/appointment-success" element={<AppointmentSuccess/>} />
      </Routes>
    </Router>
  );
};

export default App;
