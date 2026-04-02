"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  "/services-image/warehouse2.jpg",
  "/services-image/h2.webp",
  "/services-image/foot.jpg",
  "/services-image/cold.jpg",
  "/services-image/peb.jpg",
];


export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black group">
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={images[current]}
            alt={`Industrial Site ${current + 1}`}
            initial={{ scale: 1.1, x: 20 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 object-cover w-full h-full contrast-[1.1] saturate-[1.05] brightness-[0.9]"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-primary/20 to-transparent z-0" />

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="hidden md:flex absolute left-4 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 z-20 items-center justify-center text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto hover:text-secondary hover:border-secondary"
        aria-label="Previous image"
        suppressHydrationWarning
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="hidden md:flex absolute right-4 md:right-16 lg:right-20 top-1/2 -translate-y-1/2 z-20 items-center justify-center text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto hover:text-secondary hover:border-secondary"
        aria-label="Next image"
        suppressHydrationWarning
      >
        <FiChevronRight size={24} />
      </button>



      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm md:text-lg"
        >
          Pre-Engineered Buildings | Warehouses | Industrial Sheds
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
        >
          Janvi Infrastructure
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-200 mb-10 font-light drop-shadow-md"
        >
          Reliable PEB Structures & Warehouse Solutions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-secondary hover:bg-secondary-dark text-white px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-md font-bold text-base sm:text-lg cursor-pointer transition-all transform hover:scale-105 shadow-xl hover:shadow-secondary/50 text-center"
          >
            Get Quote
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-md font-bold text-base sm:text-lg cursor-pointer transition-all transform hover:scale-105 shadow-xl text-center"
          >
            Contact Us
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
