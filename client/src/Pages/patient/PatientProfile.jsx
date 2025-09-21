import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/PatientHeader";
import api from "../../api/axiosInstance"
import Preloader from "../../components/Preloader";



const PatientProfile = () => {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    phone: "",
    state: "",
    city: "",
    email: "",
    abhaId: "",
    aadhaar: "",
    address: "",
    dob: "",
    gender: "",
    emergencyName: "",
    emergencyNumber: "",
    avatar: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchPatient = async () => {
      try {
        const res = await api.get("/api/patient/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPatient(res.data);
      } catch (err) {
        setError("Failed to load patient details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatient();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPatient((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await api.put(
        "/api/patient/profile",
        {
          name: patient.name,
          age: patient.age,
          phone: patient.phone,
          state: patient.state,
          city: patient.city,
          abhaId: patient.abhaId,
          aadhaar: patient.aadhaar,
          address: patient.address,
          dob: patient.dob,
          gender: patient.gender,
          emergencyName: patient.emergencyName,
          emergencyNumber: patient.emergencyNumber,
          complete: true,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  if (loading) return <Preloader></Preloader>;
  if (error) return <p>{error}</p>;
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 ml-2 mt-1 flex flex-col">
        {/* Header */}
        <Header isProfileComplete={patient.complete} title={`Welcome ${patient.name || ""}!`} />

        {/* Main Content */}
        <div className="bg-white font-display  text-[#374151] mt-2 flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-[#1F2937]  mb-8">
              Patient Profile
            </h1>

            {/* Profile Header */}
            <div className=" bg-white border-2 shadow-lg shadow-blue-500 border-[#007f80] rounded-xl   overflow-hidden mb-8">
              <div className="p-6 flex items-center gap-6">
                <div
                  className="size-24 rounded-full bg-cover bg-center border-4 border-primary/30"
                  style={{ backgroundImage: `url(${patient.avatar})` }}
                ></div>
                <div className="text-[#1F2937] w-[80%] h-[100%]">
                  <h2 className="text-2xl font-bold text-[#1F2937] ">
                    {patient.name}
                  </h2>
                  <p className="text-sm text-[#1F2937] font-medium">
                    {patient.phone} | {patient.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Basic Details */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg shadow-blue-500 border-[#007f80] border-2 p-6">
                  <h3 className="text-xl font-bold text-[#1F2937]  mb-4">
                    Basic Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-[#1F2937] ">
                        Name
                      </label>
                      <p className="text-base font-semibold mt-1">{patient.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1F2937] ">
                        Phone Number
                      </label>
                      <p className="text-base font-semibold mt-1">{patient.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1F2937] ">
                        Email
                      </label>
                      <p className="text-base font-semibold mt-1">{patient.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Update Profile Form */}
              <div className="bg-[#97f1f162] rounded-xl shadow-sm  dark:border-primary/30 p-6">
                <h3 className="text-xl font-bold text-[#1F2937]  mb-6">
                  Upgrade Profile
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="abhaId" className="block text-sm font-medium mb-1">
                        ABHA ID
                      </label>
                      <input
                        id="abhaId"
                        type="text"
                        required={true}
                        placeholder="Enter ABHA ID"
                        value={patient.abhaId || ""}
                        onChange={handleChange}
                        className="form-input w-full rounded-lg border border-primary/30 dark:border-primary/40 focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-2.5 transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="aadhaar" className="block text-sm font-medium mb-1">
                        Aadhaar Card Number
                      </label>
                      <input
                        id="aadhaar"
                        type="text"
                        required={true}
                        placeholder="Enter Aadhaar Number"
                        value={patient.aadhaar || ""}
                        onChange={handleChange}
                        className="form-input w-full rounded-lg border border-primary/30 dark:border-primary/40 focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-2.5 transition"
                      />
                    </div>
                  </div>
                    {/* Row: Name & Age */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Enter Name"
                          value={patient.name || ""}
                          onChange={handleChange}
                          className="form-input w-full rounded-lg border border-primary/30 dark:border-primary/40 focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-2.5 transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="age" className="block text-sm font-medium mb-1">
                          Age
                        </label>
                        <input
                          id="age"
                          type="number"
                          required
                          placeholder="Enter Age"
                          value={patient.age || ""}
                          onChange={handleChange}
                          className="form-input w-full rounded-lg border border-primary/30 dark:border-primary/40 focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-2.5 transition"
                        />
                      </div>
                    </div>

                    {/* Row: Phone & State */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="text"
                          required
                          placeholder="Enter Phone"
                          value={patient.phone || ""}
                          onChange={handleChange}
                          className="form-input w-full rounded-lg border border-primary/30 dark:border-primary/40 focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-2.5 transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium mb-1">
                          State
                        </label>
                        <input
                          id="state"
                          type="text"
                          required
                          placeholder="Enter State"
                          value={patient.state || ""}
                          onChange={handleChange}
                          className="form-input w-full rounded-lg border border-primary/30 dark:border-primary/40 focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-2.5 transition"
                        />
                      </div>
                    </div>

                    {/* Row: City */}
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-1">
                        City
                      </label>
                      <input
                        id="city"
                        type="text"
                        required
                        placeholder="Enter City"
                        value={patient.city || ""}
                        onChange={handleChange}
                        className="form-input w-full rounded-lg border border-primary/30 dark:border-primary/40 focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-2.5 transition"
                      />
                    </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-1">
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      required={true}
                      placeholder="Enter Address"
                      value={patient.address || ""}
                      onChange={handleChange}
                      className="form-input w-full rounded-lg border border-primary/30 dark:border-primary/40 focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-2.5 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="dob" className="block text-sm font-medium mb-1">
                        Date of Birth
                      </label>
                      <input
                        id="dob"
                        type="date"
                        required={true}
                        value={patient.dob || ""}
                        onChange={handleChange}
                        className="form-input w-full rounded-lg border border-primary/30 dark:border-primary/40 focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-2.5 transition text-[#4B5563] dark:text-[#9CA3AF]"
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium mb-1">
                        Gender
                      </label>
                      <select
                        id="gender"
                        required={true}
                        value={patient.gender || ""}
                        onChange={handleChange}
                        className="form-select w-full rounded-lg border border-primary/30 dark:border-primary/40 focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-2.5 transition bg-transparent text-[#4B5563] dark:text-[#9CA3AF]"
                      >
                        <option value="">Select Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="emergencyName" className="block text-sm font-medium mb-1">
                        Emergency Contact Name
                      </label>
                      <input
                        id="emergencyName"
                        type="text"
                        required={true}
                        placeholder="Enter Name"
                        value={patient.emergencyName || ""}
                        onChange={handleChange}
                        className="form-input w-full rounded-lg border border-primary/30 dark:border-primary/40 focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-2.5 transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="emergencyNumber" className="block text-sm font-medium mb-1">
                        Emergency Contact Number
                      </label>
                      <input
                        id="emergencyNumber"
                        required={true}
                        type="text"
                        placeholder="Enter Number"
                        value={patient.emergencyNumber || ""}
                        onChange={handleChange}
                        className="form-input w-full overflow-y-hidden rounded-lg border border-primary/30 dark:border-primary/40 focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-2.5 transition"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="bg-[#007f80] text-white font-bold py-2.5 px-6 rounded-lg hover:bg-transparent hover:text-[#007f80] hover:border-1 hover:border-[#007f80] transition-all"
                    >
                      Upgrade Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
