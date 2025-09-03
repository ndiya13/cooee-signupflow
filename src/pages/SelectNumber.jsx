// src/pages/SelectNumber.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useOrder } from "../store";
import Stepper from "../components/stepper.jsx";
import DarkModeToggle from "../components/DarkModeToggle.jsx";

export default function SelectNumber() {
  const [country, setCountry] = useState("US");
  const [selectedIdx, setSelectedIdx] = useState(null);
  const navigate = useNavigate();
  const setNumber = useOrder((s) => s.setNumber);

  const countries = [
    { code: "US", name: "USA" },
    { code: "CA", name: "CANADA" },
    { code: "AU", name: "AUSTRALIA" },
    { code: "NL", name: "NETHERLANDS" },
  ];

  const numbers = {
    US: ["+1 415 555 1001", "+1 415 555 1002", "+1 415 555 1003", "+1 415 555 1004", "+1 415 555 1005", "+1 415 555 1006", "+1 415 555 1007", "+1 415 555 1008"],
    CA: ["+1 647 555 2001", "+1 647 555 2002", "+1 647 555 2003", "+1 647 555 2004", "+1 647 555 2005", "+1 647 555 2006", "+1 647 555 2007", "+1 647 555 2008"],
    AU: ["+61 2 5555 3001", "+61 2 5555 3002", "+61 2 5555 3003", "+61 2 5555 3004", "+61 2 5555 3005", "+61 2 5555 3006", "+61 2 5555 3007", "+61 2 5555 3008"],
    NL: ["+31 20 555 4001", "+31 20 555 4002", "+31 20 555 4003", "+31 20 555 4004", "+31 20 555 4005", "+31 20 555 4006", "+31 20 555 4007", "+31 20 555 4008"],
  };

  function handleSelectNumber(num, idx) {
    setSelectedIdx(idx);
    setNumber(num);
  }

  function continueWithNumber() {
    if (selectedIdx == null) return;
    navigate("/plan");
  }

  const handleCountryChange = (countryCode) => {
    setCountry(countryCode);
    setSelectedIdx(null);
  };

  const PageHeader = () => (
    <div className="mb-10">
      <div className="mx-auto max-w-[1353px] w-full h-[80px] rounded-[40px] border border-white/10 bg-[#000000]/[0.15] backdrop-blur-md shadow-sm px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="font-poppins font-semibold text-[30px] leading-none tracking-[-1px] text-[#1E1E1E] dark:text-[#22E552] select-none">cooee</div>
          <div className="translate-y-[1px]"><Stepper /></div>
        </div>
        <DarkModeToggle />
      </div>
    </div>
  );

  return (

    <div className="p-6 relative min-h-screen 
     bg-white dark:bg-[#1E1E1E] 
     text-[#1E1E1E] dark:text-white 
     font-poppins transition-colors duration-300">

      <PageHeader />

      <div className="max-w-6xl mx-auto text-left">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
          >
        <h2 className="text-[25px] font-medium mb-6">Choose your country and number:</h2>
        </motion.div>

        {/* Country buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {countries.map((c) => (
            <button
              key={c.code}
              onClick={() => handleCountryChange(c.code)}
              className={`w-[250px] h-[75px] rounded-[15px] text-[25px] font-semibold border transition-colors
    ${country === c.code
                  ? "bg-[#22E552] text-white border-[#22E552]"
                  : "bg-gray-200 dark:bg-gray-700 text-[#1E1E1E] dark:text-gray-100 border-transparent"}
  `}
            >
              {c.name}
            </button>

          ))}
        </div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-[25px] font-medium text-[#1E1E1E] dark:text-white">
              Select a number:
            </h1>
          </motion.div>

          {/* Numbers grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {numbers[country].map((num, idx) => (
              <button
                key={`${country}-${idx}`}
                onClick={() => handleSelectNumber(num, idx)}
                className={`w-full h-[75px] rounded-[20px] text-[25px] font-semibold border transition-colors
  ${selectedIdx === idx
                    ? "bg-[#22E552] text-white border-[#22E552]"
                    : "bg-gray-200 dark:bg-gray-700 text-[#1E1E1E] dark:text-gray-100 border-transparent"}
`}

              >
                {num}
              </button>
            ))}
          </div>

        </div>

        {selectedIdx != null && (
          <div className="mt-8">
            <button
              onClick={continueWithNumber}
              className="w-[200px] h-[48px] rounded-[15px] bg-[#22E552] text-[#1E1E1E] font-semibold "
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
