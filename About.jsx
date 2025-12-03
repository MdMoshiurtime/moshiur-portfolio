"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold border-l-4 border-blue-700 pl-3"
      >
        About Me
      </motion.h2>

      <p className="mt-5 text-gray-700 leading-7">
        Motivated and communicative university student with strong presentation,
        leadership, and teaching experience. Skilled in preparing educational
        content, delivering sessions, assisting learners, and ensuring high-quality
        learning outcomes.
      </p>

      <div className="mt-6 space-y-2 text-gray-800">
        <p><strong>Phone:</strong> +8801570296755</p>
        <p><strong>Email:</strong> moshiurifty15@gmail.com</p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a className="text-blue-700" target="_blank" href="https://www.linkedin.com/in/md-moshiurrahman15/">
            View Profile
          </a>
        </p>
      </div>
    </section>
  );
}
