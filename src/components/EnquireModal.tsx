"use client";

import React from "react";
import { X, User, Phone, Mail, MessageCircle } from "lucide-react";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquireModal = ({ isOpen, onClose }: EnquireModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-[#003380] text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Enquire Now</h2>
          <button
            onClick={onClose}
            className="hover:rotate-90 transition-transform"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-light">SOBHA</span>
              <div className="w-[1px] h-8 bg-gray-300" />
              <div className="flex flex-col">
                <span className="text-sm font-bold">SECTOR 63A</span>
                <span className="text-[8px] font-bold text-gray-500 tracking-widest uppercase">
                  Golf Course Extension
                </span>
              </div>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="space-y-3">
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Name*"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none text-sm"
              />
            </div>

            <div className="flex border border-gray-300 rounded overflow-hidden">
              <div className="flex items-center gap-1 px-3 bg-gray-50 border-r border-gray-300">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="India"
                  className="w-5"
                />
                <span className="text-xs text-gray-600">+91</span>
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 px-4 py-3 outline-none text-sm"
              />
            </div>

            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="email"
                placeholder="Email (Optional)"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none text-sm"
              />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex gap-2">
            <input
              type="checkbox"
              defaultChecked
              className="mt-1 h-4 w-4 accent-[#003380]"
            />
            <p className="text-[9px] text-gray-500 leading-tight">
              Please be informed that this website is not intended to facilitate
              any sales transactions. I understand and acknowledge that the
              project hasn't yet secured RERA clearance.
            </p>
          </div>

          {/* Action Buttons */}
          <button className="w-full bg-[#003380] text-white font-bold py-3.5 rounded shadow-lg hover:bg-[#002866] transition-colors">
            Express Your Interest
          </button>

          <div className="relative py-2 flex items-center">
            <div className="flex-1 border-t border-gray-200" />
            <span className="px-3 text-xs text-gray-400 font-medium">Or</span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          <button className="w-full bg-[#25D366] text-white font-bold py-3.5 rounded shadow-lg flex items-center justify-center gap-2 hover:bg-[#1eb956] transition-colors">
            <MessageCircle size={20} fill="white" />
            Connect On WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnquireModal;
