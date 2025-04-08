"use client";

import React from "react";
import { certifications } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function Certifications() {
  const { ref } = useSectionInView("Certifications");

  return (
    <section
      id="certifications"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Certifications</SectionHeading>
      <p className="text-gray-600 dark:text-gray-400 mb-12 text-base sm:text-lg">
        A showcase of my professional certifications and accomplishments.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="rounded-xl border border-black/5 bg-white dark:bg-white/10 p-6 text-left shadow-md dark:text-white/80"
          >
            <div className="flex flex-col items-start gap-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-sm text-green-500">{cert.issuer}</h3>
              <h4 className="text-lg font-semibold text-black dark:text-white">
                {cert.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                {cert.description}
              </p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 hover:underline text-sm"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
