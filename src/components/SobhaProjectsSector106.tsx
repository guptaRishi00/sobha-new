"use client";

import React, { useState } from "react";
import { Building2, Landmark, Trophy, Wallet, ArrowRight, Layout, Sparkles, ShoppingBag } from "lucide-react";
import EnquireModal from "./EnquireModal";

const SobhaProjectsSector106 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#003380] mb-2 text-center uppercase tracking-tight">
            New Launches in Sector 106, Gurgaon
          </h2>
          <div className="w-24 h-1 bg-gray-200 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-1 bg-[#003380]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: SOBHA ALTUS */}
          <div className="bg-[#f8faff] rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
            <div className="bg-[#003380] p-6 text-white text-center">
              <h3 className="text-2xl font-bold tracking-tight">SOBHA ALTUS</h3>
              <p className="text-sm opacity-90 mt-1">3 & 4 BHK Luxury Apartments</p>
            </div>
            
            <div className="p-8 flex-1 space-y-6">
              <div className="text-center">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Starting From</span>
                <p className="text-3xl font-bold text-[#003380]">₹ 6.50 Cr*</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Landmark className="text-[#003380] mt-1 shrink-0" size={20} />
                  <p className="text-sm text-gray-700"><strong>Grand Arrival:</strong> Exclusive drop-off with fountain, grand porch, and lobby experience.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="text-[#003380] mt-1 shrink-0" size={20} />
                  <p className="text-sm text-gray-700"><strong>The Waverly Club:</strong> World-class 46,080.5 Sq. Ft. clubhouse with elite amenities.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="text-[#003380] mt-1 shrink-0" size={20} />
                  <p className="text-sm text-gray-700"><strong>Tower Structure:</strong> 3 premium towers with contemporary parametric design.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="text-[#003380] mt-1 shrink-0" size={20} />
                  <p className="text-sm text-gray-700"><strong>Elite Quality:</strong> High-standard residential towers with superior construction quality.</p>
                </div>
              </div>

              <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                <p className="text-[10px] font-bold text-[#003380] uppercase mb-2">Configuration Details</p>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600">
                  <p>• 2 Towers: 3B + G + 26 Floors</p>
                  <p>• 1 Tower: 18+ S + 11 Floors</p>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#003380] text-white font-bold py-3.5 rounded-lg hover:bg-[#002866] transition-colors shadow-lg active:scale-95"
              >
                Express Interest in Altus
              </button>
            </div>
          </div>

          {/* Card 2: SOBHA STRADA */}
          <div className="bg-[#fcfcfc] rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
            <div className="bg-gray-900 p-6 text-white text-center">
              <h3 className="text-2xl font-bold tracking-tight">SOBHA STRADA</h3>
              <p className="text-sm opacity-90 mt-1">Serviced Studio Residences</p>
            </div>
            
            <div className="p-8 flex-1 space-y-6">
              <div className="text-center">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Starting From</span>
                <p className="text-3xl font-bold text-gray-900">₹ 2.0 Cr*</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Layout className="text-gray-800 mt-1 shrink-0" size={20} />
                  <p className="text-sm text-gray-700"><strong>Block I:</strong> 251 one-bed serviced residences across a 1.64-acre central plaza.</p>
                </div>
                <div className="flex items-start gap-3">
                  <ShoppingBag className="text-gray-800 mt-1 shrink-0" size={20} />
                  <p className="text-sm text-gray-700"><strong>Retail Plaza:</strong> Integrated high-street retail across Ground + 2 levels.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="text-gray-800 mt-1 shrink-0" size={20} />
                  <p className="text-sm text-gray-700"><strong>Tall Structure:</strong> Modern 31-floor tower (4 Basements + G + 31 Floors).</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="text-gray-800 mt-1 shrink-0" size={20} />
                  <p className="text-sm text-gray-700"><strong>Lifestyle Zones:</strong> Dedicated 3rd floor for amenities and 4th floor for work & wellness.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-[10px] font-bold text-gray-900 uppercase mb-2">Development Highlights</p>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600">
                  <p>• Work & Wellness Zone</p>
                  <p>• Serviced: 6th to 31st Floor</p>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-lg hover:bg-black transition-colors shadow-lg active:scale-95"
              >
                Express Interest in Strada
              </button>
            </div>
          </div>
        </div>
      </div>

      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default SobhaProjectsSector106;