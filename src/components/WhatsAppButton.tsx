"use client";

import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function FloatingActions() {
  const pathname = usePathname();

  if (pathname.startsWith("/services/")) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Call Button */}
      <a
        href="tel:+917380655665"
        className="bg-yellow-500 text-white p-3 rounded-full shadow-2xl hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center cursor-pointer border border-white/20"
        title="Call Now"
      >
        <FiPhone className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917380655665?text=Hello%20I%20am%20interested%20in%20your%20services.%20Please%20share%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center cursor-pointer border border-white/20"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </div>
  );
}
