"use client";

import { RevealOnScroll, useMouseGlow } from "./useReveal";

const facts = [
  {
    num: "01",
    title: "World\u2019s Deepest Valley",
    text: "The Arun Valley drops to 435m above sea level \u2014 the deepest valley on Earth relative to the peaks flanking it. This extreme altitude gradient creates a unique microclimate producing denser, higher-conductivity beads.",
    icon: "\u26F0",
  },
  {
    num: "02",
    title: "Between Two Giants",
    text: "Nestled between Mount Everest (8,849m) and Mount Makalu (8,463m) \u2014 the 1st and 5th highest mountains on Earth. A corridor of extremes that no lower-altitude region can replicate.",
    icon: "\u23F3",
  },
  {
    num: "03",
    title: "Extraordinary Biodiversity",
    text: "Home to over 650 bird species and 800 butterfly species. Rudraksha trees thrive in this pristine wilderness, drawing nutrients from mineral-rich Himalayan soil untouched by industrial agriculture.",
    icon: "\u2618",
  },
  {
    num: "04",
    title: "Ancient Cultural Heritage",
    text: "Sherpa, Rai, Limbu, and Gurung communities have cultivated Rudraksha for centuries. The bead is not a product here \u2014 it is heritage, woven into daily spiritual practice.",
    icon: "\u0950",
  },
  {
    num: "05",
    title: "Protected Sacred Land",
    text: "Within Makalu-Barun National Park \u2014 untouched by pollution, sacred by both law and centuries of tradition. Where the world\u2019s finest Rudraksha has grown undisturbed for generations.",
    icon: "\u2728",
  },
];

export default function Origin() {
  const handleMouse = useMouseGlow();

  return (
    <section id="origin" className="py-28 px-6 bg-bg-light relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-20 right-0 text-[20rem] font-serif text-gold/[0.015] leading-none pointer-events-none select-none">
        \u0950
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <RevealOnScroll className="mb-20">
          <span className="font-heading text-[10px] tracking-[0.25em] uppercase text-gold/80 block mb-4">
            Our Origin
          </span>
          <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-normal text-cream tracking-[0.04em] uppercase mb-5">
            Why Arun Valley Is Different
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[1.05rem] italic text-cream-muted/80 max-w-xl leading-relaxed">
            Geographic origin is the single most important factor in Rudraksha
            authenticity, potency, and long-term value.
          </p>
        </RevealOnScroll>

        {/* Facts Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {facts.map((fact, i) => (
            <RevealOnScroll
              key={fact.num}
              delay={i * 80}
              className={i === facts.length - 1 ? "md:col-span-2 md:max-w-[calc(50%-10px)]" : ""}
            >
              <div
                className="card-glow border border-cream-border/80 bg-bg-card p-8 lg:p-10 h-full group hover:border-gold/30 hover:shadow-[0_0_40px_rgba(201,168,76,0.04)] transition-all duration-500"
                onMouseMove={handleMouse}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-heading text-[2.8rem] text-gold/[0.08] tracking-wider leading-none">
                    {fact.num}
                  </span>
                  <span className="text-[1.4rem] opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                    {fact.icon}
                  </span>
                </div>
                <h3 className="font-heading text-[0.95rem] text-gold tracking-[0.08em] uppercase mb-3 group-hover:tracking-[0.12em] transition-all duration-500">
                  {fact.title}
                </h3>
                <p className="text-[15px] text-cream-muted/80 leading-relaxed">
                  {fact.text}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
