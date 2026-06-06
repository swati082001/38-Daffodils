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
      className="relative section-cream pt-[50px] pb-[60px] overflow-hidden"
    >
      {/* Flower decorations */}
      <img
        src={flowerBackgroundLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] lg:w-[280px] opacity-70 z-0"
      />

      <img
        src={flowerBackgroundRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] lg:w-[280px] opacity-70 z-0"

      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-8">
        {/* Header */}
        {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-6 mt-10"
                >
                  <p
                    className="
                      font-body
                     
                      text-[18px]
                      lg:text-[24px]
                      mb-2
                    "
                  >
                    Proximity Map
                  </p>
        
                  <h2
                    className="
                      font-title
                      text-[#0c2a20]
                      text-[30px]
                      lg:text-[34px]
                      font-medium
                      leading-[1.1]
                      uppercase
                    "
                  >
                    EVERYTHING WITHIN MINUTES
                  </h2>
                </motion.div>

        {/* Desktop Layout */}
        <div
          className="
            hidden
            lg:grid
            grid-cols-[650px_350px_205px]
            gap-[14px]
            justify-center
            items-start
            mt-[40px]
          "
        >
          {/* Map */}
          <div
            className="
              rounded-[20px]
              overflow-hidden
              bg-[#0C2A20]
            "
          >
            <img
              src={mapImg}
              alt="Proximity Map"
              className="w-full rounded-[10px]"
              draggable={false}
            />
          </div>

          {/* Active Category Detail */}
          <div
            className="
              rounded-[20px]
              bg-[#0C2A20]
              px-[28px]
              py-[24px]
              h-full
            "
          >
            <AnimatePresence mode="wait">
              <motion.ul
                key={active.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {active.items.map(([name, time]) => (
                  <li
                    key={name}
                    className="
                      flex
                      justify-between
                      items-start
                      gap-4
                      py-[7px]
                    "
                  >
                    <span className="text-[#E2E4B0] text-[16px]">
                      {name}
                    </span>

                    <span
                      className="
                        text-[#FED04F]
                        text-[16px]
                        whitespace-nowrap
                      "
                    >
                      {time}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          {/* Category Pills */}
          <div className="flex flex-col gap-[10px]">
            {groups.map((g) => {
              const Icon = g.icon;
              const isActive = g.key === activeKey;

              return (
                <button
                  key={g.key}
                  onClick={() => setActiveKey(g.key)}
                  className={`
                    w-[200px]
                    min-h-[52px]
                    rounded-full
                    px-[18px]
                    py-[10px]
                    flex
                    items-center
                    gap-3
                    text-left
                    transition-all
                    ${isActive
                      ? "bg-[#0C2A20] text-[#FED04F] border border-[#0C2A20]"
                      : "bg-transparent text-[#0C2A20] border border-[#0C2A20]"
                    }
                  `}
                >
                  <Icon
                    className="w-[22px] h-[22px] shrink-0"
                    strokeWidth={1.5}
                  />

                  <span className="text-[16px] leading-tight">
                    {g.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-5">
          <div className="rounded-[20px] overflow-hidden">
            <img
              src={mapImg}
              alt="Proximity Map"
              className="w-full"
            />
          </div>

          <div className="rounded-[20px] bg-[#0C2A20] p-5">
            <ul>
              {active.items.map(([name, time]) => (
                <li
                  key={name}
                  className="
                    flex
                    justify-between
                    py-2
                  "
                >
                  <span className="text-[#E2E4B0] text-sm">
                    {name}
                  </span>

                  <span className="text-[#FED04F] text-sm">
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            {groups.map((g) => {
              const Icon = g.icon;

              return (
                <button
                  key={g.key}
                  onClick={() => setActiveKey(g.key)}
                  className="border border-[#0C2A20] rounded-full px-5 py-3 flex items-center gap-3"
                >
                  <Icon className="w-5 h-5" />

                  <span>{g.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Right Note */}
  <p
    className="
      absolute
      bottom-[-40px]
      right-10
      text-[8px]
      text-[#1a1a1a]
      opacity-70
    "
  >
    *T &amp; C's Apply
  </p>
      </div>
    </section>
  );
}
