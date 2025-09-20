import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/PatientHeader";
import PatientProfile from "../../components/PatientProfile";
import TherapySchedule from "../../components/TherapySchedule";
import ReportsProgress from "../../components/ReportsProgress";
import Notifications from "../../components/Notifications";
import UpcomingAppointments from "../../components/UpcomingAppointments";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const res = await axios.get("http://localhost:5000/api/patient/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPatient(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
        navigate("/login");
      }
    };
    fetchPatientData();
  }, []);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!patient) return <p className="text-center mt-20">No patient data found</p>;

  const handleBookTherapy = () => {
    if (!patient.profileCompleted) {
      alert("Please complete your profile before booking a therapy session!");
      return;
    }
    navigate("/appointment");
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex h-full grow flex-row">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header patientName={patient.name} />

          <main className="flex-1 p-8 @container">
            <div className="grid grid-cols-1 @4xl:grid-cols-3 gap-8">
              <div className="col-span-1 @4xl:col-span-2">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h1 className="text-3xl text-emerald-900 font-bold mb-2">
                      Welcome, {patient.name || "Patient"}!
                    </h1>
                    <p className="text-[var(--muted-foreground)]">
                      Here's a summary of your health and therapy schedule.
                    </p>
                    {!patient.profileCompleted && (
                      <p className="mt-2 text-red-600 font-semibold">
                        Your profile is incomplete. Please complete it to book therapy.
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleBookTherapy}
                    className={`px-4 py-2 border-2 border-emerald-900 text-emerald-900 font-semibold rounded-lg transition ${
                      patient.profileCompleted
                        ? "hover:bg-emerald-900 hover:text-white"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!patient.profileCompleted}
                  >
                    Book a Therapy
                  </button>
                </div>

                <PatientProfile patient={patient} />
                <TherapySchedule appointments={patient.upcomingAppointments} />
                <ReportsProgress patient={patient} />
              </div>

              <div className="col-span-1">
                <UpcomingAppointments appointments={patient.upcomingAppointments} />
                <Notifications />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
