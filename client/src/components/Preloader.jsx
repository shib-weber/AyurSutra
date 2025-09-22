import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quotes = [
  "Health is wealth – Ayurveda teaches balance.",
  "Nature itself is the best physician.",
  "Wellness is the harmony of body, mind, and spirit.",
  "A healthy mind in a healthy body.",
  "Ayurveda heals from within.",
  "Preventive care is the best medicine.",
];

const Preloader = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[var(--light-bg)] z-50">
      {/* Logo Animation */}
      <motion.img
        src="logo.png" // replace with your image path
        alt="Loading..."
        className="w-48 h-48 object-contain mb-6"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.3, 1], opacity: [0, 1, 1] }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Random Quote */}
      <motion.p
        className="text-center text-lg sm:text-xl font-semibold px-4 
             bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        "{quote}"
      </motion.p>

      {/* Powered by footer */}
    <p
  className="absolute bottom-4 text-sm 
             bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
>
  Powered by Code Prana
</p>
    </div>
  );
};

export default Preloader;
