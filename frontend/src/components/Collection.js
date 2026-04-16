"use client";

import { useState, useRef, useEffect } from "react";
import { RevealOnScroll } from "./useReveal";

const mukhiData = [
  { mukhi: "1 Mukhi", deity: "Lord Shiva", planet: "Sun", benefit: "Moksha, supreme consciousness", desc: "The rarest and most revered \u2014 considered the physical form of Lord Shiva himself. Bestower of moksha and spiritual enlightenment.", rarity: "Ultra Rare" },
  { mukhi: "2 Mukhi", deity: "Ardhanarishwara", planet: "Moon", benefit: "Unity, emotional balance", desc: "The divine union of Shiva and Shakti. Brings emotional stability, resolves discord, and harmonizes relationships." },
  { mukhi: "3 Mukhi", deity: "Agni", planet: "Mars", benefit: "Karma release, vitality", desc: "Represents the Fire God. Burns away accumulated past-life karma, frees from guilt, self-doubt, and lethargy." },
  { mukhi: "4 Mukhi", deity: "Lord Brahma", planet: "Mercury", benefit: "Intelligence, creativity", desc: "The bead of knowledge and eloquence. Enhances memory, speech clarity, and creative intelligence." },
  { mukhi: "5 Mukhi", deity: "Pancha Bhoota", planet: "Jupiter", benefit: "Overall wellness", desc: "The most universally recommended bead. Balances all five elements, regulates blood pressure, and promotes holistic well-being.", rarity: "Most Common" },
  { mukhi: "6 Mukhi", deity: "Lord Kartikeya", planet: "Venus", benefit: "Willpower, immunity", desc: "The bead of discipline and martial focus. Builds mental clarity, physical vitality, and immune strength." },
  { mukhi: "7 Mukhi", deity: "Goddess Lakshmi", planet: "Saturn", benefit: "Wealth, prosperity", desc: "Direct manifestation of Goddess Mahalakshmi. Eliminates poverty consciousness and attracts financial growth." },
  { mukhi: "8 Mukhi", deity: "Lord Ganesha", planet: "Rahu", benefit: "Obstacle removal", desc: "Sacred to the Remover of Obstacles. Clears blocked pathways in career, legal matters, and financial ventures." },
  { mukhi: "9 Mukhi", deity: "Goddess Durga", planet: "Ketu", benefit: "Courage, fearlessness", desc: "Embodies Durga\u2019s nine forms. Grants protection against known and unknown threats, burns through fear at its root." },
  { mukhi: "10 Mukhi", deity: "Lord Vishnu", planet: "All", benefit: "Protection, peace", desc: "The protective shield of Lord Vishnu. Pacifies all nine planetary defects simultaneously." },
  { mukhi: "11 Mukhi", deity: "Eleven Rudras", planet: "All", benefit: "Strength, power", desc: "Channels the eleven forms of Rudra and Lord Hanuman. Bestows extraordinary physical strength and mental endurance." },
  { mukhi: "14 Mukhi", deity: "Shiva\u2019s Third Eye", planet: "Saturn", benefit: "Intuition, foresight", desc: "Awakens the Ajna chakra. Grants supernatural intuition, foresight, and divine protection. Among the rarest found.", rarity: "Extremely Rare" },
  { mukhi: "Gauri Shankar", deity: "Shiva-Parvati", planet: "Moon", benefit: "Relationship harmony", desc: "Two naturally fused beads representing the inseparable union of Shiva and Parvati. Supreme for marital harmony.", rarity: "Rare" },
];

function AccordionBody({ isOpen, children }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.scrollHeight);
  }, [isOpen]);

  return (
    <div
      className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ maxHeight: isOpen ? height + 40 : 0, opacity: isOpen ? 1 : 0 }}
    >
      <div ref={ref} className="pb-6 pl-2 pr-2 sm:pl-[112px]">
        {children}
      </div>
    </div>
  );
}

export default function Collection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="collection" className="py-28 px-6 bg-bg relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-gold/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <RevealOnScroll className="mb-20">
          <span className="font-heading text-[10px] tracking-[0.25em] uppercase text-gold/80 block mb-4">
            The Collection
          </span>
          <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-normal text-cream tracking-[0.04em] uppercase mb-5">
            Complete Mukhi Guide
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[1.05rem] italic text-cream-muted/80 max-w-xl leading-relaxed">
            Each bead is defined by its natural faces. The mukhi count determines
            deity association, planetary alignment, and spiritual significance.
          </p>
        </RevealOnScroll>

        {/* Accordion */}
        <div className="border-t border-cream-border/60">
          {mukhiData.map((item, i) => (
            <RevealOnScroll key={item.mukhi} delay={i * 40}>
              <div className="border-b border-cream-border/60 group">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`w-full grid grid-cols-[80px_1fr_40px] sm:grid-cols-[100px_1fr_100px_1fr_40px] gap-3 items-center py-5 px-3 cursor-pointer bg-transparent border-none text-left transition-all duration-300 ${
                    openIndex === i ? "bg-gold/[0.03]" : "hover:bg-gold/[0.02]"
                  }`}
                >
                  <span className="font-heading text-[0.85rem] text-gold tracking-wider whitespace-nowrap flex items-center gap-2">
                    {item.mukhi}
                    {item.rarity && (
                      <span className="text-[8px] tracking-[0.1em] uppercase text-gold/50 border border-gold/20 px-1.5 py-0.5 hidden sm:inline-block">
                        {item.rarity}
                      </span>
                    )}
                  </span>
                  <span className="text-[14px] text-cream-muted/80 truncate">
                    {item.deity}
                  </span>
                  <span className="text-[13px] text-cream-muted/50 hidden sm:block">
                    {item.planet}
                  </span>
                  <span className="text-[13px] text-cream-muted/70 hidden sm:block">
                    {item.benefit}
                  </span>
                  <svg
                    className={`w-4 h-4 stroke-gold/60 fill-none stroke-[1.5] transition-transform duration-500 justify-self-end ${
                      openIndex === i ? "rotate-180 stroke-gold" : ""
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <AccordionBody isOpen={openIndex === i}>
                  <p className="text-[15px] text-cream-muted/80 leading-relaxed mb-5 max-w-2xl">
                    {item.desc}
                  </p>
                  <a
                    href={`https://wa.me/9779860149199?text=Hello%2C%20I%20want%20to%20know%20about%20${encodeURIComponent(item.mukhi)}%20Rudraksha.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine inline-flex items-center gap-2 font-heading text-[10px] tracking-[0.12em] uppercase text-gold border border-gold/60 px-5 py-2.5 hover:bg-gold hover:text-bg transition-all duration-300"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    Ask About This
                  </a>
                </AccordionBody>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="flex justify-center mt-12">
          <a
            href="https://wa.me/9779860149199?text=Hello%2C%20I%20need%20help%20choosing%20the%20right%20Rudraksha."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 border border-gold/60 text-gold px-8 py-4 font-heading text-[11px] tracking-[0.14em] uppercase hover:bg-gold hover:text-bg hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-300"
          >
            Need Help Choosing? Ask Our Expert
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
