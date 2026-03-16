"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const LAYERS = [
  {
    src: "/imgs/hero/balls-sm.png",
    alt: "Balls background",
    depth: 0.2,
    zIndex: 1,
  },
  { src: "/imgs/hero/balls-md.png", alt: "Balls mid", depth: 0.25, zIndex: 2 },
  {
    src: "/imgs/hero/balls-lg.png",
    alt: "Balls foreground",
    depth: 0.4,
    zIndex: 3,
  },
  {
    src: "/imgs/hero/creator-thinker.png",
    alt: "Creator Thinker",
    depth: 0.6,
    zIndex: 4,
  },
] as const;

const MOUSE_STRENGTH = 30; // Increased slightly for better global feel
const SCROLL_STRENGTH = 0.5;

export default function HeroParallax() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Tracks mouse globally across the entire document
  const handleGlobalMouseMove = useCallback((e: MouseEvent) => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Calculate position relative to the center of the screen (-1 to 1)
    const x = (e.clientX - w / 2) / (w / 2);
    const y = (e.clientY - h / 2) / (h / 2);

    setMouse({ x, y });
  }, []);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    // Add listeners to window instead of the element
    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleGlobalMouseMove, handleScroll]);

  return (
    <figure
      className="relative aspect-1104/930 w-full overflow-hidden rounded-lg"
      style={{ minHeight: 280 }}
    >
      {LAYERS.map((layer) => {
        // Horizontal movement based on global mouse X
        const tx = mouse.x * MOUSE_STRENGTH * layer.depth;

        // Vertical movement combines global mouse Y and page scroll
        const ty =
          mouse.y * MOUSE_STRENGTH * layer.depth -
          scrollY * SCROLL_STRENGTH * layer.depth;

        return (
          <div
            key={layer.src}
            className="absolute inset-0 transition-transform duration-200 ease-out will-change-transform"
            style={{
              zIndex: layer.zIndex,
              // translate3d is hardware accelerated (smoother)
              transform: `translate3d(${tx}px, ${ty}px, 0)`,
            }}
          >
            <Image
              src={layer.src}
              alt={layer.alt}
              fill
              sizes="(max-width: 450px) 50vw, (max-width: 768px) 100vw, 55vw"
              className="object-contain object-center"
              priority
              quality={100}
            />
          </div>
        );
      })}
    </figure>
  );
}
