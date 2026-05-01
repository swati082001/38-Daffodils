import { MapPin } from "lucide-react";
import { useReveal } from "../../hooks/useReveal";

const callouts = [
  { num: "0", unit: "Mins", label: "To Baner Metro" },
  { num: "10", unit: "Mins", label: "To Hinjewadi IT Park" },
  { num: "5", unit: "Mins", label: "Balewadi High Street" },
  { num: "5+", unit: "Hubs", label: "Major IT Hubs Nearby" },
];

const pillars = [
  {
    no: "01",
    head: "Address",
    title: "Strategic Location",
    bullets: ["Prime Baner stretch", "Surrounded by key hubs", "High-visibility address"],
  },
  {
    no: "02",
    head: "Demand",
    title: "Reliable Occupancy",
    bullets: ["IT-driven demand", "Year-round rental flow", "Zero vacancy risk"],
  },
  {
    no: "03",
    head: "Connectivity",
    title: "Well Connected",
    bullets: ["Mumbai-Bangalore Highway", "Baner Metro · 1 min", "Seamless city access"],
  },
  {
    no: "04",
    head: "Lifestyle",
    title: "Premium Lifestyle",
    bullets: ["Balewadi High Street", "Malls · Hospitals · Schools", "High livability quotient"],
  },
  {
    no: "05",
    head: "Growth",
    title: "Growth Potential",
    bullets: ["Appreciating locality", "Future infrastructure", "Capital upside assured"],
  },
];

export default function Location() {
  const ref = useReveal();
  return (
    <section
      id="location"
      ref={ref}
      data-testid="location-section"
      className="relative py-24 lg:py-36 px-5 lg:px-10 bg-forest-deep"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 mb-14 lg:mb-20">
          <div className="lg:col-span-5 reveal">
            <div className="eyebrow mb-4">Location Advantage</div>
            <h2 className="font-display text-sage text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Pancard Club Road,
              <br />
              <span className="italic-accent">Baner</span>
            </h2>
          </div>
          <p className="hidden md:block lg:col-span-6 lg:col-start-7 text-sage/70 text-base lg:text-lg leading-relaxed reveal reveal-delay-1">
            A premium address in Pune's fastest-growing IT corridor — where your investment is
            supported by relentless demand, world-class connectivity, and appreciating real estate.
          </p>
        </div>

        {/* Numeric callouts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-sage/10 border border-sage/10 mb-16 lg:mb-20">
          {callouts.map((c, i) => (
            <div
              key={i}
              data-testid={`location-callout-${i}`}
              className={`reveal reveal-delay-${(i % 4) + 1} bg-forest-deep p-7 lg:p-10 flex flex-col items-start`}
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="numeric-xxl gold-ink text-5xl lg:text-7xl">{c.num}</span>
                <span className="text-sage/65 text-sm tracking-wider font-medium">{c.unit}</span>
              </div>
              <div className="text-[11px] tracking-[0.22em] uppercase text-sage/55 mt-1">
                {c.label}
              </div>
            </div>
          ))}
        </div>

        {/* 5 pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-sage/10 border border-sage/10">
          {pillars.map((p, i) => (
            <div
              key={p.no}
              data-testid={`location-pillar-${i}`}
              className={`reveal reveal-delay-${(i % 5) + 1} bg-forest-deep p-6 lg:p-8 hover-lift`}
            >
              <div className="font-display italic text-gold/60 text-2xl mb-4">{p.no}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-sage/55 mb-2">
                {p.head}
              </div>
              <h3 className="font-display text-xl lg:text-2xl text-sage mb-4 leading-tight">
                {p.title}
              </h3>
              <ul className="hidden md:block space-y-1.5 text-sage/65 text-[13px]">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-gold mt-0.5">·</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-sage/65 text-sm">
          <MapPin className="w-4 h-4 text-gold" />
          <span className="tracking-wider">
            Sr. 38, Opp. Ambrosia Galaxy, Behind Costa Blanca Society, Pancard Club Road, Baner
            411045
          </span>
        </div>

        <p className="mt-6 text-[11px] tracking-[0.2em] uppercase text-sage/40">
          * T &amp; C Apply
        </p>
      </div>
    </section>
  );
}