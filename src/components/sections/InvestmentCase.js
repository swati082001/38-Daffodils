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
      className="relative section-cream py-16 lg:py-20 overflow-hidden"
      data-testid="investment-case-section"
      style={{
        backgroundImage: `url(${Flower})`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-title text-[36px] font-medium uppercase">
            PRELEASED STUDIO APARTMENTS
          </h1>

          <p
            className="
      font-sans
      text-[24px]
      font-normal
      leading-[100%]
      text-center
      text-[#0c2a20]
      mt-3
    "
          >
            Are A Better Growth Asset
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
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
                max-w-[283px]
                h-[103px]
                rounded-[20px]
                border
                border-[#F8F8EF]
                bg-gradient-to-b
                from-[#F8F8F0]
                to-[#EFEEDB]
                px-6
                py-5
                overflow-hidden
                transition-all
                duration-300
                hover:shadow-lg
              "
                data-testid={`reason-card-${i + 1}`}
              >
                {/* Soft green glow behind text */}
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

                <div className="relative flex items-center gap-4 h-full">
                  {/* Icon */}
                  <div
                    className="
                    w-[52px]
                    h-[52px]
                    rounded-[12px]
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
                      className="w-6 h-6 object-contain"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>

                  {/* Text */}
                  <h3
                    className="
                    font-sans
                    text-[16px]
                    font-medium
                    leading-[130%]
                    text-[#1D1D1B]
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
