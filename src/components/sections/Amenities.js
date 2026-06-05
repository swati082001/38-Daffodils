import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import cafeteria from "../../assets/cafeteria.png";
import games from "../../assets/games.png";
import lounge from "../../assets/lounges.png";
import theatre from "../../assets/theatre.png";
import gym from "../../assets/Gym.png";
import greenBackground from "../../assets/background-images/green-bg.png";

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
    className="section-forest grain relative py-8 lg:py-12 overflow-hidden"
    style={{
      backgroundImage: `url(${greenBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="max-w-[1300px] mx-auto px-4 lg:px-6 relative z-10">
  
      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden lg:block">
        <h2 className="section-title text-[36px] md:text-[42px] mb-8 text-cream">
          AMENITIES
        </h2>
  
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 items-start">
          {/* LEFT */}
          <div className="relative rounded-[22px] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={current.key}
                src={current.img}
                alt={current.title}
                custom={direction}
                initial={{ opacity: 0, scale: 1.05, x: direction * 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.7 }}
                className="w-full h-[420px] lg:h-[500px] object-cover"
              />
            </AnimatePresence>
  
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <span className="font-sans text-white text-2xl md:text-3xl">
                {current.title}
              </span>
            </div>
  
            <Arrow onClick={prev} left />
            <Arrow onClick={next} />
          </div>
  
          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            {slides.map((s, i) => (
              <button
                key={s.key}
                onClick={() => go(i)}
                className={`relative rounded-xl overflow-hidden transition-all duration-500 h-[85px]
                  ${
                    i === active
                      ? "bg-[#d8d7ad]"
                      : "bg-black/40 hover:bg-black/30"
                  }`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    i === active ? "opacity-30" : "opacity-100"
                  }`}
                />
  
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`font-body text-sm md:text-base ${
                      i === active ? "text-[#183B2D]" : "text-white"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
  
      {/* ================= MOBILE ================= */}
      <div className="lg:hidden">
        <h2
          className="
            text-center
            text-sage
            font-title
            text-[24px]
            leading-none
            mb-8
          "
        >
          AMENITIES
        </h2>
  
        <div className="relative flex items-center justify-center">
          
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="
              absolute
              left-0
              z-20
              w-9
              h-9
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
            <ChevronLeft size={16} />
          </button>
  
          {/* Slider Card */}
          <div
            className="
              relative
              w-[78%]
              rounded-[20px]
              overflow-hidden
            "
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current.key}
                src={current.img}
                alt={current.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45 }}
                className="
                  w-full
                  h-[220px]
                  object-cover
                "
              />
            </AnimatePresence>
  
            {/* Caption */}
            <div
              className="
                absolute
                left-4
                bottom-4
                text-white
                text-[16px]
                font-body
              "
            >
              {current.title}
            </div>
          </div>
  
          {/* Right Arrow */}
          <button
            onClick={next}
            className="
              absolute
              right-0
              z-20
              w-9
              h-9
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
            <ChevronRight size={16} />
          </button>
        </div>
  
        {/* Dots */}
        <div className="flex justify-center gap-3 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`
                w-2.5
                h-2.5
                rounded-full
                transition-all
                duration-300
                ${
                  i === active
                    ? "bg-[#FED04F]"
                    : "bg-white/80"
                }
              `}
            />
          ))}
        </div>
  
        {/* T&C */}
        <p className="text-right text-sage/60 text-[10px] mt-6">
          *T & C's Apply
        </p>
      </div>
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
      left ? "left-5" : "right-5"
    } w-12 h-12 rounded-full flex items-center justify-center
    border border-[var(--cream)] text-[var(--cream)]
    bg-black/30 backdrop-blur-md
    hover:bg-[var(--gold)] hover:text-[var(--forest)]
    transition-all duration-300`}
  >
    {left ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
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
