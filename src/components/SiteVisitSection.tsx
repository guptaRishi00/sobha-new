"use client";

import React from "react";
import { User } from "lucide-react";

const SiteVisitSection = () => {
  return (
    <section className="py-16 px-6 bg-[#F3F6F9]">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        {/* Left Side: Schedule Form */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#003380] mb-8 tracking-tight">
            Schedule a Site Visit
          </h2>

          <form className="space-y-5">
            {/* Name Input */}
            <div className="relative">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Name*"
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#003380] outline-none text-sm transition-all"
              />
            </div>

            {/* Phone Input */}
            <div className="flex border border-gray-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-[#003380]">
              <div className="flex items-center gap-2 px-4 bg-gray-50 border-r border-gray-200">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="India"
                  className="w-5"
                />
                <span className="text-sm font-medium text-gray-700">+91</span>
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 px-4 py-4 outline-none text-sm"
              />
            </div>

            {/* Disclaimer Text */}
            <div className="flex gap-3 items-start">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1 h-4 w-4 accent-[#003380] rounded"
              />
              <p className="text-[10px] text-gray-500 leading-normal">
                Please be informed that this website is not intended to
                facilitate any sales transactions. I understand and acknowledge
                that the project I am interested in hasn't yet secured RERA
                clearance. The primary purpose of this website is to generate
                interest and gather information. By providing my data, I consent
                to its use in accordance with the{" "}
                <span className="text-blue-500 underline cursor-pointer">
                  Privacy Policy | Terms & Conditions
                </span>
                .
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full md:w-56 bg-[#003380] text-white font-bold py-4 rounded-lg shadow-lg hover:bg-[#002866] transition-all active:scale-95 uppercase tracking-wider text-sm">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side: Architectural Visual */}
        <div className="flex-1 relative min-h-[300px] md:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop"
            alt="Sobha Luxury Entrance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle Overlay to match the screenshot vibe */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default SiteVisitSection;
