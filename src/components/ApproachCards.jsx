import { motion } from "framer-motion";
import { useState } from "react";

export default function ApproachCards() {
  const [hovered, setHovered] = useState(null);

  const cards = [
    {
      title: "Systems Thinking",
      img: `${import.meta.env.BASE_URL}systems.jpg`,
      desc: "Mapping connections across social, ecological, and economic systems to drive holistic progress.",
      link: "#"
    },
    {
      title: "AI / IoT",
      img: `${import.meta.env.BASE_URL}ai.jpg`,
      desc: "Blending intelligence and sensing tech to unlock data-driven transformation.",
      link: "#"
    },
    {
      title: "Nature-Based Solutions",
      img: `${import.meta.env.BASE_URL}planting_trees.jpg`,
      desc: "Designing regenerative solutions that collaborate with landscapes, not exploit them.",
      link: "#"
    },
    {
      title: "Human-Centered Design",
      img: `${import.meta.env.BASE_URL}hmdesign.jpg`,
      desc: "Creating resilient innovations grounded in real people’s needs and lived experiences.",
      link: "#"
    }
  ];

  const cardVariants = {
    expanded: { width: "150%" },
    collapsed: { width: "40%" }
  };

  return (
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">
          Approach & Innovation
        </h2>

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full gap-6">
          {cards.map((card, i) => (
            <motion.div
            key={i}
            className="relative group cursor-pointer overflow-hidden flex flex-col"
            variants={cardVariants}
            initial="collapsed"
            animate={hovered === i ? "expanded" : "collapsed"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image */}
            <div
              className="h-[480px] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${card.img})` }}
            />
          
            {/* Title & Description */}
            <div className="p-6 bg-white flex flex-col items-start">
              <h3 className="text-xl font-semibold text-black">{card.title}</h3>
              {hovered === i && (
                <motion.p
                  className="text-sm mt-2 text-gray-700"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {card.desc}
                </motion.p>
              )}
            </div>

            
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-10 lg:hidden">
          {cards.map((card, i) => (
            <div key={i} className=" overflow-hidden shadow">
              <div
                className="h-60 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.img})` }}
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-black">{card.title}</h3>
                <p className="text-sm mt-2 text-gray-700">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



