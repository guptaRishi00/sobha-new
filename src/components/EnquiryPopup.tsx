"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const EnquiryPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    // 1. State for form inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Show popup after a short delay on page load
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // 2. Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // 3. Submission Handler
    const handleSubmit = async () => {
        // Basic validation
        if (!formData.name || !formData.phone) {
            alert("Please enter both Name and Phone Number.");
            return;
        }

        setIsSubmitting(true);

        // Your specific Google Apps Script Web App URL
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxcsMAkj0w25SBUbHVNg9BDfJrAts58CIEotl-hO1NfYDGVjweFwSzmug6cza8erSGjcg/exec";

        try {
            // Use 'no-cors' mode for Google Apps Script redirects
            await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            alert("Thank you! Your interest has been registered successfully.");

            // Reset form and close popup
            setFormData({ name: "", email: "", phone: "" });
            setIsOpen(false);
        } catch (error) {
            console.error("Submission Error:", error);
            alert("There was an error submitting your request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            name="name"
                            placeholder="Name*"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-b border-gray-300 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-800 transition-colors"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
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
                            name="phone"
                            placeholder="Phone Number*"
                            value={formData.phone}
                            onChange={handleChange}
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
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-[#003380] hover:bg-[#002866] text-white text-sm font-bold py-3 rounded-lg shadow-md transition-all active:scale-[0.98] uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Submitting..." : "SUBMIT"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EnquiryPopup;