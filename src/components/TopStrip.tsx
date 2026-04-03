"use client";

import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";

export default function TopStrip() {
  return (
    <div className="bg-[#0A1F44] text-white py-3 border-b border-white/10 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-[13px] font-medium">
          {/* Left: Address & Phone */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FiMapPin className="text-secondary shrink-0" />
              <span>Gate No-1440, Bankegaon, Sultanpur (UP)</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiPhone className="text-secondary shrink-0" />
              <a href="tel:+919582842908" className="hover:text-secondary transition-colors">+91 9582842908</a>
            </div>
          </div>

          {/* Right: Email & WhatsApp */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FiMail className="text-secondary shrink-0" />
              <a href="mailto:infrastructurejanvi@gmail.com" className="hover:text-secondary transition-colors">infrastructurejanvi@gmail.com</a>
            </div>
            <a href="https://wa.me/919582842908" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-secondary transition-colors transform hover:scale-105" aria-label="WhatsApp">
              <FaWhatsapp className="text-[#25D366]" size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile Version of Top Strip (Marquee Effect)
export function MobileTopStrip() {
  const content = (
    <div className="flex items-center space-x-6 px-3 whitespace-nowrap text-[12px]">
      <div className="flex items-center space-x-1.5">
        <FiPhone className="text-secondary shrink-0" />
        <a href="tel:+919582842908">+91 9582842908</a>
      </div>
      <div className="flex items-center space-x-1.5">
        <FiMail className="text-secondary shrink-0" />
        <a href="mailto:infrastructurejanvi@gmail.com">infrastructurejanvi@gmail.com</a>
      </div>
      <div className="flex items-center space-x-1.5">
        <FiMapPin className="text-secondary shrink-0" />
        <span>Gate No-1440, Bankegaon, Sultanpur (UP)</span>
      </div>
      <a href="https://wa.me/919582842908" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5" aria-label="WhatsApp">
        <FaWhatsapp className="text-[#25D366]" size={14} />
        <span className="font-bold uppercase tracking-wider text-[10px]">WhatsApp</span>
      </a>
    </div>
  );

  return (
    <div className="bg-[#0A1F44] text-white py-2.5 border-b border-white/10 sm:hidden overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex min-w-max"
        style={{ willChange: "transform" }}
      >
        {content}
        {content}
      </motion.div>
    </div>
  );
}



