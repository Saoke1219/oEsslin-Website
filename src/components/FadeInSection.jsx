// src/components/FadeInSection.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
