"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import TopStrip, { MobileTopStrip } from "./TopStrip";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for navbar styling
      setScrolled(currentScrollY > 50);

      // Handle visibility for top strip (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Expertise", to: "expertise" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-[48px] md:-translate-y-[53px]"
        }`}
    >
      <TopStrip />
      <MobileTopStrip />

      <nav
        className={`w-full transition-all duration-300 ${scrolled || !isVisible ? "bg-primary shadow-lg py-3" : "bg-transparent py-3 md:py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              {isHome ? (
                <ScrollLink to="home" spy={true} hashSpy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
                  <img src="/logo.png" alt="Janvi Infrastructure Logo" className="h-16 md:h-20 w-auto object-contain" />
                </ScrollLink>
              ) : (
                <NextLink href="/" className="cursor-pointer">
                  <img src="/logo.png" alt="Janvi Infrastructure Logo" className="h-16 md:h-20 w-auto object-contain" />
                </NextLink>
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                isHome ? (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm font-medium uppercase"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <NextLink
                    key={item.name}
                    href={`/#${item.to}`}
                    className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm font-medium uppercase"
                  >
                    {item.name}
                  </NextLink>
                )
              ))}
              {isHome ? (
                <ScrollLink
                  to="contact"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="bg-secondary hover:bg-secondary-dark text-white px-6 py-1.5 rounded-md font-semibold cursor-pointer transition-colors"
                >
                  Enquire
                </ScrollLink>
              ) : (
                <NextLink
                  href="/#contact"
                  className="bg-secondary hover:bg-secondary-dark text-white px-6 py-1.5 rounded-md font-semibold cursor-pointer transition-colors"
                >
                  Enquire
                </NextLink>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex flex-col items-center justify-center w-[36px] h-[36px] rounded-md shadow-md focus:outline-none transition-colors ${scrolled || !isHome || !isVisible ? "bg-[#0A1F44]" : "bg-black/30 backdrop-blur-md"
                  }`}
              >
                <motion.span
                  className="absolute w-5 h-[2px] bg-white rounded-full"
                  animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute w-5 h-[2px] bg-white rounded-full"
                  animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute w-5 h-[2px] bg-white rounded-full"
                  animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu & Backdrop */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Blurred Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10 md:hidden h-screen w-full"
              />

              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="md:hidden absolute top-[85px] inset-x-4 max-w-sm mx-auto bg-primary-dark/95 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/10 overflow-hidden"
              >
                <div className="px-4 py-8 space-y-2 flex flex-col items-center">
                  {navLinks.map((item) => (
                    isHome ? (
                      <ScrollLink
                        key={item.name}
                        to={item.to}
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center px-4 py-3 rounded-xl text-lg font-bold tracking-wide text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                      >
                        {item.name}
                      </ScrollLink>
                    ) : (
                      <NextLink
                        key={item.name}
                        href={`/#${item.to}`}
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center px-4 py-3 rounded-xl text-lg font-bold tracking-wide text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                      >
                        {item.name}
                      </NextLink>
                    )
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
