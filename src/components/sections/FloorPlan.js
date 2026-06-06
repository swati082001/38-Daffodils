import React, { useState } from "react";
import { motion } from "framer-motion";

import floorplan2 from "../../assets/floorplan2.png";
import lightFlower from "../../assets/background-images/Light Green Moving Flower Icon.svg";
import BrochurePopup from "../utils/BrochurePopup";

export default function FloorPlan() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section
      className="
        relative
        bg-[#d9dcb1]
        overflow-hidden
        px-4
        lg:px-10
        pt-[40px]
        lg:pt-[80px]
        pb-[80px]
        lg:pb-[150px]
      "
    >
      {/* Watermark */}
      <div
        className="
          absolute
          pointer-events-none
          select-none
          w-[90%]
          sm:w-[80%]
          md:w-[70%]
          lg:w-[50%]
          max-w-[700px]
          aspect-square
        "
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Title */}
        <h2
          className="
            font-title
            text-[#0c2a20]
            text-[24px]
            md:text-[40px]
            lg:text-[32px]
            font-medium
            uppercase
            tracking-tight
            text-center
            mb-8
            lg:mb-12
          "
        >
          FLOOR PLAN
        </h2>

        {/* ================= MOBILE ================= */}
        <div className="w-full lg:hidden flex justify-center">
          <div
            className="
              relative
              w-full
              max-w-[490px]
              h-[240px]
              rounded-[16px]
              bg-[#F4F4F4]
              overflow-hidden
            "
          >
            {/* Floor Plan Image */}
            <img
              src={floorplan2}
              alt="Floor Plan"
              draggable={false}
              className="
                absolute
                inset-0
                m-auto
                w-[88%]
                object-contain
                blur-[8px]
                scale-105
                select-none
              "
            />

            {/* Download Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="
                  w-[165px]
                  h-[50px]
                  bg-[#d8d7ad]
                  rounded-[12px]
                  text-[#183b2d]
                  text-[18px]
                  font-semibold
                  shadow-md
                  hover:opacity-95
                  transition
                "
              >
                Download
              </button>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP (UNCHANGED) ================= */}
        <div
          className="
            hidden
            lg:block
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
          {/* Floor Plan Image */}
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

          {/* Download Button */}
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

      {/* T&C */}
      <p
        className="
          absolute
          bottom-5
          right-4
          lg:bottom-8
          lg:right-20
          text-[8px]
          lg:text-[11px]
          text-[#1a1a1a]
          opacity-70
        "
      >
        *T &amp; C&apos;s Apply
      </p>

      <BrochurePopup
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}