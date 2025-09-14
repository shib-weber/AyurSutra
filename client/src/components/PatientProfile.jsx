import React from "react";

const PatientProfile = () => {
  return (
    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] mb-8">
      <div className="flex items-center gap-6">
        <div
          className="w-24 h-24 rounded-full bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYqNPTXXLy2zwWi3ch205J6OlYM419eG9LH3AEVxBZDU1XTQIdAkRTdAToCU9aYmDTw9icoq3kWLwjtL43B2YwDHxgWAr076MwaynjBWk6VDqgoYhTdOzi9wd4u-UYTrNxcT1_xu1sX8utPf9J6ef2LCEBwaj606UFe8rGOms57HnBAtBTVWvP8Mdu5tCwqUTGjDJ4qWwsfroVoHgv8IMnHxsR3l0O57oXhvTKuo9ELiT-vTDYCIG3osR_MQLJacUF4YsvAY2FqQKj")',
          }}
        ></div>
        <div>
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            Anya Sharma
          </h2>
          <p className="text-[var(--muted-foreground)]">Age: 32, Female</p>
          <p className="text-sm text-[var(--muted-foreground)]">
            Patient ID: PAT-123456
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
