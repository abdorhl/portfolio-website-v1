"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { categorizedSkills, skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const categoryAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const skillItemAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: 0.05 * index,
      type: "spring",
      stiffness: 120,
      damping: 10
    }
  }),
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      
      <div className="space-y-8">
        {categorizedSkills.map((category, catIndex) => (
          <motion.div
            key={category.title}
            variants={categoryAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-40px 0px" }}
            transition={{ delay: catIndex * 0.2 }}
          >
            <motion.h3 
              className="text-lg font-medium mb-4 text-gray-700 dark:text-white/80"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
            >
              {category.title}
            </motion.h3>
            
            <ul className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill) => {
                const originalIndex = skillsData.indexOf(skill);
                return (
                  <motion.li
                    className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 
                      cursor-default transition-shadow hover:shadow-lg dark:hover:bg-white/20"
                    key={originalIndex}
                    variants={skillItemAnimation}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    whileTap="tap"
                    viewport={{ once: true }}
                    custom={originalIndex}
                  >
                    <span className="block transform transition-transform duration-200 hover:rotate-[5deg]">
                      {skill}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}