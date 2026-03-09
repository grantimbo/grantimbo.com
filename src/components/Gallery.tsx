"use client";

import { useState, useEffect, useCallback } from "react";
import { urlFor } from "@/src/utils/sanity";
import { ChevronLeft, ChevronRight, X, Loader2 } from "lucide-react"; // Added Loader2
import Image from "next/image";
import { SanityImage } from "@/src/utils/types";
import { shimmer, toBase64 } from "../utils/BlurData";

interface GalleryProps {
  images: SanityImage | SanityImage[];
}

export default function Gallery({ images: inputImages }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false); // New Loading State

  const images = Array.isArray(inputImages) ? inputImages : [inputImages];

  // Trigger loading state when index changes
  const handleIndexChange = useCallback((index: number) => {
    setIsLoading(true);
    setSelectedIndex(index);
  }, []);

  const handleNext = useCallback(
    (e?: React.MouseEvent | React.TouchEvent) => {
      e?.stopPropagation();
      if (selectedIndex === null) return;
      handleIndexChange((selectedIndex + 1) % images.length);
    },
    [images.length, selectedIndex, handleIndexChange],
  );

  const handlePrev = useCallback(
    (e?: React.MouseEvent | React.TouchEvent) => {
      e?.stopPropagation();
      if (selectedIndex === null) return;
      handleIndexChange((selectedIndex - 1 + images.length) % images.length);
    },
    [images.length, selectedIndex, handleIndexChange],
  );

  const closeLightbox = () => {
    setSelectedIndex(null);
    setIsLoading(false);
  };

  // Swipe & Keyboard Logic
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const distance = touchStart - e.changedTouches[0].clientX;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    setTouchStart(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <>
      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => handleIndexChange(idx)} // Use new handler
            className="group relative cursor-pointer overflow-hidden rounded-md shadow-md transition-all hover:ring-1 hover:ring-blue-600"
          >
            <Image
              width={300}
              height={300}
              src={urlFor(img).width(300).height(300).fit("crop").url()}
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(300, 300))}`}
              alt={`${img?.alt || "Gallery image"}`}
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 z-60 cursor-pointer rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white hover:text-black"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          {/* Navigation */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 z-60 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white hover:text-black md:left-10"
                onClick={handlePrev}
              >
                <ChevronLeft size={48} />
              </button>
              <button
                className="absolute right-4 z-60 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white hover:text-black md:right-10"
                onClick={handleNext}
              >
                <ChevronRight size={48} />
              </button>
            </>
          )}

          <div className="relative flex h-full w-full items-center justify-center">
            {/* SPINNER */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-blue-500" />
              </div>
            )}

            <img
              src={urlFor(images[selectedIndex]).auto("format").url()}
              className={`max-h-full max-w-full rounded shadow-2xl transition-opacity duration-300 select-none ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              alt="Enlarged view"
              onLoad={() => setIsLoading(false)} // HIDE SPINNER ON LOAD
            />

            {/* Counter */}
            {images.length > 1 && (
              <div className="absolute -bottom-10 text-sm font-medium tracking-widest text-white/50">
                {selectedIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
