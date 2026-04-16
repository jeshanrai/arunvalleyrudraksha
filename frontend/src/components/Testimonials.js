"use client";

import { useState, useEffect, useCallback } from "react";
import { RevealOnScroll } from "./useReveal";

const testimonials = [
  {
    quote: "The quality of Arun Valley Rudraksha is unmatched. The mukhi lines are sharp, the beads are dense \u2014 you can feel the difference the moment you hold one.",
    name: "Rajesh Sharma",
    role: "Wholesale Dealer, Haridwar",
  },
  {
    quote: "Direct sourcing from farming families gives us confidence in authenticity that no middleman chain can provide. Our customers trust the origin story.",
    name: "Priya Nair",
    role: "Spiritual Store Owner, Dubai",
  },
  {
    quote: "Video authentication before payment \u2014 that sealed the deal. Transparent, professional, and the beads arrived exactly as shown. Outstanding service.",
    name: "Michael Chen",
    role: "Collector, Singapore",
  },
  {
    quote: "We have been sourcing from Arun Valley for three seasons now. Consistent quality, fair pricing, and they understand wholesale logistics perfectly.",
    name: "Amit Patel",
    role: "Distributor, Varanasi",
  },
  {
    quote: "The 5 Mukhi mala I received is the most beautiful I have seen in 20 years of practice. The energy is palpably different from Javanese alternatives.",
    name: "Sarah Williams",
    role: "Yoga Teacher, London",
  },
];

function CompactCard({ t }) {
  return (
    <div className="border border-cream-border/30 bg-bg-card hover:border-gold/15 p-5 sm:p-6 transition-all duration-500 group h-full">
      <div className="text-gold text-[10px] tracking-[3px] mb-3 opacity-40 group-hover:opacity-60 transition-opacity">
        \u2605\u2605\u2605\u2605\u2605
      </div>
      <p className="text-[13px] italic text-cream-muted/70 leading-relaxed mb-4 line-clamp-3">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="w-6 h-px bg-gold/15 mb-3" />
      <div className="font-heading text-[10px] tracking-[0.1em] uppercase text-gold/80">
        {t.name}
      </div>
      <div className="text-[10px] text-cream-muted/35 mt-0.5">{t.role}</div>
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (index === activeIndex || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
      }, 300);
    },
    [activeIndex, isTransitioning]
  );

  // Auto-cycle
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((activeIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex, goTo]);

  const featured = testimonials[activeIndex];
  const compact = testimonials.filter((_, i) => i !== activeIndex).slice(0, 3);

  return (
    <section className="py-16 sm:py-28 px-4 sm:px-6 bg-bg-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-gold/[0.02] blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <RevealOnScroll className="mb-12 sm:mb-16 text-center">
          <span className="font-heading text-[10px] tracking-[0.25em] uppercase text-gold/80 block mb-4">
            Trusted Worldwide
          </span>
          <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-normal text-cream tracking-[0.04em] uppercase mb-5">
            What Our Partners Say
          </h2>
          <div className="section-divider mx-auto" />
        </RevealOnScroll>

        {/* Featured Quote */}
        <RevealOnScroll className="mb-10 sm:mb-14">
          <div className="glass-card p-8 sm:p-12 lg:p-16 max-w-3xl mx-auto text-center relative">
            {/* Large decorative quote */}
            <div className="font-heading text-[4rem] sm:text-[6rem] text-gold/[0.06] leading-none absolute top-4 left-6 sm:top-6 sm:left-10 pointer-events-none select-none">
              \u201C
            </div>

            <div
              className={`transition-all duration-300 ${
                isTransitioning
                  ? "opacity-0 translate-y-3"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <div className="text-gold text-[11px] tracking-[5px] mb-6 opacity-50">
                \u2605\u2605\u2605\u2605\u2605
              </div>

              <p className="text-[clamp(1rem,2vw,1.25rem)] italic text-cream/90 leading-relaxed mb-8">
                &ldquo;{featured.quote}&rdquo;
              </p>

              <div className="w-10 h-px bg-gold/25 mx-auto mb-5" />

              <div className="font-heading text-[11px] tracking-[0.14em] uppercase text-gold">
                {featured.name}
              </div>
              <div className="text-[12px] text-cream-muted/45 mt-1">
                {featured.role}
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2.5 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer border-none ${
                    i === activeIndex
                      ? "bg-gold w-6"
                      : "bg-cream-muted/20 hover:bg-cream-muted/40"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Compact cards row */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {compact.map((t) => (
              <CompactCard key={t.name} t={t} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
