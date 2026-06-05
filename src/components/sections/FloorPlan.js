import React, { useState } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

import floorplan2 from "../../assets/floorplan2.png";
import lightFlower from "../../assets/background-images/Light Green Moving Flower Icon.svg";
import BrochurePopup from "../utils/BrochurePopup";

export default function FloorPlan() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative bg-[#d9dcb1] overflow-hidden px-10 pt-[80px] pb-[150px]">
  {/* Watermark */}
  <div
          className="absolute pointer-events-none select-none w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-w-[700px] aspect-square"
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

       <div className="relative z-10 flex flex-col items-center pt-0">
    
    {/* Title */}
    <h2
      className="
        font-title
        text-[32px]
        md:text-[40px]
        font-medium
        uppercase
        tracking-tight
        text-black
        mb-12
      "
    >
      FLOOR PLAN
    </h2>

    {/* Card */}
    <div
      className="
        relative
        w-[100%]
        max-w-[900px]
        h-[385px]
        rounded-[20px]
        bg-[#f2f2f2]
        overflow-hidden
        mt-19
      "
    >
      {/* Floorplan */}
      <img
        src={floorplan2}
        alt="Floor Plan"
        draggable={false}
        className="
          absolute
          inset-0
          m-auto
          w-[82%]
          object-contain
          blur-[8px]
          scale-105
          select-none
        "
      />

      {/* Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="
            w-[175px]
            h-[54px]
            bg-[#d8d7ad]
            rounded-[10px]
            text-[#183b2d]
            text-[18px]
            font-semibold
            shadow-sm
            hover:opacity-95
            transition
          "
        >
          Download
        </button>
      </div>
    </div>
  </div>

  {/* Bottom Right Note */}
  <p
    className="
      absolute
      bottom-8
      right-20
      text-[11px]
      text-[#1a1a1a]
      opacity-70
    "
  >
    *T &amp; C's Apply
  </p>
  

  <BrochurePopup
    open={isPopupOpen}
    onClose={() => setIsPopupOpen(false)}
  />
</section>
  );
}
