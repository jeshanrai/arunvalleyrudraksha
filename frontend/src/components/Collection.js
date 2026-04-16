"use client";

import { useState, useRef, useEffect } from "react";
import { RevealOnScroll, useMouseGlow } from "./useReveal";

const mukhiData = [
  { mukhi: "1 Mukhi", deity: "Lord Shiva", planet: "Sun", benefit: "Moksha, supreme consciousness", desc: "The rarest and most revered \u2014 considered the physical form of Lord Shiva himself. Bestower of moksha and spiritual enlightenment.", rarity: "Ultra Rare", num: "1" },
  { mukhi: "2 Mukhi", deity: "Ardhanarishwara", planet: "Moon", benefit: "Unity, emotional balance", desc: "The divine union of Shiva and Shakti. Brings emotional stability, resolves discord, and harmonizes relationships.", num: "2" },
  { mukhi: "3 Mukhi", deity: "Agni", planet: "Mars", benefit: "Karma release, vitality", desc: "Represents the Fire God. Burns away accumulated past-life karma, frees from guilt, self-doubt, and lethargy.", num: "3" },
  { mukhi: "4 Mukhi", deity: "Lord Brahma", planet: "Mercury", benefit: "Intelligence, creativity", desc: "The bead of knowledge and eloquence. Enhances memory, speech clarity, and creative intelligence.", num: "4" },
  { mukhi: "5 Mukhi", deity: "Pancha Bhoota", planet: "Jupiter", benefit: "Overall wellness", desc: "The most universally recommended bead. Balances all five elements, regulates blood pressure, and promotes holistic well-being.", rarity: "Most Common", num: "5" },
  { mukhi: "6 Mukhi", deity: "Lord Kartikeya", planet: "Venus", benefit: "Willpower, immunity", desc: "The bead of discipline and martial focus. Builds mental clarity, physical vitality, and immune strength.", num: "6" },
  { mukhi: "7 Mukhi", deity: "Goddess Lakshmi", planet: "Saturn", benefit: "Wealth, prosperity", desc: "Direct manifestation of Goddess Mahalakshmi. Eliminates poverty consciousness and attracts financial growth.", num: "7" },
  { mukhi: "8 Mukhi", deity: "Lord Ganesha", planet: "Rahu", benefit: "Obstacle removal", desc: "Sacred to the Remover of Obstacles. Clears blocked pathways in career, legal matters, and financial ventures.", num: "8" },
  { mukhi: "9 Mukhi", deity: "Goddess Durga", planet: "Ketu", benefit: "Courage, fearlessness", desc: "Embodies Durga\u2019s nine forms. Grants protection against known and unknown threats, burns through fear at its root.", num: "9" },
  { mukhi: "10 Mukhi", deity: "Lord Vishnu", planet: "All", benefit: "Protection, peace", desc: "The protective shield of Lord Vishnu. Pacifies all nine planetary defects simultaneously.", num: "10" },
  { mukhi: "11 Mukhi", deity: "Eleven Rudras", planet: "All", benefit: "Strength, power", desc: "Channels the eleven forms of Rudra and Lord Hanuman. Bestows extraordinary physical strength and mental endurance.", num: "11" },
  { mukhi: "14 Mukhi", deity: "Shiva\u2019s Third Eye", planet: "Saturn", benefit: "Intuition, foresight", desc: "Awakens the Ajna chakra. Grants supernatural intuition, foresight, and divine protection. Among the rarest found.", rarity: "Extremely Rare", num: "14" },
  { mukhi: "Gauri Shankar", deity: "Shiva-Parvati", planet: "Moon", benefit: "Relationship harmony", desc: "Two naturally fused beads representing the inseparable union of Shiva and Parvati. Supreme for marital harmony.", rarity: "Rare", num: "GS" },
];

