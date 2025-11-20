import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import InfiniteScroller from "../components/InfiniteScroller";
import Scramble from "../components/Scramble";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white text-black overflow-x-hidden">
      {/* HERO VIDEO */}
      <section className="relative w-full h-[85vh] sm:h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center text-white px-4"
        >
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold">
            SCIENCE OF SOCIETY
          </p>
        </motion.div>
      </section>

      {/* ABOUT / MISSION SECTION */}
<section className="relative">
  
  

  {/* CONTENT */}
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-20 md:pt-28 lg:pt-32">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold leading-tight text-left"
      >
        Transforming Complexity<br />into Opportunity
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-base sm:text-lg md:text-xl leading-relaxed text-black max-w-3xl text-left"
      >
        At oEsslin, we see the world as an interconnected system — where economies,
        ecosystems, and communities continuously shape one another. We exist to
        make sense of this complexity and turn it into opportunity. Grounded in
        systems thinking and participatory design, our work helps leaders,
        institutions and communities see the larger patterns beneath their
        challenges and act with clarity and foresight. Uniting science, strategy
        and lived experience to co-create solutions that are adaptive, equitable
        and enduring — strengthening the resilience of societies and the
        sustainability of the systems that sustain them. oEsslin is not just a
        consultancy; it is a catalyst for transformation — designing the
        intelligent, inclusive and regenerative futures our world urgently needs.
      </motion.p>

    </div>

  </div>
</section>


      {/* APPROACH CAROUSEL */}
      <Scramble />

      {/* SYSTEMS IN ACTION - Infinite Scroll */}
      <InfiniteScroller />

      {/* CTA SECTION */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-center px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 max-w-7xl mx-auto px-4"
        >
          Partner with us to co-create the systems of tomorrow.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-sm sm:text-base md:text-lg text-black max-w-prose sm:max-w-xl md:max-w-3xl mx-auto mb-10"
        >
          Each focus area is a lens — helping clients design solutions that balance
          immediate needs with long-term sustainability...
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/FieldCraft")}
          className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 bg-black text-white rounded-lg font-semibold shadow-md hover:bg-gray-800 transition"
        >
          Collaborate
        </motion.button>
      </section>
    </div>
  );
}
