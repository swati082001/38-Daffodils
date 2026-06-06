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
      className="relative overflow-hidden bg-[#d9dcb1] pt-[45px] lg:pt-[55px] pb-[45px]"
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
          w-[220px]
          lg:w-[320px]
          opacity-[0.12]
          pointer-events-none
          select-none
        "
      />

      <div className="max-w-[1080px] mx-auto relative z-10">
     {/* Heading */}
<div className="text-center px-4">
<h2
  className="
    font-title
    
    text-[24px]
    lg:text-[34px]
    leading-none
    uppercase
    text-black
    tracking-[-0.04em]
    whitespace-nowrap
  "
>
  WHY INVESTORS CHOOSE
</h2>

<img
  src={bluepearlLogo}
  alt="Bluepearl"
  draggable={false}
  className="
    mx-auto
    mt-2

    w-[200px]
    sm:w-[260px]

    lg:w-[300px]
    lg:h-[50px]
  "
/>
</div>

        {/* Content */}
        <div
          className="
            mt-[35px]
            lg:grid
            lg:grid-cols-[630px_1fr]
            lg:gap-[55px]
            lg:items-center
          "
        >
          {/* ================= MOBILE ================= */}
          <div className="lg:hidden px-5 max-w-[500px]">
            {/* Cards */}
            <div className="flex flex-col items-center">
              <img
                src={orangeTreeCard}
                alt="133 Orange Tree"
                draggable={false}
                className="
                  w-full
                  max-w-[305px]
                  object-contain
                  drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)]
                  py-[-3]
                "
              />

              <img
                src={oscarCard}
                alt="32 Oscar"
                draggable={false}
                className="
                  w-full
                  max-w-[305px]
                  object-contain
                  drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)]
                "
              />
            </div>

            {/* Features */}
            <div className="mt-4 flex flex-col gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-2
                  "
                >
                  <img
                    src={feature.icon}
                    alt=""
                    draggable={false}
                    className="
                      w-[36px]
                      h-[48px]
                      shrink-0
                      object-contain
                    "
                  />

                  <p
                    className="
                      text-[#0C2A20]
                      text-[14px]
                      leading-[1.45]
                      pt-1
                    "
                  >
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= DESKTOP (UNCHANGED) ================= */}
          <div className="hidden lg:flex gap-[28px]">
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

          <div className="hidden lg:flex flex-col gap-[36px]">
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
        <div className="flex justify-end mt-[20px] lg:mt-[30px]">
          <p
            className="
              absolute
              right-4
              lg:right-[-40px]
              bottom-0
              lg:bottom-[-2px]
              text-[8px]
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