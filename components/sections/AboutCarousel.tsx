"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/portrait.jpg", alt: "Damilare Oshokoya" },
  { src: "/images/portrait-2.jpg", alt: "Damilare Oshokoya" },
  { src: "/images/portrait.jpg", alt: "Damilare Oshokoya" },
  { src: "/images/portrait-2.jpg", alt: "Damilare Oshokoya" },
  { src: "/images/portrait.jpg", alt: "Damilare Oshokoya" },
  { src: "/images/portrait-2.jpg", alt: "Damilare Oshokoya" },
];

// Duplicate for seamless loop
const allImages = [...images, ...images];

export function AboutCarousel() {
  const trackWidth = images.length * 380; // approx px per card + gap

  return (
    <section className="py-16 md:py-24 bg-background border-t border-border overflow-hidden">
      <div className="mx-auto w-full max-w-[var(--container-default)] px-6 md:px-10 mb-10">
        <p className="text-xs tracking-[0.22em] uppercase text-primary font-sans">
          Gallery
        </p>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: [`0px`, `-${trackWidth}px`] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: `${trackWidth * 2}px` }}
        >
          {allImages.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[340px] aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="340px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
