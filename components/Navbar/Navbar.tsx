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

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["100%", "85%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.nav
      className="fixed left-1/2 transform -translate-x-1/2 z-50 text-white rounded-full overflow-hidden"
      style={{
        boxShadow: scrolled ? "var(--shadow-input)" : "none",
        background: scrolled
          ? "linear-gradient(200deg, #bababa, #000000)"
          : "none",
        y,
        width,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-6 md:px-10 py-2 sm:py-4 gap-2 sm:gap-0">
        <div className="flex flex-col text-center sm:text-left">
          <button className="cursor-pointer" onClick={() => router.push("/")}>
            <p className="font-bold text-neutral-200 text-sm sm:text-base md:text-lg lg:text-xl">
              Nit Alorik
            </p>
          </button>
          <p className="text-[10px] ml-5 sm:text-xs text-neutral-400">
            Software Developer
          </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 justify-center">
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
        </div>
      </div>

      <div>
        <hr className="h-px mt-2 sm:mt-4 bg-gray-200 border-0" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
