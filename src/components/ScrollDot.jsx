import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ScrollDot() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = scrolled / height;

      setScrollProgress(progress);
      setVisible(progress > 0.1);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    visible && (
      <motion.div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 cursor-pointer z-[999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          animate={{ scale: 0.6 + scrollProgress * 1.2 }}
          transition={{ type: "spring", stiffness: 90, damping: 12 }}
          className="h-4 w-4 rounded-full bg-black"
        />
      </motion.div>
    )
  );
}

