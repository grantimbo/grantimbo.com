"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const MOUSE_STRENGTH = 20;

export default function TitleParalax({
  LAYERS,
  glowmore = false, // Defaulting to false (none)
}: {
  LAYERS: { src: string; alt: string; depth: number; zIndex: number }[];
  glowmore?: boolean; // Marking it as optional
}) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Tracks mouse globally across the entire document
  const handleGlobalMouseMove = useCallback((e: MouseEvent) => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Calculate position relative to the center of the screen (-1 to 1)
    const x = (e.clientX - w / 2) / (w / 2);
    const y = (e.clientY - h / 2) / (h / 2);

    setMouse({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleGlobalMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [handleGlobalMouseMove]);

  return (
    <figure
      className="relative mx-auto aspect-750/300"
      // style={{ minHeight: 280 }}
    >
      {LAYERS.map((layer) => {
        // Movement based purely on global mouse position and layer depth
        const tx = mouse.x * MOUSE_STRENGTH * layer.depth;
        const ty = mouse.y * MOUSE_STRENGTH * layer.depth;

        return (
          <div
            key={layer.src}
            className="absolute inset-0 transition-transform duration-200 ease-out will-change-transform"
            style={{
              zIndex: layer.zIndex,
              // Using translate3d for hardware acceleration
              transform: `translate3d(${tx}px, ${ty}px, 0)`,
            }}
          >
            <img
              src={layer.src}
              alt={layer.alt}
              // fill
              sizes="(max-width: 450px) 50vw, (max-width: 768px) 100vw, 55vw"
              className="object-contain object-center"
              // priority
              // quality={100}
            />
          </div>
        );
      })}
      <div
        className={`absolute right-[25%] bottom-10 z-[1] h-[60%] w-[50%] rounded-full blur-[100px] ${glowmore ? "bg-[#0189e3]/50" : "bg-blue-500/30"}`}
      />
    </figure>
  );
}
