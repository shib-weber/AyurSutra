import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg shadow-emerald-400 p-2 flex-col hidden lg:flex">
      <div className="flex mt-1.5 rounded-2xl p-4 items-center w-[100%] text-white bg-[#035757] gap-1 mb-10">
        <img src="logo.png" className="w-20 h-10" alt="" />
        <h1 className="font-bold text-xl ">AyurSutra</h1>
      </div>
      <nav className="flex flex-col gap-2">
        {[
          { icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="false">
  <title>Profile</title>
  <path fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
  <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.6"/>
</svg>

), label: "Profile",href:'/profile' },
          { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="false">
  <title>Home</title>
  <path fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-5H9v5H4a1 1 0 0 1-1-1V11.5z"/>
</svg>
), label: "Homepage",href:'/home' },
          { icon: (  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" />
  </svg>), label: "Dashboard", active: true ,href:'/patient_dashboard'},
          { icon:  (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .11-.65l-1.92-3.32a.5.5 0 0 0-.61-.21l-2.39.96a7.014 7.014 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 14 2h-4a.5.5 0 0 0-.49.42l-.36 2.54c-.61.24-1.18.57-1.63.94l-2.39-.96a.5.5 0 0 0-.61.21L2.72 8.83a.5.5 0 0 0 .11.65l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.11.65l1.92 3.32c.14.24.43.34.68.21l2.39-.96c.45.37 1.02.7 1.63.94l.36 2.54c.05.28.28.48.56.48h4c.28 0 .51-.2.56-.48l.36-2.54c.61-.24 1.18-.57 1.63-.94l2.39.96c.25.13.54.03.68-.21l1.92-3.32a.5.5 0 0 0-.11-.65l-2.03-1.58zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 8.5 12 8.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
  </svg>
), label: "Settings",href:'/settings' },
          { icon:  (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
  </svg>
), label: "Appointment",href:'/appointment' },
          { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="false">
  <title>Call</title>
  <path fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 0 1-2.18 2c-9.94-1.2-17.64-8.9-18.84-18.84A2 2 0 0 1 3.98 1h3a2 2 0 0 1 2 1.72c.12 1.2.39 2.39.79 3.52a2 2 0 0 1-.45 2.11L8.6 9.4a16 16 0 0 0 6 6l1.05-1.05a2 2 0 0 1 2.11-.45c1.13.4 2.32.67 3.52.79A2 2 0 0 1 22 16.92z"/>
</svg>
), label: "Contact Us",href:'/contact' },
          { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="false">
  <title>Emergency</title>
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/>
  <path fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        d="M12 8v8M8 12h8"/>
</svg>
), label: "Emergency",href:'/emergency' },
        ].map((item) => (
          <a
            key={item.label}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors
              hover:bg-emerald-400/20 hover:text-emerald-600
              `} href={item.href}
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
