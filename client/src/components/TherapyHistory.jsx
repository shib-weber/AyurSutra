import React from "react";

const history = [
  {
    id: 1,
    therapy: "Abhyanga",
    date: "2025-09-10",
    doctor: "Dr. Meera Sharma",
    status: "Complete",
  },
  {
    id: 2,
    therapy: "Shirodhara",
    date: "2025-08-22",
    doctor: "Dr. Ramesh Iyer",
    status: "Cancelled",
  },
  {
    id: 3,
    therapy: "Panchakarma",
    date: "2025-09-15",
    doctor: "Dr. Kavita Rao",
    status: "Pending",
  },
];

const statusColors = {
  Complete: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
  Pending: "bg-yellow-100 text-yellow-800",
};

const TherapyHistory = () => {
  return (
    <div className="overflow-x-auto">
      <h3 className="text-2xl font-semibold text-black mb-4">
        Therapy History
      </h3>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white rounded-lg shadow shadow-emerald-900 overflow-hidden">
          <thead className="bg-[#007f80] text-white">
            <tr>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Therapy</th>
              <th className="px-6 py-3 text-left">Doctor</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h) => (
              <tr key={h.id} className="border-t border-gray-200">
                <td className="px-6 py-3 text-gray-900">{h.date}</td>
                <td className="px-6 py-3 text-gray-900">{h.therapy}</td>
                <td className="px-6 py-3 text-gray-900">{h.doctor}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${statusColors[h.status]}`}
                  >
                    {h.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {history.map((h) => (
          <div
            key={h.id}
            className="bg-white rounded-lg shadow shadow-emerald-900 p-4 border border-gray-200"
          >
            <p className="text-sm text-gray-500">Date</p>
            <p className="font-medium text-gray-900 mb-2">{h.date}</p>

            <p className="text-sm text-gray-500">Therapy</p>
            <p className="font-medium text-gray-900 mb-2">{h.therapy}</p>

            <p className="text-sm text-gray-500">Doctor</p>
            <p className="font-medium text-gray-900 mb-2">{h.doctor}</p>

            <p className="text-sm text-gray-500">Status</p>
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full ${statusColors[h.status]}`}
            >
              {h.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TherapyHistory;
