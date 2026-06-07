"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/about-1.jpg", alt: "Damilare Oshokoya" },
  { src: "/images/about-2.jpg", alt: "Damilare Oshokoya" },
  { src: "/images/about-3.jpg", alt: "Damilare Oshokoya" },
  { src: "/images/about-4.jpg", alt: "Damilare Oshokoya" },
  { src: "/images/about-5.jpg", alt: "Damilare Oshokoya" },
  { src: "/images/about-6.jpg", alt: "Damilare Oshokoya" },
];

const allImages = [...images, ...images];
const trackWidth = images.length * 356; // card width (340) + gap (16)

export function AboutCarousel() {
  return (
    <section className="pt-0 pb-0 bg-background overflow-hidden">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: [`0px`, `-${trackWidth}px`] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
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
