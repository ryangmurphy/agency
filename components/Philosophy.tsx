"use client";

import { motion } from "framer-motion";

const philosophyItems = [
  {
    title: "Innovation",
    description: "Pushing boundaries and redefining possibilities.",
    color: "bg-purple-500",
  },
  {
    title: "Passion",
    description: "Fueling our work with unwavering enthusiasm.",
    color: "bg-pink-500",
  },
  {
    title: "Excellence",
    description: "Striving for perfection in every detail.",
    color: "bg-blue-500",
  },
  {
    title: "Integrity",
    description: "Building trust through honesty and transparency.",
    color: "bg-green-500",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          Our Philosophy
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        >
          We believe in the power of ideas, the strength of passion, and the
          impact of unwavering integrity. Our philosophy shapes everything we
          do.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * index, type: "spring" }}
            >
              <div
                className={`absolute inset-0 rounded-2xl ${item.color} opacity-10 transform rotate-3`}
              ></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 z-10">
                <h3
                  className={`text-2xl font-bold mb-4 ${item.color} bg-clip-text text-transparent`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
