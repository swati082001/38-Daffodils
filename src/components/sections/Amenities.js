import React from "react";
import { motion } from "framer-motion";
import cafeteria from "../../assets/cafeteria.png"
import games from "../../assets/games.png"
import lounge from "../../assets/lounges.png"
import theatre from "../../assets/theatre.png"
import gym from "../../assets/Gym.png"


const amenities = [
  { key: "lounge", title: "Co-working Lounge", desc: "Hi-speed WiFi & private pods" },
  { key: "cafeteria", title: "Caféteria", desc: "On-property F&B" },
  { key: "gym", title: "Modern Gym", desc: "Premium equipment & trainer" },
  { key: "games", title: "Indoor games", desc: "Fun Activities" },
  { key: "theatre", title: "Theatre Room", desc: "Movies & Shows" },
];

export const AMENITY_IMAGES = {
  lounge:lounge,
  cafeteria:cafeteria,
  gym:gym,
  games:games,
  theatre:theatre

};

const cardAnim = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
};

function AmenityCard({ amenity, index }) {
  const { key, title, desc } = amenity;

  return (
    <motion.div
      custom={index}
      variants={cardAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
      data-testid={`amenity-${key}`}
    >
      <img
        src={AMENITY_IMAGES[key]}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0c2a20] via-[#0c2a20]/40 to-transparent" />

      <div className="absolute bottom-0 w-full p-5 lg:p-6">
        <h3 className="font-display text-xl lg:text-2xl text-[#e2e4b0] mb-1">
          {title}
        </h3>

        <p className="text-[#e2e4b0]/70 text-xs lg:text-sm">{desc}</p>

        <div className="h-px w-8 bg-[#fed04f] mt-3 transition-all duration-500 group-hover:w-16" />
      </div>
    </motion.div>
  );
}

export default function Amenities() {
  return (
    <section className="relative section-forest py-24 lg:py-32 overflow-hidden grain">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#fed04f] text-xs lg:text-sm font-bold tracking-[0.4em] uppercase">
            Curated for You
          </span>

          <h2 className="font-display text-[#e2e4b0] text-5xl md:text-6xl lg:text-7xl mt-4 leading-[1] font-light">
            Amenities that
            <br />
            <span className="italic shimmer-gold">
              elevate everyday living
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {amenities.map((a, i) => (
            <AmenityCard key={a.key} amenity={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}