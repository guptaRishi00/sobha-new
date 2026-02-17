"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <footer className="w-full font-sans">
      {/* Upper Footer: Disclaimer & Links */}
      <div className="bg-[#eeeeee] py-12 px-6 flex flex-col items-center text-center">
        {/* Logo Section - Consistent with the site's Header */}
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-3xl font-light tracking-tighter text-black">
            SOBHA
          </h1>
          <div className="w-[1px] h-10 bg-gray-400" />
          <div className="flex flex-col text-left">
            <span className="text-xl font-bold leading-tight tracking-tight">
              SECTOR 63A
            </span>
            <span className="text-[10px] font-semibold text-gray-600 tracking-widest">
              GOLF COURSE EXTENSION
            </span>
          </div>
        </div>

        {/* Disclaimer Text Section */}
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-500 leading-relaxed mb-1 inline">
            The content on this website is for informational purposes only and
            is not intended as an offer for services or sale. The project
            mentioned has not yet received RERA clearance but is currently in
            the process of registration with the State Name Real Estate
            Regulatory Authority. The project name used here is for branding and
            interest-generation purposes only and is not intended as the final
            project name. No sales or purchases are being facilitated for this
            pending project.
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1 ml-1 text-gray-600 font-medium hover:text-black transition-colors"
          >
            {isExpanded ? (
              <>
                Read Less <ChevronUp size={14} />
              </>
            ) : (
              <>
                Read More <ChevronDown size={14} />
              </>
            )}
          </button>

          {/* Collapsible content area */}
          {isExpanded && (
            <div className="mt-4 animate-in fade-in slide-in-from-top-1 duration-300">
              <p className="text-xs text-gray-500 leading-relaxed">
                By using this website, the user acknowledges that the
                information including brochures and marketing materials are
                solely for informational purposes and should not be relied upon
                for making any booking or purchase in the project. The developer
                reserves the right to change, alter or modify any design,
                specification or amenities without prior notice.
              </p>
            </div>
          )}
        </div>

        {/* Legal Policy Links */}
        <div className="mt-8 text-xs text-gray-600">
          <span className="hover:text-black cursor-pointer transition-colors">
            © Privacy Policy
          </span>
          <span className="mx-2 text-gray-400">|</span>
          <span className="hover:text-black cursor-pointer transition-colors">
            Terms & Conditions
          </span>
        </div>
      </div>

      {/* Dark Bottom Bar: Copyright Notice */}
      <div className="bg-[#1c242b] py-4 text-center">
        <p className="text-sm text-white font-medium">
          All Rights Reserved. © 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
