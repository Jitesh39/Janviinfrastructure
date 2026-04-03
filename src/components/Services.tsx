"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  BuildingOffice2Icon,
  ArchiveBoxIcon,
  WrenchScrewdriverIcon,
  HomeModernIcon,
  ArrowTrendingUpIcon,
  QueueListIcon
} from "@heroicons/react/24/outline";

const services = [
  {
    slug: "pre-engineered-buildings",
    title: "Pre-Engineered Building Manufacturer",
    description: "Customized PEB solutions offering speed, durability, and cost-effectiveness.",
    icon: <BuildingOffice2Icon className="w-7 h-7 text-secondary" />
  },
  {
    slug: "cold-storage-manufacturer",
    title: "Cold Storage Manufacturer",
    description: "Advanced thermally insulated structures optimized for preservation.",
    icon: <ArchiveBoxIcon className="w-7 h-7 text-secondary" />
  },
  {
    slug: "warehouse-manufacturer",
    title: "Warehouse Manufacturer",
    description: "Large-scale godowns built for high capacity and seamless logistics.",
    icon: <HomeModernIcon className="w-7 h-7 text-secondary" />
  },
  {
    slug: "multi-storey-building",
    title: "Multi-Storey Building Manufacturer",
    description: "Robust steel frames for high-rise industrial and commercial needs.",
    icon: <BuildingOffice2Icon className="w-7 h-7 text-secondary" />
  },
  {
    slug: "fire-staircase-manufacturer",
    title: "Fire Staircase Manufacturer",
    description: "High-quality, durable fire escape staircases with stringent safety compliances.",
    icon: <ArrowTrendingUpIcon className="w-7 h-7 text-secondary" />
  },
  {
    slug: "sign-board-manufacturer",
    title: "Sign Board Manufacturer",
    description: "Commercial structural signboards and high-visibility fixtures.",
    icon: <QueueListIcon className="w-7 h-7 text-secondary" />
  },
  {
    slug: "foot-over-bridge",
    title: "Foot Over Bridge",
    description: "Robust and secure pedestrian bridges designed for high-traffic industrial areas.",
    icon: <WrenchScrewdriverIcon className="w-7 h-7 text-secondary" />
  },
  {
    slug: "industrial-shed-godown-factory",
    title: "Industrial Shed Godown Factory",
    description: "Expert construction of heavy-duty industrial sheds, godowns, and manufacturing units.",
    icon: <BuildingOffice2Icon className="w-7 h-7 text-secondary" />
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 overflow-hidden"
    >
      {/* Fixed Background Layer */}
      <div
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dec3rwvm5/image/upload/v1775225677/bg4_ufqcpj.jpg')"
        }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-3"
          >
            What We Do
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, ease: "easeInOut", duration: 0.4 }}
            style={{ willChange: "transform, opacity" }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 w-24 bg-secondary mx-auto mt-6 rounded-full shadow-lg shadow-secondary/20"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.4, ease: "easeInOut" }}
              whileHover={{ y: -8 }}
              style={{ willChange: "transform, opacity" }}
              className="bg-primary/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl hover:shadow-[#FF4B2B]/20 transition-all duration-200 border border-white/5 group cursor-pointer relative overflow-hidden flex flex-col h-full"
            >
              <Link href={`/services/${service.slug}`} className="flex flex-col h-full p-8">
                {/* Icon Container */}
                <div className="mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-[#FF4B2B]/10 transition-all duration-300 shadow-inner">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#FF4B2B] leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Border Glow */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-[#FF4B2B] transform scale-x-0 group-hover:scale-x-100 transition-all origin-left duration-300 opacity-0 group-hover:opacity-100 shadow-[0_0_15px_#FF4B2B]"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
