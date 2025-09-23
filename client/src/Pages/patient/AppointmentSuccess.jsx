import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PatientHeader from "../../components/PatientHeader";
import Sidebar from "../../components/Sidebar";

const AppointmentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state; // Data passed from booking page

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/patient_dashboard");
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-emerald-200 text-center max-w-xl">
            <h1 className="text-4xl font-bold text-emerald-700 mb-4">
              🎉 Appointment Confirmed!
            </h1>
            {bookingData ? (
              <p className="text-gray-700 mb-6">
                Your appointment with <strong>{bookingData.doctor}</strong> on{" "}
                <strong>{bookingData.date}</strong> has been successfully booked.
              </p>
            ) : (
              <p className="text-gray-700 mb-6">
                Your appointment has been successfully booked.
              </p>
            )}
            <p className="text-gray-500">
              Redirecting to your dashboard in a few seconds...
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppointmentSuccess;
