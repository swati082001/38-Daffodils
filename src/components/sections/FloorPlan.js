import React, { useState } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

import I2 from "../../assets/I2.jpg";
import floorplan2 from "../../assets/floorplan2.png";
import BrochurePopup from "../utils/BrochurePopup";

const RENDERS = [I2, floorplan2];

export default function FloorPlan() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section
      id="floor-plan"
      data-testid="floorplan-section"
      className="relative section-cream py-24 lg:py-36 px-5 lg:px-10"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-8 mb-14"
        >
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">
              See the <span className="italic-accent">Full Layout</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              The Floor Plan
            </h2>
          </div>

          <p className="lg:col-span-5 self-end text-forest/70 text-base lg:text-lg leading-relaxed">
            Detailed floor plans are available in our official brochure. Click
            download on any render to access the full pack.
          </p>
        </motion.div>

        {/* Renders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {RENDERS.map((src, index) => (
            <motion.div
              key={index}
              data-testid={`floor-render-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative rounded-2xl overflow-hidden group bg-forest/10"
            >
              {/* Image */}
              <img
                src={src}
                alt={`Floor plan ${index + 1}`}
                draggable={false}
                className="w-full h-[55vh] lg:h-[60vh] object-cover select-none transition-transform duration-700 group-hover:scale-[1.02]"
                style={{
                  filter: "blur(12px) saturate(1.05)",
                  transform: "scale(1.06)", // hides blur edges
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-forest/25" />

              
              {/* CTA */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  data-testid={`floor-download-${index}`}
                  onClick={() => setIsPopupOpen(true)}
                  className="group/btn relative inline-flex items-center gap-3 px-7 lg:px-9 py-4 rounded-full 
                  bg-gold text-forest font-semibold uppercase tracking-[0.2em] text-xs lg:text-sm 
                  shadow-[0_18px_40px_-12px_rgba(254,208,79,0.55)] 
                  hover:shadow-[0_22px_50px_-10px_rgba(254,208,79,0.7)] 
                  transition-all duration-500 hover:-translate-y-0.5 overflow-hidden"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent 
                    -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                  />

                  <Download className="w-4 h-4 relative" />
                  <span className="relative">Download</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-[11px] tracking-[0.2em] uppercase text-forest/40 text-center">
          * T &amp; C Apply
        </p>
      </div>

      {/* Popup */}
      <BrochurePopup
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}