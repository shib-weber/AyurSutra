import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    State: "",
    City: "",
    Address: "",
  });
  const [loading, setLoading] = useState(true);

  // Fetch patient data on mount
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return navigate("/login");

        const res = await axios.get(
          "http://localhost:5000/api/patient/profile",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const patientData = {
          name: res.data.name || "",
          age: res.data.age || "",
          phone: res.data.phone || "",
          State: res.data.State || "",
          City: res.data.City || "",
          Address: res.data.Address || "",
        };

        setFormData(patientData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };
    fetchPatient();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate and save profile
  const handleSave = async () => {
    const { name, age, phone, State, City, Address } = formData;

    // Simple validation
    if (!name || !age || !phone || !State || !City || !Address) {
      alert("Please fill in all fields before saving.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");

      await axios.put(
        "http://localhost:5000/api/patient/profile",
        { ...formData, profileCompleted: true },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Profile updated successfully!");
      navigate("/patient_dashboard");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile. Please try again.");
    }
  };

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  const fields = [
    { name: "name", label: "Full Name", type: "text" },
    { name: "age", label: "Age", type: "number" },
    { name: "phone", label: "Phone Number", type: "text" },
    { name: "State", label: "State", type: "text" },
    { name: "City", label: "City", type: "text" },
    { name: "Address", label: "Address", type: "text" },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Complete Your Profile
        </h2>

        {fields.map((field) => (
          <div className="mb-4" key={field.name}>
            <label className="block mb-1 font-medium">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        ))}

        <button
          onClick={handleSave}
          className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileUpdate;
