import React from "react";
import { useReveal } from "../../hooks/useReveal";
import bannerDesktop from "../../assets/banner-desktop.jpg";
import bannerMobile from "../../assets/banner-mobile.jpg";

const Hero = () => {
  const ref = useReveal();

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative w-full overflow-hidden bg-forest"
    >
      {/* Responsive Banner */}
      <div className="relative pt-20 lg:pt-28">
        <div className="relative reveal overflow-hidden w-full">
          {/* Desktop Banner */}
          <img
            src={bannerDesktop}
            alt="38 Daffodils — Pre-Leased Studio Apartments · Garden of Gains"
            className="hidden md:block w-full h-auto"
            loading="eager"
          />

          {/* Mobile Banner */}
          <img
            src={bannerMobile}
            alt="38 Daffodils — Pre-Leased Studio Apartments · Garden of Gains"
            className="block md:hidden w-full h-auto"
            loading="eager"
          />

      
        </div>
      </div>
    </section>
  );
};

export default Hero;