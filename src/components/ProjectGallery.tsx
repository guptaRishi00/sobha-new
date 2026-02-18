"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
];

const ProjectGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#003380] mb-2 text-center">
            Sobha New Launch Sector 63A - Project Gallery
          </h2>
          <div className="w-24 h-1 bg-gray-200 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-1 bg-[#003380]" />
          </div>
        </div>

        {/* Sliding Gallery Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-8"
        >
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="flex-none w-[260px] md:w-[350px] lg:w-[450px] relative group"
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={img}
                  alt={`Artistic Impression ${index + 1}`}
                  className="w-full h-[200px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Artistic Impression Label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-1 text-[10px] font-bold text-gray-700 tracking-wider shadow-sm rounded-sm">
                Artistic Impression
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            onClick={() => scroll("left")}
            className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
          >
            <ArrowRight size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
