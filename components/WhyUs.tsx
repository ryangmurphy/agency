"use client";

import { motion } from "framer-motion";


export default function WhyUs() {
  return (
    <section id="WhyUs" className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          Why Munk Devs?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        >
          We noticed a gap in modern tech solutions available in Atlantic
          Canada, and our mission is to bridge that divide with innovative,
          cutting-edge software that transforms how businesses operate. By
          combining deep regional expertise with state-of-the-art technological
          innovation, we deliver custom solutions that are not just tools, but
          strategic advantages for our clients.
          <motion.br />
          <motion.br />
          Our team of skilled developers and business professionals understands
          the unique challenges of businesses in our region, enabling us to
          create software that is precisely tailored to local needs while
          maintaining global standards of excellence and performance.
        </motion.p>
      </div>
    </section>
  );
}
