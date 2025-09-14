    import React from "react";
    import Sidebar from "../components/Sidebar";
    import Header from "../components/DashHeader";
    import StatsCard from "../components/StatsCard";
    import AppointmentsTable from "../components/AppointmentsTable";
    import RecentActivities from "../components/RecentActivities";

    const Dashboard = () => {
    return (
        <div className="flex h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="flex h-full grow">
            <Sidebar />
            <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex-1 overflow-y-auto bg-[var(--c-bg-primary)] p-8">
                <div className="flex flex-col gap-8">
                <h1 className="text-3xl font-bold text-[#1a544a]">Dashboard</h1>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <StatsCard title="Total Patients" value="245" />
                    <StatsCard title="Active Therapies" value="12" />
                    <StatsCard title="Upcoming Appointments" value="6" />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-[#1a544a]">Upcoming Appointments</h2>
                    <AppointmentsTable />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-[#1a544a]">Recent Activities</h2>
                    <RecentActivities />
                </div>
                </div>
            </main>
            </div>
        </div>
        </div>
    );
    };

    export default Dashboard;
