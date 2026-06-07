"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/hero.jpg", alt: "Oshokoya Damilare", slot: 1, filename: "hero.jpg" },
  { src: "/images/portrait-2.jpg", alt: "Oshokoya Damilare", slot: 2, filename: "portrait-2.jpg" },
  { src: "/images/philosophy.jpg", alt: "Oshokoya Damilare", slot: 3, filename: "philosophy.jpg" },
  { src: "/images/real-estate.jpg", alt: "Oshokoya Damilare", slot: 4, filename: "real-estate.jpg" },
  { src: "/images/buyology-guide.jpg", alt: "Oshokoya Damilare", slot: 5, filename: "buyology-guide.jpg" },
  { src: "/images/smash-it.jpg", alt: "Oshokoya Damilare", slot: 6, filename: "smash-it.jpg" },
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
