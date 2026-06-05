import React from "react";
import { motion } from "framer-motion";

import guaranteedMonthlyRental from "../../assets/icons/Guaranteed Monthly Rental.png";
import highDemandAsset from "../../assets/icons/High Demand Asset.png";
import longTermLease from "../../assets/icons/Long-Term Lease.png";
import predefinedRentalStructure from "../../assets/icons/Predefined Rental Structure.png";
import zeroManagementHassle from "../../assets/icons/Zero Management Hassle.png";
import propertyValueAppreciation from "../../assets/icons/Property Value Appreciation.png";
import zeroMaintenanceCost from "../../assets/icons/Zero Maintenance Cost.png";
import stablePredictableReturns from "../../assets/icons/Stable & Predictable Returns.png";

import Flower from "../../assets/background-images/flower-right.png";

const reasons = [
  {
    icon: guaranteedMonthlyRental,
    title: "Guaranteed Monthly Rental",
  },
  {
    icon: highDemandAsset,
    title: "High Demand Asset",
  },
  {
    icon: longTermLease,
    title: "Long-Term Lease",
  },
  {
    icon: predefinedRentalStructure,
    title: "Predefined Rental Structure",
  },
  {
    icon: zeroManagementHassle,
    title: "Zero Management Hassle",
  },
  {
    icon: propertyValueAppreciation,
    title: "Property Value Appreciation",
  },
  {
    icon: zeroMaintenanceCost,
    title: "Zero Maintenance Cost",
  },
  {
    icon: stablePredictableReturns,
    title: "Stable & Predictable Returns",
  },
];

export default function InvestmentCase() {
  return (
    <section
      id="about"
      className="relative section-cream py-12 lg:py-20 overflow-hidden"
      data-testid="investment-case-section"
    >
      {/* Mobile Flower */}
      <img
        src={Flower}
        alt=""
        aria-hidden="true"
        className="
          absolute
          left-0
          top-0
          h-[300px]
          w-auto
          opacity-15
          lg:hidden
          pointer-events-none
          select-none
        "
      />

      {/* Desktop Flower (unchanged) */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage: `url(${Flower})`,
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      <div className="relative max-w-[1300px] mx-auto px-4 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-16"
        >
          <h1
            className="
              font-title
              text-[22px]
              leading-[1.15]
              uppercase
              font-medium
              text-[#1D1D1B]

              lg:text-[36px]
            "
          >
            PRELEASED STUDIO
            <br />
            APARTMENTS
          </h1>

          <p
            className="
              font-sans
              text-[14px]
              font-normal
              text-[#0c2a20]
              mt-2

              lg:text-[24px]
              lg:mt-3
            "
          >
            Are A Better Growth Asset
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-2
            gap-4

            lg:grid-cols-4
            lg:gap-5
          "
        >
          {reasons.map((r, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.25 },
                }}
                className="
                  group
                  relative
                  w-full

                  h-[82px]
                  lg:h-[103px]

                  rounded-[16px]
                  lg:rounded-[20px]

                  border
                  border-[#F8F8EF]

                  bg-gradient-to-b
                  from-[#F8F8F0]
                  to-[#EFEEDB]

                  px-4
                  py-3

                  lg:px-6
                  lg:py-5

                  overflow-hidden
                  transition-all
                  duration-300
                  hover:shadow-lg
                "
                data-testid={`reason-card-${i + 1}`}
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    right-0
                    top-1/2
                    -translate-y-1/2
                    w-[140px]
                    h-[80px]
                    bg-[#0c2a20]
                    opacity-[0.05]
                    blur-3xl
                    rounded-full
                    pointer-events-none
                  "
                />

                <div className="relative flex items-center gap-3 lg:gap-4 h-full">
                  {/* Icon */}
                  <div
                    className="
                      w-[44px]
                      h-[44px]

                      lg:w-[52px]
                      lg:h-[52px]

                      rounded-[10px]
                      lg:rounded-[12px]

                      bg-[#0c2a20]
                      flex
                      items-center
                      justify-center
                      flex-shrink-0

                      transition-all
                      duration-300

                      group-hover:scale-125
                      group-hover:-translate-y-1
                    "
                  >
                    <img
                      src={r.icon}
                      alt={r.title}
                      className="
                        w-5
                        h-5

                        lg:w-6
                        lg:h-6

                        object-contain
                      "
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>

                  {/* Text */}
                  <h3
                    className="
                      font-sans
                      text-[11px]
                      leading-[1.3]
                      font-medium
                      text-[#1D1D1B]

                      lg:text-[16px]
                      lg:leading-[130%]

                      relative
                      z-10
                    "
                  >
                    {r.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}