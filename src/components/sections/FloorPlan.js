import { Phone, Download } from "lucide-react";
import { useReveal } from "../../hooks/useReveal";
import I2 from "../../assets/I2.jpg"
import floorplan2 from "../../assets/floorplan2.png"

const renders = [
   I2,
   floorplan2
];

export default function FloorPlan() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      data-testid="floorplan-section"
      className="relative section-cream py-24 lg:py-36 px-5 lg:px-10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5 reveal">
            <div className="eyebrow mb-4">See the <span className="italic-accent">Full Layout</span></div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              The Floor Plan
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
          {renders.map((src, i) => (
            <div
              key={i}
              data-testid={`floor-render-${i}`}
              className={`relative overflow-hidden group reveal reveal-delay-${i + 1}`}
            >
              <img
                src={src}
                alt={`Render ${i + 1}`}
                className="w-full h-[60vh] object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 font-display italic text-sage text-2xl">
                Render {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 reveal">
          <a
            href="tel:+919696467802"
            data-testid="floor-cta-call"
            className="btn-primary"
          >
            <Phone className="w-3.5 h-3.5" /> Request Floor Plan
          </a>
          <a
            href="#enquire"
            data-testid="floor-cta-enquire"
            className="btn-ghost"
          >
            <Download className="w-3.5 h-3.5" /> Download Brochure
          </a>
        </div>

        <p className="mt-10 text-[11px] tracking-[0.2em] uppercase text-sage/40 text-center">
          * T &amp; C Apply
        </p>
      </div>
    </section>
  );
}