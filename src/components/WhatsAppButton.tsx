"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname();

  if (pathname.startsWith("/services")) {
    return null;
  }

  return (
    <motion.a
      href="https://wa.me/917380655665?text=Hello%20I%20am%20interested%20in%20your%20services.%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors duration-300 group flex items-center justify-center cursor-pointer"
      initial={{ y: 0 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className="w-5 h-5" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </motion.a>
  );
}
