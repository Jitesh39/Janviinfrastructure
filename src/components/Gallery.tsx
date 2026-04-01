"use client";

import { motion } from "framer-motion";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    title: "Industrial Storage Warehouse",
    category: "Warehouse",
  },
  {
    image: "https://images.unsplash.com/photo-1565615833231-e8c91a38fc25?q=80&w=2070&auto=format&fit=crop",
    title: "Automated Factory Setup",
    category: "Factory",
  },
  {
    image: "https://images.unsplash.com/photo-1621905252442-f87532dfcffe?q=80&w=2070&auto=format&fit=crop",
    title: "Large Scale PEB Shed",
    category: "PEB Structure",
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    title: "Logistics Hub",
    category: "Warehouse",
  },
  {
    image: "https://images.unsplash.com/photo-1541888081681-7e8c33a9719d?q=80&w=2070&auto=format&fit=crop",
    title: "Manufacturing Under Construction",
    category: "Factory",
  },
  {
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop",
    title: "High Rise Steel Framework",
    category: "PEB Structure",
  },
];

export default function Gallery() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-3"
          >
            Our Work
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white"
          >
            Project Gallery
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 w-24 bg-secondary mx-auto mt-6 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-black"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark via-primary/80 to-transparent p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-secondary font-semibold text-sm tracking-wider uppercase mb-1">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
