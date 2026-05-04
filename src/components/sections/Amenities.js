import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import cafeteria from "../../assets/cafeteria.png";
import games from "../../assets/games.png";
import lounge from "../../assets/lounges.png";
import theatre from "../../assets/theatre.png";
import gym from "../../assets/Gym.png";

const slides = [
  { key: "theatre", title: "Multimedia Room", img: theatre },
  { key: "games", title: "Indoor Games", img: games },
  { key: "gym", title: "Gymnasium", img: gym },
  { key: "cafeteria", title: "Pantry and Cafeteria", img: cafeteria },
  { key: "lounge", title: "Seating Lounge", img: lounge },
];

const AUTO_MS = 4500;

export default function Amenities() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (index) => {
      setDirection(index > active ? 1 : -1);
      setActive((index + slides.length) % slides.length);
    },
    [active]
  );

  const prev = () => go(active - 1);
  const next = () => go(active + 1);

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTO_MS);
    return () => clearInterval(t);
  }, []);

  const current = slides[active];

  return (
    <section
      id="amenities"
      className="relative section-forest py-20 lg:py-28 overflow-hidden"
      data-testid="amenities-section"
    >
      <DecorativeLines />

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight reveal reveal-delay-1 mb-20"
        >
          Amenities
        </motion.h2>

        <div className="grid lg:grid-cols-[1.55fr_1fr] gap-6 lg:gap-10 items-start">
          
          {/* Main Slider */}
          <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden shadow-[0_30px_70px_-30px_rgba(12,42,32,0.4)]">
            
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={current.key}
                src={current.img}
                alt={current.title}
                custom={direction}
                initial={{ opacity: 0, scale: 1.05, x: direction * 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 p-5 lg:p-7 bg-gradient-to-t from-black/55 to-transparent">
              <span className="text-white font-display text-2xl lg:text-3xl">
                {current.title}
              </span>
            </div>

            {/* Arrows */}
            <Arrow onClick={prev} left />
            <Arrow onClick={next} />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {slides.map((s, i) => (
              <Thumb
                key={s.key}
                slide={s}
                isActive={i === active}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs italic text-[#e2e4b0]/50 text-center lg:text-left">
          *Stock Images showcased for reference purpose only.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Components ---------------- */

const Arrow = ({ onClick, left }) => (
  <button
    onClick={onClick}
    aria-label={left ? "Previous" : "Next"}
    className={`absolute top-1/2 -translate-y-1/2 ${
      left ? "left-4" : "right-4"
    } w-10 h-12 lg:w-12 lg:h-14 rounded-full flex items-center justify-center
    text-[#c69a45] border border-[#c69a45]/70 
    hover:bg-sage/30 hover:text-white 
    hover:border-sage/30 transition backdrop-blur-sm bg-white/15`}
  >
    {left ? <ChevronLeft /> : <ChevronRight />}
  </button>
);

const Thumb = ({ slide, isActive, onClick }) => (
  <button
    onClick={onClick}
    className="relative h-20 lg:h-[88px] rounded-2xl overflow-hidden group"
  >
    <img
      src={slide.img}
      alt={slide.title}
      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
        isActive ? "opacity-0 scale-105" : "opacity-100 group-hover:scale-105"
      }`}
    />

    <div
      className={`absolute inset-0 transition-colors duration-500 ${
        isActive
          ? "bg-sage/30"
          : "bg-black/40 group-hover:bg-black/30"
      }`}
    />

    <span className="absolute inset-0 flex items-center justify-center text-white text-sm lg:text-[15px] px-3 text-center">
      {slide.title}
    </span>

    {isActive && (
      <motion.span
        layoutId="active-thumb-accent"
        className="absolute left-3 right-3 bottom-2 h-px bg-[#c69a45]"
      />
    )}
  </button>
);

const DecorativeLines = () => (
  <>
    <svg className="absolute -left-10 top-0 h-full w-40 opacity-40" viewBox="0 0 100 600">
      <path d="M30 0 C 80 150, 0 300, 60 450 C 30 540, 80 600, 80 600" stroke="#fed04f" strokeWidth="1.5" fill="none" />
    </svg>

    <svg className="absolute -right-10 bottom-0 h-full w-40 opacity-40" viewBox="0 0 100 600">
      <path d="M70 0 C 20 150, 100 300, 40 450 C 70 540, 20 600, 20 600" stroke="#fed04f" strokeWidth="1.5" fill="none" />
    </svg>
  </>
);