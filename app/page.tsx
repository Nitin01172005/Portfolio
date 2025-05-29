import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";

import React from "react";

const page = () => {
  return <div className="h-[1000px]">
    <Navbar />
    <Hero />
  </div>;
};

export default page;
