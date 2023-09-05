"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello! I'm currently a third-year student at Sidi Mohammed Ibn Abdellah University, pursuing a degree in IT and mathematics. My journey into the world of software development has been quite unique. Unlike the traditional path of studying accounting, I've chosen to follow my passion for programming.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy going to Gym, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and tech</span>. I'm also
        learning about blockchain and web3.
      </p>
    </motion.section>
  );
}
