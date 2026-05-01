import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo1.png";
import BrochurePopup from "../components/utils/BrochurePopup";

const links = [
  { label: "About", href: "#investment" },
  { label: "Studio", href: "#studio" },
  { label: "Location", href: "#location" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Enquire", href: "#enquire" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0c2a1e]/85 backdrop-blur-md border-b border-sage/10 py-3"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="38 Daffodils" className="h-18 lg:h-24 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}x
                className="text-[13px] tracking-[0.18em] uppercase text-sage/70 hover:text-gold transition-colors duration-300 font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => setShowPopup(true)}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 text-gold text-[12px] tracking-[0.2em] uppercase hover:bg-gold hover:text-forest transition-all duration-300"
          >
            Enquire Now
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-sage p-2"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-6 pt-2 flex flex-col gap-1 bg-[#0c2a1e] border-t border-sage/10">
            
            {links.map((l) =>
              l.label === "Enquire" ? (
                <button
                  key={l.href}
                  onClick={() => {
                    setOpen(false);
                    setShowPopup(true);
                  }}
                  className="py-3 text-left text-sage/85 tracking-[0.16em] uppercase text-sm border-b border-sage/5"
                >
                  {l.label}
                </button>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sage/85 tracking-[0.16em] uppercase text-sm border-b border-sage/5"
                >
                  {l.label}
                </a>
              )
            )}

            {/* Mobile CTA */}
            <button
              onClick={() => {
                setOpen(false);
                setShowPopup(true);
              }}
              className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full bg-gold text-forest font-semibold tracking-[0.18em] uppercase text-xs"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </header>

      {/* Popup OUTSIDE header (important) */}
      {
        showPopup ? <BrochurePopup
        open={showPopup}
        onClose={() => setShowPopup(false)}
      /> : <> </>
      }
      
    </>
  );
}