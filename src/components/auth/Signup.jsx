import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import api from "../../https"; // ✅ use axios instance

const signup = async (formData) => {
  const res = await api.post("/users/signup", formData);
  return res.data;
};

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "user", // ✅ add this default
  });

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      enqueueSnackbar("Signup successful! Please log in.", {
        variant: "success",
      });
      navigate("/login");
    },
    onError: (error) => {
      const message = error?.response?.data?.message || "Signup failed";
      enqueueSnackbar(message, { variant: "error" });
    },
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    signupMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-green-200 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-6">
          Join Quran Academy
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
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
            name="phone"
            type="text"
            placeholder="Phone"
            required
            value={formData.phone}
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
            disabled={signupMutation.isLoading}
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-300"
          >
            {signupMutation.isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-green-700 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
