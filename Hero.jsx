"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[90vh] bg-blue-900 text-white flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl font-bold">Md. Moshiur Rahman</h1>
        <p className="text-xl mt-4 opacity-90">
          CSE Student • Campus Ambassador • Machine Learning Enthusiast
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-white text-blue-900 px-6 py-3 rounded font-semibold"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
