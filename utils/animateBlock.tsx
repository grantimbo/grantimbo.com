"use client";

import { motion } from "framer-motion";

export default function AnimateBlock({
  delay,
  children,
}: {
  delay: number;
  children: JSX.Element;
}) {
  const dropIninitial = { opacity: 0, y: -20 };
  const dropInanimate = { opacity: 1, y: 0 };

  return (
    <>
      <motion.div
        animate={dropInanimate}
        initial={dropIninitial}
        transition={{
          duration: 0.5,
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
