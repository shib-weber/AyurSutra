import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const PatientRegistrationPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rePassword: "",
    acceptedTerms: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password || !formData.rePassword) {
      setError("Please fill all fields");
      return;
    }
    if (formData.password !== formData.rePassword) {
      setError("Passwords do not match");
      return;
    }
    if (!formData.acceptedTerms) {
      setError("You must accept the Terms & Conditions");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          email: formData.email,
          password: formData.password,
          repassword: formData.rePassword,
        }
      );

      console.log(res)
      // Backend returns { token, patient }
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("patient", JSON.stringify(res.data.patient));

      setLoading(false);
      navigate("/patient_dashboard");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Registration failed. Try again."
      );
      setLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign-Up clicked");
    // You can integrate Google OAuth here later
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter password"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Re-enter Password</label>
            <input
              type="password"
              name="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Re-enter password"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <label>I accept the Terms & Conditions</label>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className={`w-full py-2 rounded text-white ${
              loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="mb-2">Or sign up with</p>
          <button
            onClick={handleGoogleSignUp}
            className="flex items-center justify-center w-full border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientRegistrationPage;
