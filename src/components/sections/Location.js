import React from "react";
import { motion } from "framer-motion";

import strategicAddress from "../../assets/location/Strategic Address@2x.png";
import reliableDemand from "../../assets/location/Reliable Demand@2x.png";
import connectedAdvantage from "../../assets/location/Connected Advantage@2x.png";
import lifestyleAdvantage from "../../assets/location/Lifestyle Advantage@2x.png";
import growthPotential from "../../assets/location/Growth Potential@2x.png";

import movingFlower from "../../assets/background-images/Light Green Moving Flower Icon.svg";
import locationBackground from "../../assets/background-images/city-view.png";

const locationData = [
  {
    title: "Strategic Address",
    icon: strategicAddress,
    details: [
      "Prime Baner Stretch",
      "Surrounded By Key Hubs",
    ],
  },
  {
    title: "Reliable Demand",
    icon: reliableDemand,
    details: [
      "IT-Driven Occupancy",
      "Year-Round Rental Flow",
    ],
  },
  {
    title: "Connected Advantage",
    icon: connectedAdvantage,
    details: [
      "Linked Via The Mumbai-Bangalore Highway",
      "Connected By Metro",
    ],
  },
  {
    title: "Lifestyle Advantage",
    icon: lifestyleAdvantage,
    details: [
      "Close To Baner & Balewadi High Street",
      "High Livability Quotient",
    ],
  },
  {
    title: "Growth Potential",
    icon: growthPotential,
    details: [
      "High Appreciating Locality",
      "Well-Connected Infrastructure",
    ],
  },
];

export default function Location() {
  return (
    <section
      id="location"
      data-testid="location-section"
      className="relative overflow-hidden"
    >
      {/* Header */}
      <div className="relative bg-[#0c2a20] py-8 lg:py-10">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p
              className="
                font-body
                text-sage
                text-[18px]
                lg:text-[22px]
                font-normal
                leading-[125%]
                text-center
                mb-3
              "
            >
              The Right Investment Ground
            </p>

            <h2
              className="
    font-title
    text-sage
    font-medium
    text-[36px]
    leading-[100%]
    uppercase
    text-center
    mx-auto
    w-full
    max-w-[531px]
  "
            >
              PANCARD CLUB ROAD, BANER
            </h2>
          </motion.div>

          <motion.img
            src={movingFlower}
            alt="Flower"
            className="
    hidden
    lg:block
    absolute
    right-[10px]
    top-[-30%] -translate-y-[65%]
    w-28
    h-28
  "
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Desktop */}
      <div
        className="hidden lg:flex relative"
        style={{
          backgroundImage: `url(${locationBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "495px",
        }}
      >
        {locationData.map((item, index) => (
          <div
            key={index}
            className="flex-1 relative group cursor-pointer"
            style={{
              borderRight:
                index < locationData.length - 1
                  ? "1px solid rgba(226,228,176,0.45)"
                  : "none",
            }}
          >
            <div className="absolute inset-0 bg-[#0c2a20]/0 group-hover:bg-[#0c2a20]/80 backdrop-blur-none group-hover:backdrop-blur-md transition-all duration-500" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="relative h-full flex flex-col items-center pt-24"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-[43px] h-[49px] object-contain mb-8"
                style={{
                  filter: "brightness(0) saturate(100%) invert(87%) sepia(18%) saturate(418%) hue-rotate(18deg)",
                }}
              />

              <h3
                className="
                  font-sans
                  text-sage
                  text-[24px]
                  leading-[100%]
                  text-center
                  max-w-[177px]
                "
              >
                {item.title}
              </h3>

              <div
                className="
                  mt-20
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  max-w-[180px]
                "
              >
                {item.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className="
                      font-sans
                      text-sage
                      text-[16px]
                      leading-[125%]
                      
                      mb-6
                    "
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div
        className="lg:hidden relative"
        style={{
          backgroundImage: `url(${locationBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "620px",
        }}
      >
        {/* Dark overlay over image */}
        <div className="absolute inset-0 bg-[#0c2a20]/35" />

        <div className="relative">
          {locationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
          group
          relative
          min-h-[116px]
          flex
          items-center

          border-b
          border-white/10

          bg-[#0c2a20]/20
          backdrop-blur-[1px]

          hover:bg-[#0c2a20]/55
          hover:backdrop-blur-md

          transition-all
          duration-500
        "
            >
              {/* Hover dark overlay */}
              <div
                className="
            absolute
            inset-0
            bg-[#0c2a20]/0
            group-hover:bg-[#0c2a20]/30
            transition-all
            duration-500
          "
              />

              <div className="relative w-full px-10 flex items-center">
                {/* Left Side */}
                <div className="w-[42%] flex items-center gap-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 object-contain flex-shrink-0"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(88%) sepia(17%) saturate(352%) hue-rotate(19deg)",
                    }}
                  />

                  <h3
                    className="
                text-[#E2E4B0]
                text-[18px]
                leading-[1.15]
                font-normal
              "
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Right Side */}
                <div className="w-[58%] pl-10">
                  <ul className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="
                    text-[#E2E4B0]
                    text-[12px]
                    leading-[1.35]
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                      >
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}