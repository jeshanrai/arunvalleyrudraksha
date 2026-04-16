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
      <div className={`border-b border-cream-border/40 transition-colors duration-500 ${isOpen ? "bg-gold/[0.015]" : ""}`}>
        <button
          onClick={onToggle}
          className={`w-full flex justify-between items-start sm:items-center gap-4 sm:gap-6 py-5 sm:py-6 px-1 sm:px-2 bg-transparent border-none cursor-pointer text-left group transition-all duration-300 ${
            isOpen ? "pb-3" : ""
          }`}
        >
          <span className="flex items-start gap-3 sm:gap-4">
            <span className="font-heading text-[0.7rem] text-gold/25 mt-0.5 hidden sm:block w-5 shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[0.95rem] sm:text-[1.05rem] text-cream group-hover:text-gold transition-colors duration-300 leading-snug">
              {item.q}
            </span>
          </span>
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border shrink-0 flex items-center justify-center transition-all duration-500 ${
              isOpen
                ? "border-gold/40 bg-gold/[0.05] rotate-180"
                : "border-cream-border/30 group-hover:border-gold/30"
            }`}
          >
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
          style={{
            maxHeight: isOpen ? height + 20 : 0,
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div
            ref={bodyRef}
            className="pl-1 sm:pl-[calc(0.7rem+12px+16px)] pr-4 pb-6"
          >
            <p className="text-[14px] sm:text-[15px] text-cream-muted/65 leading-relaxed max-w-2xl">
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
    <section id="faq" className="py-16 sm:py-28 px-4 sm:px-6 bg-bg relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 sm:gap-16 lg:gap-20">
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
            <p className="text-[14px] text-cream-muted/55 leading-relaxed mb-8">
              Can&apos;t find your answer?
              <br />
              Reach out directly.
            </p>
            <a
              href="https://wa.me/9779860149199?text=Hello%2C%20I%20have%20a%20question%20about%20Rudraksha."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 border border-gold/40 text-gold px-6 py-3 font-heading text-[10px] tracking-[0.12em] uppercase hover:bg-gold hover:text-bg transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Ask on WhatsApp
            </a>
          </RevealOnScroll>

          {/* Right: FAQ List */}
          <div className="border-t border-cream-border/40">
            {faqData.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
