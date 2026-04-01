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
            transition={{ delay: 0.2 }}
            className="h-1.5 w-24 bg-secondary mx-auto mt-6 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-12">
          {materials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 bg-primary-dark/50 rounded-2xl border border-white/10 hover:border-secondary transition-colors cursor-pointer group"
            >
              <div className="text-3xl text-gray-400 group-hover:text-secondary mb-4 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-center text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
