"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  IndianRupee,
  Layout,
  Waves,
  Image as ImageIcon,
  MapPin,
  X,
} from "lucide-react";

const navItems = [
  { label: "Highlights", icon: CheckCircle2, href: "highlights" },
  { label: "Pricing", icon: IndianRupee, href: "pricing" },
  { label: "Floor Plan", icon: Layout, href: "floor-plan" },
  { label: "Amenities", icon: Waves, href: "amenities" },
  { label: "Gallery", icon: ImageIcon, href: "gallery" },
  { label: "Location", icon: MapPin, href: "location" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto px-4 h-14 md:h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 md:gap-4">
          <h1 className="text-2xl md:text-3xl font-light tracking-tighter text-black">
            SOBHA
          </h1>

          {/* Vertical Separator */}
          <div className="w-[1px] h-8 md:h-10 bg-gray-300" />

          <div className="flex flex-col">
            <span className="text-base md:text-xl font-bold leading-tight tracking-tight">
              SECTOR 63A
            </span>
            <span className="text-[8px] md:text-[10px] font-semibold text-gray-600 tracking-widest">
              GOLF COURSE EXTENSION
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="flex items-center gap-2 text-gray-800 hover:text-black transition-colors group"
            >
              <item.icon size={18} className="text-gray-900" />
              <span className="text-sm font-semibold tracking-wide">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 relative w-8 h-8 flex flex-col items-center justify-center"
          >
            {mobileMenuOpen ? (
              <X size={22} className="text-black" />
            ) : (
              <>
                <div className="w-5 h-0.5 bg-black mb-1"></div>
                <div className="w-5 h-0.5 bg-black mb-1"></div>
                <div className="w-5 h-0.5 bg-black"></div>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col py-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="flex items-center gap-3 px-6 py-3 text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <item.icon size={18} className="text-[#003380]" />
                <span className="text-sm font-semibold">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
