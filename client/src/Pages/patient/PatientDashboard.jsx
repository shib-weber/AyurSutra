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
import FeedbackForm from "../../components/FeedbackForm";


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



  return (
    <div className="font-display bg-white flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header isProfileComplete={patient.complete} title={`Welcome ${patient.name || ""}!`} />

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
  {/* LEFT COLUMN */}
  <div className="flex flex-col space-y-6 xl:col-span-2">

    {/* Upcoming Therapies */}
    <div className="order-1 xl:order-1 bg-background-light p-6 rounded-xl shadow-sm border border-primary/10 h-[400px] overflow-y-auto">
      <h3 className="text-xl font-bold mb-4">Upcoming Therapies</h3>
      {patient.upcomingAppointments && patient.upcomingAppointments.length > 0 ? (
        [...patient.upcomingAppointments].reverse().map((appt, idx) => (
          <TherapyCard
            key={idx}
            day={appt.day}
            therapy={appt.therapy} 
            status={appt.status}
            paymentStatus={appt.paymentStatus}
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
<div className="order-2 xl:order-2  bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-sm border border-primary/10 dark:border-primary/20 h-[350px] flex flex-col">
  <h3 className="text-xl font-bold mb-4">Notifications</h3>
  
  {patient.notifications && patient.notifications.length > 0 ? (
    <ul className="flex-1  overflow-y-auto divide-y divide-primary/20 dark:divide-primary/30">
      {patient.notifications.map((n) => {
        // Determine icon based on category
        let icon;
        switch (n.category) {
          case "General":
            icon = <span className="material-symbols-outlined text-blue-500">notifications</span>;
            break;
          case "Pre-Appointment":
            icon = <span className="material-symbols-outlined text-emerald-500">event_note</span>;
            break;
          case "Post-Appointment":
            icon = <span className="material-symbols-outlined text-purple-500">medication</span>;
            break;
          default:
            icon = <span className="material-symbols-outlined text-gray-400">notifications</span>;
        }

        return (
          <NotificationCard
            key={n.id}
            type={n.category}
            icon={icon}
            title={n.title}
            time={n.time}
          />
        );
      })}
    </ul>
  ) : (
    <p className="text-gray-500 mt-4">No notifications</p>
  )}
</div>


    {/* Health Status / Daily Health Progress */}
    <div className="order-3 xl:order-3">
      <HealthChart data={patient.feedbacks} />
    </div>

    {/* Feedback */}
{/* Feedback */}
<div className="order-4 xl:order-4">
  <FeedbackForm patientId={patient._id} />
</div>

  </div>

  {/* RIGHT COLUMN */}
  <div className="flex flex-col space-y-6 xl:col-span-1">

    {/* Calendar */}
    <div className="order-1 xl:order-1">
      <Calendar appointments={patient.upcomingAppointments} />
    </div>

    {/* Health recovery circular chart */}
    <div className="order-2 xl:order-2">
      <ProgressReport progress={0} />
    </div>

    {/* Points System */}
    <div className="order-3 xl:order-3">
      <PointsSystem points={patient.points} />
    </div>
    
  </div>
</div>

      </main>
    </div>
  );
};

export default PatientDashboard;
