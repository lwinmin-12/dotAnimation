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



// "use client";

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const GlowingStarsBackgroundCard = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   const [mouseEnter, setMouseEnter] = useState(false);
//   const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
//     null
//   );

//   return (
//     <div
//       onMouseEnter={() => setMouseEnter(true)}
//       onMouseLeave={() => {
//         setMouseEnter(false);
//         setMousePos(null);
//       }}
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         setMousePos({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top,
//         });
//       }}
//       className={cn(
//         "bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 max-h-[20rem] h-full w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600",
//         className
//       )}
//     >
//       <div className="flex justify-center items-center">
//         <Illustration mouseEnter={mouseEnter} mousePos={mousePos} />
//       </div>
//       <div className="px-2 pb-6">{children}</div>
//     </div>
//   );
// };

// export const Illustration = ({
//     mouseEnter,
//     mousePos,
//   }: {
//     mouseEnter: boolean;
//     mousePos: { x: number; y: number } | null;
//   }) => {
//     const stars = 700;
//     const columns = 100;
//     const gridSize = 14; // Space between stars
  
//     // Use useMemo to compute glowingStars
//     const glowingStars = useMemo(() => {
//       if (!mousePos) return [];
  
//       const hoverStars = [];
//       const rowSize = Math.ceil(stars / columns);
  
//       for (let i = 0; i < stars; i++) {
//         const starX = (i % columns) * gridSize + gridSize / 2;
//         const starY = Math.floor(i / columns) * gridSize + gridSize / 2;
  
//         const distance = Math.sqrt(
//           (mousePos.x - starX) ** 2 + (mousePos.y - starY) ** 2
//         );
  
//         if (distance < 30) hoverStars.push(i); // Highlight more stars around the cursor
//       }
  
//       return hoverStars;
//     }, [mousePos?.x, mousePos?.y]); // Only recompute when mousePos.x or mousePos.y changes
  
//     return (
//       <div
//         className="h-48 p-1 w-full"
//         style={{
//           display: "grid",
//           gridTemplateColumns: `repeat(${columns}, 1fr)`,
//           gap: `4px`,
//         }}
//       >
//         {[...Array(stars)].map((_, starIdx) => {
//           const isGlowing = glowingStars.includes(starIdx);
//           return (
//             <div key={starIdx} className="relative flex items-center justify-center">
//               <Star isGlowing={isGlowing} />
//               {isGlowing && <Glow />}
//             </div>
//           );
//         })}
//       </div>
//     );
//   };


// const Star = ({ isGlowing }: { isGlowing: boolean }) => {
//   return (
//     <motion.div
//       animate={{
//         scale: isGlowing ? [1, 2, 3] : 1,
//         background: isGlowing ? "#fff" : "#666",
//       }}
//       transition={{
//         duration: 0.3,
//         ease: "easeOut",
//       }}
//       className="bg-[#666] h-[3px] w-[3px] rounded-full relative z-20"
//     />
//   );
// };

// const Glow = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.3, ease: "easeOut" }}
//       className="absolute left-1/2 -translate-x-1/2 z-10 h-[12px] w-[12px] rounded-full bg-blue-400 blur-[4px] shadow-2xl shadow-blue-500"
//     />
//   );
// };