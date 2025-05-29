"use client";
import React from "react";
import Image from "next/image";
import {AnimatePresence,  motion } from "motion/react";

import { FaGithub } from "react-icons/fa6";

import { BsGlobe } from "react-icons/bs";
import { MdOutlineDoubleArrow } from "react-icons/md";


const page = () => {
  return (
    <div className="pt-48">
      <div className=" mt-13 py-4 border mr-15 rounded-2xl  text-neutral-400 border-neutral-600">
        <p className="text-neutral-400 ml-10 font-medium">Projects</p>

        <hr className="mx-4 h-px bg-neutral-300 border-0 z-10 ml-10 my-2 mr-4" />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)",
          }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.3,
            delay: 0.05,
          }}
          className="flex gap-15 items-center justify-between mx-10 my-4"
        >
          <div className=" overflow-hidden border h-[430px] w-[500px]  bg-neutral-800 border-neutral-600 rounded-xl ">
            <div className=" overflow-hidden w-[500px] h-[300px]">
              <Image
                src="/elect.png"
                className="z-10 object-cover w-full h-full  rounded-tl-xl rounded-tr-xl transition-transform duration-900 ease-in-out hover:scale-150 "
                height={200}
                width={250}
                alt="maps"
              ></Image>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-medium pt-2 text-neutral-100 px-5">
                Eshop
              </span>

              <div className="flex mx-4 gap-3 pt-2">
                <a
                  href="https://ecommerce-electronics-ndj3.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGlobe
                    className="transition-transform font-bold text-white duration-200 ease-in-out hover:scale-105 cursor-pointer"
                    size={20}
                  />
                </a>
                {/* https://github.com/Nitin01172005/Ecommerce-electronics */}
                <a
                  href="https://github.com/Nitin01172005/Ecommerce-electronics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="transition-transform font-bold text-white duration-200 ease-in-out hover:scale-105 cursor-pointer"
                    size={20}
                  />
                </a>
              </div>
            </div>
            <p className="mt-2 text-[12px] font-medium pt-2 text-neutral-300 pl-5">
              An e-commerce electronic website where you can purchase all the
              goods from headhones(wireless, weired), pc, etc.
            </p>
            <div className="flex gap-3 ml-5">
              <button className="  my-3  border rounded bg-neutral-600 text-neutral-200 px-2 border-neutral-600 text-[10px]">
                React.js
              </button>
              <button className=" my-3  border rounded bg-neutral-600 text-neutral-200 px-2 border-neutral-600 text-[10px]">
                Tailwind Css
              </button>
              <button className=" my-3  border rounded bg-neutral-600 text-neutral-200 px-2 border-neutral-600 text-[10px]">
                Framer Motion
              </button>
            </div>
          </div>
          <div className=" overflow-hidden border h-[430px] w-[500px]  bg-neutral-800 border-neutral-600 rounded-xl ">
            <div className=" overflow-hidden w-[500px] h-[300px]">
              <Image
                src="/tour.png"
                className="z-10 object-cover w-full h-full  rounded-tl-xl rounded-tr-xl transition-transform duration-900 ease-in-out hover:scale-150 "
                height={200}
                width={250}
                alt="maps"
              ></Image>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-medium pt-2 text-neutral-100 px-5">
                Real Estate
              </span>

              <div className="flex mx-4 gap-3 pt-2">
                <a
                  href="https://touring-site.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGlobe
                    className="transition-transform font-bold text-white duration-200 ease-in-out hover:scale-105 cursor-pointer"
                    size={20}
                  />
                </a>
                <a
                  href="https://github.com/Nitin01172005/Tour"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="transition-transform font-bold text-white duration-200 ease-in-out hover:scale-105 cursor-pointer"
                    size={20}
                  />
                </a>
              </div>
            </div>
            <p className="mt-2 text-[12px] font-medium pt-2 text-neutral-300 pl-5">
              A real estate platform where you can search the property according
              to you preferences.
            </p>
            <div className="flex gap-3 ml-5">
              <button className="  my-3  border rounded bg-neutral-600 text-neutral-200 px-2 border-neutral-600 text-[10px]">
                React.js
              </button>
              <button className=" my-3  border rounded bg-neutral-600 text-neutral-200 px-2 border-neutral-600 text-[10px]">
                Tailwind Css
              </button>
              <button className=" my-3  border rounded bg-neutral-600 text-neutral-200 px-2 border-neutral-600 text-[10px]">
                Framer Motion
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)",
          }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="flex items-center justify-center mx-auto my-4"
        >
          <div className=" overflow-hidden border h-[430px] w-[500px]  bg-neutral-800 border-neutral-600 rounded-xl ">
            <div className=" overflow-hidden w-[500px] h-[300px]">
              <Image
                src="/bitcoin.png"
                className="z-10 object-cover w-full h-full  rounded-tl-xl rounded-tr-xl transition-transform duration-900 ease-in-out hover:scale-150 "
                height={200}
                width={250}
                alt="maps"
              ></Image>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-medium pt-2 text-neutral-100 px-5">
                Bitcon & Saas
              </span>

              <div className="flex mx-4 gap-3 pt-2">
                <a
                  href="https://bitcoin-8yfa.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGlobe
                    className="transition-transform font-bold text-white duration-200 ease-in-out hover:scale-105 cursor-pointer"
                    size={20}
                  />
                </a>
                <a
                  href="https://github.com/Nitin01172005/Bitcoin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="transition-transform font-bold text-white duration-200 ease-in-out hover:scale-105 cursor-pointer"
                    size={20}
                  />
                </a>
              </div>
            </div>
            <p className="mt-2 text-[12px] font-medium pt-2 text-neutral-300 pl-5">
              A simple UI for mastering Bitcoin trading with expert-led,
              strategic coaching that delivers actionable, profitable, reliable,
              and empowering market insights.
            </p>
            <div className="flex gap-3 ml-5">
              <button className="  my-3  border rounded bg-neutral-600 text-neutral-200 px-2 border-neutral-600 text-[10px]">
                React.js
              </button>
              <button className=" my-3  border rounded bg-neutral-600 text-neutral-200 px-2 border-neutral-600 text-[10px]">
                Tailwind Css
              </button>
              <button className=" my-3  border rounded bg-neutral-600 text-neutral-200 px-2 border-neutral-600 text-[10px]">
                Framer Motion
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
