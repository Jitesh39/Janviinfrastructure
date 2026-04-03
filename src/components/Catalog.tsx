"use client";

import { FiFileText } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Catalog() {
  const pathname = usePathname();

  if (pathname.startsWith("/services/")) {
    return null;
  }

  return (
    <a
      href="/Janvi-Infrastructure-Brochure.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Company Catalog"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#E31E24] hover:bg-[#c4191e] text-white flex flex-col items-center justify-center py-5 px-2.5 rounded-l-md shadow-[-4px_0_15px_rgba(0,0,0,0.3)] transition-all duration-200 group overflow-hidden border border-white/10 border-r-0 cursor-pointer floating-element"
      style={{ willChange: "transform" }}
    >
      <span
        style={{ writingMode: "vertical-rl" }}
        className="text-[12px] sm:text-[13px] font-bold tracking-[0.05em] whitespace-nowrap rotate-180 pb-5 uppercase"
      >
        Company Profile
      </span>

      <div className="flex items-center justify-center rotate-270">
        <FiFileText className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
    </a>
  );
}
