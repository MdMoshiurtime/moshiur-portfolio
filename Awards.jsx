"use client";
import { motion } from "framer-motion";

export default function Awards() {
  return (
    <section id="awards" className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold border-l-4 border-blue-700 pl-3"
      >
        Honors & Awards
      </motion.h2>

      <ul className="mt-8 space-y-3 text-lg text-gray-800">
        <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.4}}>
          🏆 Winner — 13 Lakh Content Campaign (10 Minute School)
        </motion.li>
        <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}}>
          🥈 2nd Place — BOESL National Essay Competition
        </motion.li>
        <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}}>
          🥇 HackerRank Gold Badge — Problem Solving (990+ points)
        </motion.li>
        <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}>
          🎓 Finalist — Hult Prize (GUB)
        </motion.li>
      </ul>
    </section>
  );
}
