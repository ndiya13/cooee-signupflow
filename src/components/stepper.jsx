import React from "react";
import { useLocation } from "react-router-dom";

export default function Stepper() {
    const location = useLocation();

    const steps = [
        { path: "/", label: "Number" },
        { path: "/plan", label: "Plan" },
        { path: "/register", label: "Register" },
        { path: "/payment", label: "Payment" },
        { path: "/confirmation", label: "Done" },
    ];

    return (
        <div className="flex items-center gap-3 pl-[290px]">
            {steps.map((step, index) => {
                const active = location.pathname === step.path;
                return (
                    <div
                        key={step.path}
                        className={`flex items-center justify-center w-[100px] h-[50px] rounded-[8px] text-[15px] font-semibold font-poppins tracking-[-0.01px]
                        ${active ? "bg-[#1E1E1E] text-white" : "bg-[#22E552] text-[#1E1E1E]"}`}
                    >
                        {index + 1}. {step.label}
                    </div>
                );
            })}
        </div>
    );
}
