import React from "react";

import ApproachCards from "../components/ApproachCards";
import StackedCarousel from "../components/StackedCarousel";

export default function About_Us() {
  return (
    <div className="w-full bg-white text-black overflow-x-hidden">

      {/* HERO SECTION — OUR STORY */}
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col gap-4 
                      py-8 sm:py-10 md:py-16 lg:py-4">

        {/* Small Title */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-widest uppercase text-left">
          OUR STORY
        </p>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
          The oEsslin Perspective
        </h1>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl text-left">
          oEssLin is a systems consultancy that helps organizations solve complex challenges.
          From operational inefficiency to sustainable growth, we design and implement strategies
          that strengthen performance, reduce waste, and align business outcomes with social and
          environmental realities.
        </p>
      </div>

      {/* Stacked Carousel */}
      <div className="-mt-8 sm:-mt-2 md:-mt-20 lg:-mt-52
                      mb-16 sm:mb-6 md:mb-24 lg:mb-12">
        <StackedCarousel />
      </div>

      {/* WHY WE EXIST + HOW WE WORK */}
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col gap-10 
                      py-10 sm:py-10 md:py-14 lg:py-10">

        {/* WHY WE EXIST */}
        <div className="flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl uppercase tracking-widest text-left border-b border-black pb-1">
            Why we exist
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-8xl text-left">
          The world’s biggest challenges don’t sit neatly in sectors. they live in the spaces between them. oEsslin exists to bridge those gaps. We saw how governments, businesses, and communities often work in isolation — duplicating efforts, wasting resources, and missing opportunities for shared value. Our mission is simple: to make systems work together. When they do, profits grow, risks shrink, and communities thrive.
          </p>
        </div>

        {/* HOW WE WORK */}
        <div className="flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl uppercase tracking-widest text-left border-b border-black pb-1">
            How we work
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-8xl text-left">
          We take a systems-oriented approach to problem-solving — combining business analytics, design thinking, and field intelligence to see the whole picture. We diagnose inefficiencies, map leverage points, and design practical solutions that last. 
          </p>
        </div>

      </div>

      {/* Approach Section */}
      <div className="mt-6 sm:mt-2 md:mt-8 lg:mt-2">
        <ApproachCards />
      </div>

    </div>
  );
}
