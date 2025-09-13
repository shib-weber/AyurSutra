    import React from "react";

    const Header = () => {
    return (
        <header className="flex items-center justify-between border-b border-[var(--border-color)] px-10 py-4 text-emerald-900 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        {/* Logo + Nav */}
        <div className="flex items-center gap-10">
            <a className="flex items-center gap-3 text-[var(--text-dark)]" href="#">
            <div className="size-8 text-[var(--primary-green)]">
                {/* Logo SVG */}
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                    fillRule="evenodd"
                />
                </svg>
            </div>
            <h2 className="text-2xl font-bold">AyurSutra</h2>
            </a>

            <nav className="hidden md:flex items-center gap-6 font-medium">
            <a className="hover:text-[var(--primary-green)]" href="#">Dashboard</a>
            <a className="hover:text-[var(--primary-green)]" href="#">Patients</a>
            <a className="hover:text-[var(--primary-green)]" href="#">Treatments</a>
            <a className="hover:text-[var(--primary-green)]" href="#">Billing</a>
            </nav>

            <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </button>
        </div>

        {/* Search Bar */}
<div className="hidden md:flex items-center w-[50%] mx-6 relative">
  {/* Magnifying Glass Icon */}
  <span className="absolute left-4 text-gray-400">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
      />
    </svg>
  </span>

  {/* Input */}
  <input
    type="text"
    placeholder="Search for therapy, doctor..."
    className="pl-12 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-700 w-full"
  />
</div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
            <button className="btn-outline outline-1 outline-emerald-900 rounded-full px-5 h-10">Login</button>
            <button className="btn-filled bg-emerald-900 text-amber-50 rounded-full px-5 h-10">Register</button>
        </div>
        </header>
    );
    };

    export default Header;
