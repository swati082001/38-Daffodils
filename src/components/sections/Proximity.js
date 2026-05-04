import { Building2, ShoppingBag, Train, Stethoscope, GraduationCap } from "lucide-react";
import { useReveal } from "../../hooks/useReveal";

const groups = [
  {
    icon: Building2,
    title: "IT & Business",
    items: [
      ["SmartWorks", "1 Min"],
      ["Ambrosia Galaxy", "1 Min"],
      ["Westport", "2 Mins"],
      ["WeWork", "2 Mins"],
      ["Amar Madhuban Tech Park", "2 Mins"],
      ["Amar Business Zone, Baner", "2 Mins"],
      ["Bitwise", "5 Mins"],
      ["Raheja IT Park", "5 Mins"],
      ["Solitaire Business Hub", "5 Mins"],
      ["Teerth Technospace", "6 Mins"],
      ["Samarth Technospace", "7 Mins"],
      ["Hinjewadi IT Park", "10 Mins"],
    ],
  },
  {
    icon: ShoppingBag,
    title: "Shopping & Leisure",
    items: [
      ["Zudio", "5 Mins"],
      ["Max", "5 Mins"],
      ["Pantaloons", "5 Mins"],
      ["Tanishq", "5 Mins"],
      ["Chandukaka Saraf", "5 Mins"],
      ["Dmart", "5 Mins"],
      ["Balewadi High Street", "5 Mins"],
      ["Westend Mall", "10 Mins"],
      ["Phoenix Mall of the Millennium", "15 Mins"],
    ],
  },
  {
    icon: Building2,
    title: "Car Showrooms",
    items: [
      ["Kia", "4 Mins"],
      ["Tata", "4 Mins"],
      ["Audi", "4 Mins"],
      ["Mercedes Benz", "6 Mins"],
      ["BMW", "7 Mins"],
    ],
  },
  {
    icon: Train,
    title: "Connectivity",
    items: [
      ["Nanaware Chowk", "2 Mins"],
      ["Mumbai Bangalore Highway", "2 Mins"],
      ["Baner Hills", "2 Mins"],
      ["Baner Metro", "2 Mins"],
      ["Baner Road", "2 Mins"],
      ["Orchid Hotel", "5 Mins"],
      ["Hinjewadi", "10 Mins"],
      ["Shivajinagar", "15 Mins"],
    ],
  },
  {
    icon: Stethoscope,
    title: "Hospitals",
    items: [
      ["IIMS Hospital", "2 Mins"],
      ["Manipal Hospital", "4 Mins"],
      ["Jupiter Hospital", "5 Mins"],
      ["Surya Mother & Child Care Hospital", "7 Mins"],
    ],
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    items: [
      ["Euro Kids Pre-school Balewadi", "3 Mins"],
      ["The Orchid School", "5 Mins"],
      ["MITCON Intl. School & Institute Of Management", "5 Mins"],
    ],
  },
  {
    icon: ShoppingBag,
    title: "Restaurants & Cafe",
    items: [
      ["McDonalds", "2 Mins"],
      ["Kannu Ki Chai", "2 Mins"],
      ["Maskawala & Co.", "4 Mins"],
      ["Urbo", "4 Mins"],
      ["Si Nonna’s", "5 Mins"],
      ["Pizza Express", "5 Mins"],
      ["Starbucks", "5 Mins"],
      ["The Urban Foundary", "5 Mins"],
      ["Circuit House", "5 Mins"],
      ["Buon Cibo", "5 Mins"],
      ["Tails & Spirits", "5 Mins"],
      ["Toscano", "5 Mins"],
      ["Elephant & Co.", "7 Mins"],
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