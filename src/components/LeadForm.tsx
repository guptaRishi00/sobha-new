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
    <div className="w-full h-full bg-white shadow-lg overflow-hidden font-sans border border-gray-100">
      {/* Top Bar */}
      <div className="flex bg-black text-white text-xs">
        <div className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border-r border-gray-700 cursor-pointer hover:bg-zinc-900 transition-colors">
          <Calendar size={15} />
          <span className="font-medium">Schedule Visit</span>
        </div>
        <a href="tel:+919090907712" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 cursor-pointer hover:bg-zinc-900 transition-colors">
          <Phone size={15} />
          <span className="font-medium">+91 90909 07712</span>
        </a>
      </div>

      <div className="p-4 space-y-4">
        <h2 className="text-lg font-bold text-center text-gray-900">
          Pre-Register here for Best Offers
        </h2>

        {/* Form Inputs */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter Your Name here..."
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
          />

          <div className="flex border border-gray-300 rounded overflow-hidden">
            <div className="flex items-center gap-1 px-2.5 bg-gray-50 border-r border-gray-300">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India"
                className="w-4 h-auto"
              />
              <span className="text-gray-600 text-xs">▼</span>
              <span className="text-gray-700 text-sm ml-0.5">+91</span>
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 px-3 py-2.5 text-sm focus:outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="mt-0.5 accent-gray-500 h-3.5 w-3.5"
          />
          <p className="text-[9px] text-gray-500 leading-tight">
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
        <button className="w-full bg-[#003380] hover:bg-[#002866] text-white text-sm font-semibold py-3 rounded-lg shadow-md transition-all active:scale-[0.98]">
          Express Your Interest
        </button>

        {/* Icon Features Grid */}
        <div className="grid grid-cols-3 gap-1.5 py-3">
          <div className="flex flex-col items-center text-center space-y-1.5">
            <div className="p-1.5 border-2 border-black rounded-full">
              <Headphones size={20} className="text-cyan-500" />
            </div>
            <span className="text-[11px] font-semibold leading-tight">
              Instant Call Back
            </span>
          </div>

          <div className="flex flex-col items-center text-center space-y-1.5">
            <Car size={34} className="text-cyan-500" />
            <span className="text-[11px] font-semibold leading-tight">
              Free Site Visit
            </span>
          </div>

          <div className="flex flex-col items-center text-center space-y-1.5">
            <Tag size={34} className="text-cyan-500 rotate-90" />
            <span className="text-[11px] font-semibold leading-tight">
              Best Price
            </span>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a href="https://wa.me/919090907712" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white text-sm font-semibold py-3 rounded-lg shadow-md transition-all flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Connect On WhatsApp
        </a>

        {/* Secondary Action Button */}
        <button className="w-full bg-[#003380] hover:bg-[#002866] text-white text-sm font-semibold py-3 rounded-lg shadow-md transition-all">
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
