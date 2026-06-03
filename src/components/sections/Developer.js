import React from "react";
import { motion } from "framer-motion";
import greenBackground from "../../assets/background-images/green-bg.png";
import developerImage from "../../assets/E2.jpg";

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "11+", label: "Landmark Projects" },
  { value: "705,000", label: "sq.ft. Developed" },
  { value: "580,000", label: "sq.ft. Development Planned" },
  { value: "8", label: "Upcoming Projects" },
];

const paragraphs = [
  "Blue Pearl is synonymous with excellence in construction, setting new standards of innovation and reliability in both PMC and PCMC. Fueled by the pillars of trust, reliability, and passion, we adhere to a simple yet profound purpose to enhance the lives of our clientele by delivering unparalleled living experiences.",
  "Our approach is straightforward yet transformative: we craft homes that epitomize beauty, punctuality, quality, and efficiency. With an unwavering commitment to ethical principles, Blue Pearl consistently surpasses expectations, delivering products of uncompromising quality.",
  "Recognized by esteemed organizations such as CREDAI and NAREDCO for the past decade, our track record speaks volumes about our ability to deliver excellence, consistently meeting and exceeding specified standards within stipulated timelines.",
];

export default function Developer() {
  const scrollToEnquire = () => {
    const el = document.getElementById("enquire");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="developer"
      data-testid="developer-section"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{
        backgroundColor: "#0c2a20",
        backgroundImage: `url(${greenBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* Top: Heading + Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]"
            data-testid="developer-image"
          >
            <img
              src={developerImage}
              alt="BluePearl Group development"
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-[5/4]"
              draggable={false}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-[#e2e4b0]"
          >
            <h2
              data-testid="developer-title"
              className="font-display tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="block text-[#e2e4b0]/80 text-xl sm:text-2xl lg:text-3xl tracking-[0.25em] uppercase font-light mb-2 sm:mb-3">
                About
              </span>
              <span className="block font-semibold text-[#e2e4b0]">
                BLUEPEARL
              </span>
            </h2>

            <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[#e2e4b0]/85 text-[15px] sm:text-base leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            <motion.button
              onClick={scrollToEnquire}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center justify-center rounded-xl px-8 py-3.5 bg-[#e2e4b0] text-[#0c2a20] font-display text-lg sm:text-xl tracking-wide hover:bg-[#eef0d4] transition-colors"
              data-testid="developer-enquire-btn"
            >
              Enquire Now
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="rounded-2xl border border-[#e2e4b0]/15 bg-[#0c2a20]/40 backdrop-blur-sm px-5 py-6 sm:py-7 text-center"
              data-testid={`developer-stat-${i}`}
            >
              <div className="font-display text-[#fed04f] text-4xl sm:text-5xl lg:text-[44px] xl:text-5xl font-semibold leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-[#e2e4b0] text-sm sm:text-[15px] tracking-wide">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer disclaimer */}
        <div className="mt-10 sm:mt-12 flex justify-end">
          <p className="text-[#e2e4b0]/55 text-[11px] sm:text-xs tracking-wide">
            Artistic Impression <span className="mx-1">|</span> *T &amp; C&apos;s Apply
          </p>
        </div>
      </div>
    </section>
  );
}
