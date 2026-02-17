import React from "react";
import {
  CheckCircle2,
  IndianRupee,
  Layout,
  Waves,
  Image as ImageIcon,
  MapPin,
} from "lucide-react";

const navItems = [
  { label: "Highlights", icon: CheckCircle2 },
  { label: "Pricing", icon: IndianRupee },
  { label: "Floor Plan", icon: Layout },
  { label: "Amenities", icon: Waves },
  { label: "Gallery", icon: ImageIcon },
  { label: "Location", icon: MapPin },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-light tracking-tighter text-black">
            SOBHA
          </h1>

          {/* Vertical Separator */}
          <div className="w-[1px] h-10 bg-gray-300" />

          <div className="flex flex-col">
            <span className="text-xl font-bold leading-tight tracking-tight">
              SECTOR 63A
            </span>
            <span className="text-[10px] font-semibold text-gray-600 tracking-widest">
              GOLF COURSE EXTENSION
            </span>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-2 text-gray-800 hover:text-black transition-colors group"
            >
              <item.icon size={18} className="text-gray-900" />
              <span className="text-sm font-semibold tracking-wide">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button (Optional) */}
        <div className="lg:hidden">
          <button className="p-2">
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
