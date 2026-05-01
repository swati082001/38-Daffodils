import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sprout, Coins, TrendingUp,BarChart3, ShieldCheck } from "lucide-react";

/* Counter Component */
function Counter({ to, prefix = "", suffix = "", decimals = 0, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start;

    const step = (ts) => {
      if (!start) start = ts;

      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setVal(to * eased);

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* Data */
const pillars = [
  {
    title: "Fields of Fortune",
    icon: Sprout,
    bigPrefix: "₹",
    bigSuffix: " Lakhs*",
    label: "Investment in pre-leased studio apartment",
    sub: "Where opportunity expands into abundance.",
    value: 39.75,
    decimals: 2,
  },
  {
    title: "Seeds of Wealth",
    icon: Coins,
    bigPrefix: "₹",
    bigSuffix: "/mo*",
    label: "Rental income from day one",
    sub: "Your investment starts earning from the very beginning.",
    value: 18000,
    duration: 2.5,
  },
  {
    title: "Roots of Returns",
    icon: TrendingUp,
    bigPrefix: "",
    bigSuffix: "%",
    label: "Rental escalation after first 3 years",
    sub: "+ 5% every year from 4th year onwards. Built on a structure that strengthens over time.",
    value: 15,
  },
  {
    title: "Money Grows On Trees",
    icon: BarChart3,
    bigPrefix: "",
    bigSuffix: "%",
    label: "Average ROI",
    sub: "Returns that are measured and reliable",
    value: 7.20,
  },
  {
    title: "Lease Security",
    icon: ShieldCheck,
    bigPrefix: "",
    bigSuffix: "yrs (5 + 5)",
    label: "Lock-in Period 5 years",
    sub: "Because Stability is the real return",
    value: 10,
  },
];

export default function WealthApproach() {
  return (
    <section
      id="wealth"
      className="relative section-forest py-24 lg:py-32 overflow-hidden grain"
    >
      {/* Rotating background circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full border border-[#fed04f]/10"
      />

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#fed04f] text-xs lg:text-sm font-bold tracking-[0.4em] uppercase">
            The Growth Blueprint
          </span>

          <h2 className="font-display text-[#e2e4b0] text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.05]">
            A Structured Approach
            <br />
            <span className="italic shimmer-gold">
              to Growing Wealth
            </span>
          </h2>
        </motion.div>

        {/* Vine + Cards */}
        <div className="relative">
          {/* Animated Vine */}

          {/* Pillars */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="w-full sm:w-[300px] lg:w-[320px] text-center"
                data-testid={`wealth-pillar-${i + 1}`}
              >
                {/* Icon Circle */}
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full bg-[#fed04f]/20 pulse-ring" />
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#fed04f] to-[#e8b836] flex items-center justify-center shadow-[0_0_60px_rgba(254,208,79,0.4)]">
                    <p.icon size={36} className="text-[#0c2a20]" />
                  </div>
                </div>

                {/* Title */}
                <div className="text-[#fed04f] text-xs lg:text-sm font-bold tracking-[0.3em] uppercase mb-4">
                  {p.title}
                </div>

                {/* Value */}
                <div className="huge-number mb-3">
                  {p.bigPrefix}
                  <Counter
                    to={p.value}
                    decimals={p.decimals || 0}
                    duration={p.duration || 2}
                  />
                  <span className="text-xl lg:text-2xl">
                    {p.bigSuffix}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#e2e4b0] text-base lg:text-lg font-medium max-w-xs mx-auto mb-3">
                  {p.label}
                </p>

                <p className="text-[#e2e4b0]/60 text-sm max-w-xs mx-auto italic">
                  {p.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center text-[#e2e4b0]/50 text-xs mt-16 max-w-2xl mx-auto"
        >
          Note: The co-living service provider is legally obligated to pay the
          rent directly to the property owners.
        </motion.p>
      </div>
    </section>
  );
}