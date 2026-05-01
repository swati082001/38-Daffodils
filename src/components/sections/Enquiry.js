import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Send, CheckCircle2 } from "lucide-react";


export default function MapEnquiry() {
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

    setForm({
      name: "",
      phone: "",
      email: "",
      msg: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative section-forest py-24 lg:py-32 overflow-hidden grain"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#fed04f] text-xs lg:text-sm font-bold tracking-[0.4em] uppercase">
            Get in Touch
          </span>

          <h2 className="font-display text-[#e2e4b0] text-5xl md:text-6xl lg:text-7xl mt-4 leading-[1] font-light">
            Visit. Enquire.{" "}
            <span className="italic shimmer-gold">Invest.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden border border-[#fed04f]/20 min-h-[500px]"
          >
            <iframe
              title="38 Daffodils Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d73.7836!3d18.5599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBaner%2C%20Pune!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(0.9) hue-rotate(140deg) saturate(0.6)",
              }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />

            {/* Location Tag */}
            <div className="absolute top-6 left-6 bg-[#0c2a20] text-[#e2e4b0] px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl">
              <MapPin className="text-[#fed04f]" size={20} />
              <div>
                <div className="text-xs text-[#fed04f] uppercase tracking-widest font-bold">
                  38 Daffodils
                </div>
                <div className="text-sm">
                  Pancard Club Rd, Baner, Pune
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 lg:p-10"
          >
            <h3 className="font-display text-3xl text-[#e2e4b0] mb-2">
              Enquire Now
            </h3>

            <p className="text-[#e2e4b0]/60 text-sm mb-8">
              Drop your details — our investment advisor will reach out shortly.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
                data-testid="enquiry-success"
              >
                <CheckCircle2
                  size={56}
                  className="text-[#fed04f] mx-auto mb-4"
                />

                <h4 className="font-display text-2xl text-[#e2e4b0] mb-2">
                  Thank you!
                </h4>

                <p className="text-[#e2e4b0]/70">
                  We'll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="space-y-5"
                data-testid="enquiry-form"
              >
                <Field label="Full Name" id="enquiry-name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="form-input"
                    data-testid="enquiry-input-name"
                  />
                </Field>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone" id="enquiry-phone">
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="form-input"
                      data-testid="enquiry-input-phone"
                    />
                  </Field>

                  <Field label="Email" id="enquiry-email">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="form-input"
                      data-testid="enquiry-input-email"
                    />
                  </Field>
                </div>

                <Field label="Message (optional)" id="enquiry-msg">
                  <textarea
                    rows="3"
                    value={form.msg}
                    onChange={(e) =>
                      setForm({ ...form, msg: e.target.value })
                    }
                    className="form-input resize-none"
                    data-testid="enquiry-input-msg"
                  />
                </Field>

                <button
                  type="submit"
                  className="btn-gold w-full justify-center mt-2"
                  data-testid="enquiry-submit"
                >
                  Send Enquiry <Send size={16} />
                </button>
              </form>
            )}

          </motion.div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .form-input {
          width: 100%;
          background: rgba(226,228,176,0.05);
          border: 1px solid rgba(226,228,176,0.15);
          color: #e2e4b0;
          padding: 12px 16px;
          border-radius: 12px;
          outline: none;
          transition: all 0.3s;
          font-family: inherit;
          font-size: 15px;
        }

        .form-input:focus {
          border-color: #fed04f;
          background: rgba(254,208,79,0.05);
        }

        .form-input::placeholder {
          color: rgba(226,228,176,0.4);
        }
      `}</style>
    </section>
  );
}

/* Field Component */
const Field = ({ label, id, children }) => (
  <label htmlFor={id} className="block">
    <span className="text-[#e2e4b0]/70 text-xs uppercase tracking-widest font-semibold mb-2 inline-block">
      {label}
    </span>
    {children}
  </label>
);