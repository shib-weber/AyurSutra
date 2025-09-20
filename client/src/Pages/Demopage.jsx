import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/PatientHeader";
import PatientProfile from "../components/PatientProfile";
import PatientDetails from "../components/PatientDetails";
import TherapySchedule from "../components/TherapySchedule";
import ReportsProgress from "../components/ReportsProgress";
import NextSession from "../components/NextSession";
import Notifications from "../components/Notifications";

const DemoPage = () => {
  const navigate = useNavigate();

  const handleBookTherapy = () => {
    navigate("/appointment");
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex h-full grow flex-row">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-8 @container">
            <div className="grid grid-cols-1 @4xl:grid-cols-3 gap-8">
              <div className="col-span-1 @4xl:col-span-2">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h1 className="text-3xl text-emerald-900 font-bold mb-2">
                      Welcome, Anya!
                    </h1>
                    <p className="text-[var(--muted-foreground)]">
                      Here's a summary of your health and therapy schedule.
                    </p>
                  </div>
                  <button
                    onClick={handleBookTherapy}
                    className="px-4 py-2 border-2 border-emerald-900 text-emerald-900 font-semibold rounded-lg hover:bg-emerald-900 hover:text-white transition"
                  >
                    Book a Therapy
                  </button>
                </div>

                <PatientProfile />
                <TherapySchedule />
                <PatientDetails />
                <ReportsProgress />
              </div>

              <div className="col-span-1">
                <NextSession />
                <Notifications />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
