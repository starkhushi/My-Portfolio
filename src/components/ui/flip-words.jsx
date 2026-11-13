import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Rotates through phrases. One phrase is on screen at a time: the old one
// fades out completely before the next fades in, so nothing overlaps.
export const FlipWords = ({ words, duration = 3500, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      duration
    );
    return () => clearInterval(id);
  }, [words.length, duration]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn("inline-block text-left px-2", className)}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
};
