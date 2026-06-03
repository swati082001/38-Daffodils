import React from "react";
import { motion } from "framer-motion";
import flowerBackgroundLeft from "../../assets/background-images/flower-left.png";
import flowerBackgroundRight from "../../assets/background-images/flower-right.png";
import bluepearlLogo from "../../assets/background-images/bluepearl-black.png";
import orangeTreeCard from "../../assets/background-images/133.png";
import oscarCard from "../../assets/background-images/32.png";
import trustedIcon from "../../assets/Why Bp/Trusted.png";
import smartlyPlannedIcon from "../../assets/Why Bp/Smartly planned.png";
import zeroWastageIcon from "../../assets/Why Bp/Zero Wastage.png";
import fasterDeliveryIcon from "../../assets/Why Bp/Faster Delivery.png";

const projects = [
  { image: orangeTreeCard, alt: "33 Orange Tree — Nearing Possession" },
  { image: oscarCard, alt: "32 Oscar — Delivered" },
];

const features = [
  { icon: trustedIcon, text: "A trusted name with proven studio development experience." },
  { icon: smartlyPlannedIcon, text: "Smartly planned spaces with optimum efficiency." },
  { icon: zeroWastageIcon, text: "Emphasis on practical layouts with zero wastage." },
  { icon: fasterDeliveryIcon, text: "Strong focus on timely execution and faster delivery." },
];

function ProjectCard({ project }) {
    return (
      <img
        src={project.image}
        alt={project.alt}
        className="
          block
          w-full
          max-w-[280px]
          sm:max-w-[340px]
          md:max-w-[380px]
          lg:max-w-none
          h-auto
          object-contain
          mx-auto
        "
        draggable={false}
      />
    );
  }

export default function WhyBluepearl() {
  return (
    <section
      id="why-bluepearl"
      data-testid="why-bluepearl-section"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "#e4e6c0" }}
    >
      {/* Flower background — left */}
      <img
        src={flowerBackgroundLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 top-0 h-full w-auto opacity-90"
        draggable={false}
      />
      {/* Flower background — right */}
      <img
        src={flowerBackgroundRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 top-0 h-full w-auto opacity-90 hidden sm:block"
        draggable={false}
      />

      <div className="relative max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
          data-testid="whybp-heading"
        >
          <h2 className="font-display tracking-tight text-[#0c2a20] uppercase text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] leading-[1.05] font-normal">
            Why Investors Choose
          </h2>
          <div className="mt-3 sm:mt-4 flex justify-center">
            <img
              src={bluepearlLogo}
              alt="Bluepearl"
              className="h-10 sm:h-10 lg:h-12 xl:h-[40px] w-auto"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* Main Grid — Cards (left) + Features (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center">
          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} index={i} />
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8 lg:pl-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="flex items-center gap-5 sm:gap-6"
                data-testid={`whybp-feature-${i}`}
              >
                <div
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#0c2a20" }}
                >
                  <img
                    src={f.icon}
                    alt=""
                    aria-hidden="true"
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    draggable={false}
                  />
                </div>
                <p className="font-sans text-[#0c2a20] text-[15px] sm:text-base lg:text-lg leading-snug">
                  {f.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer disclaimer */}
        <div className="mt-10 sm:mt-12 flex justify-end">
          <p className="text-[#0c2a20]/55 text-[11px] sm:text-xs tracking-wide">
            *T &amp; C&apos;s Apply
          </p>
        </div>
      </div>
    </section>
  );
}
