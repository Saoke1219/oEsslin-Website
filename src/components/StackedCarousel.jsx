import React, { useState } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";

const slides = [
  "/turbines.jpg",
  "/hmdesign.jpg",
  "/roadmap.jpg",
  "/energy.jpg",
];

export default function PivotalCarousel() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const DURATION = 2;
  const EASE = [0.22, 0.61, 0.36, 1];

  const lock = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), DURATION * 1000);
  };

  const next = () => {
    if (!animating) {
      lock();
      setIndex((prev) => (prev + 1) % slides.length);
    }
  };

  const prev = () => {
    if (!animating) {
      lock();
      setIndex((prev) => wrap(0, slides.length, prev - 1));
    }
  };

  const mainImg = slides[index];
  const previewImg = slides[wrap(0, slides.length, index + 1)];

  return (
    <section className="w-full max-w-[1500px] mx-auto px-6">

      {/* ===== MOBILE (sm) — 1 STATIC IMAGE ===== */}
      <div className="block md:hidden w-full h-[380px]">
        <img
          src={mainImg}
          className="w-full h-full object-cover "
        />
      </div>

      {/* ===== TABLET (md) — 2 STATIC IMAGES ===== */}
      <div className="hidden md:flex lg:hidden gap-4 w-full h-[450px]">
        <img
          src={mainImg}
          className="w-1/2 h-full object-cover "
        />
        <img
          src={previewImg}
          className="w-1/2 h-full object-cover "
        />
      </div>

      {/* ===== DESKTOP (lg) — ORIGINAL ANIMATED CAROUSEL ===== */}
      <div className="hidden lg:block">
        <div className="relative h-[880px] overflow-hidden flex items-end justify-between gap-10">

          {/* LEFT CONTROLS */}
          <div className="flex flex-col w-[400px]">
            <div className="flex gap-6 mb-2">
              <button
                onClick={prev}
                disabled={animating}
                className={`text-5xl ${
                  animating ? "opacity-30 cursor-not-allowed" : "hover:opacity-50"
                }`}
              >
                ←
              </button>
              <button
                onClick={next}
                disabled={animating}
                className={`text-5xl ${
                  animating ? "opacity-30 cursor-not-allowed" : "hover:opacity-50"
                }`}
              >
                →
              </button>
            </div>

            <div className="w-[400px] h-[450px]" />
          </div>

          <div className="w-[900px] h-[880px]" />

          <AnimatePresence>
            {/* Incoming */}
            <motion.img
              key={`incoming-${previewImg}-${index}`}
              src={previewImg}
              className="absolute bottom-0 left-0 w-[400px] h-[450px] object-cover"
              initial={{ x: "-140%", opacity: 0.3 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: EASE, duration: 1 }}
            />

            {/* Small → Large */}
            <motion.img
              key={`promote-${mainImg}-${index}`}
              src={mainImg}
              className="absolute bottom-0 left-0 w-[400px] h-[450px] object-cover"
              initial={{ x: 0, scale: 1 }}
              animate={{ x: "150%", scale: 1.6 }}
              exit={{ opacity: 0 }}
              transition={{ ease: EASE, duration: DURATION }}
            />

            {/* Large → Exit */}
            <motion.img
              key={`exit-${mainImg}-${index}`}
              src={mainImg}
              className="absolute bottom-0 right-0 w-[900px] h-[1000px] object-cover"
              initial={{ x: "150%", opacity: 1 }}
              animate={{ x: "350%", opacity: 0 }}
              transition={{ ease: EASE, duration: 1 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}










