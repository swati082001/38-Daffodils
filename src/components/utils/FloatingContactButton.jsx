import { useState } from "react";
import BrochurePopup from "./BrochurePopup";

export default function FloatingContactButton() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setShowPopup(true)}
                className="
    fixed
    right-0
    top-3/4
    -translate-y-1/2
    z-40

    h-[140px]
    w-[42px]

    md:h-[160px]
    md:w-[62px]

    bg-[#E6CF5A]
    text-[#14382D]

    rounded-l-[16px]
    md:rounded-l-[22px]

    flex
    items-center
    justify-center

    shadow-[0_8px_24px_rgba(0,0,0,0.18)]

    hover:brightness-95
    transition
  "
            >
                <span
                    className="
      text-[12px]
      md:text-[16px]
      font-medium
      whitespace-nowrap
      -rotate-90
      uppercase
    "
                >
                    Get In Touch
                </span>
            </button>

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