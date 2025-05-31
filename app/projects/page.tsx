"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { ReactNode } from "react";



import { FaGithub } from "react-icons/fa6";

import { BsGlobe } from "react-icons/bs";
interface BadgeProps {
  children: ReactNode;
}


const page = () => {
  return (
    <div className="pt-48 px-4">
      <div className="mt-13 py-4 border rounded-2xl text-neutral-400 border-neutral-600">
        <p className="text-neutral-400 px-6 font-medium text-lg">Projects</p>

        <hr className="mx-4 h-px bg-neutral-300 border-0 z-10 my-2" />

        {/* First Row (Eshop & Real Estate) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="flex flex-col md:flex-row flex-wrap gap-6 justify-center px-4 py-4"
        >
          {/* Project Card 1 */}
          <ProjectCard
            title="Eshop"
            image="/elect.png"
            liveLink="https://ecommerce-electronics-ndj3.vercel.app/"
            codeLink="https://github.com/Nitin01172005/Ecommerce-electronics"
            description="An e-commerce electronic website where you can purchase all the goods from headphones (wireless, wired), PCs, etc."
          />

          {/* Project Card 2 */}
          <ProjectCard
            title="Real Estate"
            image="/tour.png"
            liveLink="https://touring-site.vercel.app/"
            codeLink="https://github.com/Nitin01172005/Tour"
            description="A real estate platform where you can search the property according to your preferences."
          />
        </motion.div>

        {/* Second Row (Bitcoin & Saas) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center px-4 py-4"
        >
          <ProjectCard
            title="Bitcoin & Saas"
            image="/bitcoin.png"
            liveLink="https://bitcoin-8yfa.vercel.app/"
            codeLink="https://github.com/Nitin01172005/Bitcoin"
            description="A simple UI for mastering Bitcoin trading with expert-led, strategic coaching that delivers actionable, profitable, reliable, and empowering market insights."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default page;

// ProjectCard Component
// Define props type
interface ProjectCardProps {
  title: string;
  image: string;
  liveLink: string;
  codeLink: string;
  description: string;
}

// Use it in the component
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  liveLink,
  codeLink,
  description,
}) => {
  return (
    <div className="w-full md:w-[48%] lg:w-[32%] bg-neutral-800 border border-neutral-600 rounded-xl overflow-hidden flex flex-col h-auto">
      <div className="relative h-[220px] sm:h-[280px] md:h-[300px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-xl transition-transform duration-900 ease-in-out hover:scale-150"
        />
      </div>

      <div className="flex justify-between items-center px-5 pt-3">
        <span className="text-xl font-medium text-neutral-100">{title}</span>
        <div className="flex gap-3">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <BsGlobe className="text-white hover:scale-105 transition-transform" size={20} />
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:scale-105 transition-transform" size={20} />
          </a>
        </div>
      </div>

      <p className="text-[12px] font-medium text-neutral-300 px-5 pt-2">{description}</p>

      <div className="flex gap-2 flex-wrap px-5 py-3">
        <Badge>React.js</Badge>
        <Badge>Tailwind CSS</Badge>
        <Badge>Framer Motion</Badge>
      </div>
    </div>
  );
};

const Badge: React.FC<BadgeProps> = ({ children }) => (
  <span className="text-[10px] border rounded bg-neutral-600 text-neutral-200 px-2 py-0.5 border-neutral-600">
    {children}
  </span>
);




