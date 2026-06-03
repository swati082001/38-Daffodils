import React from "react";
import { motion } from "framer-motion";

// Section 1
import flowerBackgroundLeft from "../../assets/background-images/flower-left.png";
import flowerBackgroundRight from "../../assets/background-images/flower-right.png";
import greenMovingFlower from "../../assets/background-images/Green Moving Flower Icon.svg";

// Section 2
import roiBackground from "../../assets/background-images/roi-bg.png";
import roiImage from "../../assets/background-images/ROI.png";

// Section 3
import greenBackground from "../../assets/background-images/green-bg.png";
import lightGreenMovingFlower from "../../assets/background-images/Light Green Moving Flower Icon.svg";

export default function WealthApproach() {
  return (
    <section id="wealth" data-testid="wealth-approach-section">
      {/* Section 1: The Growth Blueprint */}
      <Section1 />

      {/* Section 2: ROI */}
      <Section2 />

      {/* Section 3: Strategic Project Synopsis */}
      <Section3 />
    </section>
  );
}

/* ============ SECTION 1: The Growth Blueprint ============ */
function Section1() {
  return (
    <div
      className="relative section-cream py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${flowerBackgroundLeft}), url(${flowerBackgroundRight})`,
        backgroundPosition: 'left center, right center',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'contain, contain'
      }}
    >
      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-10">
        {/* Animated Green Flower - Top Right */}
        <motion.img
          src={greenMovingFlower}
          alt="Flower"
          className="absolute top-8 right-6 lg:right-10 w-12 h-12 lg:w-20 lg:h-20"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#0c2a20]/70 text-sm tracking-wide mb-2">
            The Growth Blueprint
          </p>
          <h2 className="font-display text-[#0c2a20] text-2xl md:text-4xl lg:text-5xl leading-tight">
            A STRUCTURED APPROACH TO
            <br />
            GROWING WEALTH
          </h2>
        </motion.div>

        {/* 18000 Card with Bounce Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-[#0c2a20] rounded-3xl px-8 md:px-12 py-6 md:py-8 text-center w-full max-w-[500px]"
          >
            <div className="font-display text-[#fed04f] text-5xl md:text-6xl lg:text-7xl font-bold">
              ₹18000
            </div>
            <p className="text-sage text-base md:text-lg mt-2">Starting Monthly Rental</p>
          </motion.div>
        </motion.div>

        {/* Rental Escalation */}
        <div className="text-center mb-8">
          <h3 className="font-display text-[#0c2a20] text-xl md:text-2xl lg:text-3xl mb-6">
            Rental Escalation
          </h3>

          {/* Desktop: Side by side, Mobile: Stacked */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0c2a20] rounded-3xl px-8 py-6 w-full max-w-[500px] md:max-w-[280px]"
            >
              <div className="flex items-center justify-between md:flex-col md:text-center gap-4 md:gap-0">
                <div className="font-display text-[#fed04f] text-4xl md:text-5xl lg:text-6xl font-bold">
                  15%
                </div>
                <p className="text-sage text-sm md:text-base text-left md:text-center md:mt-2">
                  After First<br />3 Years
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0c2a20] rounded-3xl px-8 py-6 w-full max-w-[500px] md:max-w-[280px]"
            >
              <div className="flex items-center justify-between md:flex-col md:text-center gap-4 md:gap-0">
                <div className="font-display text-[#fed04f] text-4xl md:text-5xl lg:text-6xl font-bold">
                  5%
                </div>
                <p className="text-sage text-sm md:text-base text-left md:text-center md:mt-2">
                  4th Year<br />Onwards
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-[#0c2a20]/60 text-xs mt-12 px-4">
          Note: The co-living service operator is legally obligated to pay the rent directly to the property owners
        </p>
        <p className="text-right text-[#0c2a20]/60 text-xs mt-2">
          *T & C's Apply
        </p>
      </div>
    </div>
  );
}

