import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import galleryimage1 from "../../assets/E2.jpg";
import galleryimage2 from "../../assets/E3.jpg";
import galleryimage3 from "../../assets/E4.jpg";
import galleryimage5 from "../../assets/E5.jpg";
import galleryimage6 from "../../assets/E6.jpg";
import I2 from "../../assets/I2.jpg";
import I3 from "../../assets/I3.jpg";
import I4 from "../../assets/I4.jpg";
import I5 from "../../assets/I5.jpg";
import greenBackground from "../../assets/background-images/green-bg.png";

export const GALLERY_IMAGES = [
  I2, I5,
  galleryimage1,
  galleryimage2,
  I3, I4,
  galleryimage3,
  galleryimage5,
  galleryimage6,
];

const AUTO_MS = 5000;

export default function Gallery() {
  const [idx, setIdx] = useState(0);
  const len = GALLERY_IMAGES.length;

  const next = () => setIdx((p) => (p + 1) % len);
  const prev = () => setIdx((p) => (p - 1 + len) % len);

  useEffect(() => {
    const t = setInterval(next, AUTO_MS);
    return () => clearInterval(t);
    // eslint-disable-next-line
  }, []);

  // Pair of images for desktop (2-up). On mobile we show only the first one of the pair.
  const first = GALLERY_IMAGES[idx];
  const second = GALLERY_IMAGES[(idx + 1) % len];

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${greenBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <motion.h2
          data-testid="gallery-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-[#e2e4b0] text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight text-center leading-[1.05] max-w-[80%] md:max-w-none mb-16 lg:mb-20 mx-auto"
        >
          GALLERY
        </motion.h2>

        {/* Carousel */}
        <div className="relative">
          {/* Arrows — desktop (outside images) */}
          <button
            data-testid="gallery-prev"
            onClick={prev}
            aria-label="Previous"
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                       w-14 h-20 rounded-full border border-[#e2e4b0]/60 text-[#e2e4b0]
                       items-center justify-center
                       hover:bg-[#e2e4b0]/10 transition-colors duration-300"
          >
            <ArrowLeft size={22} strokeWidth={1.6} />
          </button>

          <button
            data-testid="gallery-next"
            onClick={next}
            aria-label="Next"
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                       w-14 h-20 rounded-full border border-[#e2e4b0]/60 text-[#e2e4b0]
                       items-center justify-center
                       hover:bg-[#e2e4b0]/10 transition-colors duration-300"
          >
            <ArrowRight size={22} strokeWidth={1.6} />
          </button>

          {/* Image strip */}
          <div className="px-0 lg:px-24">
            {/* DESKTOP: 2 images at a time */}
            <div className="hidden lg:grid grid-cols-2 gap-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`d1-${idx}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="aspect-square rounded-2xl overflow-hidden bg-[#0c2a20]/40 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]"
                >
                  <img
                    src={first}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`d2-${idx}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
                  className="aspect-square rounded-2xl overflow-hidden bg-[#0c2a20]/40 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]"
                >
                  <img
                    src={second}
                    alt={`Gallery ${((idx + 1) % len) + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* MOBILE / TABLET: 1 image at a time */}
            <div className="lg:hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`m-${idx}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="aspect-square rounded-2xl overflow-hidden bg-[#0c2a20]/40 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]"
                >
                  <img
                    src={first}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Mobile arrows */}
              <button
                data-testid="gallery-prev-mobile"
                onClick={prev}
                aria-label="Previous"
                className="absolute -left-2 top-1/2 -translate-y-1/2 z-10
                           w-11 h-16 rounded-full border border-[#e2e4b0]/60 text-[#e2e4b0]
                           flex items-center justify-center bg-[#0c2a20]/30 backdrop-blur-sm
                           hover:bg-[#e2e4b0]/10 transition-colors"
              >
                <ArrowLeft size={18} strokeWidth={1.6} />
              </button>

              <button
                data-testid="gallery-next-mobile"
                onClick={next}
                aria-label="Next"
                className="absolute -right-2 top-1/2 -translate-y-1/2 z-10
                           w-11 h-16 rounded-full border border-[#e2e4b0]/60 text-[#e2e4b0]
                           flex items-center justify-center bg-[#0c2a20]/30 backdrop-blur-sm
                           hover:bg-[#e2e4b0]/10 transition-colors"
              >
                <ArrowRight size={18} strokeWidth={1.6} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 lg:mt-12 flex items-center justify-center gap-3">
            {GALLERY_IMAGES.map((_, i) => {
              const isActive = i === idx;
              return (
                <button
                  key={i}
                  data-testid={`gallery-dot-${i}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-3 h-3 bg-[#fed04f]"
                      : "w-3 h-3 bg-[#e2e4b0]/40 hover:bg-[#e2e4b0]/70"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-10 lg:mt-14 text-[11px] sm:text-xs tracking-[0.1em] text-[#e2e4b0]/70 text-right">
          Artistic Impression | *T &amp; C&apos;s Apply
        </p>
      </div>
    </section>
  );
}
