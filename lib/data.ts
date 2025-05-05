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
import ibm from "@/public/ibm.png";
import cisco from "@/public/Cisco_logo.png";
import freecodecamp from "@/public/freecode.png";
import openhpi from "@/public/openhpi.png";
import aws from "@/public/Amazon-Web-Services-AWS.png";

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
    location: "Moulay El Hassan High School, Fes",
    description:
      "High School Diploma in Physical and Chemical Sciences.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
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


export const certifications = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS SkillBuilder",
    status: "completed",
    estimatedCompletion: "Mai 2025",
    description: "Foundational understanding of AWS cloud services, core concepts, and best practices for technical and non-technical roles.",
    image: aws,
    link: "/AWS Certificate.pdf"
  },
  {
    title: "Certified Ethical Hacker",
    issuer: "Cisco Networking Academy",
    date: "February 2025",
    status: "completed",
    description: "A certification in ethical hacking and penetration testing, covering core techniques for identifying and exploiting security vulnerabilities.",
    link: "/EthicalHacker.pdf",
    image: cisco,
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "March 2025",
    status: "completed",
    description: "Covers fundamental foundational concepts of artificial intelligence, including machine learning, neural networks, and real-world AI applications.",
    image: ibm,
    link: "/IBMDesign.pdf"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "February 2024",
    status: "completed",
    description: "Covers fundamental algorithms and data structures in JavaScript.",
    image: freecodecamp,
    link: "/JavaScript.pdf"
  },
  {
    title: "Digitale Privatsphäre: Wie schütze ich meine persönlichen Daten im Netz?",
    issuer: "OpenHPI",
    date: "March 2024",
    status: "completed",
    description: "Ein Grundlagenzertifikat über den Schutz persönlicher Daten im digitalen Raum, mit Fokus auf PII, Verschlüsselung, technische Schutzmaßnahmen und Datenschutzbewusstsein.",
    image: openhpi,
    link: "/privatsphaere.pdf"
  },
  {
    title: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    date: "January 2025",
    status: "completed",
    description: "Core concepts for managing operating systems in networked environments, covering resource allocation and basic system security.",
    image: cisco,
    link: "/OperatingSystems.pdf"
  },
  {
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "August 2021",
    status: "completed",
    description: "A certification covering core Python programming concepts, with a focus on scientific computing, data structures, algorithms, and problem-solving using libraries like NumPy and pandas.",
    image: freecodecamp,
    link: "https://www.freecodecamp.org/certification"
  },
  
  // Add more certifications as needed
];


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
  "Java",
  "C",
  "Express",
  "mySQL",
  "Python",
  "Flask",
  // Add new skills here
  "Docker",
  "Kubernetes",
  "AWS",
  "Terraform",
  "Jenkins",
  "Linux/Unix",
  "Postman",
  "Jira"
] as const;

export const categorizedSkills = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap", "TypeScript"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "PHP", "Laravel", "Flask"],
  },
  {
    title: "Mobile Development",
    skills: ["DART", "Flutter"],
  },
  {
    title: "Database & Storage",
    skills: ["MongoDB", "mySQL"],
  },
  {
    title: "Programming Languages",
    skills: ["C++", "java", "C", "Python"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", 
    "Docker",
    "Kubernetes",
    "Jenkins",
    "AWS",
    "Ansible",
    "Prometheus",
    "GitHub Actions",
    "CI/CD",
    "Linux/Unix",
    "Nginx",
    "Postman",
    "Jira"],
  },
] as const;
