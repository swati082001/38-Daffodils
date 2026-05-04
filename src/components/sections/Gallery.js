import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import galleryimage1 from "../../assets/E2.jpg";
import galleryimage2 from "../../assets/E3.jpg";
import galleryimage3 from "../../assets/E4.jpg";
import galleryimage5 from "../../assets/E5.jpg";
import galleryimage6 from "../../assets/E6.jpg";

export const GALLERY_IMAGES = [
  galleryimage1,
  galleryimage2,
  galleryimage3,
  galleryimage5,
  galleryimage6
];

export default function Renders() {
  const [idx, setIdx] = useState(0);

  const next = () =>
    setIdx((p) => (p + 1) % GALLERY_IMAGES.length);

  const prev = () =>
    setIdx((p) => (p - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="gallery"
      className="relative section-cream py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12"
        >
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mt-3 sm:mt-4 leading-[1.05] font-light">
            Gallery
          </h2>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-[#0c2a20]/30
                         hover:bg-[#0c2a20] hover:text-[#fed04f]
                         flex items-center justify-center transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-[#0c2a20]/30
                         hover:bg-[#0c2a20] hover:text-[#fed04f]
                         flex items-center justify-center transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Gallery Layout */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Main Image */}
          <div className="relative w-full lg:w-[70%] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c2a20]">
            <AnimatePresence mode="wait">
              <motion.img
                key={idx}
                src={GALLERY_IMAGES[idx]}
                alt={`Render ${idx + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c2a20]/70 via-transparent to-transparent pointer-events-none" />

            {/* Counter */}
            <div className="absolute bottom-6 left-6 text-[#e2e4b0] font-display">
              <span className="text-5xl lg:text-7xl font-light">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-[#fed04f] mx-2 text-3xl">/</span>
              <span className="text-3xl text-[#e2e4b0]/60">
                {String(GALLERY_IMAGES.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:flex lg:flex-col gap-2 sm:gap-3 lg:w-[30%] lg:max-h-[600px] lg:overflow-y-auto">
            {GALLERY_IMAGES.map((src, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`relative aspect-square rounded-lg overflow-hidden transition ${
                  i === idx
                    ? "ring-2 ring-[#fed04f]"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt={`thumb ${i}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}