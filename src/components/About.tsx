"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 bg-primary-dark">
              <img
                src="/services-image/aboutus.jpeg"
                alt="About Janvi Infrastructure"
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-primary p-3.5 rounded-xl shadow-2xl border border-white/20 hidden sm:block">
              <p className="text-2xl font-black text-center leading-none">Precision</p>
              <p className="text-[10px] font-bold uppercase tracking-tighter mt-1 opacity-80">In Every Structure</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm">
              Discover Our Company
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white leading-tight">
              About Us
            </h2>
            <div className="h-1.5 w-20 bg-secondary rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed pt-4">
              <strong className="text-primary dark:text-white font-semibold">Janvi Infrastructure</strong>, led by{" "}
              <strong className="text-secondary font-semibold">Abhishek Singh</strong>, specializes in
              delivering high-quality Pre-Engineered Buildings (PEB),
              warehouses, and industrial infrastructure solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed pb-2">
              We focus on durability, precision, and timely project delivery,
              ensuring that every structure we build stands as a testament
              to our commitment to excellence. Whether it's a massive warehouse
              or a complex factory setup, we bring innovation and reliability
              to every site.
            </p>
            <p className="text-md text-gray-700 font-bold dark:text-gray-200 pb-4">
              Janvi Infrastructure is a registered business under GST No: <span className="font-semibold text-gray-700 dark:text-gray-200">09NYUPS2953D1ZH</span>.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-primary dark:text-white">100%</span>
                <span className="text-sm text-gray-500 font-medium uppercase mt-1">Quality Assurance</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-secondary">On-Time</span>
                <span className="text-sm text-gray-500 font-medium uppercase mt-1">Project Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
