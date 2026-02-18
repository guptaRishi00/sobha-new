"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import EnquireModal from "./EnquireModal";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-12 px-6 lg:px-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Content Column */}
        <div className="flex-1 space-y-5">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#003380] tracking-tight">
            About Sobha New Launch Sector 63A
          </h2>

          <div className="text-[#333333] text-sm leading-relaxed space-y-4">
            <p>
              Sobha New Launch Sector 63A presents an elegant new benchmark of
              luxury living at the prestigious Golf Course Extension Road.
              Spread across a sprawling 12-acre estate, Sobha Sector 63A is
              crafted as a rare low-density residential community featuring just
              four standalone high-rise towers with over 600 exclusive
              residences. Phase 1 introduces two premium towers with
              approximately 325 residences, offering only four apartments per
              floor. Each home is a 100% corner residence designed to welcome
              abundant natural light, ventilation, and uninterrupted views of
              the Aravalis and the Gurgaon skyline, reinforcing the refined
              living standards associated with Sobha Gurgaon.
            </p>

            {/* Expanded Content Section */}
            {isExpanded && (
              <p className="animate-in fade-in slide-in-from-top-2 duration-300">
                Located at Sobha Golf Course Extention Road, the development
                offers spacious 3 BHK, 4 BHK, and 4 BHK + DH residences ranging
                from 2300 sq.ft. to 3000 sq.ft., thoughtfully planned for
                comfort, privacy, and sophistication. Surrounded by lush
                landscaped greens and open spaces, the project creates a
                peaceful lifestyle environment while ensuring seamless
                connectivity to Gurgaon's major business and lifestyle hubs.
                Blending architectural excellence with a prime location, this
                iconic address delivers a luxurious living experience along with
                strong long-term investment potential.
              </p>
            )}
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-[#003380] text-sm font-bold hover:underline"
          >
            {isExpanded ? (
              <>
                Read less <ChevronUp size={16} />
              </>
            ) : (
              <>
                Read more <ChevronDown size={16} />
              </>
            )}
          </button>

          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#003380] text-white px-10 py-3 rounded-md font-bold text-sm shadow-md hover:bg-[#002866] transition-colors"
            >
              Express Your Interest
            </button>
          </div>
        </div>

        {/* Right Image Column with Decorative Frame */}
        <div className="relative flex-1 group mt-8 lg:mt-0">
          <div className="absolute top-4 left-4 w-full h-full border border-gray-200 -z-10" />
          <div className="relative overflow-hidden shadow-[25px_25px_50px_-15px_rgba(0,0,0,0.4)]">
            <img
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Luxury Interior View"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      <EnquireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default AboutSection;
