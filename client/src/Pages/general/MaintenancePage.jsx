import React from "react";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

const MaintenancePage = () => {
  return (
    <div className="flex shadow-2xl shadow-emerald-600 items-center justify-center h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-lg w-full"
      >
        {/* Animated Wrench Icon */}
        <motion.div
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-6"
        >
          <Wrench size={60} className="text-emerald-600" />
        </motion.div>

        {/* Animated Image */}
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/679/679922.png"
          alt="Maintenance"
          className="w-40 mx-auto mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Service Under Maintenance
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-4">
          We’re currently working on improvements.  
          You will be notified shortly once the page is back online.
        </p>

        {/* Update Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-50 border border-blue-200 text-emerald-700 rounded-xl p-3 mb-6"
        >
          🚀 New Update <span className="font-semibold">v2.0</span> is coming soon!
        </motion.div>

        {/* Footer */}
        <p className="text-sm text-gray-500">
          Thank you for your patience 💙
        </p>
      </motion.div>
    </div>
  );
};

export default MaintenancePage;
