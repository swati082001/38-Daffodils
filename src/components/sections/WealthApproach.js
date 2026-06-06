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
      className="relative section-cream py-4 lg:py-6 overflow-hidden"
      style={{
        backgroundImage: `url(${flowerBackgroundLeft}), url(${flowerBackgroundRight})`,
        backgroundPosition: "left center, right center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "contain, contain",
      }}
    >
      <div className="relative max-w-[1300px] mx-auto">
        {/* Animated Green Flower */}
        <motion.img
          src={greenMovingFlower}
          alt="Flower"
          className="
            absolute
            top-4
            right-4
            w-10 h-10
            sm:w-12 sm:h-12
            lg:top-2
            lg:right-[-2]
            lg:w-20
            lg:h-20
          "
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-center
            mt-4
            mb-5
            lg:mb-6
            lg:mt-10
            px-4
          "
        >
          <p
            className="
              font-body
              text-[14px]
              sm:text-[16px]
              lg:text-[24px]
              mb-2
              text-[#0c2a20]
            "
          >
            The Growth Blueprint
          </p>

          <h2
            className="
              font-title
              text-[#0c2a20]
              text-[20px]
              sm:text-[24px]
              lg:text-[34px]
              font-medium
              leading-[1.15]
              uppercase
              max-w-[320px]
              mx-auto
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
          className="
            flex
            justify-center
            mb-5
            lg:mb-10
            px-4
          "
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
              rounded-[22px]
              lg:rounded-[28px]
              px-4
              lg:px-10
              py-3
              lg:py-6
              text-center
              w-full
              max-w-[280px]
              lg:max-w-none
              lg:w-[400px]
            "
          >
            <div
              className="
                font-number
                text-[#fed04f]
                text-[46px]
                sm:text-[54px]
                lg:text-[72px]
                leading-none
              "
            >
              ₹18000
            </div>

            <p
              className="
                font-body
                text-sage
                text-[12px]
                sm:text-[14px]
                lg:text-[18px]
                mt-1
              "
            >
              Starting Monthly Rental
            </p>
          </motion.div>
        </motion.div>

        {/* Rental Escalation */}
        <div className="text-center mb-4 lg:mb-6">
          <div className="flex justify-center mb-3 lg:mb-5">
            <div
              className="
                px-4
                lg:px-20
                text-[#0c2a20]
                text-[16px]
                sm:text-[18px]
                lg:text-[22px]
                leading-none
              "
            >
              Rental Escalation
            </div>
          </div>

          {/* Cards */}
          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-center
              justify-center
              gap-3
              lg:gap-6
            "
          >
            {/* 15% */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                bg-[#0c2a20]
                rounded-[18px]
                lg:rounded-[22px]
                px-5
                lg:px-8
                py-3
                lg:py-5
                w-full
                max-w-[220px]
                lg:max-w-none
                lg:w-[300px]
              "
            >
              <div className="flex items-center justify-center gap-3">
                <div
                  className="
                    font-number
                    text-[#fed04f]
                    text-[38px]
                    sm:text-[44px]
                    lg:text-[58px]
                    leading-none
                  "
                >
                  15%
                </div>

                <p
                  className="
                    font-body
                    text-sage
                    text-[12px]
                    sm:text-[14px]
                    lg:text-[18px]
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
                rounded-[18px]
                lg:rounded-[22px]
                px-5
                lg:px-8
                py-3
                lg:py-5
                w-full
                max-w-[220px]
                lg:max-w-none
                lg:w-[300px]
              "
            >
              <div className="flex items-center justify-center gap-3">
                <div
                  className="
                    font-number
                    text-[#fed04f]
                    text-[38px]
                    sm:text-[44px]
                    lg:text-[58px]
                    leading-none
                  "
                >
                  5%
                </div>

                <p
                  className="
                    font-body
                    text-sage
                    text-[12px]
                    sm:text-[14px]
                    lg:text-[18px]
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
    text-[#0c2a20]

    text-[6px]
    sm:text-[9px]
    lg:text-[10px]

    leading-[1.35]
    lg:leading-[1.4]

    mt-5
    lg:mt-50

    px-6
    max-w-[380px]
    lg:max-w-[320px]

    mx-auto
  "
>
  Note: The co-living service operator is legally obligated to pay the
  rent directly to the property owners
</p>

        <p
          className="
            font-body
            text-right
            text-[#0c2a20]/70
            text-[8px]
            lg:text-xs
            mt-1
            pr-4
            lg:pr-0
          "
        >
          *T &amp; C&apos;s Apply
        </p>
      </div>
    </div>
  );
}

/* ============ SECTION 2: ROI ============ */
function Section2() {
  return (
    <div
      className="
        group
        relative
        sm:w-[500px]
        md:w-[1000px]
        lg:w-[1500px]
        mx-auto
        h-[250px]
        sm:h-[520px]
        md:h-[650px]
        lg:h-auto
        overflow-hidden
      "
    >
      {/* Default */}
      <img
        src={variant1}
        alt="ROI"
        className="
    w-full
    h-full
    object-cover
    object-center
    lg:object-cover
    transition-opacity
    duration-500
    group-hover:opacity-0
  "
      />

      {/* Hover */}
      <img
        src={variant2}
        alt="ROI Hover"
        className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-center
    lg:object-cover
    opacity-0
    transition-opacity
    duration-500
    group-hover:opacity-100
  "
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
      subtitle: "Lease Period (5+5)",
    },
    {
      title: "EQUAL LOCK-IN PERIOD",
      value: "5-Year",
      subtitle: "For Both Service Operator & Investor",
    },
    {
      title: "IMMEDIATE INCOME",
      value: "Invest Today",
      subtitle: "Income Starts Immediately",
      highlight: true,
    },
    {
      title: "STRONG RENTAL BACKING",
      value: "Rented To",
      subtitle: "Fastest-Growing Co-Living Brand",
      highlight: true,
    },
  ];

  return (
    <div
      className="relative py-8 lg:py-16 overflow-hidden"
      style={{
        backgroundImage: `url(${greenBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#0c2a20",
      }}
    >
      <div className="relative max-w-[1300px] mx-auto px-4 lg:px-10">
        {/* Animated Flower */}
        <motion.img
          src={lightGreenMovingFlower}
          alt="Flower"
          className="
            absolute
            top-4
            right-4
            w-14
            h-14

            lg:top-[-32px]
            lg:right-[-2px]
            lg:w-24
            lg:h-24
          "
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
          className="text-center mb-10 lg:mb-16"
        >
          <h2
            className="
              font-title
              text-sage
              text-center
              uppercase

              text-[24px]
              leading-[120%]

              lg:text-[54px]
            "
          >
            STRATEGIC PROJECT
            <br />
            SYNOPSIS
          </h2>
        </motion.div>

        {/* Mobile = 2x2 Grid | Desktop = Existing Layout */}
        <div
          className="
            grid
            grid-cols-2
            gap-5

            lg:flex
            lg:flex-wrap
            lg:justify-center
            lg:gap-8
          "
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
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

                w-full
                min-h-[145px]

                lg:w-[280px]
                lg:h-[240px]
              "
              style={{
                background:
                  "linear-gradient(147.07deg, #326155 9.09%, #10342A 97.68%)",
              }}
            >
              {/* Soft Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-40
                  pointer-events-none
                "
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(82,170,130,0.28) 0%, transparent 70%)",
                }}
              />

              <div
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  h-full
                  w-full

                  px-4
                  py-3

                  lg:px-6
                  lg:pt-8
                  lg:pb-8
                "
              >
                {/* Heading */}
                <h3
                  className="
                    font-body
                    text-sage
                    uppercase
                    tracking-[3px]

                    text-[11px]
                    leading-[140%]

                    lg:text-[14px]
                  "
                >
                  {pillar.title}
                </h3>

                {/* Divider */}
                <div
                  className="
                    w-px
                    bg-white/20

                    h-[24px]
                    my-2

                    lg:h-[45px]
                    lg:mt-3
                    lg:mb-4
                  "
                />

                {/* Content */}
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  {pillar.highlight ? (
                    <>
                      <div
                        className="
                          font-body
                          text-white

                          text-[14px]
                          lg:text-[16px]
                        "
                      >
                        {pillar.value}
                      </div>

                      <div
                        className="
                          font-number
                          text-[#FED04F]
                          leading-[115%]
                          mt-2

                          text-[18px]
                          lg:text-[24px]
                        "
                      >
                        {pillar.subtitle}
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="
                          font-number
                          text-[#FED04F]
                          leading-none

                          text-[28px]
                          lg:text-[52px]
                        "
                      >
                        {pillar.value}
                      </div>

                      <div
                        className="
                          font-body
                          text-white
                          mt-2

                          text-[13px]
                          leading-[130%]

                          lg:text-[16px]
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

        {/* T&C */}
        <p className="text-right text-sage/60 text-[8px] lg:text-xs mt-8 lg:mt-12">
          *T &amp; C&apos;s Apply
        </p>
      </div>
    </div>
  );
}
