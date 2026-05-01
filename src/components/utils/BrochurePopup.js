import { useState } from "react";
import { X } from "lucide-react";

export default function BrochurePopup() {
  const [open, setOpen] = useState(true);
  

  if (!open) return null;
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 modal-enter">
      {/* Modal */}
      <div className="relative w-full max-w-md glass rounded-2xl p-8 border border-sage/20">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-sage/30 flex items-center justify-center text-sage/70 hover:text-gold hover:border-gold transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="eyebrow mb-3">Exclusive Opportunity</div>
          
          <h2 className="font-display text-3xl text-sage leading-tight">
            Get the Full <br />
            Investment Brochure
          </h2>

          <div className="w-10 h-[2px] bg-gold mt-3"></div>

          <p className="text-sage/60 text-sm mt-4 leading-relaxed">
            Leave your details and our investment advisor will connect with you
            within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Full Name *"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-sage/20 text-sage placeholder:text-sage/40 focus:outline-none focus:border-gold transition"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="tel"
              placeholder="Phone Number *"
              className="px-4 py-3 rounded-lg bg-transparent border border-sage/20 text-sage placeholder:text-sage/40 focus:outline-none focus:border-gold transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 rounded-lg bg-transparent border border-sage/20 text-sage placeholder:text-sage/40 focus:outline-none focus:border-gold transition"
            />
          </div>

          <input
            type="text"
            placeholder="I'm interested in..."
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-sage/20 text-sage placeholder:text-sage/40 focus:outline-none focus:border-gold transition"
          />

          {/* CTA */}
          <button className="w-full mt-2 btn-primary justify-center">
            REQUEST CALLBACK →
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-[11px] text-sage/40 text-center mt-5 leading-relaxed">
          By submitting, you agree to be contacted by our team. Your information
          is safe with us and will not be shared.
        </p>
      </div>
    </div>
  );
}