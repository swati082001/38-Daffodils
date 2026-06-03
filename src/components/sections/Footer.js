import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

import gmaps from "../../assets/background-images/gmap.png";
import bluepearlWhite from "../../assets/Bluepearl White.png";
import dwellerWhite from "../../assets/DP WHite.png";
import rera from "../../assets/Rera.png";
import qr from "../../assets/QR.png";


const InstagramIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.146 0-3.498.012-4.737.068-1.04.048-1.6.218-1.973.362-.495.192-.85.422-1.222.793-.371.371-.601.727-.793 1.222-.144.373-.314.934-.362 1.973C3.058 8.502 3.046 8.854 3.046 12s.012 3.498.068 4.737c.048 1.04.218 1.6.362 1.973.192.495.422.85.793 1.222.371.371.727.601 1.222.793.373.144.934.314 1.973.362 1.239.056 1.591.068 4.737.068s3.498-.012 4.737-.068c1.04-.048 1.6-.218 1.973-.362.495-.192.85-.422 1.222-.793.371-.371.601-.727.793-1.222.144-.373.314-.934.362-1.973.056-1.239.068-1.591.068-4.737s-.012-3.498-.068-4.737c-.048-1.04-.218-1.6-.362-1.973-.192-.495-.422-.85-.793-1.222-.371-.371-.727-.601-1.222-.793-.373-.144-.934-.314-1.973-.362C15.498 4.012 15.146 4 12 4zm0 3.064A4.936 4.936 0 1 1 7.064 12 4.942 4.942 0 0 1 12 7.064zm0 8.136A3.2 3.2 0 1 0 8.8 12a3.204 3.204 0 0 0 3.2 3.2zm5.144-8.336a1.152 1.152 0 1 1-1.152-1.152 1.152 1.152 0 0 1 1.152 1.152z" />
  </svg>
);

const FacebookIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.25 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33V22C18.34 21.25 22 17.08 22 12.06z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      data-testid="footer-section"
      className="relative w-full"
    >
      {/* ───── TOP: Light sage band ───── */}
      <div
        className="relative w-full"
        style={{ backgroundColor: "#e4e6c0" }}
      >
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-12 py-12 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* ── Map ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)]"
              data-testid="footer-map"
            >
              <img
                src={gmaps}
                alt="Project location — Baner, Pune"
                className="block w-full h-auto object-cover"
                draggable={false}
              />
            </motion.div>

            {/* ── Right column: Contact + RERA + CREDAI + Social ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col gap-7 sm:gap-8"
            >
              {/* Address */}
              <div
                className="flex items-start gap-3 sm:gap-4"
                data-testid="footer-address"
              >
                <MapPin
                  className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 mt-1"
                  style={{ color: "#0c2a20" }}
                  strokeWidth={2}
                />
                <p className="font-sans font-bold text-[#0c2a20] text-[16px] sm:text-[17px] lg:text-[19px] leading-[1.45]">
                  Sr. 38,&nbsp; Behind Costa Blanca Society, Pancard
                  <br />
                  Club Road, Baner, Pune – 411045
                </p>
              </div>

              {/* Phone */}
              <div
                className="flex items-center gap-3 sm:gap-4"
                data-testid="footer-phone"
              >
                <Phone
                  className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7"
                  style={{ color: "#0c2a20" }}
                  strokeWidth={2}
                />
                <a
                  href="tel:+919696467802"
                  className="font-sans font-bold text-[#0c2a20] text-xl sm:text-2xl lg:text-[26px] tracking-tight hover:opacity-80 transition-opacity"
                >
                  +91 96964 67802
                </a>
              </div>

              {/* RERA row: QR + small logo + text */}
              <div
                className="flex items-start gap-4 sm:gap-5 pt-2"
                data-testid="footer-rera"
              >
                <img
                  src={qr}
                  alt="MahaRERA QR Code"
                  className="h-20 w-20 sm:h-24 sm:w-24 object-contain bg-white p-1 rounded-sm flex-shrink-0"
                  draggable={false}
                  data-testid="footer-qr"
                />
                <img
                  src={rera}
                  alt="MahaRERA"
                  className="h-12 sm:h-14 w-auto object-contain flex-shrink-0 mt-1"
                  draggable={false}
                />
                <div className="flex flex-col justify-center">
                  <p className="font-sans text-[#0c2a20] text-[13px] sm:text-[15px] leading-snug">
                    MahaRERA Reg. No.
                  </p>
                  <p className="font-sans font-bold text-[#0c2a20] text-[16px] sm:text-[19px] leading-snug">
                    PR1260002500765
                  </p>
                  <a
                    href="https://maharera.maharashtra.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[#0c2a20] text-[12px] sm:text-[13px] leading-snug hover:underline mt-0.5"
                  >
                    maharera.mahaonline.gov.in
                  </a>
                </div>
              </div>

              {/* CREDAI horizontal */}
              <div
                className="flex items-center gap-5 sm:gap-6"
                data-testid="footer-credai"
              >
                <div className="flex flex-col items-center leading-none">
                  {/* Mountain peak above CREDAI */}
                  <svg
                    viewBox="0 0 40 18"
                    className="w-7 h-3 sm:w-8 sm:h-3.5 mb-1"
                    aria-hidden="true"
                  >
                    <path d="M20 0 L28 16 L24 16 L20 8 L16 16 L12 16 Z" fill="#1f7a3a" />
                  </svg>
                  <p
                    className="font-display font-extrabold leading-none"
                    style={{
                      fontSize: "30px",
                      letterSpacing: "0.06em",
                      color: "#1f7a3a",
                    }}
                  >
                    CREDAI
                  </p>
                  <p
                    className="font-sans font-semibold text-[10px] sm:text-[11px] tracking-[0.28em] mt-1"
                    style={{ color: "#1f7a3a" }}
                  >
                    PUNE METRO
                  </p>
                </div>
                <p className="font-sans text-[#0c2a20] text-[16px] sm:text-[18px] leading-snug">
                  We are a member of
                  <br />
                  CREDAI Pune Metro
                </p>
              </div>

              {/* Social */}
              <div
                className="flex flex-col gap-3 pt-1"
                data-testid="footer-social"
              >
                <p className="font-sans text-[#0c2a20] text-[15px] sm:text-[16px]">
                  Follow us on
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    data-testid="footer-instagram"
                    className="text-[#0c2a20] hover:opacity-70 transition-opacity"
                  >
                    <InstagramIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    data-testid="footer-facebook"
                    className="text-[#0c2a20] hover:opacity-70 transition-opacity"
                  >
                    <FacebookIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ───── MIDDLE: Dark green branding band ───── */}
      <div
        className="relative w-full"
        style={{ backgroundColor: "#0c2a20" }}
      >
        <div className="max-w-[1300px] mx-auto sm:px-4 lg:px-8 py-8">
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center">

            <div className="hidden  absolute left-1/2 top-0 -translate-x-1/2 h-full  bg-white/20" />

            <div className="flex justify-center md:justify-end md:pr-16">
              <img
                src={bluepearlWhite}
                alt="Bluepearl"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </div>

            <div className="flex justify-center md:justify-start md:pl-16">
              <img
                src={dwellerWhite}
                alt="Dweller Pro"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ───── BOTTOM: White disclaimer strip ───── */}
      <div className="w-full bg-white">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-12 py-5 sm:py-6 text-center">
          <p
            className="font-sans text-[#0c2a20]/85 text-[10.5px] sm:text-[11px] leading-[1.55]"
            data-testid="footer-disclaimer"
          >
            <span className="font-semibold">Disclaimer:</span> All
            representations are believed to be correct and envisaged by the
            developer/promoter. All art renderings, illustrations, photographs
            and pictures contained in this brochure are on artist&apos;s
            impression only and the same should not be construed to be the
            final images/views of the final project. The printed material does
            not constitute a contract/offer of any type between the
            developer/promoter and the purchaser and shall supersede all
            statements, documents or representations made prior to signing of
            such sale and purchase agreement. Terms &amp; conditions apply.
          </p>
          <p
            className="font-sans text-[#0c2a20] text-[10.5px] sm:text-[11px] mt-3"
            data-testid="footer-copyright"
          >
            © COPYRIGHT 2026 38 Daffodils. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
