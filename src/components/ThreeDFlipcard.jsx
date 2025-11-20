import React from "react";

export default function ThreeDFlipcard() {
  const cards = [
    {
      id: 1,
      title: "Science of Society",
      image: "/policy.png", 
      text: `The Science of Society recognises that every challenge is not simply a technical
problem, but a human one. It is the study of interconnection: how human behaviours 
shape environments, how governance frameworks intertwine with aspirations, and 
how technology and culture converge to define outcomes. Our approach ensures that 
solutions are not just effective, but resonate with the lived experiences of people, 
advancing resilience, inclusivity, and long-term sustainability. In this way, science 
informs society, and society informs our solutions, creating strategies that are both
intelligent and deeply human-centred.`,
    },
    {
      id: 2,
      title: "Service to Society",
      image: "/community.png", 
      text: `The Service to Society is our compass — the conviction that knowledge and innovation 
must advance human and ecological well-being, and that the progress of one cannot come at
the cost of the other. Service guides our commitment to co-creating with partners and 
embedding equity at every level of transformation. To serve is an act of consciousness — to 
create not only what works, but what endures: solutions that uplift communities, restore the 
planet, and balance ambition with responsibility.`,
    },
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group [perspective:1000px] w-full h-[420px]"
          >
            {/* Inner flip container */}
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]  shadow-lg">
              
              {/* Front Side (Image) */}
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-black/40  flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold px-4 text-center">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Back Side (Text) */}
              <div className="absolute inset-0 bg-white text-gray-800 p-6 md:p-8  overflow-y-auto [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">{card.title}</h3>
                <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
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

