"use client";

import React, { useState } from "react";
import {
  Calendar,
  Phone,
  Headphones,
  Car,
  Tag,
  MessageCircle,
} from "lucide-react";

const LeadForm = () => {
  // 1. State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Submission Handler
  const handleSubmit = async () => {
    // Basic Validation
    if (!formData.name || !formData.phone) {
      alert("Please enter both Name and Phone Number.");
      return;
    }

    setIsSubmitting(true);

    // Your specific Google Apps Script Web App URL
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxcsMAkj0w25SBUbHVNg9BDfJrAts58CIEotl-hO1NfYDGVjweFwSzmug6cza8erSGjcg/exec";

    try {
      // Using 'no-cors' mode as required for Google Apps Script redirects
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Reset form and notify user
      alert("Thank you! Your interest has been registered successfully.");
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full bg-white shadow-lg overflow-hidden font-sans border border-gray-100">
      {/* Top Bar */}
      <div className="flex bg-black text-white text-xs">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border-r border-gray-700 cursor-pointer hover:bg-zinc-900 transition-colors"
        >
          <Calendar size={15} />
          <span className="font-medium">Schedule Visit</span>
        </div>
        <a href="tel:+919090907712" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 cursor-pointer hover:bg-zinc-900 transition-colors">
          <Phone size={15} />
          <span className="font-medium">+91 90909 07712</span>
        </a>
      </div>

      <div className="p-4 space-y-4">
        <h2 className="text-lg font-bold text-center text-gray-900">
          Pre-Register here for Best Offers
        </h2>

        {/* Form Inputs */}
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name here..."
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
          />

          <div className="flex border border-gray-300 rounded overflow-hidden">
            <div className="flex items-center gap-1 px-2.5 bg-gray-50 border-r border-gray-300">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India"
                className="w-4 h-auto"
              />
              <span className="text-gray-600 text-xs">▼</span>
              <span className="text-gray-700 text-sm ml-0.5">+91</span>
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-3 py-2.5 text-sm focus:outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="mt-0.5 accent-gray-500 h-3.5 w-3.5"
          />
          <p className="text-[9px] text-gray-500 leading-tight">
            Please be informed that this website is not intended to facilitate
            any sales transactions. I understand and acknowledge that the
            project I am interested in hasn't yet secured RERA clearance. The
            primary purpose of this website is to generate interest and gather
            information. By providing my data, I consent to its use in
            accordance with the
            <a href="#" className="text-blue-500 underline ml-1">
              Privacy Policy | Terms & Conditions
            </a>
          </p>
        </div>

        {/* Primary Action Button */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-[#003380] hover:bg-[#002866] text-white text-sm font-semibold py-3 rounded-lg shadow-md transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Express Your Interest"}
        </button>

        {/* Icon Features Grid */}
        <div className="grid grid-cols-3 gap-1.5 py-3">
          <div className="flex flex-col items-center text-center space-y-1.5">
            <div className="p-1.5 border-2 border-black rounded-full">
              <Headphones size={20} className="text-cyan-500" />
            </div>
            <span className="text-[11px] font-semibold leading-tight">
              Instant Call Back
            </span>
          </div>

          <div className="flex flex-col items-center text-center space-y-1.5">
            <Car size={34} className="text-cyan-500" />
            <span className="text-[11px] font-semibold leading-tight">
              Free Site Visit
            </span>
          </div>

          <div className="flex flex-col items-center text-center space-y-1.5">
            <Tag size={34} className="text-cyan-500 rotate-90" />
            <span className="text-[11px] font-semibold leading-tight">
              Best Price
            </span>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a href="https://wa.me/919090907712" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white text-sm font-semibold py-3 rounded-lg shadow-md transition-all flex items-center justify-center gap-2">
          <MessageCircle size={16} fill="white" />
          Connect On WhatsApp
        </a>

        {/* Secondary Action Button */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-[#003380] hover:bg-[#002866] text-white text-sm font-semibold py-3 rounded-lg shadow-md transition-all disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Express Your Interest"}
        </button>
      </div>
    </div>
  );
};

export default LeadForm;