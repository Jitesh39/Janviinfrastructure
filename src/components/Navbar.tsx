"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronDown } from "react-icons/fi";
import TopStrip, { MobileTopStrip } from "./TopStrip";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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

  // Handle body scroll lock and Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "";
        document.body.classList.remove("mobile-menu-open");
        window.removeEventListener("keydown", handleEsc);
      };
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about" },
    { name: "Services", to: "services", hasDropdown: true },
    { name: "Expertise", to: "expertise" },
    { name: "Gallery", to: "projects" },
    { name: "Contact Us", to: "contact" },
  ];

  const services = [
    { name: "Pre-Engineered Building Manufacturer", slug: "pre-engineered-buildings" },
    { name: "Cold Storage Manufacturer", slug: "cold-storage-manufacturer" },
    { name: "Warehouse Manufacturer", slug: "warehouse-manufacturer" },
    { name: "Multi-Storey Building Manufacturer", slug: "multi-storey-building" },
    { name: "Sign Board Manufacturer", slug: "sign-board-manufacturer" },
    { name: "Fire Staircase Manufacturer", slug: "fire-staircase-manufacturer" },
    { name: "Foot Over Bridge", slug: "foot-over-bridge" },
    { name: "Industrial Shed Godown Factory", slug: "industrial-shed-godown-factory" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-transform duration-200 ease-in-out ${isVisible || isOpen ? "translate-y-0" : "-translate-y-[48px] md:-translate-y-[53px]"
        }`}
      style={{ willChange: "transform" }}
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
                item.hasDropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center text-white hover:text-white cursor-pointer transition-colors duration-200 text-base font-bold focus:outline-none">
                      {item.name}
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiChevronDown className="ml-1 text-xs" />
                      </motion.span>
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-[-60px] mt-4 w-[280px] bg-primary rounded-lg shadow-2xl overflow-hidden py-1 z-[100] border border-white/10"
                        >
                          {services.map((service) => (
                            <NextLink
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block px-5 py-3 text-base text-white font-medium hover:bg-white/10 transition-colors duration-300 first:pt-4 last:pb-4 border-b border-white/5 last:border-0"
                            >
                              {service.name}
                            </NextLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  isHome ? (
                    <ScrollLink
                      key={item.name}
                      to={item.to}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-70}
                      duration={400}
                      className="text-white hover:text-white cursor-pointer transition-colors duration-200 text-base font-bold"
                    >
                      {item.name}
                    </ScrollLink>
                  ) : (
                    <NextLink
                      key={item.name}
                      href={`/#${item.to}`}
                      className="text-white hover:text-white cursor-pointer transition-colors text-base font-bold"
                    >
                      {item.name}
                    </NextLink>
                  )
                )
              ))}
              {isHome ? (
                <ScrollLink
                  to="contact"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                  className="bg-secondary hover:bg-secondary-dark text-white px-6 py-1.5 rounded-md font-semibold cursor-pointer transition-colors duration-200 text-base"
                >
                  Enquire
                </ScrollLink>
              ) : (
                <NextLink
                  href="/#contact"
                  className="bg-secondary hover:bg-secondary-dark text-white px-6 py-1.5 rounded-md font-semibold cursor-pointer transition-colors text-base"
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
                suppressHydrationWarning
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
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu & Backdrop */}
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[100] md:hidden">
              {/* Blurred Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/70 backdrop-blur-md h-screen w-full"
              />

              {/* Left-side Drawer */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: "transform" }}
                className="absolute left-0 top-0 bottom-0 w-[80%] max-w-[320px] bg-primary h-screen shadow-2xl flex flex-col border-r border-white/10"
              >
                {/* Drawer Header */}
                <div className="p-6 flex justify-between items-center border-b border-white/5">
                  <div className="flex-shrink-0">
                    <img src="/logo.png" alt="Janvi Infrastructure Logo" className="h-12 w-auto object-contain" />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Close menu"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Drawer Content */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                  {navLinks.map((item) => (
                    item.hasDropdown ? (
                      <div key={item.name} className="flex flex-col">
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="flex items-center justify-between w-full text-left px-6 py-2.5 rounded-xl text-xl font-bold tracking-wide text-white hover:text-white hover:bg-white/5 transition-all duration-300 border-b border-white/5"
                        >
                          {item.name}
                          <motion.span
                            animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FiChevronDown />
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-white/5 rounded-xl mt-1 space-y-1"
                            >
                              {services.map((service) => (
                                <NextLink
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setIsMobileServicesOpen(false);
                                  }}
                                  className="block px-10 py-2 text-lg text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                  {service.name}
                                </NextLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      isHome ? (
                        <ScrollLink
                          key={item.name}
                          to={item.to}
                          spy={true}
                          hashSpy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="block w-full text-left px-6 py-2.5 rounded-xl text-xl font-bold tracking-wide text-white hover:text-white hover:bg-white/5 transition-all duration-300 border-b border-white/5 last:border-0"
                        >
                          {item.name}
                        </ScrollLink>
                      ) : (
                        <NextLink
                          key={item.name}
                          href={`/#${item.to}`}
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="block w-full text-left px-6 py-2.5 rounded-xl text-xl font-bold tracking-wide text-white hover:text-white hover:bg-white/5 transition-all duration-300 border-b border-white/5 last:border-0"
                        >
                          {item.name}
                        </NextLink>
                      )
                    )
                  ))}
                </div>

                {/* Drawer Footer */}
                <div className="p-6 border-t border-white/5">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                    className="block w-full bg-secondary text-white text-center py-2 rounded-xl font-bold tracking-wider hover:bg-secondary-dark transition-all duration-300 text-base"
                  >
                    Enquire
                  </ScrollLink>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
