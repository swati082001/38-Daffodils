import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ShoppingBag,
  Car,
  Network,
  Hospital,
  GraduationCap,
  Utensils,
} from "lucide-react";

import mapImg from "../../assets/Map.png";
import flowerBackgroundLeft from "../../assets/background-images/flower-left.png";
import flowerBackgroundRight from "../../assets/background-images/flower-right.png";

const groups = [
  {
    key: "it",
    icon: Briefcase,
    title: "IT & Business",
    items: [
      ["SmartWorks", "1 Min"],
      ["Ambrosia Galaxy", "1 Min"],
      ["Westport", "2 Mins"],
      ["WeWork", "2 Mins"],
      ["Amar Madhuban Tech Park", "2 Mins"],
      ["Amar Business Zone, Baner", "2 Mins"],
      ["Bitwise", "5 Mins"],
      ["Raheja IT Park", "5 Mins"],
      ["Solitaire Business Hub", "5 Mins"],
      ["Teerth Technospace", "6 Mins"],
      ["Samarth Technospace", "7 Mins"],
      ["Hinjewadi IT Park", "10 Mins"],
    ],
  },
  {
    key: "shopping",
    icon: ShoppingBag,
    title: "Shopping & Leisure",
    items: [
      ["Zudio", "5 Mins"],
      ["Max", "5 Mins"],
      ["Pantaloons", "5 Mins"],
      ["Tanishq", "5 Mins"],
      ["Chandukaka Saraf", "5 Mins"],
      ["Dmart", "5 Mins"],
      ["Balewadi High Street", "5 Mins"],
      ["Westend Mall", "10 Mins"],
      ["Phoenix Mall of the Millennium", "15 Mins"],
    ],
  },
  {
    key: "car",
    icon: Car,
    title: "Car Showrooms",
    items: [
      ["Kia", "4 Mins"],
      ["Tata", "4 Mins"],
      ["Audi", "4 Mins"],
      ["Mercedes Benz", "6 Mins"],
      ["BMW", "7 Mins"],
    ],
  },
  {
    key: "connectivity",
    icon: Network,
    title: "Connectivity",
    items: [
      ["Nanaware Chowk", "2 Mins"],
      ["Mumbai Bangalore Highway", "2 Mins"],
      ["Baner Hills", "2 Mins"],
      ["Baner Metro", "2 Mins"],
      ["Baner Road", "2 Mins"],
      ["Orchid Hotel", "5 Mins"],
      ["Hinjewadi", "10 Mins"],
      ["Shivajinagar", "15 Mins"],
    ],
  },
  {
    key: "hospitals",
    icon: Hospital,
    title: "Hospitals",
    items: [
      ["IIMS Hospital", "2 Mins"],
      ["Manipal Hospital", "4 Mins"],
      ["Jupiter Hospital", "5 Mins"],
      ["Surya Mother & Child Care Hospital", "7 Mins"],
    ],
  },
  {
    key: "education",
    icon: GraduationCap,
    title: "Educational Institutions",
    items: [
      ["Euro Kids Pre-school Balewadi", "3 Mins"],
      ["The Orchid School", "5 Mins"],
      ["MITCON Intl. School & Institute Of Management", "5 Mins"],
    ],
  },
  {
    key: "food",
    icon: Utensils,
    title: "Restaurants & Cafe",
    items: [
      ["McDonalds", "2 Mins"],
      ["Kannu Ki Chai", "2 Mins"],
      ["Maskawala & Co.", "4 Mins"],
      ["Urbo", "4 Mins"],
      ["Si Nonna’s", "5 Mins"],
      ["Pizza Express", "5 Mins"],
      ["Starbucks", "5 Mins"],
      ["The Urban Foundary", "5 Mins"],
      ["Circuit House", "5 Mins"],
      ["Buon Cibo", "5 Mins"],
      ["Tails & Spirits", "5 Mins"],
      ["Toscano", "5 Mins"],
      ["Elephant & Co.", "7 Mins"],
    ],
  },
];

