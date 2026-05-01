import React from "react";
import { motion } from "framer-motion";
import {
  Coins, TrendingUp, FileSignature, Layers,
  ShieldCheck, Building2, Wrench, BarChart3,
} from "lucide-react";

const reasons = [
  { icon: Coins, title: "Guaranteed Monthly Rental", desc: "Assured rental income for steady cash flow." },
  { icon: Layers, title: "Dual Benefit", desc: "Rental Income + Property Value Appreciation." },
  { icon: FileSignature, title: "Long-Term Lease", desc: "Lease structure ensures income stability." },
  { icon: BarChart3, title: "Predefined Rental Structure", desc: "Clear, transparent & fixed rental model." },
  { icon: ShieldCheck, title: "Zero Management Hassle", desc: "We manage everything, so you can relax." },
  { icon: Building2, title: "High Demand Asset", desc: "Studios in prime locations are always in demand." },
  { icon: Wrench, title: "Zero Maintenance Cost", desc: "No maintenance burden, no extra expenses." },
  { icon: TrendingUp, title: "Stable & Predictable Returns", desc: "Predictable returns to plan your future better." },
];

export default function InvestmentCase() {
  return (
    <section
      id="about"
      className="relative section-cream py-24 lg:py-32 overflow-hidden"
      data-testid="investment-case-section"
    >
      {/* Decorative SVG vine background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M400 0 Q450 150 380 280 T420 560"
          stroke="#0c2a20"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 8"
        />
      </svg>

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.05]">
            Pre-leased Studio Apartments
            <br />
            <span className="italic text-[#0c2a20]/80">
              are a better growth asset
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-20 bg-[#0c2a20]/30" />
            <svg width="20" height="20" viewBox="0 0 60 80" fill="none">
              <path
                d="M30 8 C26 18, 18 22, 14 28 C18 30, 24 28, 30 26 C36 28, 42 30, 46 28 C42 22, 34 18, 30 8 Z"
                fill="#fed04f"
              />
              <circle cx="30" cy="30" r="6" fill="#e8b836" />
            </svg>
            <div className="h-px w-20 bg-[#0c2a20]/30" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {reasons.map((r, i) => {
            const isDark = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative rounded-3xl p-7 lg:p-8 overflow-hidden ${isDark
                    ? "bg-[#0c2a20] text-[#e2e4b0]"
                    : "bg-[#f4f5d2] text-[#0c2a20] border border-[#0c2a20]/10"
                  }`}
                data-testid={`reason-card-${i + 1}`}
              >
                {/* Watermark Number */}
                <div
                  className={`absolute -top-4 -right-2 font-display text-[120px] leading-none font-light pointer-events-none ${isDark
                      ? "text-[#fed04f]/10"
                      : "text-[#0c2a20]/[0.05]"
                    }`}
                >
                  0{i + 1}
                </div>

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:rotate-6 ${isDark ? "bg-[#fed04f]" : "bg-[#0c2a20]"
                    }`}
                >
                  <r.icon
                    size={26}
                    className={
                      isDark ? "text-[#0c2a20]" : "text-[#fed04f]"
                    }
                  />
                </div>

                {/* Content */}
                <h3
                  className={`relative font-display text-2xl lg:text-[26px] leading-tight mb-3 ${isDark
                      ? "text-[#e2e4b0]"
                      : "text-[#0c2a20]"
                    }`}
                >
                  {r.title}
                </h3>

                <p
                  className={`relative text-sm lg:text-[15px] leading-relaxed ${isDark
                      ? "text-[#e2e4b0]/70"
                      : "text-[#0c2a20]/70"
                    }`}
                >
                  {r.desc}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#fed04f] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}