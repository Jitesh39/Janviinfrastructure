"use client";

import { motion } from "framer-motion";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

type ServiceProps = {
  service: {
    slug: string;
    title: string;
    description: string;
    detailedContent: string;
    benefits: string[];
    images: string[];
  };
};

export default function ServiceDetailClient({ service }: ServiceProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 w-full max-w-full overflow-x-hidden">
      <Navbar />
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-black">
        <motion.img
          src={service.images[0]}
          alt={service.title}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/60 to-transparent" />

        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-24 left-4 md:top-28 md:left-12 z-20 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg hover:shadow-xl"
        >
          <FiArrowLeft className="w-5 h-5" />

          <span className="font-medium text-sm md:text-base">Back to Services</span>
        </Link>

        {/* Title Center */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg"
          >
            {service.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="h-1.5 w-24 bg-secondary mx-auto rounded-full"
          />
        </div>
      </section>

      {/* 2. Service Details Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Overview</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                {service.description}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-loose mt-4">
                {service.detailedContent}
              </p>
            </div>
          </motion.div>

          {/* Benefits/Features Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-200/30 dark:shadow-none h-fit"
          >
            <h3 className="text-xl font-bold text-primary dark:text-white mb-6 uppercase tracking-wide text-sm border-b border-gray-200 dark:border-gray-700 pb-4">
              Key Advantages
            </h3>
            <ul className="space-y-5">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <FiCheckCircle className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base leading-snug">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. Image Gallery Section (2x2 Grid) */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800 border-y border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary dark:text-white drop-shadow-sm">Project Gallery</h2>
            <div className="h-1.5 w-16 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {service.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg bg-black aspect-video"
              >
                <img
                  src={img}
                  alt={`${service.title} Image ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call To Action */}
      <section className="py-24 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary hover:bg-primary-dark transition-colors duration-300 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10 leading-tight">
            Ready to Build With Us?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 relative z-10 font-light">
            Contact us today to discuss your {service.title} requirements and get a custom quote.
          </p>
          <a
            href="https://wa.me/917380655665?text=Hello%20I%20am%20interested%20in%20your%20services.%20Please%20share%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary hover:bg-[#e03e23] text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl relative z-10"
          >
            Get Quote via WhatsApp
          </a>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
