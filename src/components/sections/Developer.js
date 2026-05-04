import React from "react";
import { motion } from "framer-motion";
import { Award, Building2, Building } from "lucide-react";
import E3 from "../../assets/E5.jpg"

const stats = [
  { icon: Building2, value: "12+", label: "Years in business " },
  { icon: Building, value: "14+", label: "Landmark Projects" },
  { icon: Award, value: "8", label: "Upcoming Projects" },
  { icon: Building, value: "580000 sq.ft", label: "Development Planned" },
  { icon: Building2, value: "705000 sq.ft", label: "Developed" },

];

export default function Developer() {
  return (
    <section className="relative section-forest py-24 lg:py-32 overflow-hidden grain">
      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-[#fed04f]/20">
            <img
              src={E3}
              alt="BluePearl Group"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c2a20]/80 via-[#0c2a20]/20 to-transparent" />
          </div>

        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* <span className="text-[#fed04f] text-xs lg:text-sm font-bold tracking-[0.4em] uppercase">
            About BluePearl
          </span> */}

          <h2 className="font-display text-[#e2e4b0] text-5xl md:text-6xl lg:text-7xl mt-4 leading-[0.95] font-light">
          About <span className="italic">BluePearl</span>
          </h2>

          <p className="text-[#e2e4b0]/75 leading-relaxed mt-6 text-base lg:text-lg">
            Stands for excellence in construction across PMC and PCMC, driven by innovation and reliability.
            With a foundation of trust and integrity, Bluepearl ensures quality, timely delivery, and thoughtful design.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-2 border-[#fed04f] pl-4"
              >
                <s.icon className="text-[#fed04f] mb-2" size={20} />

                <div className="font-display text-3xl lg:text-4xl text-[#e2e4b0] font-light">
                  {s.value}
                </div>

                <div className="text-[#e2e4b0]/60 text-xs uppercase tracking-widest mt-1">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}