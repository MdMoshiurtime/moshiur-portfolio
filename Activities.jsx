"use client";
import { motion } from "framer-motion";

export default function Activities() {
  return (
    <section id="activities" className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold border-l-4 border-blue-700 pl-3"
      >
        Co-Curricular Activities
      </motion.h2>

      <div className="mt-8 space-y-6">

        {[
          "Campus Ambassador — BAIUST (2025)",
          "Graphics Officer — BASIS Students' Forum GUB Chapter",
          "Ambassador — ICRCS 2025",
          "Volunteer — Japanese NAT-TEST",
          "Campus Ambassador — The Daily Star",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 + i * 0.1 }}
            className="p-5 bg-white shadow border-l-4 border-blue-700 rounded"
          >
            {item}
          </motion.div>
        ))}

      </div>
    </section>
  );
}
