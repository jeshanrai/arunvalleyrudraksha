"use client";

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

// Duplicate for seamless loop
const marqueeItems = [...testimonials, ...testimonials];

function TestimonialCard({ t }) {
  return (
    <div className="min-w-[320px] max-w-[360px] border border-cream-border/50 bg-bg-card p-8 lg:p-9 shrink-0 group hover:border-gold/20 transition-all duration-500">
      {/* Large quote mark */}
      <div className="font-heading text-[3rem] text-gold/10 leading-none mb-2">\u201C</div>
      <div className="text-gold text-[12px] tracking-[4px] mb-4 opacity-60">
        \u2605\u2605\u2605\u2605\u2605
      </div>
      <p className="text-[15px] italic text-cream-muted/80 leading-relaxed mb-6">
        {t.quote}
      </p>
      <div className="w-8 h-px bg-gold/20 mb-4" />
      <div className="font-heading text-[10px] tracking-[0.12em] uppercase text-gold">
        {t.name}
      </div>
      <div className="text-[11px] text-cream-muted/40 mt-1">{t.role}</div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-bg-light relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <RevealOnScroll className="mb-14 text-center">
          <span className="font-heading text-[10px] tracking-[0.25em] uppercase text-gold/80 block mb-4">
            Trusted Worldwide
          </span>
          <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-normal text-cream tracking-[0.04em] uppercase mb-5">
            What Our Partners Say
          </h2>
          <div className="section-divider mx-auto" />
        </RevealOnScroll>
      </div>

      {/* Infinite Marquee - full width */}
      <RevealOnScroll>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-light to-transparent z-10 pointer-events-none" />

          <div className="flex gap-5 animate-marquee w-max">
            {marqueeItems.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
