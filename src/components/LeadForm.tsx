import React from "react";
import {
  Calendar,
  Phone,
  Headphones,
  Car,
  Tag,
  MessageCircle,
} from "lucide-react";

const LeadForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg overflow-hidden font-sans border border-gray-100">
      {/* Top Bar */}
      <div className="flex bg-black text-white text-sm">
        <div className="flex-1 flex items-center justify-center gap-2 py-3 border-r border-gray-700 cursor-pointer hover:bg-zinc-900 transition-colors">
          <Calendar size={18} />
          <span className="font-medium">Schedule Visit</span>
        </div>
        <div className="flex-1 flex items-center justify-center gap-2 py-3 cursor-pointer hover:bg-zinc-900 transition-colors">
          <Phone size={18} />
          <span className="font-medium">+91-9717240404</span>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <h2 className="text-xl font-bold text-center text-gray-900">
          Pre-Register here for Best Offers
        </h2>

        {/* Form Inputs */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name here..."
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
          />

          <div className="flex border border-gray-300 rounded overflow-hidden">
            <div className="flex items-center gap-1 px-3 bg-gray-50 border-r border-gray-300">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India"
                className="w-5 h-auto"
              />
              <span className="text-gray-600 text-sm">▼</span>
              <span className="text-gray-700 ml-1">+91</span>
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 p-3 focus:outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 accent-gray-500 h-4 w-4"
          />
          <p className="text-[10px] text-gray-500 leading-tight">
            Please be informed that this website is not intended to facilitate
            any sales transactions. I understand and acknowledge that the
            project I am interested in hasn't yet secured RERA clearance. The
            primary purpose of this website is to generate interest and gather
            information. By providing my data, I consent to its use in
            accordance with the
            <a href="#" className="text-blue-500 underline ml-1">
              Privacy Policy | Terms & Conditions
            </a>
          </p>
        </div>

        {/* Primary Action Button */}
        <button className="w-full bg-[#003380] hover:bg-[#002866] text-white font-semibold py-3.5 rounded-lg shadow-md transition-all active:scale-[0.98]">
          Express Your Interest
        </button>

        {/* Icon Features Grid */}
        <div className="grid grid-cols-3 gap-2 py-4">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-2 border-2 border-black rounded-full">
              <Headphones size={24} className="text-cyan-500" />
            </div>
            <span className="text-xs font-semibold leading-tight">
              Instant Call Back
            </span>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <Car size={40} className="text-cyan-500" />
            <span className="text-xs font-semibold leading-tight">
              Free Site Visit
            </span>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <Tag size={40} className="text-cyan-500 rotate-90" />
            <span className="text-xs font-semibold leading-tight">
              Best Price
            </span>
          </div>
        </div>

        {/* Secondary Action Button */}
        <button className="w-full bg-[#003380] hover:bg-[#002866] text-white font-semibold py-3.5 rounded-lg shadow-md transition-all">
          Express Your Interest
        </button>
      </div>

      {/* Floating WhatsApp Button */}
      {/* <div className="fixed bottom-10 right-10 z-50">
        <button className="bg-[#25D366] p-3 rounded-full shadow-2xl hover:scale-110 transition-transform">
          <MessageCircle size={32} color="white" fill="white" />
        </button>
      </div> */}
    </div>
  );
};

export default LeadForm;
