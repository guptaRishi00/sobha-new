"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EnquireModal from "./EnquireModal";

const slides = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600607687940-4e524cb35a33?auto=format&fit=crop&w=1920&q=80",
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const InfoCard = ({ className = "" }: { className?: string }) => (
    <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 ${className}`}>
      <div className="bg-[#003380] text-white text-center py-2 text-sm font-semibold uppercase tracking-wider">
        Coming Soon
      </div>

      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-gray-900 leading-tight uppercase">
          SOBHA NEW LAUNCH <br /> SECTOR 63A
        </h2>
        <p className="text-sm font-bold text-gray-700 mt-2">By Sobha Group</p>
        <p className="text-[10px] text-gray-500 mt-1 uppercase">
          At Sector 63A, Golf Course Extn Road, Gurgaon
        </p>
      </div>

      <div className="bg-[#003380] text-white py-4 px-6 border-y-2 border-dashed border-yellow-400">
        <ul className="space-y-3 text-[11px] font-medium">
          <li className="flex items-center gap-2">
            ◆ Avail Early Bird Offers
          </li>
          <li className="flex items-center gap-2">
            ◆ Book @ Discounted Launch Prices!
          </li>
          <li className="flex items-center gap-2">◆ SPR - 12 Mins</li>
          <li className="flex items-center gap-2">◆ Cyber City - 20 Mins</li>
        </ul>
      </div>

      <div className="p-5 text-center">
        <p className="text-sm font-bold text-gray-800">
          Spacious 3 & 4 BHK start
        </p>
        <p className="text-2xl font-bold text-[#003380] my-1">
          ₹ 5.70 Cr* <span className="text-lg font-normal">Onwards</span>
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-3 w-full bg-[#003380] text-white font-bold py-3.5 rounded-lg shadow-lg active:scale-95 transition-transform"
        >
          Express Your Interest
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              style={{
                backgroundImage: `url(${slide})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>

        {/* Desktop overlay card */}
        <InfoCard className="absolute left-6 top-6 md:left-10 md:top-10 z-20 w-[280px] md:w-[320px] hidden md:block" />

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 md:gap-6">
          <button
            onClick={prevSlide}
            className="p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-white" : "w-4 bg-white/40"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <EnquireModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>

      {/* Mobile card below hero */}
      <div className="md:hidden px-4 -mt-6 relative z-10">
        <InfoCard />
      </div>
    </>
  );
};

export default HeroSection;

