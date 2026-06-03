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
      "Surrounded By Key Hubs"
    ]
  },
  {
    title: "Reliable Demand",
    icon: reliableDemand,
    details: [
      "IT-Driven Occupancy",
      "Year-Round Rental Flow"
    ]
  },
  {
    title: "Connected Advantage",
    icon: connectedAdvantage,
    details: [
      "Linked Via The Mumbai-Bangalore Highway",
      "Connected By Metro"
    ]
  },
  {
    title: "Lifestyle Advantage",
    icon: lifestyleAdvantage,
    details: [
      "Close To Baner & Balewadi High Street",
      "High Livability Quotient"
    ]
  },
  {
    title: "Growth Potential",
    icon: growthPotential,
    details: [
      "High Appreciating Locality",
      "Well-Connected Infrastructure"
    ]
  }
];

export default function Location() {
  return (
    <section
      id="location"
      data-testid="location-section"
      className="relative overflow-hidden"
    >
      {/* Header Section */}
      <div className="relative bg-[#0c2a20] py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sage text-sm lg:text-base tracking-wide mb-2">
              The Right Investment Ground
            </p>
            <h2 className="font-display text-sage text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide">
              PANCARD CLUB ROAD, BANER
            </h2>
          </motion.div>

          {/* Animated Flower Icon - Desktop only */}
          <motion.img
            src={movingFlower}
            alt="Flower"
            className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Desktop Layout - 5 Equal Flex Columns */}
      <div
        className="hidden lg:flex relative"
        style={{
          backgroundImage: `url(${locationBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
        }}
      >
        {locationData.map((item, index) => (
          <div
            key={index}
            className="flex-1 relative group cursor-pointer"
            style={{
              borderRight: index < 4 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'
            }}
          >
            {/* Blurry Forest Green Overlay on Hover */}
            <div className="absolute inset-0 bg-[#0c2a20]/0 group-hover:bg-[#0c2a20]/80 backdrop-blur-none group-hover:backdrop-blur-md transition-all duration-500"></div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-full flex flex-col items-center pt-24"
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 lg:w-16 lg:h-16 object-contain mb-6"
                style={{ filter: "brightness(0) invert(1)" }}
              />

              {/* Title */}
              <h3 className="text-sage text-2xl font-display text-center leading-tight max-w-[180px]">
                {item.title}
              </h3>

              {/* Details */}
              <div
                className="
      mt-20
      opacity-0
      group-hover:opacity-100
      transition-all
      duration-500
      text-sage
      text-lg
      leading-relaxed
      max-w-[220px]
    "
              >
                {item.details.map((detail, idx) => (
                  <p key={idx} className="mb-4 text-center">
                    • {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Mobile Layout - Horizontal Flex with Hover Effect */}
      <div
        className="lg:hidden relative"
        style={{
          backgroundImage: `url(${locationBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative px-4 py-8">
          {locationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer py-4"
              style={{
                borderBottom: index < locationData.length - 1 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none'
              }}
            >
              {/* Blurry Forest Green Overlay on Tap/Hover */}
              <div className="absolute inset-0 -mx-4 bg-[#0c2a20]/0 group-hover:bg-[#0c2a20]/85 group-active:bg-[#0c2a20]/85 backdrop-blur-none group-hover:backdrop-blur-sm group-active:backdrop-blur-sm transition-all duration-500"></div>

              {/* Horizontal Flex: Icon + Title + Details Side by Side */}
              <div className="relative flex items-center gap-3">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>

                {/* Title */}
                <div className="flex-shrink-0 min-w-[120px]">
                  <h3 className="text-sage text-sm font-display leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Details - Visible on hover/tap, aligned to right */}
                <div className="flex-1 text-sage/90 text-xs space-y-0.5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="leading-tight">• {detail}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
