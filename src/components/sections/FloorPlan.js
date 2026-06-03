import React, { useState } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

import floorplan2 from "../../assets/floorplan2.png";
import lightFlower from "../../assets/background-images/Light Green Moving Flower Icon.svg";
import BrochurePopup from "../utils/BrochurePopup";

export default function FloorPlan() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section
      id="floor-plan"
      data-testid="floorplan-section"
      className="relative section-cream py-24 lg:py-36 px-5 lg:px-10 overflow-hidden"
    >
      {/* Center background watermark */}
      <div
        className="absolute pointer-events-none select-none w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-[900px] aspect-square"
        style={{
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      >
        <motion.img
          src={lightFlower}
          alt=""
          aria-hidden="true"
          className="w-full h-full"
          style={{
            opacity: 0.85,
            filter: "brightness(0.78) saturate(1.15)",
          }}
        />
      </div>


      <div className="relative z-10 max-w-[1000px] mx-auto">
        {/* Header */}
        <motion.h2
          data-testid="studio-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-[#0c2a20] text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight text-center leading-[1.05] max-w-[80%] md:max-w-none mb-20"
        >
          FLOOR PLAN
        </motion.h2>

        {/* Single blurred render with download CTA */}
        <motion.div
          data-testid="floor-render-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden group bg-forest/10"
        >
          {/* Image */}
          <img
            src={floorplan2}
            alt="Floor plan preview"
            draggable={false}
            className="w-full h-[60vh] lg:h-[60vh] object-cover select-none transition-transform duration-700 group-hover:scale-[1.02]"
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
              data-testid="floor-download-0"
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
