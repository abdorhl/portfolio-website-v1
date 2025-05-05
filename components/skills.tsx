"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { categorizedSkills, skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

// Define skill type based on skillsData
type Skill = typeof skillsData[number];

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
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
      
      <motion.div 
        className="space-y-8"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {categorizedSkills.map((category) => (
          <div key={category.title}>
            <h3 className="text-lg font-medium mb-4 text-gray-700 dark:text-white/80">
              {category.title}
            </h3>
            
            <ul className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill) => {
                // Type assertion and index check
                const typedSkill = skill as Skill;
                const originalIndex = skillsData.indexOf(typedSkill);
                
                return originalIndex !== -1 ? (
                  <li
                    className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 
                      cursor-default transition-shadow hover:shadow-lg dark:hover:bg-white/20"
                    key={originalIndex}
                  >
                    <span className="block">
                      {typedSkill}
                    </span>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
}