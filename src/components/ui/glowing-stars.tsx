// "use client";

// import React, { useEffect, useRef } from "react";

// const MarqueeEffect = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Set canvas size
//     const canvasHeight = 338; // Height as per your HTML
//     canvas.width = window.innerWidth;
//     canvas.height = canvasHeight;

//     // Grid settings
//     const gridSize = 20; // Space between dots
//     const columns = Math.ceil(canvas.width / gridSize);
//     const rows = Math.ceil(canvas.height / gridSize);
//     const dots: { x: number; y: number; size: number; baseSize: number; targetSize: number; alpha: number; targetAlpha: number }[] = [];

//     // Initialize dots in a grid
//     for (let i = 0; i < columns; i++) {
//       for (let j = 0; j < rows; j++) {
//         dots.push({
//           x: i * gridSize + gridSize / 2,
//           y: j * gridSize + gridSize / 2,
//           size: 2, // Base size of dots
//           baseSize: 2,
//           targetSize: 2, // Target size for smooth transition
//           alpha: 0.2, // Initial transparency
//           targetAlpha: 0.2, // Target alpha for smooth transition
//         });
//       }
//     }

//     // Draw dots
//     const drawDots = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       dots.forEach((dot) => {
//         // Smoothly transition size and alpha
//         dot.size += (dot.targetSize - dot.size) * 0.1;
//         dot.alpha += (dot.targetAlpha - dot.alpha) * 0.1;

//         // Draw dot
//         ctx.beginPath();
//         ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(0, 0, 0, ${dot.alpha})`; // Black dots for light theme
//         ctx.fill();
//       });

//       requestAnimationFrame(drawDots);
//     };

//     // Start animation
//     drawDots();

//     // Handle mouse move for glow effect
//     const handleMouseMove = (e: MouseEvent) => {
//       const rect = canvas.getBoundingClientRect();
//       const mouseX = e.clientX - rect.left;
//       const mouseY = e.clientY - rect.top;

//       dots.forEach((dot) => {
//         const distance = Math.sqrt((dot.x - mouseX) ** 2 + (dot.y - mouseY) ** 2);

//         // Glow effect based on mouse proximity
//         if (distance < 100) {
//           dot.targetSize = 6; // Increase size for glow effect
//           dot.targetAlpha = 1; // Fully opaque when glowing
//         } else {
//           dot.targetSize = dot.baseSize;
//           dot.targetAlpha = 0.2; // Semi-transparent otherwise
//         }
//       });
//     };

//     canvas.addEventListener("mousemove", handleMouseMove);

//     // Cleanup
//     return () => {
//       canvas.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-[338px] flex items-center justify-center overflow-hidden bg-white">
//       {/* Canvas for dot animation */}
//       <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-[338px] z-0"></canvas>

//       {/* Marquee text */}
//       <div className="relative z-10 w-full overflow-hidden">
//         <div className="flex animate-marquee whitespace-nowrap">
//           <div className="text-6xl md:text-9xl font-bold text-black mx-4">Meet the Fam</div>
//           <div className="text-6xl md:text-9xl font-bold text-black mx-4">Meet the Fam</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarqueeEffect;

"use client";

import React, { useEffect, useRef } from "react";

const MarqueeEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const canvasHeight = 338;
    canvas.width = window.innerWidth;
    canvas.height = canvasHeight;

    // Grid settings
    const gridSize = 20;
    const columns = Math.ceil(canvas.width / gridSize);
    const rows = Math.ceil(canvas.height / gridSize);
    const dots = [];

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        dots.push({
          x: i * gridSize + gridSize / 2,
          y: j * gridSize + gridSize / 2,
          size: 2,
          baseSize: 2,
          targetSize: 2,
          alpha: 0.2,
          targetAlpha: 0.2,
        });
      }
    }

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        dot.size += (dot.targetSize - dot.size) * 0.1;
        dot.alpha += (dot.targetAlpha - dot.alpha) * 0.1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${dot.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(drawDots);
    };

    drawDots();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      dots.forEach((dot) => {
        const distance = Math.sqrt((dot.x - mouseX) ** 2 + (dot.y - mouseY) ** 2);
        const maxRadius = 100;

        if (distance < maxRadius) {
          const scale = 1 - distance / maxRadius;
          dot.targetSize = dot.baseSize + scale * 8;
          dot.targetAlpha = 0.8 + scale * 0.2;
        } else {
          dot.targetSize = dot.baseSize;
          dot.targetAlpha = 0.2;
        }
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    return () => canvas.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-[338px] flex items-center justify-center overflow-hidden bg-white">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-[338px] z-0"></canvas>
      <div className="relative z-10 w-full overflow-hidden pointer-events-none">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="text-6xl md:text-9xl font-bold text-black mx-4">Meet the Fam</div>
          <div className="text-6xl md:text-9xl font-bold text-black mx-4">Meet the Fam</div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeEffect;
