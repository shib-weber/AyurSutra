import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/PatientHeader";
import NotificationCard from "../../components/NotificationCard";
import TherapyCard from "../../components/TherapyCard";
import ProgressReport from "../../components/ProgressReport";
import PointsSystem from "../../components/PointsSystem";
import Calendar from "../../components/Calendar";
import HealthChart from "../../components/HealthChart";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosInstance"
import Preloader from "../../components/Preloader";


const PatientDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/register");
          return;
        }

        const res = await api.get("/api/patient/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setPatient(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
        navigate("/register");
      }
    };

    fetchPatientData();
  }, [navigate]);

  if (loading) return <Preloader></Preloader>;
  if (!patient) return <p className="text-center mt-20">No patient data found</p>;

  const handleFeedbackSubmit = () => {
    alert("Feedback submitted successfully!");
    // TODO: send to backend
  };

  return (
    <div className="font-display bg-white flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header isProfileComplete={patient.complete} title={`Welcome ${patient.name || ""}!`} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
          {/* Left side */}
          <div className="xl:col-span-2 space-y-6">

            {/* Upcoming Therapies */}
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-sm border border-primary/10 dark:border-primary/20 h-[400px] overflow-y-auto">
              <h3 className="text-xl font-bold mb-4">Upcoming Therapies</h3>
              {patient.upcomingAppointments && patient.upcomingAppointments.length > 0 ? (
                patient.upcomingAppointments.map((appt, idx) => (
                  <TherapyCard
                    key={idx}
                    day={appt.day}
                    therapy={appt.therapy}
                    time={appt.time}
                    doctor={appt.doctor}
                    image={appt.image}
                  />
                ))
              ) : (
                <p className="text-gray-500">No upcoming therapies</p>
              )}
            </div>

            {/* Notifications */}
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-sm border border-primary/10 dark:border-primary/20 h-[250px]">
              <h3 className="text-xl font-bold mb-4">Notifications</h3>
              <ul className="divide-y divide-primary/20 dark:divide-primary/30 mt-4 h-full overflow-y-auto">
                {patient.notifications && patient.notifications.length > 0 ? (
                  patient.notifications.map((n, idx) => (
                    <NotificationCard
                      key={idx}
                      icon={n.icon}
                      title={n.title}
                      time={n.time}
                    />
                  ))
                ) : (
                  <p className="text-gray-500">No notifications</p>
                )}
              </ul>
            </div>

            {/* Feedback */}
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-sm border border-primary/10 dark:border-primary/20 h-[200px] flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-4">Feedback</h3>
              <textarea
                className="form-textarea w-full rounded-lg border-primary/30 dark:border-primary/40 bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-500 flex-1"
                placeholder="Share your feedback about the therapy"
                rows="4"
              ></textarea>
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleFeedbackSubmit}
                  className="bg-[#007f80] text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Submit Feedback
                </button>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="xl:col-span-1 space-y-6">
            <ProgressReport reports={patient.reports} />
            <Calendar appointments={patient.upcomingAppointments} />
            <HealthChart data={patient.dailyProgress} />
            <PointsSystem points={patient.points} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
