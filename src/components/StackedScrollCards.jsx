import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const base = import.meta.env.BASE_URL;

const cards = [
  {
    title: "Why We Exist",
    subtitle: "The Oesslin Mindset",
    text:
      "The world’s biggest challenges don’t sit neatly in sectors. They live in the spaces between them. oEsslin exists to bridge those gaps. We saw how governments, businesses, and communities often work in isolation — duplicating efforts, wasting resources, and missing opportunities for shared value. Our mission is simple: to make systems work together. When they do, profits grow, risks shrink, and communities thrive.",
    img: `${base}ai.jpg`,
    bg: "#FDFDFD",
  },
  {
    title: "How We Work",
    subtitle: "Systems Design Meets Implementation",
    text:
      "We take a systems-oriented approach to problem-solving — combining business analytics, design thinking, and field intelligence to see the whole picture. We diagnose inefficiencies, map leverage points, and design practical solutions that last.",
    img: `${base}comdev.jpg`,
    bg: "#E8F2FF",
  },
  {
    title: "Science of Society",
    subtitle: "Community-Led Innovation",
    text:
      "We recognize that every challenge is not simply a technical problem but a human one. Economic structures, governance frameworks, and environmental systems do not operate in isolation– they are deeply intertwined with human behaviours, aspirations, and cultural dynamics. Our approach ensures that solutions are not just operationally effective but resonate with the lived experiences of people, advancing resilience, inclusivity, and long-term sustainability.",
    img: `${base}group.jpg`,
    bg: "#F2F2F2",
  },
];

export default function StackedScrollCards() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <section className="w-screen h-screen overflow-hidden no-scrollbar">

      <div
        ref={containerRef}
        className="relative h-screen w-screen overflow-y-scroll overflow-x-hidden no-scrollbar"
      >
        {cards.map((card, i) => {
          const scale = useTransform(scrollYProgress, [i * 0.15, 1], [1, 0.92]);
          const translateY = useTransform(scrollYProgress, [i * 0.15, 1], [0, -80]);

          return (
            <div
              key={i}
              className="sticky top-0 w-screen h-screen flex overflow-hidden"
              style={{ backgroundColor: card.bg }}
            >
              <motion.div
                style={{ scale, y: translateY }}
                className="w-full h-full flex flex-col lg:flex-row"
              >
                
                {/* IMAGE */}
<div
  className={`w-full lg:w-1/2 
  flex justify-center items-center
  h-[35vh] lg:h-full overflow-hidden
  ${i % 2 === 0 ? "order-1 lg:order-none" : "lg:order-2"}`}
>
  <img
    src={card.img}
    alt={card.title}
    className="
      object-cover
      w-[85%] lg:w-[90%] 
      h-[100%] lg:h-[60%]
    "
  />
</div>



                {/* TEXT */}
                <div
                  className={`w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-20
                  ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <p className="italic text-lg text-neutral-700 mb-4 tracking-wide">
                    {card.subtitle}
                  </p>

                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
                    {card.title}
                  </h2>

                  <p className="text-lg text-neutral-800 leading-relaxed mb-10 max-w-2xl">
                    {card.text}
                  </p>
                </div>

              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

