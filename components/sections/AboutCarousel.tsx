"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/about-c1.jpg", alt: "Oshokoya Damilare" },
  { src: "/images/about-c2.jpg", alt: "Oshokoya Damilare" },
  { src: "/images/about-c3.jpg", alt: "Oshokoya Damilare" },
  { src: "/images/about-c4.jpg", alt: "Oshokoya Damilare" },
  { src: "/images/about-c5.jpg", alt: "Oshokoya Damilare" },
  { src: "/images/about-c6.jpg", alt: "Oshokoya Damilare" },
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
