"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BsHouse, BsPerson, BsFolder, BsStars, BsBriefcase, BsEnvelope } from "react-icons/bs";

function MobileNavbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const navLinks = [
    { icon: <BsHouse />, label: "Home", hash: "#home", name: "Home" },
    { icon: <BsPerson />, label: "About", hash: "#about", name: "About" },
    { icon: <BsFolder />, label: "Projects", hash: "#projects", name: "Projects" },
    { icon: <BsStars />, label: "Skills", hash: "#skills", name: "Skills" },
    { icon: <BsBriefcase />, label: "Experience", hash: "#experience", name: "Experience" },
    { icon: <BsEnvelope />, label: "Contact", hash: "#contact", name: "Contact" },
  ];
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[999] sm:hidden">
      <div className="flex items-center justify-center gap-1 px-2 py-1 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-80 rounded-full shadow-lg border border-white border-opacity-40 dark:border-black/40 backdrop-blur-[0.5rem]">
        {navLinks.map((link) => (
          <Link
            key={link.hash}
            href={link.hash}
            onClick={() => {
              setActiveSection(link.name as any);
              setTimeOfLastClick(Date.now());
            }}
            className="relative flex items-center justify-center w-10 h-10"
          >
            {activeSection === link.name && (
              <span className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-full -z-10 shadow-md" />
            )}
            <span className={
              `text-xl transition-colors ${activeSection === link.name ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`
            }>
              {link.icon}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <>
      {/* Desktop Header */}
      <header className="z-[999] relative hidden sm:flex items-center justify-center w-full">
        <motion.div
          className="fixed top-5 left-1/2 -translate-x-1/2 h-[3.25rem] w-[36rem] rounded-full border border-white border-opacity-10 bg-[#181924] bg-opacity-80 shadow-lg shadow-black/[0.08] backdrop-blur-[0.5rem] dark:bg-[#181924] dark:border-black/20 flex items-center justify-center"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        >
          <nav className="w-full">
            <ul className="flex flex-nowrap items-center justify-center gap-3 text-xs font-medium text-gray-400">
              {links.map((link) => (
                <motion.li
                  className="h-3/4 flex items-center justify-center relative"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-2 transition text-xs",
                      {
                        "text-white font-bold": activeSection === link.name,
                        "text-gray-400 font-normal": activeSection !== link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        className="bg-gray-700/80 rounded-xl absolute inset-0 -z-10 shadow-md"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </header>
      {/* Mobile Navbar */}
      <MobileNavbar />
    </>
  );
}
