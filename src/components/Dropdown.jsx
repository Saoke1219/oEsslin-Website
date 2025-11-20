import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Dropdown({ label, items }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dropdown Label */}
      <button className="hover:text-gray-600 transition font-medium">
        {label}
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-md py-2 text-sm z-50"
          >
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
