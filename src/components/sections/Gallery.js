import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
  I2,
  I5,
  galleryimage1,
  galleryimage2,
  I3,
  I4,
  galleryimage3,
  galleryimage5,
  galleryimage6,
];

const AUTO_MS = 5000;

export default function Gallery() {
  const [idx, setIdx] = useState(0);

  const len = GALLERY_IMAGES.length;

  const next = useCallback(() => {
    setIdx((prev) => (prev + 1) % len);
  }, [len]);

  const prev = useCallback(() => {
    setIdx((prev) => (prev - 1 + len) % len);
  }, [len]);

  useEffect(() => {
    const timer = setInterval(next, AUTO_MS);
    return () => clearInterval(timer);
  }, [next]);

  const first = GALLERY_IMAGES[idx];
  const second = GALLERY_IMAGES[(idx + 1) % len];

  return (
    <section
      id="gallery"
      className="
        relative
        overflow-hidden
        pt-8
        pb-8
        lg:pt-[24px]
        lg:pb-[35px]
      "
      style={{
        backgroundImage: `url(${greenBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Title */}
      <h2
        className="
          font-title
          text-[#E2E4B0]
          text-[28px]
          lg:text-[48px]
          leading-none
          text-center
          font-normal
          mb-8
          lg:mb-[50px]
        "
      >
        GALLERY
      </h2>

      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden lg:block relative w-full px-[140px]">
        {/* Left Arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="
            absolute
            left-[120px]
            top-1/2
            -translate-y-1/2
            z-20
            w-[68px]
            h-[68px]
            rounded-full
            border
            border-[#E2E4B0]
            flex
            items-center
            justify-center
            text-[#E2E4B0]
            hover:bg-[#E2E4B0]/10
            transition-all
            duration-300
          "
        >
          <ArrowLeft size={30} strokeWidth={1.5} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="
            absolute
            right-[120px]
            top-1/2
            -translate-y-1/2
            z-20
            w-[68px]
            h-[68px]
            rounded-full
            border
            border-[#E2E4B0]
            flex
            items-center
            justify-center
            text-[#E2E4B0]
            hover:bg-[#E2E4B0]/10
            transition-all
            duration-300
          "
        >
          <ArrowRight size={30} strokeWidth={1.5} />
        </button>

        {/* Images */}
        <div className="flex justify-center gap-[40px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="
                w-[422px]
                h-[292px]
                rounded-[10px]
                overflow-hidden
                flex-shrink-0
              "
            >
              <img
                src={first}
                alt="Gallery"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="
                w-[422px]
                h-[292px]
                rounded-[10px]
                overflow-hidden
                flex-shrink-0
              "
            >
              <img
                src={second}
                alt="Gallery"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Note */}
        <p
          className="
            absolute
            right-[40px]
            bottom-[-50px]
            text-[11px]
            text-[#E2E4B0]
            opacity-80
          "
        >
          Artistic Impression | *T &amp; C&apos;s Apply
        </p>
      </div>

      {/* ================= MOBILE (MATCHES DESIGN) ================= */}
      <div className="lg:hidden px-4">
        <div className="relative mx-auto w-full max-w-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="
  relative
  h-[250px]
  overflow-hidden
  rounded-[18px]
"
            >
              <img
                src={first}
                alt="Gallery"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="
              absolute
              left-[-18px]
              top-1/2
              -translate-y-1/2
              w-[42px]
              h-[42px]
              rounded-full
              border
              border-[#E2E4B0]
              flex
              items-center
              justify-center
              text-[#E2E4B0]
              bg-[#0c2a20]/40
              backdrop-blur-sm
            "
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="
              absolute
              right-[-18px]
              top-1/2
              -translate-y-1/2
              w-[42px]
              h-[42px]
              rounded-full
              border
              border-[#E2E4B0]
              flex
              items-center
              justify-center
              text-[#E2E4B0]
              bg-[#0c2a20]/40
              backdrop-blur-sm
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-5">
          {GALLERY_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`
                w-[10px]
                h-[10px]
                rounded-full
                transition-all
                duration-300
                ${i === idx
                  ? "bg-[#FED04F]"
                  : "bg-[#E2E4B0]"
                }
              `}
            />
          ))}
        </div>

        {/* Footer Note */}
        <p
          className="
            text-right
            text-[#E2E4B0]/80
            text-[8px]
            mt-6
            pr-1
          "
        >
          Artistic Impression | *T &amp; C&apos;s Apply
        </p>
      </div>
    </section>
  );
}