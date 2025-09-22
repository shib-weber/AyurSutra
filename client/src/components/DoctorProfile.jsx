import React from "react";

const DoctorProfile = () => {
  return (
    <aside className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow h-fit">
      <img
        src="https://randomuser.me/api/portraits/men/76.jpg"
        alt="Doctor"
        className="h-24 w-24 rounded-full mx-auto"
      />
      <h3 className="text-xl font-bold text-center mt-4 text-black dark:text-white">
        Dr. Arvind Rao
      </h3>
      <p className="text-center text-gray-600 dark:text-gray-300">
        Ayurveda & Panchakarma
      </p>
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-2">
        Experience: 15 years
      </p>
      <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
        Book Now
      </button>
    </aside>
  );
};

export default DoctorProfile;
