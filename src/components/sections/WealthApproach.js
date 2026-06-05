import React from "react";
import { motion } from "framer-motion";

// Section 1
import flowerBackgroundLeft from "../../assets/background-images/flower-left.png";
import flowerBackgroundRight from "../../assets/background-images/flower-right.png";
import greenMovingFlower from "../../assets/background-images/Green Moving Flower Icon.svg";

// Section 2
import variant1 from "../../assets/background-images/variant1.png";
import variant2 from "../../assets/background-images/variant2.png";

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
      className="relative section-cream py-6 lg:py-6 overflow-hidden"
      style={{
        backgroundImage: `url(${flowerBackgroundLeft}), url(${flowerBackgroundRight})`,
        backgroundPosition: "left center, right center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "contain, contain",
      }}
    >
      <div className="relative max-w-[1300px] mx-auto ">
        {/* Animated Green Flower */}
        <motion.img
          src={greenMovingFlower}
          alt="Flower"
          className="absolute top-2 right-12 lg:right-[-2] w-12 h-12 lg:w-20 lg:h-20"
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 mt-10"
        >
          <p
            className="
              font-body
             
              text-[18px]
              lg:text-[24px]
              mb-2
            "
          >
            The Growth Blueprint
          </p>

          <h2
            className="
              font-title
              text-[#0c2a20]
              text-[30px]
              lg:text-[34px]
              font-medium
              leading-[1.1]
              uppercase
            "
          >
            A STRUCTURED APPROACH TO
            <br />
            GROWING WEALTH
          </h2>
        </motion.div>

        {/* ₹18000 Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              y: [0, -4, 0],
              boxShadow: [
                "0px 0px 0px rgba(0,0,0,0)",
                "0px 12px 30px rgba(12,42,32,0.25)",
                "0px 0px 0px rgba(0,0,0,0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
    bg-[#0c2a20]
    rounded-[28px]
    px-10
    py-6
    text-center
    w-[400px]
  "
          >
            <div className="font-number text-[#fed04f] text-[72px] leading-none">
              ₹18000
            </div>

            <p
              className="
                font-body
                text-sage
                text-[18px]
                mt-2
              "
            >
              Starting Monthly Rental
            </p>
          </motion.div>
        </motion.div>

        {/* Rental Escalation */}
        <div className="text-center mb-6">
          {/* Label Box */}
          <div className="flex justify-center mb-5">
            <div
              className="
                px-20
                text-[#0c2a20]
                text-[22px]
                leading-none
              "
            >
              Rental Escalation
            </div>
          </div>

          {/* Cards */}
          <div className="flex justify-center gap-6 flex-wrap">
            {/* 15% */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                bg-[#0c2a20]
                rounded-[22px]
                px-8
                py-5
                w-[300px]
              "
            >
              <div className="flex items-center justify-center gap-4">
                <div className="font-number text-[#fed04f] text-[58px] leading-none">
                  15%
                </div>

                <p
                  className="
                    font-body
                    text-sage
                    text-[18px]
                    leading-[1.2]
                    text-left
                  "
                >
                  After First
                  <br />
                  3 Years
                </p>
              </div>
            </motion.div>

            {/* 5% */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                bg-[#0c2a20]
                rounded-[22px]
                px-8
                py-5
                w-[300px]
              "
            >
              <div className="flex items-center justify-center gap-4">
                <div className="font-number text-[#fed04f] text-[58px] leading-none">
                  5%
                </div>

                <p
                  className="
                    font-body
                    text-sage
                    text-[18px]
                    leading-[1.2]
                    text-left
                  "
                >
                  4th Year
                  <br />
                  Onwards
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Notes */}
        <p
          className="
            font-body
            text-center
            text-[#0c2a20]/60
            text-xs
            mt-50
            px-4
          "
        >
          Note: The co-living service operator is legally obligated to pay the
          rent directly to the property owners
        </p>

        <p
          className="
            font-body
            text-right
            text-[#0c2a20]/60
            text-xs
            mt-2
          "
        >
          *T & C's Apply
        </p>
      </div>
    </div>
  );
}

/* ============ SECTION 2: ROI ============ */
function Section2() {
  return (
    <div className="group relative max-w-[1500px] mx-auto">
      <img
        src={variant1}
        alt="ROI"
        className="w-full transition-opacity duration-500 group-hover:opacity-0"
      />

      <img
        src={variant2}
        alt="ROI Hover"
        className="absolute inset-0 w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
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
      className="relative py-8 lg:py-16 overflow-hidden"
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
          className="absolute top-[-32px] right-12 lg:right-[-2] w-12 h-12 lg:w-24 lg:h-24"
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
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
          <h2
            className="
    font-title
    text-sage
    text-[34px]
    lg:text-[54px]
    text-center
  "
          >
            STRATEGIC PROJECT SYNOPSIS
          </h2>
        </motion.div>

        {/* 4 Pillar Cards - 2x2 Grid on Mobile, 4 columns on Desktop */}
        <div className="flex flex-wrap justify-center gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="
        relative
        rounded-[10px]
        overflow-hidden
        border
        border-white/10
        flex
        flex-col
        items-center
        text-center
        shrink-0
      "
              style={{
                width: "280px",
                height: "240px",
                background:
                  "linear-gradient(147.07deg, #326155 9.09%, #10342A 97.68%)",
              }}
            >
              <div className="flex flex-col items-center h-full w-full px-6 pt-8 pb-8">
                {/* Heading */}
                <h3
                  className="
                 font-body
                 text-sage
                 uppercase
                 tracking-[2px]
                 text-[14px]
                 leading-[120%]
               "
                >
                  {pillar.title}
                </h3>

                {/* Top Divider */}
                <div className="w-px h-[45px] bg-white/20 mt-3 mb-4" />

                {/* Content */}
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  {pillar.highlight ? (
                    <>
                      {/* White Text */}
                      <div
                        className="
          font-body
          text-white
          text-[16px]
          leading-[100%]
        "
                      >
                        {pillar.value}
                      </div>

                      {/* Yellow Text */}
                      <div
                        className="
          font-number
          text-[#FED04F]
          text-[24px]
          leading-[125%]
          mt-3
        "
                      >
                        {pillar.subtitle}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Yellow Text */}
                      <div
                        className="
          font-number
          text-[#FED04F]
          text-[52px]
          leading-none
        "
                      >
                        {pillar.value}
                      </div>

                      {/* White Text */}
                      <div
                        className="
          font-body
          text-white
          text-[16px]
          leading-[100%]
          mt-3
        "
                      >
                        {pillar.subtitle}
                      </div>
                    </>
                  )}
                </div>


              </div>
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
