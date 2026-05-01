import { Phone, MapPin } from "lucide-react";
import sign from "../../assets/sign.png";
import logo from "../../assets/logo1.png"

export default function Footer() {
  return (
    <footer data-testid="footer-section" className="relative bg-forest-deep border-t border-sage/10 pt-20 pb-10 px-5 lg:px-10">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-sage/10">
          <div className="lg:col-span-4">
            <img src={logo} alt="38 Daffodils" className="h-32" />
            <p className="text-sage/65 text-sm leading-relaxed mb-6">
              38 Daffodils · Pre-Leased Studio Apartments · Baner, Pune
            </p>
            <div className="flex items-center gap-3 mb-3 text-sage/70">
              <Phone className="w-4 h-4 text-gold" />
              <a href="tel:+919696467802" className="text-sm hover:text-gold transition-colors">
                +91 96964 67802
              </a>
            </div>
            <div className="flex items-start gap-3 text-sage/70">
              <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                Sr. 38, Opp. Ambrosia Galaxy, Behind Costa Blanca Society,
                <br />
                Pancard Club Road, Baner, Pune – 411045
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sage/70 text-sm">
              {["Investment", "Studio", "Location", "Amenities", "Gallery", "Enquire"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Compliance</h4>
            <p className="text-sage/65 text-sm leading-relaxed">
              MahaRERA Reg. No.
              <br />
              PR1260002500765
            </p>
            <p className="text-sage/65 text-sm leading-relaxed mt-3">
              A Member of CREDAI Pune Metro
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Connect</h4>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-sage/45 text-xs leading-relaxed max-w-3xl">
            <p>
              <span className="text-sage/70 font-medium">Disclaimer:</span> Information on the 38
              Daffodils real estate project is for informational purposes only and does not constitute
              an offer or recommendation. All details, dimensions, prices, and amenities are subject
              to change.
            </p>
            <p className="mt-3">© COPYRIGHT 2026 38 Daffodils. All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <div>
              <div className="text-sage/40 tracking-[0.2em] uppercase mb-1">Project by</div>
              <div className="text-sage font-display italic text-lg">Bluepearl</div>
            </div>
            <div className="w-px h-10 bg-sage/15" />
            <div>
              <div className="text-sage/40 tracking-[0.2em] uppercase mb-1">Strategic Partner</div>
              <img className="h-10 object-contain" src={sign} alt="Dweller pro" />

            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch         */}
      <a
        href="#enquire"
        data-testid="get-in-touch-float"
        className="fixed right-0 top-3/4 -translate-y-1/2 z-40 bg-gold text-forest px-3 py-6 rounded-l-lg shadow-lg hover:scale-105 transition-transform"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        GET IN TOUCH
      </a>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919696467802"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="whatsapp-float"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 text-forest flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}