"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiUser } from "react-icons/fi";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Basic validation for the specific requirement
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    if (!name || !phone || !message) {
      setFormStatus("Please fill all fields correctly");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setFormStatus("Please enter a valid 10-digit contact number");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mvzvqrdq", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Thanks for your message! We will get back to you soon.");
        form.reset();
      } else {
        setFormStatus("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setFormStatus("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-3"
          >
            Get In Touch
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white"
          >
            Contact Us
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            style={{ willChange: "transform, opacity" }}
            className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-xl shadow-gray-200/40 dark:shadow-none order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-8">
              Contact Information
            </h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary/10 dark:bg-primary p-3 rounded-full mr-4 text-primary dark:text-white mt-1">
                  <FiUser className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase font-semibold">Contact Person</h4>
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-200">Abhishek Singh</p>
                  <p className="text-md text-gray-600 dark:text-gray-400">Janvi Infrastructure</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 dark:bg-primary p-3 rounded-full mr-4 text-primary dark:text-white mt-1">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase font-semibold">Phone</h4>
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-200">+91 9582842908</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 dark:bg-primary p-3 rounded-full mr-4 text-primary dark:text-white mt-1">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase font-semibold">Email</h4>
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-200 overflow-wrap break-all">
                    infrastructurejanvi@gmail.com
                  </p>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2">
                    GST No: 09NYUPS2953D1ZH
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 mt-8">
                <div className="flex items-start mb-6">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4 text-secondary mt-1">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase font-semibold">Office Address</h4>
                    <p className="text-md text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">
                      Gata No-1440 Bankegaon Shurapur Road<br />
                      Bankegaon Kadipur<br />
                      Sultanpur, Uttar Pradesh - 228145
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4 text-secondary mt-1">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase font-semibold">Factory Address</h4>
                    <p className="text-md text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">
                      KHS-301 Gulistanpur Site-C<br />
                      Surajpur Industrial Area<br />
                      Greater Noida, GautamBuddha Nagar - 201306
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            style={{ willChange: "transform, opacity" }}
            className="bg-primary-dark rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden order-1 lg:order-2"
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary rounded-full blur-3xl opacity-50"></div>

            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-white placeholder-gray-500 transition-all"
                  placeholder="Enter your name"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  minLength={10}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-white placeholder-gray-500 transition-all"
                  placeholder="Enter your contact number"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-white placeholder-gray-500 transition-all resize-none"
                  placeholder="Enter your message"
                  suppressHydrationWarning
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 rounded-lg transition-colors duration-300 shadow-lg"
                suppressHydrationWarning
              >
                Send Message
              </button>

              {formStatus && (
                <div className={`p-4 rounded-lg mt-4 ${formStatus.includes("Thanks") ? "bg-green-500/20 text-green-300 border border-green-500/30" : "bg-red-500/20 text-red-300 border border-red-500/30"}`}>
                  {formStatus}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
