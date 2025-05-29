"use client";
import { useRouter } from "next/navigation";

import { HoverIcon } from "./HoverIcon";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BsGlobe } from "react-icons/bs";
import { MdOutlineDoubleArrow } from "react-icons/md";


const Hero = () => {
  const router = useRouter();

  return (
    <div className="py-45 px-12 ">
      <div className="flex gap-15 ">
        <div className=" py-4 border rounded-2xl border-neutral-600 bg-neutral-800">
          <div className=" ml-10 ">
            <p className="text-neutral-400 font-medium">About</p>
            <p className="text-neutral-200 text-xl pt-4 font-medium items-center">
              I am Software developer specialize in front-end more.
            </p>
            <p className="text-neutral-400 pt-2 text-sm mr-10">
              Passionate about creating dynamic websites with blended designs. I
              try give scalable and interesting web solutions. <br />
              One who like challenges and create more beautiful websites with
              amazing designs.
            </p>
          </div>
        </div>
        <motion.div
          className="z-10 relative border rounded-2xl border-neutral-500"
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="flex gap-15 items-center justify-between">
            <span className="text-neutral-200  left-2 top-0 text-sm pt-2 font-medium ml-2 absolute z-20 ">
              Location
            </span>
            <span className="text-neutral-200  right-2 top-10 text-sm pt-2 font-medium absolute z-20 ">
              New Delhi
            </span>
          </div>
          <hr className="absolute mx-2 left-0 right-0 top-9 h-px bg-neutral-300 border-0 z-10" />
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/map.png"
              className="z-10 object-cover rounded-2xl transition-transform duration-900 ease-in-out hover:scale-150 "
              height={100}
              width={200}
              alt="maps"
            ></Image>
          </div>
        </motion.div>
      </div>

      <div className="mt-13 py-4 border rounded-2xl text-neutral-400 border-neutral-600 transition-transform duration-300 ease-in-out w-[1060px]">
        <p className="text-neutral-400 pb-2 font-medium ml-10 ">Skills</p>
        <hr className="ml-10 h-px bg-neutral-300 border-0 z-10 w-[950px] transition-transform duration-300 ease-in-out " />
        <div className="flex gap-12 pt-7 ml-10 transition-transform duration-300 ease-in-out">
          <HoverIcon
            Icon={FaGithub}
            label="GitHub"
            
          />
          <HoverIcon
            Icon={FaNodeJs}
            label="Node.js"
            
          />
          <HoverIcon
            Icon={FaReact}
            label="React"
            
          />
          <HoverIcon
            Icon={IoLogoJavascript}
            label="JavaScript"
            
          />
          <HoverIcon
            Icon={RiNextjsLine}
            label="Next.js"
            
          />
          <HoverIcon
            Icon={SiMongodb}
            label="MongoDB"
            
          />
          <HoverIcon
            Icon={SiPostman}
            label="Postman"
            
          />
          <HoverIcon
            Icon={SiPrisma}
            label="Prisma"
            
          />
          <HoverIcon
            Icon={SiTailwindcss}
            label="Tailwind CSS"
            
          />
          <HoverIcon
            Icon={TbBrandFramerMotion}
            label="Framer Motion"
            
          />
        </div>
      </div>

      <div className=" mt-13 py-4 border mr-15 rounded-2xl  text-neutral-400 border-neutral-600">
        <p className="text-neutral-400 ml-10 font-medium">Projects</p>
        <hr className="mx-4 h-px bg-neutral-300 border-0 z-10 ml-10 my-2 mr-4" />
        <div className="flex gap-15 items-center justify-between mx-10 my-4">
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
                  href="https://ecommerce-electronics-ndj3.vercel.app/" // replace with your actual URL
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
                  href="https://github.com/Nitin01172005/Ecommerce-electronics" // replace with your actual URL
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
                  href="https://touring-site.vercel.app/" // replace with your actual URL
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGlobe
                    className="transition-transform font-bold text-white duration-200 ease-in-out hover:scale-105 cursor-pointer"
                    size={20}
                  />
                </a>
                <a
                  href="https://github.com/Nitin01172005/Tour" // replace with your GitHub URL
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
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => router.push("/projects")}
            className=" cursor-pointer flex items-center my-3  border rounded-xl font-medium gap-2 bg-neutral-600 text-neutral-200 px-2 border-neutral-600 text-[12px]"
          >
            more projects
            <MdOutlineDoubleArrow className="font-bold text-white " size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};



export default Hero;
