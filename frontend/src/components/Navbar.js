"use client";

import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Our Origin", href: "#origin" },
  { label: "Collection", href: "#collection" },
  { label: "Zodiac Guide", href: "#zodiac" },
  { label: "Wholesale", href: "#wholesale" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const sections = navLinks.map((l) => l.href.slice(1));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top <= 120) {
        setActiveSection(`#${sections[i]}`);
        return;
      }
    }
    setActiveSection("#hero");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(13,10,6,0.92)] backdrop-blur-2xl border-b border-cream-border shadow-[0_1px_30px_rgba(201,168,76,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 no-underline group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 border border-gold/30 flex items-center justify-center group-hover:border-gold/60 group-hover:shadow-[0_0_15px_rgba(201,168,76,0.15)] transition-all duration-500">
            <span className="text-gold text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
              \u0950
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-[10px] sm:text-[12px] tracking-[0.12em] sm:tracking-[0.15em] uppercase text-gold leading-tight">
              Arun Valley
            </span>
            <span className="text-[9px] sm:text-[11px] text-cream-muted tracking-wide">
              Rudraksha
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-0 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link-hover px-4 py-2 text-[13px] tracking-[0.04em] transition-colors duration-300 ${
                  activeSection === link.href
                    ? "text-gold active"
                    : "text-cream-muted hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* WhatsApp CTA */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/9779860149199"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-green text-cream px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-[12px] font-heading tracking-[0.1em] uppercase border border-green-light hover:bg-green-light hover:shadow-[0_0_20px_rgba(42,90,68,0.3)] transition-all duration-300 btn-shine"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-gold transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-gold transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-gold transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 sm:top-20 bg-[rgba(13,10,6,0.98)] backdrop-blur-2xl transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-5 sm:px-8 pt-6 sm:pt-8 flex flex-col gap-0">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3.5 sm:py-4 text-cream-muted hover:text-gold border-b border-cream-border text-[16px] sm:text-[18px] tracking-wide transition-all duration-500 ${
                mobileOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/9779860149199"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 mt-8 self-start bg-green text-cream px-6 py-3.5 text-[13px] font-heading tracking-wider uppercase border border-green-light transition-all duration-500 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mobileOpen ? "360ms" : "0ms" }}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </nav>
  );
}
