import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../store";
import PageHeader from "../components/PageHeader.jsx";
import { motion } from "framer-motion";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const navigate = useNavigate();

  const setUser = useOrder((state) => state.setUser);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      return;
    }

    if (form.password.length < 6) {
      return;
    }

    setUser(form);
    navigate("/payment");
  };

  return (
    <motion.div
      className="p-6 relative min-h-screen bg-white dark:bg-[#1E1E1E] text-[#1E1E1E] dark:text-white font-poppins transition-colors duration-300"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <PageHeader />
      <div className="max-w-xl mx-auto text-left">
      <motion.h1
        className="text-[25px] font-medium mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        Register
      </motion.h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-3 rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address (optional)"
          value={form.address}
          onChange={handleChange}
          className="w-full border p-3 rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
        />
        <button
          type="submit"
          className="w-full h-[48px] rounded-[15px] bg-[#22E552] text-[#1E1E1E] font-semibold hover:brightness-95"
        >
          Continue to Payment
        </button>
      </form>
      </div>
    </motion.div>
  );
}
