    import React, { useState } from "react";

    // SVG Icons
    const DashboardIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
    >
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" />
    </svg>
    );

    const PatientsIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
    >
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h7v-2h2v2h7v-2.5c0-2.33-4.67-3.5-7-3.5h-2z" />
    </svg>
    );

    const AppointmentsIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
    >
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
    </svg>
    );

    const ReportsIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
    >
        <path d="M5 9h3v11H5V9zm6-4h3v15h-3V5zm6 8h3v7h-3v-7z" />
    </svg>
    );

    const SettingsIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
    >
        <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .11-.65l-1.92-3.32a.5.5 0 0 0-.61-.21l-2.39.96a7.014 7.014 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 14 2h-4a.5.5 0 0 0-.49.42l-.36 2.54c-.61.24-1.18.57-1.63.94l-2.39-.96a.5.5 0 0 0-.61.21L2.72 8.83a.5.5 0 0 0 .11.65l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.11.65l1.92 3.32c.14.24.43.34.68.21l2.39-.96c.45.37 1.02.7 1.63.94l.36 2.54c.05.28.28.48.56.48h4c.28 0 .51-.2.56-.48l.36-2.54c.61-.24 1.18-.57 1.63-.94l2.39.96c.25.13.54.03.68-.21l1.92-3.32a.5.5 0 0 0-.11-.65l-2.03-1.58zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 8.5 12 8.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
    </svg>
    );

    const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [collapsed, setCollapsed] = useState(true);

    const menuItems = [
        { icon: <DashboardIcon />, label: "Dashboard" },
        { icon: <PatientsIcon />, label: "Patients" },
        { icon: <AppointmentsIcon />, label: "Appointments" },
        { icon: <ReportsIcon />, label: "Reports" },
        { icon: <SettingsIcon />, label: "Settings" },
    ];

    return (
        <aside
        className={`bg-[var(--c-bg-secondary)] p-4 md:p-6 h-screen transition-all duration-300 ${
            collapsed ? "w-20" : "w-64"
        }`}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        >
        {/* Logo */}
    <div className="flex items-center gap-3  mb-10">
    <div className="w-[20%] h-[20%] md:w-12 md:h-12">
        <img src="./leaf.png" alt="Leaf Logo" className="w-full h-full object-contain" />
    </div>
    {!collapsed && (
        <h1 className="text-xl font-bold text-[var(--c-action-primary)]">
        AyurSutra
        </h1>
    )}
    </div>

        {/* Menu */}
        <nav className="flex flex-col gap-3 box-content mr-2 ">
            {menuItems.map((item, idx) => (
            <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`box-content  flex items-center gap-4 p-3 rounded-lg transition-colors duration-200 w-full ${
                activeIndex === idx
                    ? "bg-[var(--c-action-primary)] text-white shadow-md"
                    : "text-[#1F675A] hover:bg-[var(--c-action-primary)] hover:text-white"
                }`}
            >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
            </button>
            ))}
        </nav>
        </aside>
    );
    };

    export default Sidebar;
