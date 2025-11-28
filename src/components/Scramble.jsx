import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function Scramble() {
  const navigate = useNavigate();
  const textRef = useRef(null);

  const lines = [
    "Systems Thinking & Integration",
    "AI, IoT & Predictive Modelling",
    "Nature-Based Solutions",
    "Human-Centred Design",
  ];

  useEffect(() => {
    const container = textRef.current;

    const splitLetters = (text) =>
      text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.opacity = 0;
        span.style.display = "inline-block";
        return span;
      });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    lines.forEach((line) => {
      tl.add(() => {
        container.innerHTML = "";
        const letters = splitLetters(line);
        letters.forEach((span) => container.appendChild(span));

        gsap.to(letters, {
          opacity: 1,
          stagger: { each: 0.07, from: "random" },
          duration: 0.3,
        });

        gsap.to(letters, {
          opacity: 0,
          stagger: { each: 0.03, from: "random" },
          duration: 0.4,
          delay: 3,
        });
      });

      tl.to({}, { duration: 4 });
    });
  }, []);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 flex flex-col items-center justify-center text-center text-black px-4">
      {/* Subtitle */}
      <h2 className="text-xl sm:text-1xl md:text-3xl lg:text-4xl mb-4 font-medium">
        Principles That Shape Our Work
      </h2>

      {/* Scramble Text */}
      <div className="flex items-center justify-center h-24 sm:h-28 md:h-32 lg:h-40 mb-8">
        <h2
          ref={textRef}
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-snug md:leading-tight lg:leading-none text-black"
        ></h2>
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate("/About_Us")}
        className="px-8 py-3 bg-black text-white rounded-lg font-semibold shadow-md hover:bg-gray-800 transition"
      >
        Learn More
      </motion.button>
    </section>
  );
}


