import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const base = import.meta.env.BASE_URL;


const itemsList = [
  { image: `${base}turbines.png`, title: "ENERGY & RENEWABLE SOLUTIONS" },
  { image: `${base}oesslin.png`, title: "ENVIRONMENTAL & CLIMATE RESILIENCE" },
  { image: `${base}water.png`, title: "WATER MANAGEMENT & HYDROLOGICAL SYSTEMS" },
  { image: `${base}cityscape.png`, title: "INFRASTRUCTURE & TRANSPORTATION" },
  { image: `${base}food.png`, title: "AGRICULTURE & FOOD SECURITY" },
  { image: `${base}round_table.png`, title: "GOVERNANCE & POLICY" },
  { image: `${base}ai.jpg`, title: "TECHNOLOGY & INNOVATION" },
  { image: `${base}infrastructure.png`, title: "FINANCE, MARKETS & SUSTAINABLE INVESTMENT" },
  { image: `${base}community.png`, title: "SOCIAL & COMMUNITY DEVELOPMENT" },
  { image: `${base}engagement.png`, title: "EDUCATION & CAPACITY BUILDING" },
  { image: `${base}health.png`, title: "HEALTH & SANITATION" },
  { image: `${base}partner.png`, title: "PARTNERSHIPS & COLLABORATION" },
];


export default function InfiniteScroller() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const topScroller = topRef.current;
    const bottomScroller = bottomRef.current;
    if (!topScroller || !bottomScroller) return;

    let topPos = 0;
    let bottomPos = 0;
    const speed =
      window.innerWidth < 640 ? 0.5 : window.innerWidth < 1024 ? 1 : 1.5;

    bottomScroller.scrollLeft = bottomScroller.scrollWidth / 2;

    const stepTop = () => {
      topPos += speed;
      if (topPos >= topScroller.scrollWidth / 2) topPos = 0;
      topScroller.scrollLeft = topPos;
      requestAnimationFrame(stepTop);
    };
    requestAnimationFrame(stepTop);

    const stepBottom = () => {
      bottomPos += speed;
      if (bottomPos >= bottomScroller.scrollWidth / 2) bottomPos = 0;
      bottomScroller.scrollLeft = bottomScroller.scrollWidth / 2 - bottomPos;
      requestAnimationFrame(stepBottom);
    };
    requestAnimationFrame(stepBottom);

    const handleResize = () => {
      topScroller.scrollLeft = 0;
      bottomScroller.scrollLeft = bottomScroller.scrollWidth / 2;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderRow = (items, ref) => (
    <div
      ref={ref}
      className="flex gap-14 w-full overflow-hidden whitespace-nowrap"
      style={{ scrollBehavior: "auto" }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-6 min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] flex-shrink-0"
        >
          <div
            className="w-56 h-36 sm:w-64 sm:h-40 md:w-72 md:h-44 lg:w-80 lg:h-48 bg-cover bg-center shadow-lg flex-shrink-0"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <span className="text-black font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full bg-gray/50 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-left mb-12">
        <p className="text-lg sm:text-xl md:text-2xl mb-2 text-black font-medium">
          AREAS OF FOCUS
        </p>
        <h2 className="text-4xl md:text-4xl lg:text-5xl mb-4 font-bold text-black leading-tight">
          Interconnected challenges, integrated solutions
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-black w-full">
          From climate resilience to sustainable energy, governance, and digital innovation — our areas of focus form a living ecosystem of expertise.
        </p>
      </div>

      {/* Top Row */}
      {renderRow([...itemsList.slice(0, 6), ...itemsList.slice(0, 6)], topRef)}

      {/* Bottom Row */}
      <div className="mt-8 mb-12">
        {renderRow([...itemsList.slice(6), ...itemsList.slice(6)], bottomRef)}
      </div>

      {/* Learn More Button */}
      <div className="flex justify-center mt-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/Areas_Of_Focus")}
          className="px-8 py-3 bg-black text-white rounded-lg font-semibold shadow-md hover:bg-gray-800 transition"
        >
          Explore Focus Areas
        </motion.button>
      </div>
    </section>
  );
}