/* ============ SECTION 2: ROI ============ */
function Section2() {
  return (
    <div
      className="relative py-10 lg:py-10 overflow-hidden"
      style={{
        backgroundImage: `url(${roiBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#0c2a20'
      }}
    >
      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-10 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-sage/80 text-base mb-3">
            A well-planted investment
          </p>
          <h2 className="font-display text-sage text-2xl md:text-5xl lg:text-4xl leading-tight">
            ALWAYS GROWS STRONGER ROI
          </h2>
        </motion.div>

        {/* Avg ROI Label */}
        <p className="text-sage text-xl lg:text-2xl">
          Avg ROI
        </p>

        {/* ROI Image - Hoverable */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.img
            src={roiImage}
            alt="7.40% ROI"
            className="max-w-[800px] lg:max-w-[900px] w-full h-auto cursor-pointer"
            whileHover={{
              scale: 1.15,
              y: -20,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
          />
        </motion.div>

        {/* Note */}
        <p className="text-sage/60 text-xs mt-12">
          Note: The co-living service operator is legally obligated to pay the rent directly to the property owners
        </p>
        <p className="text-right text-sage/60 text-xs mt-2">
          *T & C's Apply
        </p>
      </div>
    </div>
  );
}

/* ============ SECTION 3: Strategic Project Synopsis ============ */
function Section3() {
  const pillars = [
    {
      title: "LEASE SECURITY",
      value: "10-Year",
      subtitle: "Lease Period (5+5)"
    },
    {
      title: "EQUAL LOCK-IN PERIOD",
      value: "5-Year",
      subtitle: "For Both Service Operator & Investor"
    },
    {
      title: "IMMEDIATE INCOME",
      value: "Invest Today",
      subtitle: "Income Starts Immediately",
      highlight: true
    },
    {
      title: "STRONG RENTAL BACKING",
      value: "Rented To",
      subtitle: "Fastest-Growing Co-Living Brand",
      highlight: true
    }
  ];

  return (
    <div
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${greenBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#0c2a20'
      }}
    >
      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-10">
        {/* Animated Light Green Flower - Top Right */}
        <motion.img
          src={lightGreenMovingFlower}
          alt="Flower"
          className="absolute top-8 right-6 lg:right-10 w-12 h-12 lg:w-20 lg:h-20"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-display text-sage text-2xl md:text-4xl lg:text-5xl px-4">
            STRATEGIC PROJECT SYNOPSIS
          </h2>
        </motion.div>

        {/* 4 Pillar Cards - 2x2 Grid on Mobile, 4 columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl lg:rounded-3xl p-4 lg:p-6 overflow-hidden border border-sage/20"
              style={{
                background: 'linear-gradient(180deg, rgba(15,55,40,0.55) 0%, rgba(8,30,22,0.85) 100%)',
                minHeight: '240px'
              }}
            >
              {/* Title */}
              <h3 className="text-sage text-center text-xs lg:text-base font-semibold mb-4 lg:mb-6 tracking-wide leading-tight">
                {pillar.title}
              </h3>

              {/* Divider */}
              <div className="mx-auto w-px h-8 lg:h-12 bg-sage/30 mb-4 lg:mb-6"></div>

              {/* Value */}
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className={`font-display font-bold text-2xl lg:text-3xl xl:text-4xl mb-2 lg:mb-3 ${pillar.highlight ? 'text-[#fed04f]' : 'text-[#fed04f]'
                  }`}>
                  {pillar.value}
                </div>
                <p className="text-sage/80 text-xs lg:text-sm leading-tight lg:leading-relaxed px-2">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Bottom Divider */}
              <div className="mx-auto w-px h-8 lg:h-12 bg-sage/20 mt-4 lg:mt-6"></div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p className="text-right text-sage/60 text-xs mt-12">
          *T & C's Apply
        </p>
      </div>
    </div>
  );
}
