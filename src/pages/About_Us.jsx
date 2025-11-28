import React from "react";
import { motion } from "framer-motion"; // <-- required for animated underline

import ApproachCards from "../components/ApproachCards";
import StackedScrollCards from "../components/StackedScrollCards";
import OEsslin from "../components/OEsslin";


export default function About_Us() {
  return (
    <div className="w-full bg-white text-black overflow-x-hidden">

      {/* HERO SECTION — OUR STORY */}
      <div className="relative max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 space-y-10">

        {/* Small Title */}
        <p className="text-lg sm:text-xl md:text-2xl mb-4 text-black font-medium tracking-widest uppercase">
        The <OEsslin /> Perspective
        </p>

        {/* Main Heading */}
        <h1
  className="
    font-semibold 
    text-4xl sm:text-4xl md:text-5xl lg:text-7xl
    text-left max-w-6xl leading-tight 
  "
>
  Unlocking{" "}
  <span className="relative inline-block">
    transformative

    {/* Animated Underline */}
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1.8, ease: [0.22, 0.61, 0.36, 1] }}
      className="absolute left-0 h-[4px] bg-[#98C1FF]"
      style={{
        bottom: "-0.05em"
      }}
    />
  </span>{" "}
  <br />
  potential to create enduring impact.
</h1>


        {/* Supporting Paragraph */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black max-w-3xl">
        <OEsslin /> is a systems consultancy that helps organizations solve complex challenges.
          From operational inefficiency to sustainable growth, we design and implement strategies
          that strengthen performance, reduce waste, and align business outcomes with social and
          environmental realities.
        </p>
      </div>

      {/* Scroll Experience */}
      <StackedScrollCards />

      {/* Approach Section */}
      <div className="mt-6 sm:mt-2 md:mt-8 lg:mt-2">
        <ApproachCards />
      </div>
    </div>
  );
}

