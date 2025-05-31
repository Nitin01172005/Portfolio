"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

const Navbar = () => {
  const router = useRouter();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Scroll effects
  const y = useTransform(scrollY, [0, 100], [0, -10]);
  const width = useTransform(scrollY, [0, 100], ["100%", "90%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.nav
      layout
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 text-white overflow-hidden backdrop-blur-md transition-all duration-500 ${
        scrolled ? "rounded-full shadow-xl" : "rounded-none"
      }`}
      style={{
        y,
        width,
        background: scrolled
          ? "linear-gradient(200deg, #bababa, #000000)"
          : "transparent",
        boxShadow: scrolled ? "var(--shadow-input)" : "none",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Container */}
      <motion.div
        layout
        className={`flex ${
          scrolled
            ? "flex-col items-center gap-2"
            : "flex-col sm:flex-row items-center justify-between gap-0"
        } w-full px-4 sm:px-6 md:px-10 py-2 sm:py-4`}
      >
        {/* Name + Subtitle */}
        <motion.div
          layout
          className={`flex flex-col ${
            scrolled ? "items-center" : "sm:items-start"
          }`}
        >
          <button className="cursor-pointer" onClick={() => router.push("/")}>
            <motion.p
              layout
              className={`font-bold text-neutral-200 ${
                scrolled
                  ? "text-lg sm:text-xl"
                  : "text-sm sm:text-base md:text-lg lg:text-xl"
              }`}
            >
              Nit Alorik
            </motion.p>
          </button>
          <motion.p
            layout
            className={`text-[10px] sm:text-xs text-neutral-400 ${
              scrolled ? "mt-1 text-center" : "ml-5 sm:ml-0"
            }`}
          >
            Software Developer
          </motion.p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          layout
          className={`flex items-center gap-3 sm:gap-4 md:gap-5 ${
            scrolled ? "mt-2" : "justify-center"
          }`}
        >
          <a
            href="mailto:nitinkirola1701@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGmail
              className="transition-transform duration-200 ease-in-out hover:scale-125 cursor-pointer"
              size={18}
            />
          </a>
          <a
            href="https://twitter.com/@kirola_nit16098"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter
              className="transition-transform duration-200 ease-in-out hover:scale-125 cursor-pointer"
              size={18}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/nitin-kirola-726695287"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              className="transition-transform duration-200 ease-in-out hover:scale-125 cursor-pointer"
              size={18}
            />
          </a>
          <a
            href="https://www.instagram.com/nitin___kirola___"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram
              className="transition-transform duration-200 ease-in-out hover:scale-125 cursor-pointer"
              size={18}
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Optional: Bottom border */}
      <motion.div layout>
        <hr className="h-px mt-2 sm:mt-4 bg-gray-200 border-0" />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
