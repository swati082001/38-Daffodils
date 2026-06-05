import React from "react";
import greenBackground from "../../assets/background-images/green-bg.png";
import developerImage from "../../assets/E3.jpg";
import bluepearlLogo from "../../assets/Bluepearl.png";
import logo from "../../assets/icons/white-logo.png"

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "11+", label: "Landmark Projects" },
  { value: "705,000", label: "sq.ft. Developed" },
  { value: "580,000", label: "sq.ft. Development Planned" },
  { value: "8", label: "Upcoming Projects" },
];

export default function Developer() {
  const scrollToEnquire = () => {
    const el = document.getElementById("enquire");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="developer"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${greenBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "740px",
      }}
    >
      <div className="max-w-[1040px] mx-auto pt-[75px] pb-[85px]">
        {/* Top Row */}
        <div className="flex items-start justify-center gap-[34px]">
          {/* Left Image */}
          <div
            className="
              w-[410px]
              h-[500px]
              rounded-[16px]
              overflow-hidden
              flex-shrink-0
            "
          >
            <img
              src={developerImage}
              alt="BluePearl"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          {/* Content */}
          <div className="w-[550px] pt-[10px]">
            {/* Heading */}
            <div className="flex items-center gap-4 mb-4">
              <h2
                className="
                  font-title
                  text-[white]
                  text-[34px]
                  font-light
                  uppercase
                  leading-none
                "
              >
                ABOUT
              </h2>

              <img
                src={logo}
                alt="BluePearl"
                className="h-[36px] mb-[1rem]"
              />
            </div>

            {/* Paragraphs */}
            <div
              className="
                text-[white]
                text-[15px]
                leading-[1.55]
                font-light
                space-y-5
                opacity-90
              "
            >
              <p>
                Blue Pearl is synonymous with excellence in construction,
                setting new standards of innovation and reliability in both PMC
                and PCMC. Fueled by the pillars of trust, reliability, and
                passion, we adhere to a simple yet profound purpose to enhance
                the lives of our clientele by delivering unparalleled living
                experiences.
              </p>

              <p>
                Our approach is straightforward yet transformative: we craft
                homes that epitomize beauty, punctuality, quality, and
                efficiency. With an unwavering commitment to ethical principles,
                Blue Pearl consistently surpasses expectations, delivering
                products of uncompromising quality.
              </p>

              <p>
                Recognized by esteemed organizations such as CREDAI and NAREDCO
                for the past decade, our track record speaks volumes about our
                ability to deliver excellence, consistently meeting and
                exceeding specified standards within stipulated timelines.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={scrollToEnquire}
              className="
                mt-8
                w-[155px]
                h-[48px]
                rounded-[8px]
                bg-[#D7D9AE]
                text-[#17382D]
                text-[16px]
                font-medium
                hover:opacity-90
                transition
              "
            >
              Enquire Now
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-[38px] flex justify-center gap-[14px]">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                w-[188px]
                h-[122px]
                rounded-[12px]
                border
                border-[#4F8D7A]
                bg-[#0B2D23]/55
                backdrop-blur-[2px]
                flex
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              <div
                className="
                  text-[#F0D35A]
                  text-[42px]
                  font-bold
                  leading-none
                "
              >
                {item.value}
              </div>

              <div
                className="
                  mt-3
                  text-[#F4F4E5]
                  text-[13px]
                  leading-[1.25]
                  px-3
                "
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <p
        className="
          absolute
          bottom-[28px]
          right-[120px]
          text-[11px]
          text-[#E2E4B0]
          opacity-75
        "
      >
        Artistic Impression | *T &amp; C&apos;s Apply
      </p>
    </section>
  );
}
