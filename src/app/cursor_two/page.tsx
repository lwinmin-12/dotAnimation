"use client"
import { motion } from "framer-motion";
import { useState } from "react";

const WaterDropGrid = () => {
  return (
    <div className="relative grid place-content-center bg-slate-900 px-8 py-12">
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleDotClick = (index : any) => {
    setClickedIndex(index);
  };

  const dotVariants = (index : any) => ({
    initial: { scale: 1, translateY: 0, opacity: 0.5 },
    animate: clickedIndex === index
      ? {
          scale: [1, 1.35, 1],
          translateY: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
          transition: {
            duration: 0.75,
            ease: "easeInOut",
          },
        }
      : {},
  });

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <motion.div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          onClick={() => handleDotClick(index)}
          key={`${i}-${j}`}
        >
          <motion.div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            custom={index}
            initial="initial"
            animate="animate"
            variants={dotVariants(index)}
          />
        </motion.div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
