"use client";
import useMousePosition from "@/utils/useMousePosition";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function GridBackgroundDemo() {
  const [isHovered, setIsHovered] = useState(false);
  const { x = 0, y = 0 } = useMousePosition();
  const size = 150;

  // Size of the dot when hovered
  const dotSize = isHovered ? 45 : 40; // 80px when hovered, 40px by default

  return (
    <div
      className="h-[50rem] w-full dark:bg-black bg-white relative flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)} // Set to true on hover
      onMouseLeave={() => setIsHovered(false)} // Set to false when hover ends
    >
      <motion.div
        className="absolute inset-0 "
        style={{
          WebkitMaskImage: `radial-gradient(
            circle ${size}px at ${x}px ${y}px, 
            rgba(0, 0, 0, 1) 0%, 
            rgba(0, 0, 0, 0.6) 40%, 
            rgba(0, 0, 0, 0.2) 70%, 
            transparent 100%
          )`,
        }}
        animate={{
          backgroundSize: `${size}px ${size}px`,
        }}
        transition={{ type: "tween", duration: 0.4 }}
      >
        <div className="absolute inset-0 bg-dot-black dark:bg-dot-white bg-[length:20px_20px] transition-all duration-200"></div>
      </motion.div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-dot-black dark:bg-dot-white bg-[length:20px_20px] transition-all duration-200	"></div>

      {/* Radial gradient overlay for the faded look */}
      {/* <div className="absolute pointer-events-auto inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

      {/* Text content */}
      {/* <p className="text-4xl sm:text-7xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 ">
        Backgrounds
      </p> */}

      {/* <div className="absolute inset-0 bg-dot-black dark:bg-dot-white bg-[length:20px_20px] "></div> */}
    </div>
  );
}
