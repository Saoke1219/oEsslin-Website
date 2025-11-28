import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StickyScrollSection from "../components/StickyScrollSection";

export default function Our_Work() {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-y-auto">

      {/* ---------------- HEADER SECTION ---------------- */}
      <section className="relative w-full pt-20 pb-20 sm:pb-32 md:pb-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          
          {/* Title */}
          <h1 className="font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-left max-w-6xl leading-tight mb-4">
            OUR EXPERTISE
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-8xl text-left">
            The world doesn’t operate in isolation — neither do we. Our work is structured 
            around interconnected focus areas that reflect the way real systems evolve and adapt. 
            From energy transitions to resilient cities, each sector is part of a larger whole — 
            revealing how progress in one domain catalyses progress in another.
          </p>

        </div>
      </section>

      {/* ---------------- STICKY SCROLL SECTION ---------------- */}
      <div className="mt-10 sm:mt-6 md:mt-4 lg:mt-32 
                mb-20 sm:mb-16 md:mb-10 lg:mb-4">
  <StickyScrollSection />
</div>

      {/* ---------------- FEATURED SECTION ---------------- */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-10 sm:pt-14 md:pt-16 lg:pt-20 
  pb-16">
        
        {/* Label */}
        <h3 className="text-sm uppercase tracking-widest font-medium mb-6">
          Featured
        </h3>

        {/* Featured Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-[55vh] lg:h-[70vh] overflow-hidden cursor-pointer"
          onClick={() => navigate("/articles/ai-biotech")} // optional navigation
        >
          {/* Image */}
          <motion.img
            src={`${import.meta.env.BASE_URL}bsfl.jpg`}
            alt="Featured cover"
            className="w-full h-full object-cover transition-transform duration-700"
            whileHover={{ scale: 1 }}
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

          {/* Text Overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-xs md:text-sm uppercase tracking-widest text-gray-300 mb-2">
            Agriculture & Food Security
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white max-w-3xl">
            Sustainable Insect-Based Feed and Food Loop Hub (SIFLOOP HUB)
            </h2>

            <p className="text-sm text-gray-300 mt-4">
              18th September 2025
            </p>
          </div>
        </motion.div>

      </section>
    </div>
  );
}
