import React, { useState } from "react";
import API from "../api/axiosInstance";
import {useNavigate} from 'react-router-dom'

const FeedbackForm = ({ patientId }) => {
  const [form, setForm] = useState({
    mood: "",
    digestion: "",
    appetite: "",
    bowel: "",
    health: "",
    pain: "",
    sleep: "",
    energy: "",
    hydration: "",
    stress: "",
    activity: "",
    menstrual: "",
    notes: "",
  });
  const navigate=useNavigate()

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

const requiredFields = [
  "mood",
  "digestion",
  "appetite",
  "bowel",
  "health",
  "pain",
  "sleep",
  "energy",
  "hydration",
  "stress",
  "activity",
];

const handleSubmit = async () => {
  // Validate required fields
  for (let field of requiredFields) {
    if (!form[field]) {
      alert(`⚠️ Please select ${field} before submitting.`);
      return; // stop submission
    }
  }

  try {
    await API.post("/api/feedback", { patientId, ...form });
    alert("✅ Feedback submitted successfully!");
    navigate('/patient_dashboard')
    setForm({
      mood: "",
      digestion: "",
      appetite: "",
      bowel: "",
      health: "",
      pain: "",
      sleep: "",
      energy: "",
      hydration: "",
      stress: "",
      activity: "",
      menstrual: "",
      notes: "",
    });
  } catch (err) {
    console.error(err);
    alert("⚠️ Error submitting feedback");
  }
};

  // Helper component for button groups
  const OptionGroup = ({ label, field, options }) => (
    <div>
      <p className="mb-2 text-sm font-medium text-gray-700  :text-gray-300">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => handleChange(field, opt)}
            className={`px-4 py-2 rounded-lg border ${
              form[field] === opt
                ? "bg-green-600 text-white border-green-600"
                : "bg-white  :bg-gray-800 border-green-300  :border-green-600 text-gray-700  :text-gray-300"
            } hover:bg-green-100  :hover:bg-green-700 transition`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl relative mx-auto bg-white   p-8 rounded-2xl shadow-lg border border-green-200  ">
      <img className="w-24 h-12" src="logo.png" alt="" />
      <h3 className="text-2xl font-semibold text-emerald-800   mb-6 text-center">
        Daily Health Feedback
      </h3>

      <div className="space-y-6">
        <OptionGroup required={true} label="Mood" field="mood" options={["😀", "🙂", "😐", "☹️", "😢"]} />
        <OptionGroup required={true}  label="Stress Level" field="stress" options={["None", "Mild", "Moderate", "Severe"]} />
        <OptionGroup required={true}  label="Pain Level" field="pain" options={["None", "Mild", "Moderate", "Severe"]} />
        <OptionGroup required={true}  label="Overall Health" field="health" options={["Excellent", "Good", "Fair", "Poor"]} />
        <OptionGroup required={true}  label="Energy Level" field="energy" options={["High", "Moderate", "Low"]} />
        <OptionGroup label="Appetite" field="appetite" options={["Strong", "Normal", "Low"]} />
        <OptionGroup label="Sleep Quality" field="sleep" options={["Restful", "Disturbed", "Insufficient"]} />
        <OptionGroup label="Digestion" field="digestion" options={["Good", "Average", "Poor"]} />
        <OptionGroup label="Bowel Movement" field="bowel" options={["Regular", "Irregular", "Constipation", "Loose"]} />
        <OptionGroup label="Hydration" field="hydration" options={["Adequate", "Low", "Excessive"]} />
        <OptionGroup label="Daily Activity" field="activity" options={["Active", "Moderate", "Sedentary"]} />

        {/* Menstrual (Optional) */}
        <div>
          <p className="mb-2 text-sm font-medium text-gray-700  ">Menstrual Health (optional)</p>
          <input
            type="text"
            name="menstrual"
            value={form.menstrual}
            onChange={(e) => handleChange("menstrual", e.target.value)}
            placeholder="Enter details if applicable"
            className="w-full p-2 rounded-lg border border-green-300  focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Notes */}
        <div>
          <p className="mb-2 text-sm font-medium text-gray-700  ">Additional Feedback (optional)</p>
          <textarea
            name="notes"
            value={form.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
            placeholder="Write your comments here..."
            className="w-full p-3 rounded-lg border border-green-300   focus:ring-2 focus:ring-green-500 focus:outline-none"
            rows="3"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-10 rounded-lg transition shadow-md"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
