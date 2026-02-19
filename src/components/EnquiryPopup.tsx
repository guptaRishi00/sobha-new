"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const EnquiryPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after a short delay on page load
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-xl shadow-2xl w-[90%] max-w-md mx-auto p-6 sm:p-8 animate-in zoom-in-95 duration-300">
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                >
                    <X size={22} />
                </button>

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="text-2xl font-bold text-gray-900">Schedule a Site Visit</h2>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    {/* Name */}
                    <div>
                        <input
                            type="text"
                            placeholder="Name*"
                            className="w-full border-b border-gray-300 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-800 transition-colors"
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex items-center border-b border-gray-300">
                        <div className="flex items-center gap-1 pr-3">
                            <img
                                src="https://flagcdn.com/w20/in.png"
                                alt="India"
                                className="w-5 h-auto"
                            />
                            <span className="text-gray-500 text-xs">▼</span>
                            <span className="text-gray-700 text-sm ml-0.5">+91</span>
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="flex-1 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    {/* Disclaimer */}
                    <div className="flex gap-2 pt-1">
                        <input
                            type="checkbox"
                            defaultChecked
                            className="mt-0.5 accent-gray-500 h-3.5 w-3.5 shrink-0"
                        />
                        <p className="text-[9px] text-gray-500 leading-tight">
                            Please be informed that this website is not intended to facilitate
                            any sales transactions. I understand and acknowledge that the
                            project I am interested in hasn&apos;t yet secured RERA clearance.
                            The primary purpose of this website is to generate interest and
                            gather information. By providing my data, I consent to its use in
                            accordance with the{" "}
                            <a href="#" className="text-blue-500 underline">
                                Privacy Policy | Terms &amp; Conditions
                            </a>
                        </p>
                    </div>

                    {/* Express Interest Button */}
                    <button className="w-full bg-[#003380] hover:bg-[#002866] text-white text-sm font-bold py-3 rounded-lg shadow-md transition-all active:scale-[0.98] uppercase tracking-wider">
                        SUBMIT
                    </button>


                </div>
            </div>
        </div>
    );
};

export default EnquiryPopup;