export default function Proximity() {
  const [activeKey, setActiveKey] = useState("it");
  const active = groups.find((g) => g.key === activeKey) || groups[0];

  return (
    <section
      id="proximity"
      data-testid="proximity-section"
      className="relative section-cream py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Flower decorations */}
      <img
        src={flowerBackgroundLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] lg:w-[420px] opacity-70 z-0"
      />
      <img
        src={flowerBackgroundRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] lg:w-[420px] opacity-70 z-0"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Eyebrow + Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            data-testid="proximity-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#0c2a20]/80 text-sm sm:text-base tracking-wide mb-3"
          >
            Proximity Map
          </motion.p>
          <motion.h2
            data-testid="proximity-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-[#0c2a20] text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight text-center leading-[1.05] max-w-[80%] md:max-w-none mx-auto"
          >
            EVERYTHING WITHIN MINUTES
          </motion.h2>
        </div>

        {/* DESKTOP: 3-column layout (Map | Detail panel | Category pills) */}
        <div className="hidden lg:grid grid-cols-12 gap-5 items-start ">
          {/* Map column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="col-span-6 rounded-[28px] overflow-hidden bg-[#0c2a20] p-6 shadow-[0_20px_50px_-20px_rgba(12,42,32,0.35)] "
          >
            <img
              src={mapImg}
              alt="Proximity map of 38 Daffodils"
              className="w-full h-auto object-contain rounded-xl"
              draggable={false}
            />
          </motion.div>

          {/* Detail panel */}
          <motion.div
            key={`panel-${active.key}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="col-span-3 rounded-[28px] bg-[#0c2a20] p-6 xl:p-7 xl:p-10 shadow-[0_20px_50px_-20px_rgba(12,42,32,0.35)]"
            data-testid="proximity-detail-panel"
          >
            <AnimatePresence mode="wait">
              <motion.ul
                key={active.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="divide-y divide-[#e2e4b0]/10"
              >
                {active.items.map(([name, time]) => (
                  <li
                    key={name}
                    className="flex items-baseline justify-between gap-4 py-2 first:pt-0 last:pb-0"
                  >
                    <span className="text-[#e2e4b0] text-[14px] xl:text-[15px]">
                      {name}
                    </span>
                    <span className="text-[#fed04f] text-[14px] xl:text-[15px] whitespace-nowrap font-medium">
                      {time}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </motion.div>

          {/* Category pills */}
          <div className="col-span-3 flex flex-col 2.5">
            {groups.map((g, gi) => {
              const Icon = g.icon;
              const isActive = g.key === activeKey;
              return (
                <motion.button
                  key={g.key}
                  data-testid={`proximity-pill-${g.key}`}
                  onClick={() => setActiveKey(g.key)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 * gi }}
                  className={`group flex items-center gap-4 rounded-full px-6 py-4 text-left transition-all duration-300 ${isActive
                      ? "bg-[#0c2a20] text-[#fed04f] border border-[#0c2a20] shadow-[0_10px_25px_-12px_rgba(12,42,32,0.5)]"
                      : "bg-transparent text-[#0c2a20] border border-[#0c2a20]/60 hover:bg-[#0c2a20]/5"
                    }`}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 ${isActive ? "text-[#fed04f]" : "text-[#0c2a20]"
                      }`}
                    strokeWidth={1.6}
                  />
                  <span className="text-[14px] xl:text-[15px] tracking-tight leading-tight">
                    {g.title}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* MOBILE / TABLET layout */}
        <div className="lg:hidden flex flex-col gap-6">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden shadow-[0_15px_40px_-18px_rgba(12,42,32,0.35)]"
          >
            <img
              src={mapImg}
              alt="Proximity map of 38 Daffodils"
              className="w-full h-auto object-cover"
              draggable={false}
            />
          </motion.div>

          {/* Active category pill (highlight) */}
          {(() => {
            const Icon = active.icon;
            return (
              <div
                data-testid="proximity-active-mobile"
                className="flex items-center gap-3 rounded-full px-5 py-3 bg-[#0c2a20] text-[#fed04f] self-start"
              >
                <Icon className="w-5 h-5 text-[#fed04f]" strokeWidth={1.6} />
                <span className="text-base tracking-tight">{active.title}</span>
              </div>
            );
          })()}

          {/* Detail list panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`m-panel-${active.key}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-2xl bg-[#0c2a20] p-5 sm:p-6"
            >
              <ul className="divide-y divide-[#e2e4b0]/10">
                {active.items.map(([name, time]) => (
                  <li
                    key={name}
                    className="flex items-baseline justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
                  >
                    <span className="text-[#e2e4b0] text-sm sm:text-base">
                      {name}
                    </span>
                    <span className="text-[#fed04f] text-sm sm:text-base whitespace-nowrap font-medium">
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Other category pills */}
          <div className="flex flex-col gap-3">
            {groups
              .filter((g) => g.key !== activeKey)
              .map((g) => {
                const Icon = g.icon;
                return (
                  <button
                    key={g.key}
                    data-testid={`proximity-pill-mobile-${g.key}`}
                    onClick={() => setActiveKey(g.key)}
                    className="flex items-center gap-3 rounded-full px-5 py-3 text-left border border-[#0c2a20]/60 text-[#0c2a20] bg-transparent hover:bg-[#0c2a20]/5 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-[#0c2a20]" strokeWidth={1.6} />
                    <span className="text-sm sm:text-base tracking-tight">
                      {g.title}
                    </span>
                  </button>
                );
              })}
          </div>
        </div>

        {/* Footer T&C */}
        <p className="mt-10 lg:mt-14 text-[11px] sm:text-xs tracking-[0.1em] text-[#0c2a20]/70 text-right">
          *T &amp; C&apos;s Apply
        </p>
      </div>
    </section>
  );
}
