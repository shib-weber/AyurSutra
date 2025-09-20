import React from "react";

const PatientDetails = () => {
  return (
    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] mb-8">
      <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
        Patient Details
      </h3>
      <div className="grid grid-cols-1 @md:grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <span className="font-medium text-[var(--foreground)]">
            Disease/Condition:
          </span>{" "}
          <span className="text-[var(--muted-foreground)]">
            Chronic Back Pain
          </span>
        </div>
        <div>
          <span className="font-medium text-[var(--foreground)]">
            Current Therapy:
          </span>{" "}
          <span className="text-[var(--muted-foreground)]">Physiotherapy</span>
        </div>
        <div>
          <span className="font-medium text-[var(--foreground)]">
            Attending Doctor:
          </span>{" "}
          <span className="text-[var(--muted-foreground)]">Dr. Anjali Mehta</span>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-medium text-[var(--foreground)] mb-2">
          Health Status
        </h4>
        <div className="w-full bg-[#d0ddf7] rounded-full h-2.5">
          <div
            className="bg-[#752431] h-2.5 rounded-full"
            style={{ width: "15%" }}
          ></div>
        </div>
        <p className="text-sm text-right text-[var(--muted-foreground)] mt-1">
          25% Improved
        </p>
      </div>
    </div>
  );
};

export default PatientDetails;
