import React from "react";
import { MapPin, Phone } from "lucide-react";

import gmaps from "../../assets/background-images/gmap.png";
import bluepearlWhite from "../../assets/bluepearl-white.png";
import dwellerWhite from "../../assets/DP WHite.png";
import rera from "../../assets/Rera.png";
import qr from "../../assets/QR.png";
import credaiLogo from "../../assets/credai-pune-metro.png";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* ================================================= */}
      {/* DESKTOP (UNCHANGED) */}
      {/* ================================================= */}
      <div className="hidden lg:block">
        {/* TOP SECTION */}
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
                  <img src={qr} alt="QR" className="w-[82px] h-[82px]" />

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
                    <p className="text-[18px]">We are a member of</p>
                    <p className="text-[18px]">CREDAI Pune Metro</p>
                  </div>
                </div>

                {/* SOCIAL */}
                <div className="mt-10">
                  <p className="text-[#14382D] text-[18px] font-semibold mb-4">
                    Follow us on
                  </p>

                  <div className="flex gap-5">
                    <img
                      src={instagram}
                      alt="Instagram"
                      className="w-[38px] h-[38px]"
                    />

                    <img
                      src={facebook}
                      alt="Facebook"
                      className="w-[38px] h-[38px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GREEN STRIP */}
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

        {/* DISCLAIMER */}
        <div className="bg-white">
          <div className="max-w-[1200px] mx-auto px-4 py-4 text-center">
            <p className="text-[8px] leading-[1] text-[#575757]">
              Disclaimer: All representations are believed to be correct and
              envisaged by the developer/promoter...
            </p>

            <p className="text-[10px] mt-2 text-[#444]">
              © COPYRIGHT 2026 38 Daffodils. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* MOBILE */}
      {/* ================================================= */}
      <div className="lg:hidden">
        {/* TOP LIGHT SECTION */}
        <div className="bg-[#DDE0B6] px-5 pt-6 pb-8">
          {/* MAP */}
          <div className="rounded-[22px] overflow-hidden shadow-xl">
            <img
              src={gmaps}
              alt="Location Map"
              className="w-full h-auto"
            />
          </div>

          {/* ADDRESS */}
          <div className="flex gap-4 mt-10 items-start">
            <div className="w-10 h-10 rounded-full bg-[#14382D] flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-[#DDE0B6]" />
            </div>

            <p className="text-[#14382D] font-semibold text-[18px] leading-[1.45]">
              Sr. 38, Behind Costa Blanca Society,
              <br />
              Pancard Club Road, Baner,
              <br />
              Pune – 411045
            </p>
          </div>

          {/* PHONE */}
          <div className="flex gap-4 items-center mt-8">
            <div className="w-10 h-10 rounded-full bg-[#14382D] flex items-center justify-center shrink-0">
              <Phone size={18} className="text-[#DDE0B6]" />
            </div>

            <a
              href="tel:+919696467802"
              className="text-[#14382D] text-[30px] font-bold leading-none"
            >
              +91 96964 67802
            </a>
          </div>

          {/* RERA + CREDAI */}
          <div className="grid grid-cols-2 gap-5 mt-8 items-start">
            <div>
              <img
                src={rera}
                alt="RERA"
                className="h-[52px] w-auto mb-2"
              />

              <p className="text-[#14382D] text-[12px] font-semibold">
                PR1260002500765
              </p>

              <p className="text-[#14382D] text-[11px]">
                maharera.mahaonline.gov.in
              </p>
            </div>

            <div>
              <p className="text-[#14382D] text-[14px] mb-1">
                We are a member
              </p>

              <img
                src={credaiLogo}
                alt="CREDAI"
                className="h-[50px] w-auto"
              />
            </div>
          </div>

          {/* QR + SOCIAL */}
          <div className="grid grid-cols-2 gap-5 mt-8 items-center">
            <img
              src={qr}
              alt="QR"
              className="w-[90px] h-[90px]"
            />

            <div>
              <p className="text-[#14382D] font-semibold mb-3">
                Follow us on
              </p>

              <div className="flex gap-4">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-10 h-10"
                />

                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* GREEN BRANDING SECTION */}
        <div className="bg-[#14382D] text-center py-14 px-5 flex flex-col gap-6 justify-center">

          <img
            src={bluepearlWhite}
            alt="BluePearl"
            className="w-[260px] max-w-full mx-auto mb-5"
          />

          <img
            src={dwellerWhite}
            alt="Dweller Pro"
            className="w-[210px] max-w-full mx-auto mt-5"
          />
        </div>

        {/* DISCLAIMER */}
        <div className="bg-white px-6 py-5 text-center">
          <p className="text-[8px] leading-[1.4] text-[#575757]">
            Disclaimer: All representations are believed to be correct and
            envisaged by the developer/promoter. All art renderings,
            illustrations, photographs and pictures contained in this brochure
            are on artist's impression only.
          </p>

          <p className="text-[10px] mt-3 text-[#444]">
            © COPYRIGHT 2026 38 Daffodils. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}