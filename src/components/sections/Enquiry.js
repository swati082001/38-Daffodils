import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";

import greenBackground from "../../assets/background-images/green-bg.png";
import enquiryImage from "../../assets/E6.jpg";

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", msg: "" });
  };

  return (
    <section
      id="enquire"
      data-testid="enquiry-section"
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundColor: "#0c2a20",
        backgroundImage: `url(${greenBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Image column — hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hidden lg:block relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]"
            data-testid="enquiry-image"
          >
            <img
              src={enquiryImage}
              alt="38 Daffodils building exterior"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative rounded-3xl p-7 sm:p-9 lg:p-10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]"
            style={{ backgroundColor: "#e2e4b0" }}
            data-testid="enquiry-form-card"
          >
            <h2
              data-testid="enquiry-title"
              className="font-display text-[#0c2a20] text-2xl sm:text-3xl lg:text-[34px] tracking-tight font-bold"
            >
              ENQUIRE NOW
            </h2>
            <p className="text-[#0c2a20]/85 text-base sm:text-lg mt-3 mb-7 max-w-[420px] leading-relaxed">
              Please enter the details below to get in touch with us!
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center"
                data-testid="enquiry-success"
              >
                <CheckCircle2
                  size={56}
                  className="text-[#0c2a20] mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <h4 className="font-display text-2xl text-[#0c2a20] mb-2">
                  Thank you!
                </h4>
                <p className="text-[#0c2a20]/75">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="space-y-4 sm:space-y-5"
                data-testid="enquiry-form"
              >
                {/* Name */}
                <input
                  required
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="enq-input"
                  data-testid="enquiry-input-name"
                />

                {/* Phone with country flag */}
                <div className="enq-input flex items-center gap-2 p-0 overflow-hidden">
                  <div className="flex items-center gap-1 pl-4 pr-2 py-3 border-r border-[#0c2a20]/30 select-none">
                    <span className="text-xl leading-none" aria-hidden="true">
                      🇮🇳
                    </span>
                    <ChevronDown
                      size={14}
                      className="text-[#0c2a20]"
                      strokeWidth={2}
                    />
                  </div>
                  <input
                    required
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="flex-1 bg-transparent border-0 outline-none py-3 pr-4 text-[#0c2a20] placeholder-[#0c2a20]/55 text-base"
                    data-testid="enquiry-input-phone"
                  />
                </div>

                {/* Email */}
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="enq-input"
                  data-testid="enquiry-input-email"
                />

                {/* Comments */}
                <input
                  type="text"
                  placeholder="Comments"
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  className="enq-input"
                  data-testid="enquiry-input-msg"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#0c2a20] text-[#e2e4b0] py-4 mt-2 font-display tracking-wide text-lg sm:text-xl hover:bg-[#0a2018] transition-colors"
                  data-testid="enquiry-submit"
                >
                  ENQUIRE NOW
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .enq-input {
          width: 100%;
          background: transparent;
          border: 1.5px solid rgba(12, 42, 32, 0.55);
          color: #0c2a20;
          padding: 14px 18px;
          border-radius: 14px;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          font-family: inherit;
          font-size: 16px;
        }
        .enq-input::placeholder {
          color: rgba(12, 42, 32, 0.55);
        }
        .enq-input:focus {
          border-color: #0c2a20;
          box-shadow: 0 0 0 3px rgba(12, 42, 32, 0.12);
        }
      `}</style>
    </section>
  );
}
