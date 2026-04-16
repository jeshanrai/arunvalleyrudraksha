"use client";

import { RevealOnScroll, useMouseGlow } from "./useReveal";

const facts = [
  {
    num: "01",
    title: "World\u2019s Deepest Valley",
    text: "The Arun Valley drops to 435m above sea level \u2014 the deepest valley on Earth relative to the peaks flanking it. This extreme altitude gradient creates a unique microclimate producing denser, higher-conductivity beads.",
    icon: "\u26F0",
    span: "large",
  },
  {
    num: "02",
    title: "Between Two Giants",
    text: "Nestled between Mount Everest (8,849m) and Mount Makalu (8,463m) \u2014 the 1st and 5th highest mountains on Earth.",
    icon: "\u23F3",
    span: "small",
  },
  {
    num: "03",
    title: "Extraordinary Biodiversity",
    text: "Home to over 650 bird species and 800 butterfly species. Rudraksha trees thrive in this pristine wilderness.",
    icon: "\u2618",
    span: "small",
  },
  {
    num: "04",
    title: "Ancient Cultural Heritage",
    text: "Sherpa, Rai, Limbu, and Gurung communities have cultivated Rudraksha for centuries. The bead is not a product here \u2014 it is heritage.",
    icon: "\u0950",
    span: "small",
  },
  {
    num: "05",
    title: "Protected Sacred Land",
    text: "Within Makalu-Barun National Park \u2014 untouched by pollution, sacred by both law and centuries of tradition. Where the world\u2019s finest Rudraksha has grown undisturbed for generations.",
    icon: "\u2728",
    span: "large",
  },
];

function BentoCard({ fact, large, delay }) {
  const handleMouse = useMouseGlow();

  return (
    <RevealOnScroll delay={delay}>
      <div
        className={`bento-card card-glow p-6 sm:p-8 lg:p-10 h-full group ${
          large ? "flex flex-col justify-between" : ""
        }`}
        onMouseMove={handleMouse}
      >
        {/* Header row */}
        <div className="flex items-start justify-between mb-5 sm:mb-6">
          <span
            className={`font-heading tracking-wider leading-none text-gold/[0.08] group-hover:text-gold/[0.15] transition-colors duration-700 ${
              large
                ? "text-[3.5rem] sm:text-[4.5rem]"
                : "text-[2.5rem] sm:text-[3rem]"
            }`}
          >
            {fact.num}
          </span>
          <span className="text-[1.2rem] sm:text-[1.6rem] opacity-20 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
            {fact.icon}
          </span>
        </div>

        {/* Content */}
        <div>
          <h3
            className={`font-heading text-gold tracking-[0.08em] uppercase mb-3 group-hover:tracking-[0.12em] transition-all duration-500 ${
              large
                ? "text-[1rem] sm:text-[1.1rem]"
                : "text-[0.85rem] sm:text-[0.95rem]"
            }`}
          >
            {fact.title}
          </h3>

          {/* Accent line */}
          <div className="w-8 h-px bg-gold/20 mb-4 group-hover:w-14 transition-all duration-500" />

          <p
            className={`text-cream-muted/75 leading-relaxed ${
              large ? "text-[15px] sm:text-[16px]" : "text-[13px] sm:text-[14px]"
            }`}
          >
            {fact.text}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function Origin() {
  return (
    <section
      id="origin"
      className="py-16 sm:py-28 px-4 sm:px-6 bg-bg-light relative overflow-hidden"
    >
      {/* Decorative bg element */}
      <div className="absolute top-20 right-0 text-[10rem] sm:text-[20rem] font-serif text-gold/[0.015] leading-none pointer-events-none select-none">
        \u0950
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header — left-aligned */}
        <RevealOnScroll className="mb-12 sm:mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-heading text-[10px] tracking-[0.25em] uppercase text-gold/80 block mb-4">
                Our Origin
              </span>
              <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-normal text-cream tracking-[0.04em] uppercase mb-5">
                Why Arun Valley
                <br />
                Is Different
              </h2>
              <div className="section-divider" />
            </div>
            <p className="text-[1rem] italic text-cream-muted/70 max-w-md leading-relaxed md:text-right">
              Geographic origin is the single most important factor in Rudraksha
              authenticity, potency, and long-term value.
            </p>
          </div>
        </RevealOnScroll>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          {/* Card 01 — Large left */}
          <div className="md:col-span-7 md:row-span-2">
            <BentoCard fact={facts[0]} large delay={0} />
          </div>

          {/* Card 02 — Small right top */}
          <div className="md:col-span-5">
            <BentoCard fact={facts[1]} delay={100} />
          </div>

          {/* Card 03 — Small right bottom */}
          <div className="md:col-span-5">
            <BentoCard fact={facts[2]} delay={200} />
          </div>

          {/* Card 04 — Small left */}
          <div className="md:col-span-5">
            <BentoCard fact={facts[3]} delay={300} />
          </div>

          {/* Card 05 — Large right */}
          <div className="md:col-span-7">
            <BentoCard fact={facts[4]} large delay={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
