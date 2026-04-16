"use client";

import { RevealOnScroll, useMouseGlow } from "./useReveal";

const zodiacData = [
  { symbol: "\u2648", name: "Aries", planet: "Mars", mukhi: "3 Mukhi", benefit: "Courage, energy" },
  { symbol: "\u2649", name: "Taurus", planet: "Venus", mukhi: "6 Mukhi", benefit: "Stability, prosperity" },
  { symbol: "\u264A", name: "Gemini", planet: "Mercury", mukhi: "4 Mukhi", benefit: "Communication, focus" },
  { symbol: "\u264B", name: "Cancer", planet: "Moon", mukhi: "2 Mukhi", benefit: "Emotional balance" },
  { symbol: "\u264C", name: "Leo", planet: "Sun", mukhi: "1 Mukhi", benefit: "Leadership, power" },
  { symbol: "\u264D", name: "Virgo", planet: "Mercury", mukhi: "4 Mukhi", benefit: "Analytical precision" },
  { symbol: "\u264E", name: "Libra", planet: "Venus", mukhi: "6 Mukhi", benefit: "Balance, creativity" },
  { symbol: "\u264F", name: "Scorpio", planet: "Mars", mukhi: "3 Mukhi", benefit: "Transformation" },
  { symbol: "\u2650", name: "Sagittarius", planet: "Jupiter", mukhi: "5 Mukhi", benefit: "Wisdom, growth" },
  { symbol: "\u2651", name: "Capricorn", planet: "Saturn", mukhi: "7 Mukhi", benefit: "Discipline, wealth" },
  { symbol: "\u2652", name: "Aquarius", planet: "Saturn", mukhi: "7 Mukhi", benefit: "Innovation" },
  { symbol: "\u2653", name: "Pisces", planet: "Jupiter", mukhi: "5 Mukhi", benefit: "Intuition, depth" },
];

function ZodiacCard({ item, index }) {
  const handleMouse = useMouseGlow();

  return (
    <RevealOnScroll delay={index * 50}>
      <a
        href={`https://wa.me/9779860149199?text=I%20am%20${item.name}.%20Tell%20me%20about%20${encodeURIComponent(item.mukhi)}%20Rudraksha.`}
        target="_blank"
        rel="noopener noreferrer"
        className="card-glow block border border-cream-border/60 bg-bg-card p-6 lg:p-7 text-center group hover:border-gold/30 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(201,168,76,0.06)] transition-all duration-500 no-underline"
        onMouseMove={handleMouse}
      >
        <span className="text-[2.2rem] block mb-3 group-hover:scale-110 transition-transform duration-500">
          {item.symbol}
        </span>
        <div className="font-heading text-[11px] tracking-[0.12em] uppercase text-gold mb-1">
          {item.name}
        </div>
        <div className="text-[11px] text-cream-muted/40 mb-3">{item.planet}</div>
        <div className="w-8 h-px bg-gold/20 mx-auto mb-3" />
        <div className="text-[14px] text-cream italic mb-1">{item.mukhi}</div>
        <div className="text-[11px] text-cream-muted/60">{item.benefit}</div>
      </a>
    </RevealOnScroll>
  );
}

export default function Zodiac() {
  return (
    <section id="zodiac" className="py-28 px-6 bg-bg-light relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-dashed border-gold/[0.04] pointer-events-none animate-slow-spin" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <RevealOnScroll className="mb-20 text-center">
          <span className="font-heading text-[10px] tracking-[0.25em] uppercase text-gold/80 block mb-4">
            Vedic Wisdom
          </span>
          <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-normal text-cream tracking-[0.04em] uppercase mb-5">
            Your Zodiac, Your Rudraksha
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-[1.05rem] italic text-cream-muted/80 max-w-lg mx-auto leading-relaxed">
            Ancient Vedic wisdom maps every zodiac sign to a specific Mukhi for
            maximum spiritual and planetary benefit.
          </p>
        </RevealOnScroll>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {zodiacData.map((item, i) => (
            <ZodiacCard key={item.name} item={item} index={i} />
          ))}
        </div>

        <RevealOnScroll className="flex justify-center mt-14">
          <a
            href="https://wa.me/9779860149199?text=Hello%2C%20I%20need%20a%20personalized%20Rudraksha%20recommendation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 bg-gold text-bg px-8 py-4 font-heading text-[11px] tracking-[0.14em] uppercase font-semibold hover:bg-cream hover:shadow-[0_0_30px_rgba(201,168,76,0.2)] transition-all duration-300"
          >
            Get Personalized Guidance
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
