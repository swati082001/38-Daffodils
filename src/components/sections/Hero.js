import { useReveal } from "../../hooks/useReveal";
import banner from "../../assets/banner.jpeg";

export default function Hero() {
  const ref = useReveal();
  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative w-full overflow-hidden bg-forest"
    >
      {/* Banner — same on desktop and mobile */}
      <div className="relative pt-20 lg:pt-24">
        <div className="relative reveal overflow-hidden w-full">
          <img
            src={banner}
            alt="38 Daffodils — Pre-Leased Studio Apartments · Garden of Gains"
            className="w-full h-auto block"
            loading="eager"
          />
          {/* subtle bottom fade into page bg */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-forest" />
        </div>
      </div>

    </section>
  );
}