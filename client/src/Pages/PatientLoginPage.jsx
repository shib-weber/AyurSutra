import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const PatientLoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // Backend returns { token, patient }
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("patient", JSON.stringify(res.data.patient));

      setLoading(false);
      navigate("/patient_dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed. Try again.");
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google Sign-In clicked");
    // Integrate Google OAuth here later if needed
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Patient Login</h2>
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

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className={`w-full py-2 rounded text-white ${
              loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="mb-2">Or sign in with</p>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientLoginPage;
