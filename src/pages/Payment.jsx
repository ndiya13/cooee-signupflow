import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../store";
import PageHeader from "../components/PageHeader.jsx";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Payment() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const plan = useOrder((state) => state.plan);

  const handlePayment = () => {
    setLoading(true);
    toast.loading("Processing payment...", { id: "payment" });

    setTimeout(() => {
      setLoading(false);
      toast.success("Payment successful!", { id: "payment" });
      toast.success("Redirecting to confirmation...");
      navigate("/confirmation");
    }, 1500);
  };


  if (!plan) {
    toast.error("No plan selected. Redirecting to plan selection...");
    navigate("/plan");
    return null;
  }

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
        Payment
      </motion.h1>
      <motion.div
        className="rounded-2xl p-6 mb-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 ease-out"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        whileHover={{ y: -2 }}
      >
        <p className="mb-2">Plan: <strong>{plan.name}</strong></p>
        <p className="mb-2">Amount: <strong>${plan.price} / month</strong></p>
        <p className="mb-2">Method: <strong>Mock Payment</strong></p>
      </motion.div>

      <motion.button
        onClick={handlePayment}
        disabled={loading}
        className="w-full h-[48px] rounded-[15px] bg-[#22E552] text-[#1E1E1E] font-semibold hover:brightness-95 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#22E552]/70 shadow-[0_8px_24px_-8px_rgba(34,229,82,0.6)]"
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.01 }}
      >
        {loading ? "Processing..." : "Pay Now"}
      </motion.button>
      </div>
    </motion.div>
  );
}
