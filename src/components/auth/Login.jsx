import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { login } from "../../https/index"; // ✅ import from axios config

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      enqueueSnackbar("Login successful!", { variant: "success" });
      navigate("/dashboard");
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message || "Login failed, please try again.";
      enqueueSnackbar(message, { variant: "error" });
    },
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-green-200 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-6">
          Login to Quran Academy
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            disabled={loginMutation.isLoading}
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-300"
          >
            {loginMutation.isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-green-700 font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
