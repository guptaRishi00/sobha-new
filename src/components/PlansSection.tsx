"use client";

import React, { useState } from "react";
import EnquireModal from "./EnquireModal";

const PlansSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Master Plan Card */}
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-[#003380] mb-2 text-center">
              Tentative Master Plan Layout
            </h2>
            <div className="w-20 h-1 bg-gray-200 relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-1 bg-[#003380]" />
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
            {/* Blurred Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center blur-[6px] scale-110"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80')",
              }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="mb-4 bg-[#003380] text-white text-xs font-bold py-2 px-6 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 active:scale-95"
              >
                Express Your Interest
              </button>
              <h3 className="text-white text-2xl font-bold text-center tracking-tight">
                Request Master Plan Layout
              </h3>
            </div>
          </div>
        </div>

        {/* Unit Plan Card */}
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-[#003380] mb-2 text-center">
              Tentative Unit Plan Layout
            </h2>
            <div className="w-20 h-1 bg-gray-200 relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-1 bg-[#003380]" />
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
            <div
              className="absolute inset-0 bg-cover bg-center blur-[6px] scale-110"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="mb-4 bg-[#003380] text-white text-xs font-bold py-2 px-6 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 active:scale-95"
              >
                Express Your Interest
              </button>
              <h3 className="text-white text-2xl font-bold text-center tracking-tight">
                Request Unit Plan Layout
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Reusable Enquire Modal */}
      <EnquireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default PlansSection;
