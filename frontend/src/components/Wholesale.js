"use client";

import { useEffect, useRef, useState } from "react";
import { RevealOnScroll, useMouseGlow } from "./useReveal";

const tiers = [
  {
    title: "Starter Partner",
    desc: "New dealers and spiritual shops exploring authentic Nepal-origin supply.",
    icon: "\u2726",
  },
  {
    title: "Regular Wholesaler",
    desc: "Established businesses requiring consistent monthly or seasonal supply across mukhi types.",
    featured: true,
    icon: "\u2727",
  },
  {
    title: "Premium Distributor",
    desc: "Quintal-scale supply, exclusive regional rights, and priority access to rare mukhi beads.",
    icon: "\u2756",
  },
];

const trustBadges = [
  "Shipped to 30+ Countries",
  "Lab Certified",
  "Export Ready",
  "Direct from Farmers",
];

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Wholesale() {
  const handleMouse = useMouseGlow();

  return (
    <section
      id="wholesale"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(170deg, #1B3A2D 0%, #0D0A06 60%)" }}
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <RevealOnScroll className="mb-20">
          <span className="font-heading text-[10px] tracking-[0.25em] uppercase text-gold/80 block mb-4">
            Global Wholesale
          </span>
          <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-normal text-cream tracking-[0.04em] uppercase mb-5">
            Partner With Us
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[1.05rem] italic text-cream-muted/80 max-w-xl leading-relaxed">
            We supply authentic, farm-direct Nepali Rudraksha to wholesalers,
            retailers, and spiritual centres worldwide.
          </p>
        </RevealOnScroll>

        {/* Counters */}
        <RevealOnScroll className="flex justify-center gap-12 lg:gap-20 flex-wrap mb-16">
          <div className="text-center">
            <div className="font-heading text-[2.2rem] text-gold tracking-wide">
              <AnimatedCounter target={10000} suffix="+" />
            </div>
            <div className="text-[10px] text-cream-muted/50 tracking-[0.12em] uppercase mt-1">Lives Guided</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-[2.2rem] text-gold tracking-wide">
              <AnimatedCounter target={30} suffix="+" />
            </div>
            <div className="text-[10px] text-cream-muted/50 tracking-[0.12em] uppercase mt-1">Countries</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-[2.2rem] text-gold tracking-wide">
              <AnimatedCounter target={21} />
            </div>
            <div className="text-[10px] text-cream-muted/50 tracking-[0.12em] uppercase mt-1">Mukhi Varieties</div>
          </div>
        </RevealOnScroll>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {tiers.map((tier, i) => (
            <RevealOnScroll key={tier.title} delay={i * 100}>
              <div
                className={`card-glow border p-8 lg:p-10 text-center h-full transition-all duration-500 ${
                  tier.featured
                    ? "border-gold/40 bg-gold/[0.04] shadow-[0_0_60px_rgba(201,168,76,0.06)]"
                    : "border-cream-border/20 bg-white/[0.02] hover:border-gold/20"
                }`}
                onMouseMove={handleMouse}
              >
                <span className="text-[2rem] text-gold/40 block mb-4">{tier.icon}</span>
                <h3 className="font-heading text-[12px] tracking-[0.14em] uppercase text-gold mb-4">
                  {tier.title}
                </h3>
                <p className="text-[14px] text-cream-muted/70 leading-relaxed mb-4">
                  {tier.desc}
                </p>
                <span className="text-[11px] italic text-cream-muted/40">
                  Contact for details
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto text-center border border-cream-border/20 bg-white/[0.01] p-10 lg:p-14">
            <h3 className="font-heading text-[clamp(1.2rem,2.5vw,1.6rem)] text-gold tracking-[0.06em] uppercase mb-4">
              Ready to Begin?
            </h3>
            <p className="text-[15px] text-cream-muted/70 italic mb-8 leading-relaxed">
              Video call authentication available before any payment. Full origin
              documentation with every order.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://wa.me/9779860149199?text=Hello%2C%20I%20am%20interested%20in%20wholesale%20Rudraksha%20from%20Arun%20Valley.%20Please%20share%20available%20types%20and%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-2 bg-gold text-bg px-8 py-4 font-heading text-[11px] tracking-[0.14em] uppercase font-semibold hover:bg-cream hover:shadow-[0_0_30px_rgba(201,168,76,0.2)] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Start Wholesale Inquiry
              </a>
              <a
                href="tel:+9779860149199"
                className="inline-flex items-center gap-2 border border-gold/60 text-gold px-8 py-4 font-heading text-[11px] tracking-[0.14em] uppercase hover:bg-gold hover:text-bg transition-all duration-300"
              >
                Call Us Directly
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Trust Badges */}
        <div className="flex justify-center gap-8 flex-wrap mt-16">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2.5 text-[12px] text-cream-muted/50 tracking-wide"
            >
              <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
