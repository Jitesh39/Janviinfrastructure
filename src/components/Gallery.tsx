"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { image: "https://res.cloudinary.com/dec3rwvm5/image/upload/w_800,f_auto,q_auto/v1775224868/img22_scqk4l.jpg" },
  { image: "https://res.cloudinary.com/dec3rwvm5/image/upload/w_800,f_auto,q_auto/v1775224868/img21_pwybcc.jpg" },
  { image: "https://res.cloudinary.com/dec3rwvm5/image/upload/w_800,f_auto,q_auto/v1775224868/img23_vtf0r0.jpg" },
  { image: "https://res.cloudinary.com/dec3rwvm5/image/upload/w_800,f_auto,q_auto/v1775192214/img10_ul3l0s.jpg" },
  { image: "https://res.cloudinary.com/dec3rwvm5/image/upload/w_800,f_auto,q_auto/v1775192203/img5_qq8njc.jpg" },
  { image: "https://res.cloudinary.com/dec3rwvm5/image/upload/w_800,f_auto,q_auto/v1775192209/img8_evk4wl.jpg" },
  { image: "https://res.cloudinary.com/dec3rwvm5/image/upload/w_800,f_auto,q_auto/v1775192233/img18_s3xcci.jpg" },
  { image: "https://res.cloudinary.com/dec3rwvm5/image/upload/w_800,f_auto,q_auto/v1775192235/img19_vnhjfp.jpg" },
  { image: "https://res.cloudinary.com/dec3rwvm5/image/upload/w_800,f_auto,q_auto/v1775192212/img9_xznord.jpg" },
  { image: "https://res.cloudinary.com/dec3rwvm5/image/upload/w_800,f_auto,q_auto/v1775192219/img12_jgmy3p.jpg" },
  { image: "https://res.cloudinary.com/dec3rwvm5/image/upload/w_800,f_auto,q_auto/v1775192221/img13_ttweeb.jpg" },
  { image: "https://res.cloudinary.com/dec3rwvm5/image/upload/w_800,f_auto,q_auto/v1775192224/img14_zh011l.jpg" },

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
            transition={{ delay: 0.15, ease: "easeInOut", duration: 0.4 }}
            style={{ willChange: "transform, opacity" }}
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
                  delay: (index % 3) * 0.08,
                  duration: 0.4,
                  ease: "easeInOut"
                }}
                style={{ willChange: "transform, opacity" }}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-black"
              >
                <img
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
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
