import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const slides = [
  {
    title: "Energy & Renewable Solutions",
    text: `Driving the transition to clean energy through hydrogen production, electrolysis and integration with renewables. 
    We design decarbonization strategies that balance environmental impact, energy access and economic feasibility.`,
    img: "/turbines.jpg",
  },
  {
    title: "Environmental & Climate Resilience",
    text: `Supporting ecosystem restoration, wetland recovery, biodiversity conservation and carbon sequestration initiatives. 
    Our work strengthens climate adaptation and enhances the resilience of both natural and human systems.`,
    img: "/social.jpg",
  },
  {
    title: "Water Management & Hydrological Systems",
    text: `Advancing sustainable water management through improved quality, sanitation planning and ecosystem-based approaches. 
    We develop innovative hydrological and policy solutions that safeguard water security for people and ecosystems.`,
    img: "/water.png",
  },
  {
    title: "Infrastructure & Transportation",
    text: `Shaping future-ready cities through resilient infrastructure, integrated urban systems and low-emission mobility. 
    We guide the shift to hydrogen-based and sustainable transport networks that enhance connectivity and quality of life.`,
    img: "/infrastructure.png",
  },
  {
    title: "Agriculture & Food Security",
    text: `Advancing climate-smart and regenerative agriculture by integrating clean technologies, efficient irrigation and sustainable fertilizer production. 
    Our systems approach strengthens food security while protecting ecological integrity.`,
    img: "/planting_trees.jpg",
  },
  {
    title: "Technology & Innovation",
    text: `Harnessing AI, IoT and digital platforms to optimize resources, improve forecasting and enable adaptive solutions to climate and sustainability challenges. 
    We help institutions transition toward intelligent, data-driven systems.`,
    img: "/ai.jpg",
  },
  {
    title: "Governance & Policy",
    text: `Strengthening institutional capacity through adaptive governance, regulatory reform and policy innovation. 
    We help governments and organizations design frameworks that foster accountability and systemic transformation.`,
    img: "/roadmap.jpg",
  },
  {
    title: "Finance, Markets & Sustainable Investment",
    text: `Structuring green finance mechanisms, carbon markets and impact investment strategies that align sustainability with economic opportunity. 
    We connect public and private actors to mobilize finance for systemic change.`,
    img: "/energy.jpg",
  },
  {
    title: "Social & Community Development",
    text: `Empowering communities through participatory design, inclusive governance and equitable access to resources. 
    Our work builds resilience from the ground up, ensuring no one is left behind in the sustainability transition.`,
    img: "/water.png",
  },
  {
    title: "Education & Capacity Building",
    text: `Designing and delivering programs that strengthen leadership, systems literacy and technical capacity for climate action. 
    We build the knowledge and skills needed to drive lasting institutional and societal transformation.`,
    img: "/social.jpg",
  },
  {
    title: "Health & Sanitation",
    text: `Advancing health resilience through sustainable sanitation, integrated health systems and equitable service delivery. 
    We link health, infrastructure and governance to strengthen community wellbeing.`,
    img: "/roadmap.jpg",
  },
];

export default function StickyImageScroll() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef([]);
  
    useEffect(() => {
      const root = document.querySelector("#scrollArea");
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const index = Number(entry.target.getAttribute("data-index"));
              setActiveIndex(index);
            }
          });
        },
        { threshold: 0.5, root }
      );
  
      sectionRefs.current.forEach(sec => observer.observe(sec));
      return () => observer.disconnect();
    }, []);
  
    return (
      <div className="w-full max-w-7xl mx-auto px-6 lg:h-[100vh] -mt-10 lg:-mt-40 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-full gap-10">
  
          {/* LEFT — Image (Sticky Only on Desktop) */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-screen">
            <div className="lg:sticky lg:top-0 w-full h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slides[activeIndex].img}
                  src={slides[activeIndex].img}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
            </div>
          </div>
  
          {/* RIGHT — Scrollable content only on lg */}
          <div
            id="scrollArea"
            className="
              space-y-10 py-10 cursor-pointer
              lg:overflow-y-scroll lg:scrollbar-hide lg:pr-4
            "
          >
            {slides.map((item, index) => (
              <motion.section
                key={index}
                ref={el => (sectionRefs.current[index] = el)}
                data-index={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.3, root: document.querySelector("#scrollArea") }}
                className="pb-6 border-b border-gray-200"
              >
                <h2 className="text-sm sm:text-lg md:text-xl uppercase tracking-widest border-b border-black pb-1">
                  {item.title}
                </h2>
                <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.section>
            ))}
          </div>
  
        </div>
      </div>
    );
  }
  