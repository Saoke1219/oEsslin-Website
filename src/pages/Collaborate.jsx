import React from "react";
import MorphText from "../components/MorphText";
import SectionWithTabs from "../components/SectionWithTabs";

export default function Collaborate() {
  return (
    <section className="w-full py-20 space-y-24">

      {/* --- FEATURE AREA --- */}
      <div className="relative max-w-7xl mx-auto">

        {/* LEFT PARTIAL WIDTH IMAGE (starts at edge) */}
        <div className="w-screen lg:w-[50vw] h-[800px] sm:h-[500px] lg:h-[520px] overflow-hidden relative">
          <img
            src={`${import.meta.env.BASE_URL}partner.png`}
            alt="Collaboration"
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
        </div>

        {/* OVERLAPPING TEXT PANEL */}
        <div className="px-6 md:px-10 lg:px-0">
          <div
            className="
              bg-white px-6 sm:px-10 py-2 lg:py-6 shadow-sm max-w-[800px]
              lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2
              lg:-mr-6
            "
          >
            {/* Accent Line */}
            <div className="w-80 h-[2px] bg-black mb-4"></div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6">
              Transformation through <MorphText />
            </h1>

            {/* Paragraph */}
            <p className="text-black text-lg leading-relaxed">
              We believe meaningful change happens when motivated people bring
              sharp minds and genuine care for humanity to a shared purpose. If
              you lead with curiosity, collaborate with intention and think
              progress must serve both people and planet — we want to work with
              you.
            </p>
          </div>
        </div>
      </div>

      {/* --- INTERACTIVE TABS SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <SectionWithTabs />
      </div>

      {/* --------------------------------------- */}
      {/* --- FINAL BLUE FEATURE CALLOUT BLOCK --- */}
      {/* --------------------------------------- */}
      <section className="w-full pt-8 pb-20">
        <div className="relative w-full bg-[#F2F2F2] py-20 px-6 md:px-10 lg:px-20">

          {/* IMAGE */}
          <div className="absolute top-10 -left-6 sm:-left-10 lg:-left-16 w-[65%] sm:w-[50%] lg:w-[45%]">
  <img
    src={`${import.meta.env.BASE_URL}partner.png`}
    alt="Vision"
    className=" shadow-md object-cover w-full h-[300px] sm:h-[380px] lg:h-[420px]"
  />
</div>

          {/* CONTENT WRAPPER (keeps text aligned on large screens) */}
          <div className="max-w-7xl mx-auto">

            {/* TEXT AREA */}
            <div className="ml-0 sm:ml-[55%] lg:ml-[50%] space-y-6">
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A2B44] leading-snug">
                Shaping the Future Through Collaboration
              </h2>

              {/* Paragraph */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-lg">
                We support leaders, organisations, and institutions to navigate complexity,
                unlock innovation, and build pathways that accelerate transformation.
              </p>

              {/* CTA BUTTON */}
              <div className="pt-2">
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 border border-black rounded-md 
                  text-sm sm:text-base font-medium hover:bg-black hover:text-white transition-all"
                >
                  Connect With Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </section>
  );
}
