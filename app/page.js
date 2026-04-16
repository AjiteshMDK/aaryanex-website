"use client";

import { motion } from "framer-motion";

export default function Home() {
  const services = [
    "SAP Mobility Solutions",
    "Enterprise Software Development",
    "IT Consulting",
    "Cloud Integration",
    "Architecture Modernization",
    "AI & Automation",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <header className="border-b border-white/10 sticky top-0 backdrop-blur-md bg-black/70 z-20">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20"
            >
              <span className="text-xl font-bold">A</span>
            </motion.div>
            <div>
              <h1 className="text-xl font-bold">Aaryanex Technology</h1>
              <p className="text-sm text-gray-400">SAP Mobility</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2 rounded-xl bg-white text-black font-medium"
          >
            Contact Us
          </motion.button>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 py-28 grid md:grid-cols-2 gap-14 items-center relative z-10"
      >
        <div>
          <p className="text-sm uppercase tracking-widest text-cyan-400 mb-4">
            Enterprise IT Solutions
          </p>

          <h2 className="text-6xl font-bold leading-tight mb-6">
            Accelerate Digital Transformation with SAP Mobility
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            We help enterprises modernize operations through intelligent
            software solutions, SAP mobility platforms, and strategic IT
            consulting.
          </p>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-2xl bg-white text-black font-medium"
            >
              Book Consultation
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-2xl border border-white/20"
            >
              Explore Services
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-8 py-20 relative z-10"
      >
        <h3 className="text-4xl font-semibold mb-10">Why Choose Us</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Enterprise-grade Architecture",
            "Faster Delivery Cycles",
            "SAP Domain Expertise",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-8 py-8 text-gray-400">
          © 2026 Aaryanex Technology · Enterprise IT Consulting
        </div>
      </footer>
    </div>
  );
}
