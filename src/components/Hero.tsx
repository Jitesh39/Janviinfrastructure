"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541888081681-7e8c33a9719d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop",
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
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Industrial Site ${current + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/50 to-transparent z-0" />

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="hidden md:block absolute left-4 md:left-12 lg:left-16 top-1/2 transform -translate-y-1/2 z-20 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30"
        aria-label="Previous image"
        suppressHydrationWarning
      >
        <FiChevronLeft size={32} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="hidden md:block absolute right-4 md:right-16 lg:right-20 top-1/2 transform -translate-y-1/2 z-20 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30"
        aria-label="Next image"
        suppressHydrationWarning
      >
        <FiChevronRight size={32} />
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
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-md font-bold text-lg cursor-pointer transition-all transform hover:scale-105 shadow-xl hover:shadow-secondary/50"
          >
            Get Quote
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-md font-bold text-lg cursor-pointer transition-all transform hover:scale-105 shadow-xl"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
