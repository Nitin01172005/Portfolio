import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HoverIcon({ Icon, label }) {
  const [hovered, setHovered] = useState(false);



  // approximate widths, adjust as needed
  const iconSize = 40;
  const labelWidth = label.length * 8 + 20; // rough label width

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      layout
      animate={{ width: hovered ? iconSize + labelWidth : iconSize }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex items-center cursor-pointer "
      style={{ width: iconSize }}
    >
      <motion.div
        layout
        whileHover={{ scale: 1.25 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ width: iconSize, flexShrink: 0 }}
      >
        <Icon size={iconSize} />
      </motion.div>

      <AnimatePresence>
        {hovered && (
          <motion.span
            key={label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="ml-2 text-lg font-medium text-neutral-300 whitespace-nowrap"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
