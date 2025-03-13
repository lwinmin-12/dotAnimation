"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x = 0, y = 0 } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className="relative h-screen w-full">
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-gray-400 bg-[#ec4e39] text-4xl cursor-default"
        style={{
          WebkitMaskImage: "url('/mask.svg')",
          WebkitMaskRepeat: "no-repeat",
          color: "black",
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 1 }}
      >
        <p
          className="w-[1000px] p-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          A visual designer - with skills that haven't been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-gray-400 bg-[#ec4e39] text-4xl cursor-default"
        style={{
          WebkitMaskImage: "url('/mask.svg')",
          WebkitMaskRepeat: "no-repeat",
          color: "black",
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 1 }}
      >
        <div className="absolute inset-0 bg-dot-black  dark:bg-dot-white bg-[length:20px_20px]"></div>

        {/* Radial gradient overlay for the faded look */}
        <div className="absolute pointer-events-none inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Text content */}
        <p
          className="text-4xl sm:text-7xl font-bold relative  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          ForceGround
        </p>
      </motion.div>

      <div className="flex h-full w-full items-center justify-center text-gray-400 text-4xl cursor-default">
        <p className="w-[1000px] p-10">
          I'm a <span className="text-[#ec4e39]">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.
        </p>
      </div>
    </main>
  );
}
