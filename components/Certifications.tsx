"use client";

import React, { useState } from "react";
import { certifications } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import CertificationModal from "./CertificationModal";

const cardAnimation = {
  initial: { opacity: 0, x: -50 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }),
  hover: { 
    y: -5,
    scale: 1.02,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
  },
  tap: { scale: 0.98 }
};

const contentAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Certifications() {
  const { ref } = useSectionInView("Skills");
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Certifications</SectionHeading>
      <motion.p 
        className="text-gray-600 dark:text-gray-400 mb-12 text-base sm:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        My completed certifications and ongoing learning journey.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardAnimation}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            whileTap="tap"
            viewport={{ once: true, margin: "-20% 0px" }}
            custom={index}
            className={`group relative rounded-xl border border-black/5 p-6 text-left shadow-md transition-colors
              ${cert.status === 'inProgress' 
                ? "bg-white/50 dark:bg-white/5 opacity-75 border-dashed hover:border-green-200/50"
                : "bg-white dark:bg-white/10 hover:border-green-200/30"}`}
          >
            <motion.div 
              className="flex flex-col items-start gap-4"
              variants={contentAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {cert.status === 'inProgress' && (
                <motion.span
                  className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-500 px-3 py-1 rounded-full"
                  variants={itemAnimation}
                  animate={{
                    scale: [1, 1.05, 1],
                    transition: { repeat: Infinity, duration: 2 }
                  }}
                >
                  In Progress
                </motion.span>
              )}
              
              <motion.img
                src={typeof cert.image === 'string' ? cert.image : cert.image?.src}
                alt={cert.title}
                className={`w-16 h-16 object-contain ${
                  cert.status === 'inProgress' ? "opacity-50" : ""
                }`}
                variants={itemAnimation}
                whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
              />
              
              <motion.h3 
                className="text-sm text-green-500"
                variants={itemAnimation}
              >
                {cert.issuer}
              </motion.h3>
              
              <motion.h4 
                className={`text-lg font-semibold ${
                  cert.status === 'inProgress' 
                    ? "text-gray-400 dark:text-gray-500"
                    : "text-black dark:text-white"
                }`}
                variants={itemAnimation}
              >
                {cert.title}
              </motion.h4>
              
              <motion.p 
                className="text-gray-700 dark:text-gray-300"
                variants={itemAnimation}
              >
                {cert.description}
              </motion.p>
              
              <motion.div 
                className="w-full flex items-center justify-between"
                variants={itemAnimation}
              >
                <p className="text-gray-500 text-sm">{cert.date}</p>
                {cert.status === 'inProgress' ? (
                  <span className="text-sm text-gray-400">
                    Est. {cert.estimatedCompletion}
                  </span>
                ) : (
                  <motion.button
                    onClick={() => setSelectedCert(cert.link)}
                    className="text-green-600 dark:text-green-400 hover:underline text-sm flex items-center gap-1"
                    whileHover={{ x: 5 }}
                  >
                    View Certificate
                    <span className="text-lg transition-transform">→</span>
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <CertificationModal
        isOpen={selectedCert !== null}
        onClose={() => setSelectedCert(null)}
        fileUrl={selectedCert || ""}
      />
    </section>
  );
}