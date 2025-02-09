import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import lhubImg from "@/public/Lhoooooooooobpa2.png";
import defendozerappImg from "@/public/home.png";
import eboImg from "@/public/ebureal.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated high school",
    location: "Lycée Prince Moulay El Hassan, Fes",
    description:
      "High School Diploma in Physical and Chemical Sciences.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "graduated bootcamp",
    location: "FreeCodeCamp",
    description:
        "Completed a 300-hour training program (Computing withPython).",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "IT support specialiste",
    location: "AS CROWN,  Fes",
    description:
      "During my 3 month internship at AS CROWN,  I provided technical assistance and support to end-users, troubleshooting hardware and software issues, and ensuring optimal system performance.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Ibtitex , Fes",
    description:
        "During my 6 month internship at IBTITEX, I developed a planning management application, and I help to resolve a technical issues",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Bachelor Of Science",
    location: "Sidi Mohamed Ben Abdellah University",
    description:
        "Graduated in Computer Science and Mathematics.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },

] as const;

export const projectsData = [
  {
    title: "EBO IPTV Platform",
    description:
        "This project showcases a modern and dynamic IPTV service landing page designed for EBO IPTV. The design features a sleek and futuristic layout, high-definition streaming across multiple devices. ",
    tags: ["React", "vite", "Figma", "javascript", "Tailwind"],
    imageUrl: eboImg,
  },
  {
  title: "DefenDozer App",
  description:
      "DefenDozer protects your device from malware threats using advanced detection models and real-time scanning to ensure data security.",
  tags: ["Flutter", "Dart", "Flask", "Python", "TFLite"],
  imageUrl: defendozerappImg,
  },
  {
    title: "IbtitexPlan",
    description:
      "I worked as a full-stack developer on this project for 6 month. Users can have all data easiest.",
    tags: ["php", " laravel", "Symphony", "Bootstrap", "Mysql", "javascript"],
    imageUrl: corpcommentImg,
  },

  {
    title: "MYBAN tech",
    description:
      "A website offers professional development and SM marketing services, helping businesses enhance their online presence and achieve their digital goals.",
    tags: ["React", "vite", "Bootstrap", "Figma", "javascript"],
    imageUrl: lhubImg,
  },
  {
    title: "Word Analytics",
    description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "TypeScript",
  "React",
  "Laravel",
  "DART",
  "Flutter",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "C++",
  "java",
  "C",
  "Express",
  "mySQL",
  "Python",
  "Flask",
] as const;
