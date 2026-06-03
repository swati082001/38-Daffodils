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
import Flower from "../../assets/background-images/flower-right.png"

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
  console.log("Flower:", Flower);
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-[54px] leading-[1.1] uppercase tracking-tight font-normal">
            Prereleased Studio Apartments
          </h2>

          <p className="font-display text-xl md:text-2xl lg:text-[34px] mt-2 text-[#0c2a20] font-normal">
            Are A Better Growth Asset
          </p>
        </motion.div>

        {/* Cards Grid */}
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
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                style={{ backgroundColor: "#f2f0df" }}
                className="group relative rounded-3xl p-5 lg:p-6 overflow-hidden hover:bg-[#d4e5d0] hover:shadow-xl transition-all duration-300"
                data-testid={`reason-card-${i + 1}`}
              >
                {/* Horizontal Layout: Icon and Content Side by Side */}
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#0c2a20] transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1">
                    <img
                      src={r.icon}
                      alt={r.title}
                      className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="relative font-display text-[16px] lg:text-[18px] leading-[1.4] font-normal text-[#0c2a20] flex-1">
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