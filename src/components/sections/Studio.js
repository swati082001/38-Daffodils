import { useReveal } from "../../hooks/useReveal";
import I3 from "../../assets/I3.jpg"
import I4 from "../../assets/I4.jpg"
import I5 from "../../assets/I5.jpg"

const interiors = [
  I3, I4, I5
];

export default function Studio() {
  const ref = useReveal();
  return (
    <section
      id="studio"
      ref={ref}
      data-testid="studio-section"
      className="relative section-cream py-24 lg:py-36 px-5 lg:px-10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-5 reveal">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Fully Furnished
              <br />
              <span className="italic-accent">Studios</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-5">
          {interiors.map((src, i) => (
            <div
              key={i}
              data-testid={`studio-interior-${i}`}
              className={`relative overflow-hidden group reveal reveal-delay-${i + 1}`}
            >
              <img
                src={src}
                alt={`Interior ${i + 1}`}
                className="w-full h-[60vh] md:h-[70vh] object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-sage font-display italic text-xl">
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs italic text-forest/60 text-center lg:text-left">
          *Images for representative purpose only.
        </p>
      </div>
    </section>
  );
}