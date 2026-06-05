import React from "react";
import { MapPin, Phone } from "lucide-react";

import gmaps from "../../assets/background-images/gmap.png";
import bluepearlWhite from "../../assets/bluepearl-white.png";
import dwellerWhite from "../../assets/DP WHite.png";
import rera from "../../assets/Rera.png";
import qr from "../../assets/QR.png";
import credaiLogo from "../../assets/credai-pune-metro.png"; 
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png"


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
    <footer className="w-full">
      {/* ================= TOP SECTION ================= */}
      <div className="bg-[#DDE0B6]">
        <div className="max-w-[1100px] mx-auto px-6 py-[42px]">
          <div className="grid lg:grid-cols-[580px_1fr] gap-12 items-start">

            {/* MAP */}
            <div className="rounded-[18px] overflow-hidden shadow-lg">
              <img
                src={gmaps}
                alt="Location Map"
                className="w-[580px] h-[500px] object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="pt-6">

              {/* ADDRESS */}
              <div className="flex gap-4 items-start">
                <div className="w-[38px] h-[38px] rounded-full bg-[#14382D] flex items-center justify-center flex-shrink-0">
                  <MapPin
                    size={18}
                    className="text-[#DDE0B6]"
                    strokeWidth={2.5}
                  />
                </div>

                <p className="text-[#14382D] font-semibold text-[18px] leading-[1.4]">
                  Sr. 38, Behind Costa Blanca Society, Pancard
                  <br />
                  Club Road, Baner, Pune – 411045
                </p>
              </div>

              {/* PHONE */}
              <div className="flex gap-4 items-center mt-10">
                <div className="w-[38px] h-[38px] rounded-full bg-[#14382D] flex items-center justify-center">
                  <Phone
                    size={18}
                    className="text-[#DDE0B6]"
                    strokeWidth={2.5}
                  />
                </div>

                <a
                  href="tel:+919696467802"
                  className="text-[#14382D] text-[38px] font-bold tracking-tight"
                >
                  +91 96964 67802
                </a>
              </div>

              {/* RERA */}
              <div className="flex gap-5 mt-10 items-start">
                <img
                  src={qr}
                  alt="QR"
                  className="w-[82px] h-[82px]"
                />

                <img
                  src={rera}
                  alt="RERA"
                  className="h-[42px] w-auto mt-1"
                />

                <div>
                  <p className="text-[#14382D] text-[14px]">
                    MahaRERA Reg. No.
                  </p>

                  <p className="text-[#14382D] text-[18px] font-bold">
                    PR1260002500765
                  </p>

                  <p className="text-[#14382D] text-[14px]">
                    maharera.mahaonline.gov.in
                  </p>
                </div>
              </div>

              {/* CREDAI */}
              <div className="flex items-center gap-6 mt-10">
                <img
                  src={credaiLogo}
                  alt="CREDAI"
                  className="h-[60px] w-auto"
                />

                <div className="text-[#14382D]">
                  <p className="text-[18px]">
                    We are a member of
                  </p>

                  <p className="text-[18px]">
                    CREDAI Pune Metro
                  </p>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="mt-10">
                <p className="text-[#14382D] text-[18px] font-semibold mb-4">
                  Follow us on
                </p>

                <div className="flex gap-5">
                  <a href="#">
                    <img
                      src={instagram}
                      alt="Instagram"
                      className="w-[38px] h-[38px]"
                    />
                  </a>

                  <a href="#">
                    <img
                      src={facebook}
                      alt="Facebook"
                      className="w-[38px] h-[38px]"
                    />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= GREEN STRIP ================= */}
      <div className="bg-[#14382D]">
        <div className="max-w-[1100px] mx-auto py-10">
          <div className="grid md:grid-cols-2 items-center">

            <div className="flex justify-center">
              <img
                src={bluepearlWhite}
                alt="BluePearl"
                className="h-[55px] w-auto"
              />
            </div>

            <div className="flex justify-center mt-8 md:mt-0">
              <img
                src={dwellerWhite}
                alt="Dweller Pro"
                className="h-[55px] w-auto"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ================= DISCLAIMER ================= */}
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 py-4 text-center">

          <p className="text-[8px] leading-[1] text-[#575757]">
            Disclaimer: All representations are believed to be correct and
            envisaged by the developer/promoter. All art renderings,
            illustrations, photographs and pictures contained in this brochure
            are on artist's impression only and the same should not be construed
            to be the final images/views of the final project. The printed
            material does not constitute a contract/offer of any type between
            the developer/promoter and the purchaser and shall supersede all
            statements, documents or representations made prior to signing of
            such sale and purchase agreement. Terms & Conditions apply.
          </p>

          <p className="text-[10px] mt-2 text-[#444]">
            © COPYRIGHT 2026 38 Daffodils. All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
