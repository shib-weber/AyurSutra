import React from "react";

const PatientProfile = ({ patient }) => {
  return (
    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] mb-8">
      <div className="flex items-center gap-6">
        <div
          className="w-24 h-24 rounded-full bg-center bg-cover"
          style={{
            backgroundImage: `url("${patient.profileImage || "https://via.placeholder.com/150"}")`,
          }}
        ></div>
        <div>
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {patient.name || "Patient Name"}
          </h2>
          <p className="text-[var(--muted-foreground)]">
            Age: {patient.age || "-"}, {patient.gender || "-"}
          </p>
          <p className="text-sm text-[var(--muted-foreground)]">
            Patient ID: {patient._id.slice(-6).toUpperCase()}
          </p>
          <p className="text-sm text-[var(--muted-foreground)]">Email: {patient.email}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
