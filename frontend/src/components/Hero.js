"use client";

import dynamic from "next/dynamic";
import Particles from "./Particles";

const RudrakshaModel = dynamic(() => import("./RudrakshaModel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 border border-gold/20 rounded-full animate-pulse" />
    </div>
  ),
});

const stats = [
  { value: "1,500–3,000m", label: "Altitude" },
  { value: "1–21 Mukhi", label: "All Varieties" },
  { value: "Farm-Direct", label: "No Middlemen" },
  { value: "30+", label: "Countries" },
];

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-light to-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,168,76,0.08),transparent)]" />

      {/* Particles */}
      <Particles />

      {/* Bottom mist */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-bg to-transparent z-[2]" />

      {/* Main split content */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-stretch w-full max-w-[1440px] mx-auto pt-20 sm:pt-24">
        {/* LEFT PANEL — Text */}
        <div className="flex-1 flex items-center justify-center px-5 sm:px-8 lg:px-14 xl:px-20 py-10 lg:py-0">
          <div className="max-w-xl w-full text-center lg:text-left">
            {/* Location badge */}
            <div className="inline-block font-heading text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-gold/80 border border-gold/20 px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 opacity-0 animate-fade-in-down backdrop-blur-sm">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold/60 mr-2.5 pulse-dot" />
              Sankhuwasabha &middot; Bhojpur &middot; Eastern Nepal
            </div>

            <h1 className="font-heading text-[clamp(2rem,6vw,4.2rem)] font-normal text-cream leading-[1.05] tracking-[0.02em] uppercase mb-5 sm:mb-6 opacity-0 animate-fade-in-up delay-100">
              Sacred
              <br />
              <span className="text-gradient-gold">Rudraksha</span>
              <br />
              <span className="text-[clamp(1rem,3vw,1.8rem)] tracking-[0.08em] text-cream-muted/70 normal-case italic font-body">
                from the Arun Valley
              </span>
            </h1>

            <p className="text-[clamp(0.9rem,1.8vw,1.1rem)] text-cream-muted/70 max-w-md mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10 opacity-0 animate-fade-in-up delay-200">
              Ethically harvested between Everest and Makalu &mdash; delivered to
              partners worldwide from the world&apos;s deepest valley.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up delay-300">
              <a
                href="https://wa.me/9779860149199?text=Hello%2C%20I%20am%20interested%20in%20wholesale%20Rudraksha%20from%20Arun%20Valley."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center justify-center gap-2.5 bg-gold text-bg px-6 sm:px-8 py-3.5 sm:py-4 font-heading text-[10px] sm:text-[11px] tracking-[0.14em] uppercase font-semibold hover:bg-cream hover:shadow-[0_0_30px_rgba(201,168,76,0.2)] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Inquire for Wholesale
              </a>
              <a
                href="#collection"
                className="inline-flex items-center justify-center gap-2 border border-gold/60 text-gold px-6 sm:px-8 py-3.5 sm:py-4 font-heading text-[10px] sm:text-[11px] tracking-[0.14em] uppercase hover:bg-gold hover:text-bg hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-300"
              >
                Explore Collection
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER — vertical gold line (desktop only) */}
        <div className="hidden lg:flex flex-col items-center py-28 opacity-0 animate-fade-in delay-500">
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
          <div className="w-2 h-2 rotate-45 border border-gold/30 my-3" />
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
        </div>

        {/* RIGHT PANEL — 3D Model */}
        <div className="flex-1 relative flex items-center justify-center min-h-[300px] sm:min-h-[380px] lg:min-h-0 opacity-0 animate-scale-in delay-300">
          {/* Animated glow rings */}
          <div
            className="absolute top-1/2 left-1/2 w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-gold/[0.07] pointer-events-none"
            style={{ animation: "ringRotate 30s linear infinite" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-dashed border-gold/[0.05] pointer-events-none"
            style={{ animation: "ringRotate 45s linear infinite reverse" }}
          />
          {/* Glow blob */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gold/[0.04] blur-[60px] pointer-events-none"
            style={{ animation: "glowPulse 4s ease-in-out infinite" }}
          />
          <div className="w-full h-full">
            <RudrakshaModel />
          </div>
        </div>
      </div>

      {/* STAT BAR — glassmorphic strip at bottom */}
      <div className="relative z-20 stat-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-cream-border/20">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center py-4 sm:py-5 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.7 + i * 0.1}s` }}
              >
                <div className="font-heading text-[0.85rem] sm:text-[1rem] text-gold tracking-wide">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] text-cream-muted/50 tracking-[0.1em] uppercase mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
