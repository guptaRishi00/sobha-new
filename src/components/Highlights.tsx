import React from "react";
import { CheckCheck } from "lucide-react";

const highlightItems = [
  "Expansive 12-acre luxury residential community",
  "Only four standalone premium high-rise towers",
  "Over 600 exclusive residences across development",
  "Phase one features two towers, 325 residences",
  "Ultra low-density planning with fifty homes per acre",
  "Limited four apartments per floor ensuring exclusivity",
  "All residences designed as 100% corner homes",
  "Breathtaking Aravali hills and city skyline views",
];

const Highlights = () => {
  return (
    <section className="py-12 px-6 bg-[#f8faff]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#003380] mb-2 text-center">
            Sobha New Launch Gurgaon - Highlights
          </h2>
          <div className="w-24 h-1 bg-gray-200 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-1 bg-[#003380]" />
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          {highlightItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3 group">
              <div className="mt-1 flex-shrink-0">
                {/* Double checkmark icon */}
                <CheckCheck
                  size={18}
                  className="text-black group-hover:text-[#003380] transition-colors"
                />
              </div>
              <span className="text-gray-800 text-[15px] font-medium leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
