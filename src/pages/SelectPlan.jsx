import { useNavigate } from "react-router-dom";
import { useOrder } from "../store";
import PageHeader from "../components/PageHeader.jsx";
import { motion } from "framer-motion";

export default function SelectPlan() {
  const navigate = useNavigate();

  const plans = [
    { id: "basic", name: "Basic", price: 5, perks: ["Calls", "SMS"] },
    { id: "premium", name: "Premium", price: 10, perks: ["Calls", "SMS", "Voicemail", "Forwarding"] },
  ];

  const setPlan = useOrder((state) => state.setPlan);

  const handleSelect = (plan) => {
    setPlan(plan);
    navigate("/register");
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
      <div className="max-w-6xl mx-auto text-left">
      <motion.h1
        className="text-[25px] font-medium mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        Choose a plan
      </motion.h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            className="border rounded-xl p-6 bg-gray-200 dark:bg-gray-700 border-transparent"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="text-2xl font-bold my-2">${plan.price}/mo</p>
            <ul className="list-disc ml-5 mb-4 text-sm">
              {plan.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <button
              onClick={() => handleSelect(plan)}
              className="px-4 py-2 rounded-[15px] bg-[#22E552] text-white hover:brightness-95"
            >
              Select
            </button>
          </motion.div>
        ))}
      </div>
      </div>
    </motion.div>
  );
}
