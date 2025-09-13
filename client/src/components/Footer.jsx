    import React from "react";

    const Footer = () => {
    return (
        <footer className="bg-[var(--light-bg)] border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#666666]">© 2024 AyurSutra. All Rights Reserved.</p>
            <nav className="flex gap-6 text-sm text-[#666666]">
            <a className="hover:text-[var(--primary-green)]" href="#">Privacy Policy</a>
            <a className="hover:text-[var(--primary-green)]" href="#">Terms of Service</a>
            <a className="hover:text-[var(--primary-green)]" href="#">Contact Us</a>
            </nav>
        </div>
        </footer>
    );
    };

    export default Footer;
