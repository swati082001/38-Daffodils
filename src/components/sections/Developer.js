import React from "react";
import { motion } from "framer-motion";
import { Award, Building2 ,Building} from "lucide-react";

const stats = [
  { icon: Building2, value: "12+", label: "Years in business " },
  { icon: Building, value: "14+", label: "Landmark Projects" },
  { icon: Award, value: "8", label: "Upcoming Projects" },
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
              src="https://ik.imagekit.io/en7mhyg9z/wp-content/uploads/2024/10/6195-tf-baner-32-commercial-A2-night-op.webp"
              alt="BluePearl Group"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c2a20]/80 via-[#0c2a20]/20 to-transparent" />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-[#fed04f] text-[#0c2a20] px-7 py-5 rounded-3xl shadow-2xl">
            <div className="text-xs uppercase tracking-widest font-bold">
              Project By
            </div>
            <div className="font-display text-3xl font-bold">
              BluePearl
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#fed04f] text-xs lg:text-sm font-bold tracking-[0.4em] uppercase">
            About the Developer
          </span>

          <h2 className="font-display text-[#e2e4b0] text-5xl md:text-6xl lg:text-7xl mt-4 leading-[0.95] font-light">
            Building <span className="italic">trust,</span>
            <br />
            one home at a time.
          </h2>

          <p className="text-[#e2e4b0]/75 leading-relaxed mt-6 text-base lg:text-lg">
            BluePearl is a Pune-based real estate group with over three decades
            of legacy in delivering thoughtfully-crafted residences. With a
            focus on quality, transparency, and timely delivery, BluePearl has
            built a reputation for creating spaces that grow in value — and meaning.
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