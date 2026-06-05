import React from "react";
import { motion } from "framer-motion";
import flowerIcon from "../../assets/background-images/Green Moving Flower Icon.svg";
import lightFlower from "../../assets/background-images/Light Green Moving Flower Icon.svg";
import studio from "../../assets/3dunit.png"

export default function Studio() {
  return (
    <section
      id="studio"
      data-testid="studio-section"
      className="relative section-cream overflow-hidden py-8 md:py-10 lg:py-12 px-5 md:px-10"
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
          className="w-[800px] h-[800px]"
          style={{
            opacity: 0.18,
            filter: "brightness(0.78) saturate(1.15)",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto z-10">
        {/* Header */}
        <div className="relative flex items-start justify-center">
          <motion.h2
            data-testid="studio-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
  font-title
  text-[#0c2a20]
  text-[28px]
  md:text-[34px]
  lg:text-[38px]
  leading-none
  text-center
"
          >
            FULLY FURNISHED
            <br className="md:hidden" />
            <span className="md:ml-3">STUDIOS</span>
          </motion.h2>

          {/* Rotating Flower Logo */}
          <motion.img
            src={flowerIcon}
            alt="Daffodils Flower"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="
  absolute
  top-[-8px]
  right-[15%]
  w-12
  h-12
  lg:w-20
  lg:h-20
"
          />
        </div>

        {/* Studio Image */}
        <div className="relative flex justify-center items-center ">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 w-full flex justify-center"
            style={{ perspective: 1200 }}
          >
            <img
              data-testid="studio-image"
              src={studio}
              alt="Fully Furnished Studio Interior"
              className="w-full h-auto object-contain cursor-pointer"
              style={{
                maxWidth: "900px",
width: "100%",
                transformOrigin: "center center",
                willChange: "transform, filter",
                filter: "drop-shadow(0 30px 50px rgba(12,42,32,0.18))",
              }}
            />
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="
  font-body
  text-right
  text-[#0c2a20]/70
  text-[10px]
  absolute
  bottom-4
  right-8
"
          data-testid="studio-disclaimer"
        >
          Artistic Impression | *T & C's Apply
        </motion.p>
      </div>
    </section>
  );
}