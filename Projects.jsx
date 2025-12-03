"use client";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold border-l-4 border-blue-700 pl-3"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-white shadow rounded"
        >
          <h3 className="font-bold text-xl">Football Match Prediction</h3>
          <p className="text-gray-600 mt-2">
            Machine learning model predicting football match outcomes.
          </p>
          <a
            className="text-blue-700 mt-2 inline-block"
            href="https://colab.research.google.com/drive/19PEgjc8ht8bVWhP6piHz7mJs6w6_gNGi"
            target="_blank"
          >
            View Project
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-white shadow rounded"
        >
          <h3 className="font-bold text-xl">DryME Online Laundry</h3>
          <p className="text-gray-600 mt-2">
            Online laundry service demo developed with UI/UX workflow.
          </p>
          <a
            className="text-blue-700 mt-2 inline-block"
            href="https://www.youtube.com/watch?v=7WAec8OtVLQ"
            target="_blank"
          >
            Watch Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="p-6 bg-white shadow rounded"
        >
          <h3 className="font-bold text-xl">TravelLog App</h3>
          <p className="text-gray-600 mt-2">
            Travel tracking app built using modern tech stacks.
          </p>
          <a
            className="text-blue-700 mt-2 inline-block"
            href="https://github.com/MdMoshiurtime/TravelLog-15"
            target="_blank"
          >
            GitHub Repo
          </a>
        </motion.div>

      </div>
    </section>
  );
}
