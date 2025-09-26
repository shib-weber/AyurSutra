import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosInstance"

const PatientLoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
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
      const res = await api.post("api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // Save login data
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
    console.log("Google Login clicked");
    // Later integrate Google OAuth
    navigate('/maintainance')
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
              Patient Login
            </h2>
            <p className="mt-2 text-sm text-placeholder-light dark:text-placeholder-dark">
              Don’t have an account?{" "}
              <a
                href="/new_register"
                className="font-semibold text-[#007f80] hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-6 shadow-lg shadow-[#007f80] dark:bg-background-dark p-6 rounded-xl "
          >
            <div className="space-y-4">
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
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                  className="w-full px-3 py-3 border-2 border-subtle-light dark:border-subtle-dark rounded-lg bg-background-light dark:bg-background-dark placeholder-placeholder-light dark:placeholder-placeholder-dark focus:outline-none focus:ring-2 focus:ring-[#007f80] focus:border-[#007f80] sm:text-sm"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-10 text-gray-500 hover:text-emerald-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <p className=" text-blue-700 text-right hover:underline">Forget Password?</p>

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
                {loading ? "logging in ..." : "Login"}
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

          {/* Google Login */}
          <div>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-subtle-light dark:border-subtle-dark rounded-lg bg-white dark:bg-background-dark text-gray-700 dark:text-text-dark font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-subtle-dark transition-colors"
            >
              <FcGoogle className="w-5 h-5" />
              Sign in with Google
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PatientLoginPage;
