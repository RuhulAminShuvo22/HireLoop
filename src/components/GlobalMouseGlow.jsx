"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlobalMouseGlow() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-0 h-[350px] w-[350px] rounded-full blur-3xl"
      animate={{
        x: mousePosition.x - 175,
        y: mousePosition.y - 175,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 25,
      }}
      style={{
        background:
          "radial-gradient(circle, rgba(212,169,90,0.18) 0%, rgba(212,169,90,0.08) 40%, transparent 80%)",
      }}
    />
  );
}