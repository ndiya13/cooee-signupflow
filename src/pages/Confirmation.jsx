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
      <div className="max-w-xl mx-auto">
        <motion.div
          className="rounded-2xl p-8 bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 shadow-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } }}
              className="w-16 h-16 rounded-full bg-[#22E552]/15 text-[#22E552] flex items-center justify-center mb-4"
            >
              <span className="text-2xl">🎉</span>
            </motion.div>
            <motion.h1
              className="text-3xl font-bold mb-2"
              variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
            >
              Success!
            </motion.h1>
            <motion.p className="text-gray-600 dark:text-gray-300 mb-6" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Your setup is complete. Here are your details:
            </motion.p>

            <motion.div
              className="w-full text-left space-y-3"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            >
              <motion.div
                className="flex items-center justify-between rounded-xl bg-gray-50 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-700 p-4"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <span className="text-sm text-gray-500 dark:text-gray-300">Number</span>
                <span className="font-mono text-lg text-[#22E552]">{number || "Not selected"}</span>
              </motion.div>
              <motion.div
                className="flex items-center justify-between rounded-xl bg-gray-50 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-700 p-4"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <span className="text-sm text-gray-500 dark:text-gray-300">Plan</span>
                <span className="font-medium">{plan?.name || "N/A"}</span>
              </motion.div>
              <motion.div
                className="flex items-center justify-between rounded-xl bg-gray-50 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-700 p-4"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <span className="text-sm text-gray-500 dark:text-gray-300">User</span>
                <span className="font-medium">{user?.name || "Guest"}</span>
              </motion.div>
            </motion.div>

            <motion.div className="mt-8" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <motion.button
                onClick={handleReset}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 h-[48px] rounded-[15px] bg-[#22E552] text-[#1E1E1E] font-semibold focus:outline-none focus:ring-2 focus:ring-[#22E552]/70 shadow-[0_8px_24px_-8px_rgba(34,229,82,0.6)]"
              >
                Back to Home
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
