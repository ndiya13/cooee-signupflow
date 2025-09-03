import { useOrder } from "../store";
import PageHeader from "../components/PageHeader.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Confirmation() {
  const { number, plan, user, reset } = useOrder();
  const navigate = useNavigate();

  const handleReset = () => {
    reset();
    navigate("/");
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
      <div className="max-w-xl mx-auto text-center">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        🎉 Success!
      </motion.h1>

      <p className="text-lg mb-2">Your number:</p>
      <p className="text-2xl font-mono text-[#22E552] mb-4">
        {number || "No number selected"}
      </p>

      <p className="mb-2">Plan: <strong>{plan?.name || "N/A"}</strong></p>
      <p className="mb-6">Welcome, <strong>{user?.name || "Guest"}</strong>!</p>

      <motion.button onClick={handleReset} className="px-6 h-[48px] rounded-[15px] bg-[#22E552] text-[#1E1E1E] font-semibold hover:brightness-95" whileTap={{ scale: 0.98 }}>
        Back to Home
      </motion.button>
      </div>
    </motion.div>
  );
}
