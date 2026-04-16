"use client";

import { useState, useRef, useEffect } from "react";
import { RevealOnScroll } from "./useReveal";

const faqData = [
  {
    q: "What makes Arun Valley Rudraksha different from Indian Rudraksha?",
    a: "Arun Valley Rudraksha grows at 1,500\u20133,000m altitude in Eastern Nepal\u2019s Himalayan foothills, producing smaller, denser beads with sharper mukhi lines and higher surface conductivity. Indian markets primarily resell beads \u2014 often from Java \u2014 while we supply directly from farming families in Sankhuwasabha and Bhojpur with full origin documentation.",
  },
  {
    q: "How do I verify the authenticity of my Rudraksha?",
    a: "Genuine Nepali Rudraksha has well-defined natural mukhi lines, consistent density, and a naturally textured surface. The water float test is unreliable. For high-value beads, X-ray or lab certification is the gold standard. We offer live video authentication sessions before any purchase.",
  },
  {
    q: "What Mukhi is best for me?",
    a: "The 5 Mukhi (Panch Mukhi) is universally recommended for peace, health, and cardiovascular balance. For specific intentions \u2014 wealth (7 Mukhi), spiritual growth (1 Mukhi), strength (11 Mukhi), intuition (14 Mukhi) \u2014 the selection varies. Our zodiac guide and WhatsApp consultation can help you find the right match.",
  },
  {
    q: "Can women wear Rudraksha?",
    a: "Absolutely. Rudraksha has no gender restriction in Vedic tradition. Women can wear any mukhi Rudraksha. The Gauri Shankar Rudraksha is especially recommended for harmonizing relationships and balancing feminine energy.",
  },
  {
    q: "How should Rudraksha be energized before wearing?",
    a: "Wash the bead in clean water, place it on a copper plate, offer sandalwood paste and flowers, and chant \u2018Om Namah Shivaya\u2019 108 times. Wear on a Monday during Brahma Muhurta (before sunrise) for maximum benefit.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we supply to dealers in India (Haridwar, Varanasi, Delhi), UAE, Europe, USA, Canada, Australia, Singapore, and worldwide through our freight partners from Kathmandu. Export-ready packaging and documentation provided.",
  },
  {
    q: "Do you provide certificates of authenticity?",
    a: "Yes. We provide origin documentation tracing each bead to its farming family, district, and harvest season. For high-value beads, lab testing and X-ray certification are available. Video call authentication is offered before any payment.",
  },
  {
    q: "What is the minimum wholesale order quantity?",
    a: "Contact us directly for current MOQ details \u2014 they vary by mukhi type, season, and availability. We accommodate starter partners, regular wholesalers, and premium distributors with different volume arrangements.",
  },
];

function FAQItem({ item, isOpen, onToggle, index }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) setHeight(bodyRef.current.scrollHeight);
  }, [isOpen]);

  return (
    <RevealOnScroll delay={index * 40}>
      <div className="border-b border-cream-border/50">
        <button
          onClick={onToggle}
          className={`w-full flex justify-between items-center gap-6 py-6 bg-transparent border-none cursor-pointer text-left group transition-all duration-300 ${
            isOpen ? "pb-3" : ""
          }`}
        >
          <span className="flex items-start gap-4">
            <span className="font-heading text-[0.7rem] text-gold/30 mt-1 hidden sm:block">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[1.05rem] text-cream group-hover:text-gold transition-colors duration-300 leading-snug">
              {item.q}
            </span>
          </span>
          <div className={`w-8 h-8 rounded-full border shrink-0 flex items-center justify-center transition-all duration-500 ${
            isOpen ? "border-gold/40 bg-gold/[0.05] rotate-180" : "border-cream-border/40 group-hover:border-gold/30"
          }`}>
            <svg
              className="w-3.5 h-3.5 stroke-gold/60 fill-none stroke-[1.5]"
              viewBox="0 0 24 24"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </button>
        <div
          className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ maxHeight: isOpen ? height + 20 : 0, opacity: isOpen ? 1 : 0 }}
        >
          <div ref={bodyRef} className="pl-0 sm:pl-[calc(0.7rem+16px+16px)] pb-6">
            <p className="text-[15px] text-cream-muted/70 leading-relaxed max-w-2xl">
              {item.a}
            </p>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-28 px-6 bg-bg relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20">
          {/* Left: Header (sticky on desktop) */}
          <RevealOnScroll className="lg:sticky lg:top-28 lg:self-start">
            <span className="font-heading text-[10px] tracking-[0.25em] uppercase text-gold/80 block mb-4">
              Common Questions
            </span>
            <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.2rem)] font-normal text-cream tracking-[0.04em] uppercase mb-5">
              Frequently
              <br />
              Asked
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-[14px] text-cream-muted/60 leading-relaxed mb-6">
              Can&apos;t find your answer? Reach out directly.
            </p>
            <a
              href="https://wa.me/9779860149199?text=Hello%2C%20I%20have%20a%20question%20about%20Rudraksha."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 border border-gold/40 text-gold px-6 py-3 font-heading text-[10px] tracking-[0.12em] uppercase hover:bg-gold hover:text-bg transition-all duration-300"
            >
              Ask on WhatsApp
            </a>
          </RevealOnScroll>

          {/* Right: FAQ List */}
          <div className="border-t border-cream-border/50">
            {faqData.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
