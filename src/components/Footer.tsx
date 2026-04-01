"use client";

import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <footer className="bg-primary-dark pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-5">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-6">
              {isHome ? (
                <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
                  <img src="/logo.png" alt="Janvi Infrastructure Logo" className="h-20 w-auto object-contain" />
                </ScrollLink>
              ) : (
                <Link href="/" className="cursor-pointer">
                  <img src="/logo.png" alt="Janvi Infrastructure Logo" className="h-20 w-auto object-contain" />
                </Link>
              )}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering high-quality Pre-Engineered Buildings, warehouses, and industrial infrastructure solutions with precision and durability.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/917380655665?text=Hello%20I%20am%20interested%20in%20your%20services.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#25D366] transition-all" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
              <a href="mailto:infrastructurejanvi@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-secondary transition-all" aria-label="Email">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects"].map((link) => (
                <li key={link}>
                  <a
                    href={`/#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-secondary cursor-pointer transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              {[
                { name: "PEB Buildings", slug: "pre-engineered-buildings" },
                { name: "Warehouses", slug: "warehouse-manufacturer" },
                { name: "Tin Sheds", slug: "tin-sheds-manufacturing" },
                { name: "Foot Over Bridge", slug: "foot-over-bridge" }
              ].map((service) => (
                <li key={service.name}>
                  <a
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Contact Details</h4>
            <ul className="space-y-4 text-sm text-gray-200">
              <li className="flex items-start">
                <strong className="text-white mr-2 block w-16 shrink-0">Phone:</strong>
                <a href="tel:+917380655665" className="hover:text-secondary transition-colors duration-200">
                  +91 7380655665
                </a>
              </li>
              <li className="flex items-start">
                <strong className="text-white mr-2 block w-16 shrink-0">Email:</strong>
                <a href="mailto:infrastructurejanvi@gmail.com" className="hover:text-secondary transition-colors duration-200">
                  infrastructurejanvi@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <strong className="text-white mr-2 block w-16 shrink-0">Office:</strong>
                <span>Gata No-1440, Bankegaon, Sultanpur (UP)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Layout */}
        <div className="border-t border-white/10 pt-2 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-0 md:gap-0 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <p suppressHydrationWarning>&copy; {new Date().getFullYear() > 2025 ? `2025 - ${new Date().getFullYear()}` : "2025"} Janvi Infrastructure | Powered by <a href="https://www.thestudysmith.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors font-semibold">TheStudySmith</a></p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-secondary font-medium tracking-wide font-bold">GST No: 09NYUPS2953D1ZH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
