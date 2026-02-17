"use client";

import React, { useState } from "react";
import EnquireModal from "./EnquireModal";

const amenities = [
  {
    name: "CAFETERIA",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "INDOOR GAMES AREA",
    image:
      "https://images.unsplash.com/photo-1606594914778-09d99f53ecf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoZXNzfGVufDB8fDB8fHww",
  },
  {
    name: "MINI THEATRE",
    image:
      "https://plus.unsplash.com/premium_photo-1661422031912-20e6b6892193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TUlOSSUyMFRIRUFUUkV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "GOLF SIMULATOR",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "LUXURY SPA",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "SWIMMING POOL",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
  },
];

const Amenities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#003380] mb-2 text-center uppercase tracking-tight">
            Sobha New Launch Sector 63A - Amenities
          </h2>
          <div className="w-24 h-1 bg-gray-200 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-1 bg-[#003380]" />
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Label Overlay */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#003380]" />
                <span className="text-white text-sm font-bold tracking-wider drop-shadow-lg">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Large Action Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#003380] hover:bg-[#002866] text-white font-bold py-3.5 px-16 rounded shadow-lg transition-all active:scale-95"
          >
            Express Your Interest
          </button>
        </div>
      </div>

      <EnquireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Amenities;
