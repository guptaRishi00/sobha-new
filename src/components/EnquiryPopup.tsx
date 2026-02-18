"use client";

import React, { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";

const EnquiryPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after a short delay on page load
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-xl shadow-2xl w-[90%] max-w-md mx-auto p-6 sm:p-8 animate-in zoom-in-95 duration-300">
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                >
                    <X size={22} />
                </button>

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="text-2xl font-bold text-gray-900">Enquire Now</h2>
                    <p className="text-sm font-semibold text-gray-600 mt-1">
                        Register Here And Avail The Best Offers!
                    </p>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    {/* Name */}
                    <div>
                        <input
                            type="text"
                            placeholder="Name*"
                            className="w-full border-b border-gray-300 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-800 transition-colors"
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex items-center border-b border-gray-300">
                        <div className="flex items-center gap-1 pr-3">
                            <img
                                src="https://flagcdn.com/w20/in.png"
                                alt="India"
                                className="w-5 h-auto"
                            />
                            <span className="text-gray-500 text-xs">▼</span>
                            <span className="text-gray-700 text-sm ml-0.5">+91</span>
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="flex-1 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email (Optional)"
                            className="w-full border-b border-gray-300 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-800 transition-colors"
                        />
                    </div>

                    {/* Disclaimer */}
                    <div className="flex gap-2 pt-1">
                        <input
                            type="checkbox"
                            defaultChecked
                            className="mt-0.5 accent-gray-500 h-3.5 w-3.5 shrink-0"
                        />
                        <p className="text-[9px] text-gray-500 leading-tight">
                            Please be informed that this website is not intended to facilitate
                            any sales transactions. I understand and acknowledge that the
                            project I am interested in hasn&apos;t yet secured RERA clearance.
                            The primary purpose of this website is to generate interest and
                            gather information. By providing my data, I consent to its use in
                            accordance with the{" "}
                            <a href="#" className="text-blue-500 underline">
                                Privacy Policy | Terms &amp; Conditions
                            </a>
                        </p>
                    </div>

                    {/* Express Interest Button */}
                    <button className="w-full bg-[#003380] hover:bg-[#002866] text-white text-sm font-semibold py-3 rounded-lg shadow-md transition-all active:scale-[0.98]">
                        Express Your Interest
                    </button>

                    {/* Or divider */}
                    <p className="text-center text-sm font-semibold text-gray-700">Or</p>

                    {/* WhatsApp Button */}
                    <a href="https://wa.me/919090907712" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white text-sm font-semibold py-3 rounded-lg shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="white"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Connect On WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EnquiryPopup;
