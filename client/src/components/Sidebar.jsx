import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const menuItems = [
    { icon: "👤", label: "Profile", href: "/patient_profile" },
    { icon: "🏠", label: "Homepage", href: "/patient_home" },
    { icon: "📊", label: "Dashboard", href: "/patient_dashboard" },
    { icon: "📅", label: "Appointment", href: "/appointment" },
    { icon: "⚙️", label: "Settings", href: "/maintainance" },
    { icon: "📞", label: "Contact Us", href: "/maintainance" },
    { icon: "🚨", label: "Emergency", href: "/maintainance" },
  ];

  return (
    <>
      {/* Fixed Hamburger Button (always visible on mobile) */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-0 left-1 z-50 p-2 bg-[#035757] rounded-md text-white shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-40 z-40 "
          onClick={() => setIsOpen(false)} // close on outside click
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-white  p-2 flex-col transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 transition-transform duration-300 z-50`}
      >
        {/* Header */}
        <div className="flex mt-1.5 rounded-2xl p-4 items-center w-[100%] text-white bg-[#035757] gap-1 mb-10">
          <img src="logo.png" className="w-20 h-10" alt="logo" />
          <h1 className="font-bold text-xl">AyurSutra</h1>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-emerald-400/20 hover:text-emerald-600"
              href={item.href}
              onClick={() => setIsOpen(false)} // close after click
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 rounded-lg text-red-600 transition-colors hover:bg-red-100 hover:text-red-700 w-full mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M16 13v-2H7V8l-5 4 5 4v-3h9z" />
              <path d="M20 3H12v2h8v14h-8v2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
            </svg>
            <span>Logout</span>
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
