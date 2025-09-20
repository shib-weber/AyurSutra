import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--light-bg)] z-50">
      <motion.svg
        fill="#1a544a"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 h-32 text-[var(--primary-green)]"
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], rotate: 360, opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity, // keeps spinning until loader ends
          repeatType: "loop",
        }}
      >
        <motion.path
          clipRule="evenodd"
          d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
          fill="#1a544a"
          fillRule="evenodd"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Preloader;
