"use client";

import { Link } from "react-scroll";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-dark pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-6">
              <img src="/logo.png" alt="Janvi Infrastructure Logo" className="h-16 w-auto object-contain rounded bg-white p-1" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering high-quality Pre-Engineered Buildings, warehouses, and industrial infrastructure solutions with precision and durability.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/919508086078" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#25D366] transition-all" aria-label="WhatsApp">
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
                  <Link
                    to={link.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-secondary cursor-pointer transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              {["PEB Buildings", "Warehouses", "Factory Setups", "Tin Sheds"].map((service) => (
                <li key={service}>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer block"
                  >
                    {service}
                  </Link>
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
                <a href="tel:+919582842908" className="hover:text-secondary transition-colors duration-200">
                  +91 9582842908
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4 md:gap-0 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <p>© 2026 Janvi Infrastructure</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-secondary font-medium tracking-wide font-bold">GST No: 09NYUPS2953D1ZH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
