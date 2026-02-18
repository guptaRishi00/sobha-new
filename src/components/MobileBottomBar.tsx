"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const MobileBottomBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
            <div className="flex items-stretch h-14">
                {/* Call Button */}
                <a
                    href="tel:+919090907712"
                    className="flex-1 flex items-center justify-center gap-2 text-white bg-[#003380] font-semibold text-sm border-r border-blue-900"
                >
                    <Phone size={16} />
                    Call Now
                </a>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/919090907712"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-white bg-[#25D366] font-semibold text-sm border-r border-green-600"
                >
                    <MessageCircle size={16} fill="white" />
                    WhatsApp
                </a>

                {/* Enquire Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex-1 flex items-center justify-center gap-2 text-white bg-[#003380] font-semibold text-sm"
                >
                    Enquire Now
                </button>
            </div>
        </div>
    );
};

export default MobileBottomBar;
