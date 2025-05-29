"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
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
  const width = useTransform(scrollY, [0, 100], ["100%", "80%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      className="fixed left-1/2 transform -translate-x-1/2 text-white z-50 sm:text-4xl md:text-2xl pt-4 items-center rounded-full overflow-hidden"
      style={{
        boxShadow: scrolled ? "var(--shadow-input)" : "none",

        // backgroundColor: scrolled ? "gray" : "none",
        background: scrolled
          ? "linear-gradient( 200deg ,#bababa,#000000)"
          : "none",
        y,
        width,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-center justify-between w-full px-10">
        <div className="flex flex-col gap-2">
          <button className="cursor-pointer" onClick={() => router.push("/")}>
            <p className="font-bold text-neutral-200">Nit Alorik</p>
          </button>
          
          <p className="text-[10px]  text-neutral-400">Software Developer</p>
        </div>
        <div className="flex items-center gap-5 justify-between">
          <a
            href="mailto:nitinkirola1701@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGmail
              className="transition-transform font-bold text-white duration-200 ease-in-out hover:scale-125 cursor-pointer"
              size={20}
            />
          </a>
          <a
            href="https://twitter.com/@kirola_nit16098"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter
              className="transition-transform font-bold text-white duration-200 ease-in-out hover:scale-125 cursor-pointer"
              size={20}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/nitin-kirola-726695287" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              className="transition-transform font-bold text-white duration-200 ease-in-out hover:scale-125 cursor-pointer "
              size={20}
            />
          </a>
          <a
            href="https://www.instagram.com/nitin___kirola___"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram
              className="transition-transform font-bold text-white duration-200 ease-in-out hover:scale-125 cursor-pointer "
              size={20}
            />
          </a>
        </div>
      </div>

      <div>
        <hr className="h-px mt-4 bg-gray-200"></hr>
      </div>
    </motion.nav>
  );
};

export default Navbar;
