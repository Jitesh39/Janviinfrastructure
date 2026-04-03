"use client";

import { motion } from "framer-motion";
import { FiTool, FiSettings, FiGrid } from "react-icons/fi";

const materials = [
  { name: "Anchor Bolt", icon: <FiTool /> },
  { name: "Rafter", icon: <FiGrid /> },
  { name: "Column", icon: <FiGrid /> },
  { name: "Clip", icon: <FiSettings /> },
  { name: "Purlin", icon: <FiGrid /> },
  { name: "Sagrod", icon: <FiTool /> },
  { name: "Angle", icon: <FiSettings /> },
  { name: "Bracing", icon: <FiGrid /> },
  { name: "Sheet", icon: <FiSettings /> },
  { name: "Gutter", icon: <FiSettings /> },
  { name: "Flashing", icon: <FiSettings /> },
  { name: "Ridge Cap", icon: <FiTool /> },
  { name: "Turbo Ventilator Fan with Base", icon: <FiSettings /> },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-primary text-white pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-3"
          >
            Materials & Components
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Our Expertise
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, ease: "easeInOut", duration: 0.4 }}
            style={{ willChange: "transform, opacity" }}
            className="h-1.5 w-24 bg-secondary mx-auto mt-6 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 gap-y-12">
          {materials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ 
                delay: index * 0.03, 
                duration: 0.4,
                ease: "easeInOut"
              }}
              whileHover={{ y: -5, scale: 1.05 }}
              style={{ willChange: "transform, opacity" }}
              className="flex flex-col items-center justify-center p-3 sm:p-6 bg-primary-dark/50 rounded-2xl border border-white/10 hover:border-secondary transition-colors cursor-pointer group h-full"
            >
              <div className="text-2xl sm:text-3xl text-gray-400 group-hover:text-secondary mb-3 sm:mb-4 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors leading-tight">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
