import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosInstance"

const PatientRegistrationPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill all fields");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
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
      const res = await api.post("/api/auth/register", {
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      console.log(res)

      // Save token + user to localStorage
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

  // Google signup handler (placeholder)
  const handleGoogleSignUp = () => {
    console.log("Google Sign-Up clicked");
    navigate('/maintainance')
    // TODO: integrate Google OAuth later
  };

  return (
    <div className="font-display bg-background-light overflow-x-hidden text-text-light min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-placeholder-light dark:text-placeholder-dark">
              Already have an account?{" "}
              <a
                href="/register"
                className="font-semibold text-[#007f80] hover:underline"
              >
                Log in
              </a>
            </p>
          </div>

          {/* Registration Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-6 shadow-lg shadow-[#007f80] dark:bg-background-dark p-6 rounded-xl "
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-3 py-3 border-2 border-subtle-light dark:border-subtle-dark rounded-lg bg-background-light dark:bg-background-dark placeholder-placeholder-light dark:placeholder-placeholder-dark focus:outline-none focus:ring-2 focus:ring-[#007f80] focus:border-[#007f80] sm:text-sm"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded focus:ring focus:ring-emerald-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 hover:text-emerald-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block mb-1 font-medium">Confirm Password</label>
              <input
                type={showRePassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Re-enter your password"
                className="w-full px-4 py-2 border rounded focus:ring focus:ring-emerald-300"
              />
              <button
                type="button"
                onClick={() => setShowRePassword(!showRePassword)}
                className="absolute right-3 top-9 text-gray-500 hover:text-emerald-600"
              >
                {showRePassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptedTerms"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="acceptedTerms" className="text-sm">
                I accept the{" "}
                <a href="/terms" className="text-[#007f80] underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className={`w-full py-3 px-4 rounded-lg text-white font-semibold ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#007f80] hover:bg-[#006666]"
                } shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007f80] transition-colors`}
                disabled={loading}
              >
                {loading ? "Registering..." : "Sign Up"}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <span className="h-px bg-subtle-light dark:bg-subtle-dark w-full" />
            <span className="px-3 text-sm text-placeholder-light dark:text-placeholder-dark">
              OR
            </span>
            <span className="h-px bg-subtle-light dark:bg-subtle-dark w-full" />
          </div>

          {/* Google Signup */}
          <div>
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-subtle-light dark:border-subtle-dark rounded-lg bg-white dark:bg-background-dark text-gray-700 dark:text-text-dark font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-subtle-dark transition-colors"
            >
              <FcGoogle className="w-5 h-5" />
              Register with Google
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PatientRegistrationPage;
