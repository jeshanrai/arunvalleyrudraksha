"use client";

const items = [
  "Farm-Direct Supply",
  "Authentic Nepal Origin",
  "Lab Certified",
  "30+ Countries Served",
  "Between Everest & Makalu",
  "Sacred Cultural Heritage",
  "1,500–3,000m Altitude",
  "All Mukhi Varieties",
  "Video Authentication",
  "Ethical & Sustainable",
];

function MarqueeItem({ text }) {
  return (
    <span className="flex items-center gap-6 sm:gap-8 shrink-0 px-2 sm:px-3">
      <span className="font-heading text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-bg whitespace-nowrap">
        {text}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-bg/40 shrink-0" />
    </span>
  );
}

export default function MarqueeBand() {
  const doubled = [...items, ...items];

  return (
    <div className="relative z-20 bg-gradient-to-r from-gold via-gold-bright to-gold overflow-hidden py-3.5 sm:py-4">
      <div className="flex animate-marquee-fast w-max">
        {doubled.map((item, i) => (
          <MarqueeItem key={`${item}-${i}`} text={item} />
        ))}
      </div>
    </div>
  );
}
