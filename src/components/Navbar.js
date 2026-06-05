import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo1.png";
import BrochurePopup from "../components/utils/BrochurePopup";

const links = [
  { label: "About", href: "#about" },
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

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#0c2a1e]/90 backdrop-blur-md border-b border-sage/10 py-3"
          : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-10 flex items-center justify-between">

          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="h-12 sm:h-14 lg:h-20 w-auto scale-125 lg:scale-150 origin-left"
          />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[12px] tracking-[0.2em] uppercase text-sage/70 hover:text-gold transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => setShowPopup(true)}
            className="
    hidden lg:inline-flex
    items-center justify-center
    w-[222px]
    h-[48px]
    rounded-[7px]
    bg-sage
    text-forest
    font-sans
    text-[16px]
    font-normal
    hover:opacity-90
    transition
  "
          >
            Download brochure
          </button>

          
         {/* Mobile Right Side */}
<div className="lg:hidden flex items-center gap-3">
  {/* Download Brochure */}
  <button
    onClick={() => setShowPopup(true)}
    className="
      h-[29px]
      px-3
      rounded-[3px]
      bg-[#D9DCB1]
      text-[#14382D]
      text-[9px]
      font-medium
      whitespace-nowrap
      flex
      items-center
      justify-center
    "
  >
    Download brochure
  </button>

  {/* Menu */}
  <button
    onClick={() => setOpen(!open)}
    className="
      w-[52px]
      h-[52px]
      flex
      items-center
      justify-center
      text-[#D9DCB1]
    "
  >
    {open ? (
      <X size={38} strokeWidth={2} />
    ) : (
      <Menu size={38} strokeWidth={2} />
    )}
  </button>
</div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity lg:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0c2a1e] z-50 shadow-2xl transform transition-transform duration-500 lg:hidden ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b border-sage/10">
          <span className="text-gold text-sm tracking-[0.2em] uppercase">
            Menu
          </span>
          <button onClick={() => setOpen(false)}>
            <X className="text-sage" />
          </button>
        </div>

        <div className="flex flex-col px-5 py-6 gap-2">
          {links.map((l) =>
            l.label === "Enquire" ? (
              <button
                key={l.href}
                onClick={() => {
                  setOpen(false);
                  setShowPopup(true);
                }}
                className="py-4 text-left text-sage/80 uppercase tracking-[0.18em] border-b border-sage/10"
              >
                {l.label}
              </button>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 text-sage/80 uppercase tracking-[0.18em] border-b border-sage/10"
              >
                {l.label}
              </a>
            )
          )}

         
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <BrochurePopup
          open={showPopup}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}