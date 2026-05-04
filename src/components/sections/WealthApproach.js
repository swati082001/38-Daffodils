import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sprout, Coins, TrendingUp, BarChart3, ShieldCheck } from "lucide-react";

/* ---------------- Counter ---------------- */
function Counter({ to, prefix = "", suffix = "", decimals = 0, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(to * eased);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ---------------- Pillar Card ---------------- */
function PillarCard({ pillar, index }) {
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-[22px] sm:rounded-[28px]
                 p-4 sm:p-6 lg:p-9
                 border border-[#3aa07a]/30 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(15,55,40,0.55) 0%, rgba(8,30,22,0.85) 100%)",
        minHeight: "360px",
      }}
    >
      {/* responsive min height */}
      <style>{`
        @media (min-width: 640px) {
          .pillar-card {
            min-height: 420px;
          }
        }
        @media (min-width: 1024px) {
          .pillar-card {
            min-height: 560px;
          }
        }
      `}</style>

      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cg fill='none' stroke='%23e0e4b2' stroke-width='1'%3E%3Cpath d='M40 80 Q80 40 120 80 Q80 120 40 80 Z'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "160px",
        }}
      />

      {/* Hover glow */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100 transition"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, rgba(254,208,79,0.18), transparent 60%)",
        }}
      />

      {/* Title */}
      <h3 className="text-gold text-lg sm:text-xl lg:text-[26px] font-semibold text-center">
        {pillar.title}
      </h3>

      {/* Divider */}
      <div className="mx-auto my-4 sm:my-6 w-px h-10 sm:h-14 lg:h-16 bg-sage/35" />

      {/* Value */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="font-display text-gold font-bold leading-tight">
          {pillar.bigPre && (
            <span className="text-2xl sm:text-3xl">{pillar.bigPre}</span>
          )}

          <span className="text-3xl sm:text-5xl lg:text-7xl">
            <Counter
              to={pillar.value}
              decimals={pillar.decimals || 0}
              duration={pillar.duration || 2}
            />
          </span>

          {pillar.bigSuf && (
            <span className="text-lg sm:text-2xl">{pillar.bigSuf}</span>
          )}
        </div>

        {pillar.label && (
          <p className="text-sage/85 text-xs sm:text-sm mt-3 sm:mt-4 max-w-[24ch]">
            {pillar.label}
          </p>
        )}

        {pillar.secondary && (
          <div className="mt-3 sm:mt-4 font-display text-gold font-bold">
            <span className="text-2xl sm:text-4xl">
              {pillar.secondary.value}
            </span>
            <span className="text-base sm:text-xl ml-1">
              {pillar.secondary.suf}
            </span>
            <p className="text-sage/85 text-xs sm:text-sm mt-2 max-w-[22ch]">
              {pillar.secondary.label}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mx-auto my-3 sm:my-4 w-px h-10 sm:h-12 bg-sage/25" />

      <p className="text-center text-sage/75 text-xs sm:text-sm italic">
        {pillar.footer}
      </p>

      {/* Icon */}
      <div className="flex justify-center mt-3 sm:mt-4 opacity-50 group-hover:opacity-90 transition">
        <Icon
          size={36}
          className="sm:w-12 sm:h-12 lg:w-[56px] lg:h-[56px] text-[#2a8a66]"
        />
      </div>
    </motion.div>
  );
}

/* ---------------- Data ---------------- */
const PILLARS = [
  {
    title: "Fields of Fortune",
    icon: Sprout,
    bigPre: "₹",
    bigSuf: " Lakhs*",
    value: 39.75,
    decimals: 2,
    label: "of investment in PRELEASED STUDIO APARTMENT",
    footer: "Where opportunity expands into abundance.",
  },
  {
    title: "Seeds of Wealth",
    icon: Coins,
    bigPre: "₹ ",
    value: 18000,
    duration: 2.4,
    label: "Per Month rental income",
    footer: "Your investment starts earning from the very beginning.",
  },
  {
    title: "Roots of Returns",
    icon: TrendingUp,
    bigSuf: "%",
    value: 15,
    label: "Rental Escalation after First 3 Years",
    secondary: {
      value: "5",
      suf: "%",
      label: "Rental Escalation every year 4th year onwards",
    },
    footer: "Built on a structure that strengthens over time.",
  },
  {
    title: "Money Grows On Trees",
    icon: BarChart3,
    bigPre: "Avg ROI ",
    bigSuf: "%",
    value: 7.40,
    decimals: 2,
    footer: "Returns that are measured and reliable.",
  },
  {
    title: "Lease Security",
    icon: ShieldCheck,
    bigSuf: " yrs",
    value: 10,
    label: "Lease Period (5 + 5) ",
    secondary: {
      value: "5",
      suf: "yrs",
      label: "Lock-in Period",
    },
    footer: "Because stability is the real return.",
  },
];

/* ---------------- Main ---------------- */
export default function WealthApproach() {
  return (
    <section
      id="wealth"
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, #103e2e 0%, #061812 75%)",
      }}
    >
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <span className="text-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase">
            The Growth Blueprint
          </span>

          <h2 className="font-display text-sage text-2xl sm:text-4xl lg:text-6xl mt-3 sm:mt-4">
            A Structured Approach{" "}
            <span className="italic shimmer-gold">to Growing Wealth</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-7 mb-6">
          {PILLARS.slice(0, 3).map((p, i) => (
            <PillarCard key={p.title} pillar={p} index={i} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-[920px] mx-auto">
          {PILLARS.slice(3).map((p, i) => (
            <PillarCard key={p.title} pillar={p} index={i + 3} />
          ))}
        </div>

        <p className="mt-10 text-right text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-sage/40">
          * T & C Apply
        </p>
      </div>
    </section>
  );
}