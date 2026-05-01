import { Building2, ShoppingBag, Train, Stethoscope, GraduationCap } from "lucide-react";
import { useReveal } from "../../hooks/useReveal";

const groups = [
  {
    icon: Building2,
    title: "IT & Business",
    items: [
      ["Westport", "0 Mins"],
      ["SmartWorks M-Agile", "1 Min"],
      ["Amar Business Zone", "2 Mins"],
      ["Solitaire Business Hub", "5 Mins"],
      ["Hinjewadi IT Park", "10 Mins"],
    ],
  },
  {
    icon: ShoppingBag,
    title: "Shopping & Leisure",
    items: [
      ["Zudio", "2 Mins"],
      ["Balewadi High Street", "5 Mins"],
      ["DMart", "5 Mins"],
      ["Phoenix Mall of the Millennium", "15 Mins"],
      ["Westend Mall", "15 Mins"],
    ],
  },
  {
    icon: Train,
    title: "Connectivity",
    items: [
      ["Baner Metro", "1 Min"],
      ["Baner Road", "1 Min"],
      ["Baner Hills", "2 Mins"],
      ["Mumbai Bangalore Highway", "5 Mins"],
      ["Hinjewadi", "10 Mins"],
    ],
  },
  {
    icon: Stethoscope,
    title: "Hospitals",
    items: [
      ["Manipal Hospital", "4 Mins"],
      ["Jupiter Hospital", "5 Mins"],
      ["Surya Mother & Child Care", "7 Mins"],
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      ["Euro Kids Pre-school Balewadi", "3 Mins"],
      ["The Orchid School", "5 Mins"],
      ["MITCON Intl. School", "5 Mins"],
    ],
  },
];

export default function Proximity() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      data-testid="proximity-section"
      className="relative section-cream py-24 lg:py-36 px-5 lg:px-10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <div className="eyebrow mb-4 reveal">Proximity Map</div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight reveal reveal-delay-1">
            Everything Within <span className="italic-accent">Minutes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-sage/10 border border-sage/10">
          {groups.map((g, gi) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                data-testid={`proximity-group-${gi}`}
                className={`reveal reveal-delay-${(gi % 5) + 1} bg-forest p-7 lg:p-8`}
              >
                <div className="w-11 h-11 rounded-full glass-gold flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-xl text-sage mb-5">
                  {g.title}
                </h3>
                <ul className="space-y-3">
                  {g.items.map(([name, time]) => (
                    <li
                      key={name}
                      className="flex items-baseline justify-between gap-3 pb-2 border-b border-sage/10 last:border-b-0"
                    >
                      <span className="text-sage/75 text-[13px]">
                        {name}
                      </span>
                      <span className="font-display italic text-gold whitespace-nowrap text-[14px]">
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-[11px] tracking-[0.2em] uppercase text-sage/40 text-center">
          * T &amp; C Apply
        </p>
      </div>
    </section>
  );
}