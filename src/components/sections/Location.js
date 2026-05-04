import React from "react";
import { motion } from "framer-motion";
import { MapPin, TrendingUp, Route, ShoppingBag, BarChart3 } from "lucide-react";

/* DATA */
const TOP = [
  {
    pos: 1,
    title: "Reliable Demand",
    bullets: ["IT-Driven Occupancy", "Year-Round Rental Flow"],
  },
  {
    pos: 3,
    title: "Lifestyle Advantage",
    bullets: ["Close To Balewadi High Street", "High Livability Quotient"],
  },
];

const BOTTOM = [
  {
    pos: 0,
    title: "Strategic Address",
    bullets: ["Prime Baner Stretch", "Surrounded By Key Hubs"],
  },
  {
    pos: 2,
    title: "Connected Advantage",
    bullets: [
      "Linked Via The Mumbai-Bangalore Highway",
      "Seamless City Movement",
    ],
  },
  {
    pos: 4,
    title: "Growth Potential",
    bullets: ["Appreciating Locality", "Future-Ready Infrastructure"],
  },
];

const ICONS = [MapPin, TrendingUp, Route, ShoppingBag, BarChart3];

/* MAIN */
export default function Location() {
  return (
    <section
      id="location"
      className="relative py-16 lg:py-32 px-5 lg:px-10 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #0e3024 0%, #061a13 90%)",
      }}
    >
      <LeafPattern />

      <div className="relative max-w-[1400px] mx-auto">
        <Header />

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden lg:block">
          <DesktopLayout />
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="lg:hidden space-y-10">
          <MobileLayout />
        </div>

        <p className="mt-12 text-center lg:text-right text-[11px] tracking-[0.2em] uppercase text-sage/50">
          * T & C Apply
        </p>
      </div>
    </section>
  );
}

/* ---------------- HEADER ---------------- */
const Header = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-14 lg:mb-28"
  >
    <h2 className="font-display text-gold text-3xl sm:text-5xl lg:text-6xl uppercase">
      Pancard Club Road, Baner
    </h2>
    <p className="text-sage/80 text-sm mt-3 tracking-[0.3em] uppercase">
      The Right Investment Ground
    </p>
  </motion.div>
);

/* ---------------- DESKTOP (UNCHANGED STYLE) ---------------- */
const DesktopLayout = () => (
  <div className="relative">
    <Row items={TOP} position="top" />
    <CurveWithIcons />
    <Row items={BOTTOM} position="bottom" />
  </div>
);

/* ---------------- MOBILE (STACKED CLEAN UX) ---------------- */
const MobileLayout = () => (
  <div className="space-y-8">
    <IconsRow />
    {TOP.map((item) => (
      <Card key={item.title} item={item} />
    ))}

    {BOTTOM.map((item) => (
      <Card key={item.title} item={item} />
    ))}
  </div>
);

/* ---------------- CARD (MOBILE) ---------------- */
const Card = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="p-5 rounded-2xl border border-sage/20 bg-sage/5"
  >
    <h3 className="text-gold text-lg font-semibold mb-2">
      {item.title}
    </h3>
    <ul className="text-sage/80 text-sm space-y-1">
      {item.bullets.map((b) => (
        <li key={b}>• {b}</li>
      ))}
    </ul>
  </motion.div>
);

/* ---------------- ICON ROW (MOBILE) ---------------- */
const IconsRow = () => (
  <div className="grid grid-cols-5 gap-3 py-4">
    {ICONS.map((Icon, i) => (
      <div key={i} className="flex justify-center">
        <div className="w-10 h-10 rounded-full bg-sage/10 border border-sage/30 flex items-center justify-center">
          <Icon className="w-5 h-5 text-sage" />
        </div>
      </div>
    ))}
  </div>
);

/* ---------------- DESKTOP ROW ---------------- */
const Row = ({ items, position }) => (
  <div className={`grid grid-cols-5 gap-4 ${position === "top" ? "mb-10" : "mt-10"}`}>
    {Array.from({ length: 5 }).map((_, i) => {
      const item = items.find((x) => x.pos === i);
      if (!item) return <div key={i} />;
      return (
        <div key={i} className="text-center">
          {position === "bottom" && <Connector />}
          <h3 className="text-gold font-semibold">{item.title}</h3>
          <ul className="text-sage/80 text-sm mt-2">
            {item.bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
          {position === "top" && <Connector />}
        </div>
      );
    })}
  </div>
);

const Connector = () => (
  <div className="w-px h-10 mx-auto my-3 bg-sage/30" />
);

/* ---------------- CURVE (DESKTOP ONLY) ---------------- */
const CurveWithIcons = () => (
  <div className="relative h-[200px]">
    <svg viewBox="0 0 1000 200" className="absolute w-full h-full">
      <motion.path
        d="M 20 100 C 100 100, 100 30, 200 30 C 300 30, 300 170, 400 170 C 500 170, 500 30, 600 30 C 700 30, 700 170, 800 170 C 900 170, 900 100, 980 100"
        stroke="#3aa07a"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
    </svg>

    <div className="grid grid-cols-5 h-full items-center relative">
      {ICONS.map((Icon, i) => (
        <div key={i} className="flex justify-center">
          <div className="w-24 h-24 rounded-full border border-sage/30 bg-sage/10 flex items-center justify-center">
            <Icon className="text-sage w-8 h-8" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ---------------- BACKGROUND ---------------- */
const LeafPattern = () => (
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none" />
);