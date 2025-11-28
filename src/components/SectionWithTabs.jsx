import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const base = import.meta.env.BASE_URL;

const content = [
    {
      title: "Strategic Advisory",
      subtitle: "Engage Where Complexity Meets Opportunity.",
      text: `For governments, enterprises, NGOs, and development partners seeking expert guidance, 
      we provide advisory grounded in systems thinking, participatory co-creation, and field-
      tested expertise. We partner with you to navigate complex challenges, design interventions,
      implement solutions, and unlock systemic change. Whether embedded in the field or 
      making decisions at the executive level, we combine operational experience with strategic 
      foresight — ensuring every engagement delivers outcomes that are resilient, human-
      centred, and scalable`,
      img: `${base}systems.jpg`,
      link: "/contact",  // <— replace if needed
      linkLabel: "Learn More",
    },
    {
      title: "Partner With Us",
      subtitle: "Let’s co-create the future:Opportunities for institutions and co-implementation.",
      text: `At oEsslin, collaboration is the catalyst of transformation. We partner with governments, research 
      institutions, enterprises, and civil society innovators to deliver integrated solutions. From multi-
      country research initiatives and strategic foresight programmes to joint ventures and innovation 
      pilots, we co-design interventions around a shared purpose; aligning expertise, resources, and 
      vision to translate complexity into clarity and vision into impact.
      `,
      img: `${base}policy.png`,
      link: "/contact",
      linkLabel: "Start a Conversation",
    },
    {
      title: "Work With Us",
      subtitle: "Join a team that’s reimagining systems: Jobs, consultancies internships, and career opportunities.",
      text: `We’re a team of thinkers, builders, and practitioners who are purpose-driven, systems-
      minded, and endlessly curious. At oEsslin, you’ll tackle complex, cross-sectoral challenges that 
      demand both analytical depth and creative agility. You might work in policy, technology, energy, or ecology; what 
      matters most is how we align. You spot possibility where others see complexity, you act with 
      integrity, and you care about outcomes that endure.`,
      img: `${base}comdev.jpg`,
      link: "/careers",
      linkLabel: "View Opportunities",
    },
    {
      title: "Build Capacity",
      subtitle: "Grow your skills, grow your impact: Workshops, innovation labs, and learning engagements.",
      text: `Through tailored programs, executive training, and institutional support, oEsslin 
      equips leaders, teams, and individuals to think systemically, collaborate effectively, 
      and act decisively. Our approach integrates systems mapping, participatory design, 
      and strategic foresight, helping participants anticipate complex shifts, identify 
      emerging risks and opportunities, and make decisions that steer systems toward 
      resilient, sustainable outcomes. Whether you’re a senior leader navigating global 
      challenges or an emerging practitioner eager to learn, our immersive trainings, e-
      learning, and leadership development offerings empower you to act with confidence in an 
      interconnected world.`,
      img: `${base}round_table.png`,
      link: "/careers", 
      linkLabel: "Explore Programs",
    },
  ];
  

  export default function SectionWithTabs() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    return (
      <section className="w-full flex justify-center py-14 px-6">
        <div className="w-full max-w-6xl border border-gray-300  overflow-hidden">
  
          {/* Top Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-gray-300">
            {content.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-sm sm:text-base py-4 px-3 transition-all text-center font-medium 
                ${activeIndex === index
                  ? "bg-white text-black border-b-2 border-black"
                  : "bg-gray-50 text-gray-500 hover:text-black"}`}
              >
                {item.title}
              </button>
            ))}
          </div>
  
          {/* Content Area */}
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
  
              {/* LEFT TEXT */}
<AnimatePresence mode="wait">
  <motion.div
    key={activeIndex + "-text"}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
  >
    {/* Subheading only */}
    <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4">
      {content[activeIndex].subtitle}
    </h2>

    {/* Body Text */}
    <p className="text-base sm:text-lg text-black leading-relaxed mb-8">
      {content[activeIndex].text}
    </p>

    {/* CTA BUTTON */}
    <a
      href={content[activeIndex].link}
      className="inline-block px-5 sm:px-6 md:px-8 py-2 sm:py-3 bg-black text-white rounded-lg font-semibold shadow-md hover:bg-gray-800"
    >
      {content[activeIndex].linkLabel}
    </a>
  </motion.div>
</AnimatePresence>

  
              {/* RIGHT IMAGE SIDE */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex + "-image"}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <img
                    src={content[activeIndex].img}
                    alt={content[activeIndex].title}
                    className=" w-full h-[260px] sm:h-[350px] lg:h-[430px] object-cover"
                  />
                </motion.div>
              </AnimatePresence>
  
            </div>
          </div>
        </div>
      </section>
    );
  }