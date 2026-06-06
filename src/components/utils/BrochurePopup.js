import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

export default function BrochurePopup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm px-3 sm:px-4">
      {/* Modal */}
      <div
        className="
          relative

          w-full
          max-w-[360px]
          sm:max-w-[420px]
          md:max-w-[520px]

          bg-[#14382D]

          rounded-[22px]
          sm:rounded-[28px]

          px-5
          py-5
          sm:px-[30px]
          sm:py-[28px]

          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        "
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute
            top-3
            right-3
            sm:top-4
            sm:right-4

            w-9
            h-9
            sm:w-10
            sm:h-10

            rounded-full
            bg-[#D9DCB1]

            flex
            items-center
            justify-center

            hover:opacity-90
            transition
          "
        >
          <X
            size={20}
            className="text-[#14382D]"
            strokeWidth={2.5}
          />
        </button>

        {/* Heading */}
        <h2
          className="
            text-[#D9DCB1]
            text-[20px]
            sm:text-[24px]
            font-bold
            uppercase
            leading-none
            mb-3
          "
        >
          ENQUIRE NOW
        </h2>

        <p
          className="
            text-white
            text-[14px]
            sm:text-[16px]
            leading-[1.45]
            mb-5
            sm:mb-6
            max-w-[380px]
          "
        >
          Please enter the details below to get in touch with us!
        </p>

        {/* Form */}
        <div className="space-y-3 sm:space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="
              w-full
              h-[48px]
              sm:h-[56px]

              rounded-[12px]
              sm:rounded-[14px]

              border
              border-[#D9DCB1]

              bg-transparent

              px-4

              text-white
              text-[15px]
              sm:text-[16px]

              placeholder:text-white/60
              outline-none
            "
          />

          {/* Phone */}
          <div
            className="
              h-[48px]
              sm:h-[56px]

              rounded-[12px]
              sm:rounded-[14px]

              border
              border-[#D9DCB1]

              flex
              items-center
              overflow-hidden
            "
          >
            <div className="flex items-center gap-1 px-4">
              <span className="text-[22px] sm:text-[28px]">🇮🇳</span>

              <ChevronDown
                size={14}
                className="text-[#D9DCB1]"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone"
              className="
                flex-1
                bg-transparent
                outline-none

                text-white
                text-[15px]
                sm:text-[16px]

                placeholder:text-white/60
                pr-4
              "
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="
              w-full
              h-[48px]
              sm:h-[56px]

              rounded-[12px]
              sm:rounded-[14px]

              border
              border-[#D9DCB1]

              bg-transparent

              px-4

              text-white
              text-[15px]
              sm:text-[16px]

              placeholder:text-white/60
              outline-none
            "
          />

          {/* Comments */}
          <input
            type="text"
            placeholder="Comments"
            className="
              w-full
              h-[48px]
              sm:h-[56px]

              rounded-[12px]
              sm:rounded-[14px]

              border
              border-[#D9DCB1]

              bg-transparent

              px-4

              text-white
              text-[15px]
              sm:text-[16px]

              placeholder:text-white/60
              outline-none
            "
          />

          {/* Button */}
          <button
            className="
              w-full

              h-[54px]
              sm:h-[62px]

              rounded-[12px]
              sm:rounded-[14px]

              bg-[#D9DCB1]

              text-[#14382D]

              text-[18px]
              sm:text-[22px]

              font-bold
              uppercase

              mt-1
              sm:mt-2

              hover:opacity-95
              transition
            "
          >
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </div>
  );
}