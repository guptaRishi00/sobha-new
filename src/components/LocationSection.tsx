import React from "react";

const LocationSection = () => {
  return (
    <section className="py-12 px-6 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#003380] mb-2 text-center">
            Sobha New Launch Sector 63A Location Advantage
          </h2>
          <div className="w-24 h-1 bg-gray-200 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-1 bg-[#003380]" />
          </div>
        </div>

        {/* Map Container */}
        <div className="border border-gray-300 p-2 bg-white rounded-sm shadow-sm">
          <div className="w-full h-[280px] md:h-[450px] overflow-hidden grayscale-[0.2]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.324545163363!2d77.0877!3d28.4022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzA3LjkiTiA3N8KwMDUnMTUuNyJF!5e0!3m2!1sen!2sin!4v1708170000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sobha Sector 63A Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
