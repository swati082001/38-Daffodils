import React from "react";
import flowerBackgroundLeft from "../../assets/background-images/flower-left.png";
import bluepearlLogo from "../../assets/background-images/bluepearl-black.png";

import orangeTreeCard from "../../assets/background-images/133.png";
import oscarCard from "../../assets/background-images/32.png";

import trustedIcon from "../../assets/Why Bp/Trusted.png";
import smartlyPlannedIcon from "../../assets/Why Bp/Smartly planned.png";
import zeroWastageIcon from "../../assets/Why Bp/Zero Wastage.png";
import fasterDeliveryIcon from "../../assets/Why Bp/Faster Delivery.png";

const features = [
  {
    icon: trustedIcon,
    text: "A trusted name with proven studio development experience.",
  },
  {
    icon: smartlyPlannedIcon,
    text: "Smartly planned spaces with optimum efficiency.",
  },
  {
    icon: zeroWastageIcon,
    text: "Emphasis on practical layouts with zero wastage.",
  },
  {
    icon: fasterDeliveryIcon,
    text: "Strong focus on timely execution and faster delivery.",
  },
];

export default function WhyBluepearl() {
  return (
    <section
      id="why-bluepearl"
      className="relative overflow-hidden bg-[#d9dcb1] pt-[55px] pb-[45px]"
    >
      {/* Left Watermark */}
      <img
        src={flowerBackgroundLeft}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          w-[320px]
          opacity-[0.12]
          pointer-events-none
          select-none
        "
      />

      <div className="max-w-[1080px] mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="
              font-title
              text-[34px]
              leading-none
              text-black
              uppercase
            "
          >
            WHY INVESTORS CHOOSE
          </h2>

          <img
            src={bluepearlLogo}
            alt="Bluepearl"
            draggable={false}
            className="
              h-[50px]
              w-[300px]
              mx-auto
              mt-[8px]
            "
          />
        </div>

        {/* Content */}
        <div
          className="
            mt-[35px]
            grid
            grid-cols-[630px_1fr]
            gap-[55px]
            items-center
          "
        >
          {/* Cards */}
          <div className="flex gap-[28px]">
            <img
              src={orangeTreeCard}
              alt="133 Orange Tree"
              draggable={false}
              className="
                w-[300px]
                h-auto
                object-contain
                drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]
              "
            />

            <img
              src={oscarCard}
              alt="32 Oscar"
              draggable={false}
              className="
                w-[300px]
                h-auto
                object-contain
                drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]
              "
            />
          </div>

          {/* Features */}
          <div className="flex flex-col gap-[36px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-[18px]"
              >
                <img
                  src={feature.icon}
                  alt=""
                  draggable={false}
                  className="
                    w-[44px]
                    h-[44px]
                    object-contain
                    shrink-0
                  "
                />

                <p
                  className="
                    text-[#0C2A20]
                    text-[18px]
                    leading-[1.35]
                    max-w-[360px]
                  "
                >
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-[30px]">
          <p
            className="
    absolute
    right-[-40px]
    bottom-[-2px]
    text-[11px]
    text-[#0C2A20]
    opacity-70
  "
          >
            *T &amp; C's Apply
          </p>
        </div>
      </div>
    </section>
  );
}
