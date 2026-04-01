"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  BuildingOffice2Icon, 
  ArchiveBoxIcon, 
  WrenchScrewdriverIcon, 
  HomeModernIcon, 
  ArrowTrendingUpIcon, 
  RectangleStackIcon, 
  QueueListIcon 
} from "@heroicons/react/24/outline";

const services = [
  {
    slug: "pre-engineered-buildings",
    title: "Pre-Engineered Building Mfr.",
    description: "Customized PEB solutions offering speed, durability, and cost-effectiveness.",
    icon: <BuildingOffice2Icon className="w-10 h-10 text-secondary" />
  },
  {
    slug: "cold-storage-manufacturer",
    title: "Cold Storage Manufacturer",
    description: "Advanced thermally insulated structures optimized for preservation.",
    icon: <ArchiveBoxIcon className="w-10 h-10 text-secondary" />
  },
  {
    slug: "warehouse-manufacturer",
    title: "Warehouse Manufacturer",
    description: "Large-scale godowns built for high capacity and seamless logistics.",
    icon: <HomeModernIcon className="w-10 h-10 text-secondary" />
  },
  {
    slug: "multi-storey-building",
    title: "Multi-Storey Building Mfr.",
    description: "Robust steel frames for high-rise industrial and commercial needs.",
    icon: <BuildingOffice2Icon className="w-10 h-10 text-secondary" />
  },
  {
    slug: "fire-staircase-manufacturer",
    title: "Fire Staircase Manufacturer",
    description: "High-quality, durable fire escape staircases with stringent safety compliances.",
    icon: <ArrowTrendingUpIcon className="w-10 h-10 text-secondary" />
  },
  {
    slug: "tin-sheds-manufacturing",
    title: "Tin Sheds & Manufacturing",
    description: "Durable tin sheds and precision manufacturing & structural services.",
    icon: <RectangleStackIcon className="w-10 h-10 text-secondary" />
  },
  {
    slug: "sign-board-manufacturer",
    title: "Sign Board Manufacturer",
    description: "Commercial structural signboards and high-visibility fixtures.",
    icon: <QueueListIcon className="w-10 h-10 text-secondary" />
  },
  {
    slug: "foot-over-bridge",
    title: "Foot Over Bridge",
    description: "Robust and secure pedestrian bridges designed for high-traffic industrial areas.",
    icon: <WrenchScrewdriverIcon className="w-10 h-10 text-secondary" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white"
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 w-24 bg-secondary mx-auto mt-6 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg shadow-gray-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700 group cursor-pointer relative overflow-hidden"
            >
              <Link href={`/services/${service.slug}`} className="block h-full w-full p-8">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="mb-6 bg-gray-50 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-4 transition-colors group-hover:text-secondary">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
