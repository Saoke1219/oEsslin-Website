import React from "react";

export default function AreasOfFocus() {
  const cards = [
    {
      image: "/turbines.png",
      title: "ENERGY & RENEWABLE SOLUTIONS",
      text: `Advancing sustainable water management through improved quality, sanitation planning and 
ecosystem-based approaches. We develop innovative hydrological and policy solutions that safeguard 
water security for people and ecosystems.`,
    },
    {
      image: "/planting_trees.jpg",
      title: "ENVIRONMENTAL & CLIMATE RESILIENCE",
      text: `Shaping future-ready cities through resilient infrastructure, integrated urban systems and low-emission 
mobility. We guide the shift to hydrogen-based and sustainable transport networks that enhance 
connectivity and quality of life.`,
    },
    {
      image: "/water.png",
      title: "WATER MANAGEMENT & HYDROLOGICAL SYSTEMS",
      text: `Advancing sustainable water management through improved quality, sanitation planning and 
ecosystem-based approaches. We develop innovative hydrological and policy solutions that safeguard 
water security for people and ecosystems.`,
    },
    {
      image: "/cityscape.png",
      title: "INFRASTRUCTURE & TRANSPORTATION",
      text: `Shaping future-ready cities through resilient infrastructure, integrated urban systems and low-emission 
mobility. We guide the shift to hydrogen-based and sustainable transport networks that enhance 
connectivity and quality of life.`,
    },
    {
      image: "/food.png",
      title: "AGRICULTURE & FOOD SECURITY",
      text: `Advancing climate-smart and regenerative agriculture by integrating clean technologies, efficient 
irrigation and sustainable fertilizer production. Our systems approach strengthens food security 
while protecting ecological integrity.`,
    },
    {
      image: "/round_table.png",
      title: "GOVERNANCE & POLICY",
      text: `Strengthening institutional capacity through adaptive governance, regulatory reform and policy innovation. 
We help governments and organizations design frameworks that foster accountability and systemic transformation.`,
    },
    {
      image: "/ai.png",
      title: "TECHNOLOGY & INNOVATION",
      text: `Harnessing AI, IoT and digital platforms to optimize resources, improve forecasting and enable adaptive 
solutions to climate and sustainability challenges. We help institutions transition toward intelligent, 
data-driven systems.`,
    },
    {
      image: "/infrastructure.png",
      title: "FINANCE, MARKETS & SUSTAINABLE INVESTMENT",
      text: `Structuring green finance mechanisms, carbon markets and impact investment strategies that align sustainability with 
economic opportunity. We connect public and private actors to mobilize finance for systemic change.`,
    },
    {
      image: "/community.png",
      title: "SOCIAL & COMMUNITY DEVELOPMENT",
      text: `Empowering communities through participatory design, inclusive governance and equitable access to resources. 
Our work builds resilience from the ground up, ensuring no one is left behind in the sustainability transition.`,
    },
    {
      image: "/engagement.png",
      title: "EDUCATION & CAPACITY BUILDING",
      text: `Designing and delivering programs that strengthen leadership, systems literacy and technical capacity for climate 
action. We build the knowledge and skills needed to drive lasting institutional and societal transformation.`,
    },
    {
      image: "/health.png",
      title: "HEALTH & SANITATION",
      text: `Advancing health resilience through sustainable sanitation, integrated health systems and equitable service delivery. 
We link health, infrastructure and governance to strengthen community wellbeing.`,
    },
    {
      image: "/partner.png",
      title: "PARTNERSHIPS & COLLABORATION",
      text: `Cross-sector alliances accelerating progress through shared power.`,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First card featured large on left */}
        {cards.map((card, index) => (
          <div
            key={index}
            className={`group [perspective:1100px] cursor-pointer ${
              index === 0 ? "h-[600px]" : "h-[280px] md:h-[300px]"
            }`}
          >
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-xl shadow-xl">
              {/* Front */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                  <h3 className={`text-white font-semibold text-center leading-snug ${index === 0 ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-white rounded-xl p-6 md:p-8 overflow-y-auto [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className={`text-gray-800 text-center font-bold mb-3 ${index === 0 ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed break-normal">
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}