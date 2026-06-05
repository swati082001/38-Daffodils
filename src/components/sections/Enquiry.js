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

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);

    setForm({
      name: "",
      phone: "",
      email: "",
      msg: "",
    });
  };

  const fieldClass = `
    w-full
    h-[50px]
    rounded-[12px]
    border
    border-[#4D665B]
    bg-transparent
    px-4
    text-[16px]
    text-[#183B2D]
    placeholder:text-[#6F7D74]
    outline-none
    transition
    focus:border-[#183B2D]
  `;

  return (
    <section
      id="enquire"
      data-testid="enquiry-section"
      className="relative py-[75px] overflow-hidden"
      style={{
        backgroundImage: `url(${greenBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-[1040px] mx-auto px-4">
        {/* Desktop Layout */}
        <div
          className="
            hidden
            lg:grid
            grid-cols-[560px_400px]
            gap-[40px]
            justify-center
            items-center
          "
        >
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative
              overflow-hidden
              rounded-[24px]
              h-[485px]
            "
          >
            <img
              src={enquiryImage}
              alt="38 Daffodils Building"
              draggable={false}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-[#D9DCB1]
              rounded-[24px]
              px-[30px]
              pt-[22px]
              pb-[24px]
              h-[485px]
              flex
              flex-col
            "
          >
            <h2
              className="
                text-[#183B2D]
                text-[24px]
                font-semibold
                leading-none
                mb-[14px]
              "
            >
              ENQUIRE NOW
            </h2>

            <p
              className="
                text-[#183B2D]
                text-[16px]
                leading-[1.45]
                mb-[18px]
                max-w-[290px]
              "
            >
              Please enter the details below to get in touch with us!
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center flex-1">
                <CheckCircle2
                  size={60}
                  strokeWidth={1.5}
                  className="text-[#183B2D] mb-4"
                />

                <h3 className="text-[#183B2D] text-2xl font-semibold mb-2">
                  Thank You!
                </h3>

                <p className="text-[#183B2D]/70 text-center">
                  We'll get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-[18px]"
              >
                {/* Name */}
                <input
                  required
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className={fieldClass}
                />

                {/* Phone */}
                <div
                  className="
                    h-[50px]
                    rounded-[12px]
                    border
                    border-[#4D665B]
                    flex
                    items-center
                    overflow-hidden
                  "
                >
                  <div className="flex items-center gap-1 px-3">
                    <span className="text-[24px]">🇮🇳</span>

                    <ChevronDown
                      size={14}
                      className="text-[#183B2D]"
                    />
                  </div>

                  <input
                    required
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                    className="
                      flex-1
                      bg-transparent
                      outline-none
                      text-[#183B2D]
                      placeholder:text-[#6F7D74]
                      text-[16px]
                      pr-4
                    "
                  />
                </div>

                {/* Email */}
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className={fieldClass}
                />

                {/* Comments */}
                <input
                  type="text"
                  placeholder="Comments"
                  value={form.msg}
                  onChange={(e) =>
                    setForm({ ...form, msg: e.target.value })
                  }
                  className={fieldClass}
                />

                {/* Button */}
                <button
                  type="submit"
                  className="
                    w-full
                    h-[54px]
                    rounded-[12px]
                    bg-[#143B31]
                    text-[#D9DCB1]
                    text-[18px]
                    font-semibold
                    mt-[2px]
                    transition
                    hover:opacity-95
                  "
                >
                  ENQUIRE NOW
                </button>
              </form>
            )}
          </motion.div>
        </div>

{/* Mobile Layout */}
<div className="lg:hidden flex justify-center px-2">
  <div
    className="
      bg-[#D9DCB1]
      rounded-[24px]
      w-full
      max-w-[360px]
      px-3
      pt-4
      pb-4
    "
  >
    <h2
      className="
        text-[#183B2D]
        text-[20px]
        font-semibold
        mb-3
      "
    >
      ENQUIRE NOW
    </h2>

    <p
      className="
        text-[#183B2D]
        text-[12px]
        leading-[1.4]
        mb-3
      "
    >
      Please enter the details below to get in touch with us!
    </p>

    {submitted ? (
      <div className="flex flex-col items-center justify-center py-2">
        <CheckCircle2
          size={54}
          strokeWidth={1.5}
          className="text-[#183B2D] mb-3"
        />

        <h3 className="text-[#183B2D] text-xl font-semibold mb-2">
          Thank You!
        </h3>

        <p className="text-[#183B2D]/70 text-center text-sm">
          We'll get in touch with you shortly.
        </p>
      </div>
    ) : (
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4"
      >
        {/* Name */}
        <input
          required
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="
            h-[52px]
            rounded-[12px]
            border
            border-[#183B2D]
            bg-transparent
            px-4
            text-[16px]
            text-[#183B2D]
            placeholder:text-[#6F7D74]
            outline-none
          "
        />

        {/* Phone */}
        <div
          className="
            h-[52px]
            rounded-[12px]
            border
            border-[#183B2D]
            flex
            items-center
            overflow-hidden
          "
        >
          <div className="flex items-center gap-1 px-4">
            <span className="text-[22px]">🇮🇳</span>

            <ChevronDown
              size={14}
              className="text-[#183B2D]"
            />
          </div>

          <input
            required
            type="tel"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className="
              flex-1
              bg-transparent
              outline-none
              text-[#183B2D]
              placeholder:text-[#6F7D74]
              text-[16px]
              pr-4
            "
          />
        </div>

        {/* Email */}
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="
            h-[52px]
            rounded-[12px]
            border
            border-[#183B2D]
            bg-transparent
            px-4
            text-[16px]
            text-[#183B2D]
            placeholder:text-[#6F7D74]
            outline-none
          "
        />

        {/* Comments */}
        <input
          type="text"
          placeholder="Comments"
          value={form.msg}
          onChange={(e) =>
            setForm({ ...form, msg: e.target.value })
          }
          className="
            h-[52px]
            rounded-[12px]
            border
            border-[#183B2D]
            bg-transparent
            px-4
            text-[16px]
            text-[#183B2D]
            placeholder:text-[#6F7D74]
            outline-none
          "
        />

        {/* Button */}
        <button
          type="submit"
          className="
            h-[56px]
            rounded-[12px]
            bg-[#143B31]
            text-[#D9DCB1]
            text-[18px]
            font-semibold
            mt-1
          "
        >
          ENQUIRE NOW
        </button>
      </form>
    )}
  </div>
</div>
      </div>
    </section>
  );
}
