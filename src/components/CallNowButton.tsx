"use client";

import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function CallNowButton() {
  const pathname = usePathname();

  if (pathname.startsWith("/services")) {
    return null;
  }

  return (
    <motion.a
      href="tel:+919582842908"
      aria-label="Call Now"
      initial={{ x: 50, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.05, borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-0 top-[56%] sm:top-1/2 -translate-y-1/2 z-40 bg-secondary hover:bg-[#e03e23] text-white flex flex-col items-center justify-center py-4 px-2 rounded-l-lg shadow-[-4px_0_15px_rgba(255,75,43,0.4)] transition-colors group"
    >
      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [0, -15, 15, -15, 15, 0]
        }}
        transition={{
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          rotate: { repeat: Infinity, repeatDelay: 3, duration: 0.6 }
        }}
        className="mb-3"
      >
        <FiPhoneCall className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-md" />
      </motion.div>
      <span
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        className="text-sm sm:text-base font-bold tracking-widest uppercase drop-shadow-md pb-1"
      >
        Call Now
      </span>
    </motion.a>
  );
}
