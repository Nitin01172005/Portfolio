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
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 pt-[200px] space-y-10">
      {/* About + Location */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* About Section */}
        <div className="p-6 border rounded-2xl border-neutral-600 bg-neutral-800 flex-1">
          <p className="text-neutral-400 font-medium">About</p>
          <p className="text-neutral-200 text-lg sm:text-xl pt-4 font-medium">
            I am Software developer specialize in front-end more.
          </p>
          <p className="text-neutral-400 pt-2 text-sm">
            Passionate about creating dynamic websites with blended designs. I
            try give scalable and interesting web solutions. <br />
            One who like challenges and create more beautiful websites with
            amazing designs.
          </p>
        </div>

        {/* Location Map */}
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
            <div className="w-full sm:w-[200px] md:w-[300px] lg:w-[200px]">
              <Image
                src="/map.png"
                className="z-10 object-cover rounded-2xl transition-transform duration-900 ease-in-out hover:scale-150 "
                height={200}
                width={400}
                alt="maps"
              ></Image>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills */}
      <div className="py-6 border rounded-2xl text-neutral-400 border-neutral-600 transition-transform duration-300 ease-in-out w-full">
        <p className="text-neutral-400 pb-2 font-medium ml-5 sm:ml-10">
          Skills
        </p>
        <hr className="ml-5 sm:ml-10 h-px bg-neutral-300 border-0 z-10 w-[90%]" />
        <div className="flex flex-wrap justify-start gap-6 sm:gap-8 pt-7 ml-5 sm:ml-10">
          <HoverIcon Icon={FaGithub} label="GitHub" />
          <HoverIcon Icon={FaNodeJs} label="Node.js" />
          <HoverIcon Icon={FaReact} label="React" />
          <HoverIcon Icon={IoLogoJavascript} label="JavaScript" />
          <HoverIcon Icon={RiNextjsLine} label="Next.js" />
          <HoverIcon Icon={SiMongodb} label="MongoDB" />
          <HoverIcon Icon={SiPostman} label="Postman" />
          <HoverIcon Icon={SiPrisma} label="Prisma" />
          <HoverIcon Icon={SiTailwindcss} label="Tailwind CSS" />
          <HoverIcon Icon={TbBrandFramerMotion} label="Framer Motion" />
        </div>
      </div>

      {/* Projects */}
      <div className="py-6 border rounded-2xl text-neutral-400 border-neutral-600 w-full">
        <p className="text-neutral-400 font-medium ml-5 sm:ml-10">Projects</p>
        <hr className="mx-5 sm:mx-10 my-2 h-px bg-neutral-300 border-0" />

        <div className="flex flex-col lg:flex-row gap-6 px-5 sm:px-10">
          {[
            {
              title: "Eshop",
              image: "/elect.png",
              description:
                "An e-commerce electronic website where you can purchase all the goods from headphones, pc, etc.",
              liveUrl: "https://ecommerce-electronics-ndj3.vercel.app/",
              githubUrl:
                "https://github.com/Nitin01172005/Ecommerce-electronics",
            },
            {
              title: "Real Estate",
              image: "/tour.png",
              description:
                "A real estate platform where you can search the property according to your preferences.",
              liveUrl: "https://touring-site.vercel.app/",
              githubUrl: "https://github.com/Nitin01172005/Tour",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="border bg-neutral-800 border-neutral-600 rounded-xl overflow-hidden flex-1 max-w-full"
            >
              <div className="w-full h-[220px] sm:h-[300px] overflow-hidden">
                <Image
                  src={project.image}
                  className="object-cover w-full h-full rounded-t-xl transition-transform duration-900 ease-in-out hover:scale-150"
                  height={300}
                  width={500}
                  alt={project.title}
                />
              </div>
              <div className="flex justify-between items-center px-5 pt-3">
                <span className="text-lg sm:text-xl font-medium text-neutral-100">
                  {project.title}
                </span>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGlobe
                      className="hover:scale-105 cursor-pointer text-white transition-transform duration-200"
                      size={20}
                    />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      className="hover:scale-105 cursor-pointer text-white transition-transform duration-200"
                      size={20}
                    />
                  </a>
                </div>
              </div>
              <p className="text-sm text-neutral-300 px-5 py-2">
                {project.description}
              </p>
              <div className="flex gap-2 px-5 pb-4">
                {["React.js", "Tailwind CSS", "Framer Motion"].map(
                  (tech, index) => (
                    <button
                      key={index}
                      className="border text-[10px] rounded bg-neutral-600 text-neutral-200 px-2 py-1"
                    >
                      {tech}
                    </button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={() => router.push("/projects")}
            className="cursor-pointer flex items-center border rounded-xl font-medium gap-2 bg-neutral-600 text-neutral-200 px-4 py-2 text-sm"
          >
            more projects
            <MdOutlineDoubleArrow className="text-white" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};




export default Hero;
