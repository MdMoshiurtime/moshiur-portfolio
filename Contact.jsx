"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold border-l-4 border-blue-700 pl-3"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 bg-white shadow p-6 rounded text-lg"
      >
        <p><strong>Email:</strong> moshiurifty15@gmail.com</p>
        <p><strong>Phone:</strong> +8801570296755</p>
      </motion.div>
    </section>
  );
}
