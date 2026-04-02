"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { image: "/services-image/Gallery/img16.jpeg" },
  { image: "/services-image/Gallery/img10.jpeg" },
  { image: "/services-image/Gallery/img5.jpeg" },
  { image: "/services-image/Gallery/img8.jpeg" },
  { image: "/services-image/Gallery/img17.jpeg" },
  { image: "/services-image/Gallery/img18.jpeg" },
  { image: "/services-image/Gallery/img19.jpeg" },
  { image: "/services-image/Gallery/img20.jpeg" },
  { image: "/services-image/Gallery/img1.jpeg" },
  { image: "/services-image/Gallery/img2.jpeg" },
  { image: "/services-image/Gallery/img3.jpeg" },
  { image: "/services-image/Gallery/img4.jpeg" },
  { image: "/services-image/Gallery/img6.jpeg" },
  { image: "/services-image/Gallery/img7.jpeg" },
  { image: "/services-image/Gallery/img9.jpeg" },
  { image: "/services-image/Gallery/img11.jpeg" },
  { image: "/services-image/Gallery/img12.jpeg" },
  { image: "/services-image/Gallery/img13.jpeg" },
  { image: "/services-image/Gallery/img14.jpeg" },
  { image: "/services-image/Gallery/img15.jpeg" },

];


export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState(6);

  const showMore = () => {
    setVisibleItems((prev) => Math.min(prev + 3, projects.length));
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {projects.slice(0, visibleItems).map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: (index % 3) * 0.1,
                  duration: 0.5
                }}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-black"
              >
                <img
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleItems < projects.length && (
          <div className="mt-16 text-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={showMore}
              className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all duration-300 border border-white/10"
            >
              Load More Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