function CollectionCard({ item, index, isActive, onClick }) {
  const handleMouse = useMouseGlow();

  return (
    <RevealOnScroll delay={index * 40}>
      <button
        onClick={onClick}
        className={`collection-card card-glow w-full text-left p-5 sm:p-6 lg:p-7 group cursor-pointer ${
          isActive ? "active" : ""
        }`}
        onMouseMove={handleMouse}
      >
        {/* Large decorative number */}
        <div className="card-number font-heading mb-3">{item.num}</div>

        {/* Mukhi name */}
        <h3 className="font-heading text-[11px] sm:text-[12px] tracking-[0.1em] uppercase text-cream mb-1.5 group-hover:text-gold transition-colors duration-300">
          {item.mukhi}
        </h3>

        {/* Deity */}
        <div className="text-[12px] sm:text-[13px] text-cream-muted/60 italic mb-3">
          {item.deity}
        </div>

        {/* Divider */}
        <div className="w-6 h-px bg-gold/15 mb-3 group-hover:w-10 group-hover:bg-gold/30 transition-all duration-500" />

        {/* Planet & Benefit */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[9px] tracking-[0.08em] uppercase text-gold/50 border border-gold/15 px-2 py-0.5">
            {item.planet}
          </span>
          {item.rarity && (
            <span className="text-[9px] tracking-[0.08em] uppercase text-gold/70 border border-gold/25 px-2 py-0.5 bg-gold/[0.04]">
              {item.rarity}
            </span>
          )}
        </div>

        {/* Benefit on hover */}
        <div className="text-[11px] text-cream-muted/50 mt-3 line-clamp-1">
          {item.benefit}
        </div>
      </button>
    </RevealOnScroll>
  );
}

function DetailPanel({ item, isOpen }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.scrollHeight);
  }, [isOpen, item]);

  return (
    <div
      className="detail-panel col-span-full"
      style={{
        maxHeight: isOpen ? height + 40 : 0,
        opacity: isOpen ? 1 : 0,
        marginTop: isOpen ? "0" : "-8px",
      }}
    >
      <div ref={ref} className="py-6 sm:py-8">
        <div className="glass-card-gold p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start">
            {/* Left: Large number */}
            <div className="hidden sm:block">
              <span className="font-heading text-[4rem] lg:text-[5rem] text-gold/20 leading-none">
                {item?.num}
              </span>
            </div>

            {/* Right: Content */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-heading text-[1rem] sm:text-[1.15rem] text-gold tracking-[0.1em] uppercase">
                  {item?.mukhi}
                </h3>
                {item?.rarity && (
                  <span className="text-[9px] tracking-[0.1em] uppercase text-gold/80 border border-gold/30 px-2 py-0.5 bg-gold/[0.06]">
                    {item.rarity}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 mb-4 text-[13px] text-cream-muted/50">
                <span>
                  <span className="text-cream-muted/30">Deity:</span>{" "}
                  <span className="text-cream-muted/70 italic">{item?.deity}</span>
                </span>
                <span className="w-1 h-1 rounded-full bg-cream-muted/20" />
                <span>
                  <span className="text-cream-muted/30">Planet:</span>{" "}
                  <span className="text-cream-muted/70">{item?.planet}</span>
                </span>
              </div>

              <div className="w-10 h-px bg-gold/20 mb-4" />

              <p className="text-[14px] sm:text-[15px] text-cream-muted/75 leading-relaxed mb-5 max-w-xl">
                {item?.desc}
              </p>

              <div className="flex items-center gap-3 text-[12px] text-gold/70 italic mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                {item?.benefit}
              </div>

              <a
                href={`https://wa.me/9779860149199?text=Hello%2C%20I%20want%20to%20know%20about%20${encodeURIComponent(item?.mukhi || "")}%20Rudraksha.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-2 font-heading text-[10px] tracking-[0.12em] uppercase text-gold border border-gold/60 px-5 py-2.5 hover:bg-gold hover:text-bg transition-all duration-300"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Ask About This Bead
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Collection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="collection"
      className="py-16 sm:py-28 px-4 sm:px-6 bg-bg relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-gold/[0.02] blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-gold/[0.015] blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <RevealOnScroll className="mb-12 sm:mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-heading text-[10px] tracking-[0.25em] uppercase text-gold/80 block mb-4">
                The Collection
              </span>
              <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-normal text-cream tracking-[0.04em] uppercase mb-5">
                Complete Mukhi Guide
              </h2>
              <div className="section-divider" />
            </div>
            <p className="text-[1rem] italic text-cream-muted/70 max-w-md leading-relaxed md:text-right">
              Each bead is defined by its natural faces. Select any to learn
              about its spiritual significance.
            </p>
          </div>
        </RevealOnScroll>

        {/* Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {mukhiData.map((item, i) => (
            <CollectionCard
              key={item.mukhi}
              item={item}
              index={i}
              isActive={activeIndex === i}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Detail Panel */}
        <DetailPanel
          item={activeIndex !== null ? mukhiData[activeIndex] : null}
          isOpen={activeIndex !== null}
        />

        {/* Bottom CTA */}
        <RevealOnScroll className="flex justify-center mt-10 sm:mt-14">
          <a
            href="https://wa.me/9779860149199?text=Hello%2C%20I%20need%20help%20choosing%20the%20right%20Rudraksha."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 border border-gold/60 text-gold px-5 sm:px-8 py-3.5 sm:py-4 font-heading text-[10px] sm:text-[11px] tracking-[0.14em] uppercase hover:bg-gold hover:text-bg hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-300 text-center"
          >
            Need Help Choosing? Ask Our Expert
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
