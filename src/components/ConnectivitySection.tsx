"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  MapPin,
  Train,
} from "lucide-react";

const connectivityData = {
  Connectivity: [
    { name: "Golf Course Extension Road", time: "9 Mins" },
    { name: "Rapid Metro", time: "12 Mins" },
    { name: "Huda City Centre Metro Station", time: "16 Mins" },
    { name: "IGI Airport", time: "26 Mins" },
  ],
  "Education Hub": [
    { name: "IILM University", time: "10 Mins" },
    { name: "Gurugram University", time: "12 Mins" },
    { name: "Kamla International School", time: "13 Mins" },
    { name: "Sushant College of Arts & Architecture", time: "14 Mins" },
    { name: "GD Goenka Public School", time: "22 Mins" },
  ],
  Healthcare: [
    { name: "Anand Hospital Gurgaon", time: "8 Mins" },
    { name: "Artemis Hospital", time: "12 Mins" },
    { name: "Paras Hospitals", time: "14 Mins" },
    { name: "Medanta - The Medicity", time: "20 Mins" },
    { name: "Prakash Hospital", time: "28 Mins" },
  ],
  "Malls/ Shopping": [
    { name: "Worldmark Gurgaon", time: "8 Mins" },
    { name: "Gurgaon Central Mall", time: "14 Mins" },
  ],
  "Tech Park": [{ name: "Udyog Vihar", time: "20 Mins" }],
};

const ConnectivitySection = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof connectivityData>("Connectivity");

  const tabs = [
    { id: "Connectivity", icon: Train },
    { id: "Education Hub", icon: GraduationCap },
    { id: "Healthcare", icon: Stethoscope },
    { id: "Malls/ Shopping", icon: ShoppingBag },
    { id: "Tech Park", icon: Briefcase },
  ];

  return (
    <section className="py-16 px-6 bg-[#F3F6F9]">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all rounded-lg border ${
                activeTab === tab.id
                  ? "bg-[#003380] text-white border-[#003380] shadow-md"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <tab.icon
                size={18}
                className={
                  activeTab === tab.id ? "text-white" : "text-[#003380]"
                }
              />
              {tab.id}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 min-h-[250px] content-start">
          {connectivityData[activeTab].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-full group-hover:bg-[#003380] transition-colors">
                  <MapPin
                    size={16}
                    className="text-[#003380] group-hover:text-white"
                  />
                </div>
                <span className="text-gray-800 font-medium text-[15px]">
                  {item.name}
                </span>
              </div>
              <span className="text-[#003380] font-bold text-sm whitespace-nowrap bg-blue-50 px-3 py-1 rounded-full">
                — {item.time}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#003380] hover:bg-[#002866] text-white font-bold py-4 px-12 rounded-lg shadow-lg transition-all active:scale-95 border-b-4 border-[#d4a017]">
            Express Your Interest
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectivitySection;
