import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Therapies", href: "#therapies" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-primary/20 bg-background-light/80 px-6 md:px-10 py-3 backdrop-blur-sm dark:bg-background-dark/80">
      {/* Logo */}
      <div className="flex items-center gap-3 text-primary">
        <img className="h-12 w-22" src="logo.png" alt="" />
        <h2 className="text-2xl font-bold text-[#007f80] tracking-tight">
          AyurSutra
        </h2>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8">
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-gray-600 px-3 py-2 rounded-md transition-colors duration-200 hover:text-black hover:bg-[#00808077]"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-4">
        <div className="hidden md:flex items-center w-[50%] mx-6 relative">
          {/* Magnifying Glass Icon */}
          <span className="absolute left-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#007f80"
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
            className="pl-12 pr-4 py-2 border text-[#007f80] border-[#007f80] rounded-b-sm focus:outline-none focus:ring-1 focus:ring-[#007f80] w-full"
          />
        </div>

        {/* Buttons */}
        <button className="h-10 min-w-[84px] rounded-lg border border-[#007f80] px-4 text-sm font-bold text-[#007f80] transition-colors duration-300 hover:bg-[#007f80] hover:text-white"
        onClick={()=>navigate('/register')}
        >
          Login
        </button>
        <button className="h-10 min-w-[84px] rounded-lg bg-[#007f80] px-4 text-sm font-bold text-white border border-[#3d9b83] transition-colors duration-300 hover:bg-transparent hover:text-[#007f80]" 
        onClick={()=>navigate('/new_register')}>
          Signup
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col space-y-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block h-0.5 w-6 bg-[#007f80]"></span>
        <span className="block h-0.5 w-6 bg-[#007f80]"></span>
        <span className="block h-0.5 w-6 bg-[#007f80]"></span>
      </button>

      {/* Mobile Menu Slider */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-[#007f80] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-[#007f80]"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <div className="mt-10 flex flex-col bg-white items-start gap-6 px-6">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-[#007f80]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <button onClick={()=>navigate('/register')} className="w-full h-10 rounded-lg border border-[#007f80] px-4 text-sm font-bold text-[#007f80] transition-colors duration-300 hover:bg-[#007f80] hover:text-white">
            Login
          </button>
          <button onClick={()=>navigate('/new_register')} className="w-full h-10 mb-2.5 rounded-lg bg-[#007f80] px-4 text-sm font-bold text-white border border-[#3d9b83] transition-colors duration-300 hover:bg-transparent hover:text-[#007f80]">
            Signup
          </button>
        </div>
      </div>
    </header>
  );
}
