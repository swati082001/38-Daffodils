import { useReveal, useCountUp } from "../../hooks/useReveal";

/* Stat Component */
function Stat({ value, suffix, label, decimals }) {
  const ref = useCountUp(value, { decimals });

  return (
    <div className="reveal">
      <div className="numeric-xxl gold-ink text-5xl lg:text-7xl flex items-baseline gap-1">
        <span ref={ref}>0</span>

        {suffix && (
          <span className="text-2xl lg:text-4xl text-gold/80">
            {suffix}
          </span>
        )}
      </div>

      <div className="mt-2 text-[11px] tracking-[0.22em] uppercase text-sage/55">
        {label}
      </div>
    </div>
  );
}

export default function Developer() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      data-testid="developer-section"
      className="relative py-24 lg:py-36 px-5 lg:px-10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 reveal">
            <div className="eyebrow mb-4">The Developer</div>

            <h2 className="font-display text-sage text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-8">
              <span className="italic-accent">Bluepearl</span>
            </h2>

            <p className="hidden md:block text-sage/70 text-base lg:text-lg leading-relaxed mb-8">
              Stands for excellence in construction, innovation and reliability across PMC and PCMC.
              Built on trust, passion, and integrity — with a focus on quality, timely delivery,
              and thoughtful design, Bluepearl consistently delivers beyond expectations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 mt-10">
              <Stat value={12} suffix="+" label="Years in Business" />
              <Stat value={14} suffix="+" label="Landmark Projects" />
              <Stat value={8} label="Upcoming Projects" />
              <Stat value={705} suffix="K" label="Sq.ft. Developed" />
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative reveal reveal-delay-1">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
              alt="Bluepearl Portfolio"
              className="w-full h-[60vh] lg:h-[75vh] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-forest/40 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 font-display italic text-gold text-2xl lg:text-3xl">
              Bluepearl Portfolio
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-[11px] tracking-[0.2em] uppercase text-sage/40">
          * T &amp; C Apply
        </p>
      </div>
    </section>
  );
}