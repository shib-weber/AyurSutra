    import React from "react";

    const Sidebar = () => {
    const menuItems = [
        { icon: "dashboard", label: "Dashboard", active: true },
        { icon: "groups", label: "Patients" },
        { icon: "favorite", label: "Therapies" },
        { icon: "calendar_month", label: "Appointments" },
        { icon: "bar_chart", label: "Reports" },
        { icon: "settings", label: "Settings" },
    ];

    return (
        <aside className="w-64 flex-shrink-0 bg-[var(--c-bg-secondary)] p-6 transition-all duration-300 ease-in-out md:w-20 md:hover:w-64 group/sidebar">
        <div className="flex items-center gap-4 text-[var(--c-action-primary)] mb-10">
            <span className="material-symbols-outlined text-4xl">spa</span>
            <h1 className="text-xl font-bold whitespace-nowrap opacity-0 md:group-hover/sidebar:opacity-100 transition-opacity duration-300">
            AyurSutra
            </h1>
        </div>
        <nav className="flex flex-col gap-4">
            {menuItems.map((item, idx) => (
            <a
                key={idx}
                className={`flex items-center gap-4 rounded-lg px-4 py-3 ${
                item.active
                    ? "bg-[var(--c-action-primary)] text-white shadow-md"
                    : "text-[var(--c-text-secondary)] hover:bg-[var(--c-action-primary)] hover:text-white transition-colors duration-200"
                }`}
                href="#"
            >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="whitespace-nowrap opacity-0 md:group-hover/sidebar:opacity-100 transition-opacity duration-300">
                {item.label}
                </span>
            </a>
            ))}
        </nav>
        </aside>
    );
    };

    export default Sidebar;
