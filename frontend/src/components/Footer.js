"use client";

import { useState, useEffect } from "react";

const footerLinks = {
  Rudraksha: [
    { label: "Mukhi Guide", href: "#collection" },
    { label: "Zodiac Pairing", href: "#zodiac" },
    { label: "Authentication", href: "#faq" },
  ],
  Business: [
    { label: "Wholesale Inquiry", href: "#wholesale" },
    { label: "For Farmers", href: "https://wa.me/9779860149199?text=I%20am%20a%20Rudraksha%20farmer%20from%20Sankhuwasabha." },
    { label: "Pricing", href: "https://wa.me/9779860149199?text=Hello%2C%20please%20share%20pricing%20details." },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "WhatsApp", href: "https://wa.me/9779860149199" },
    { label: "Call Us", href: "tel:+9779860149199" },
  ],
};

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-40 w-11 h-11 border border-gold/30 bg-bg/90 backdrop-blur-sm flex items-center justify-center hover:bg-gold/10 hover:border-gold/60 transition-all duration-500 cursor-pointer ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <svg className="w-4 h-4 stroke-gold fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

export default function Footer() {
  return (
    <>
      <BackToTop />
      <footer className="bg-bg-light border-t border-cream-border/50 pt-20 pb-10 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top Grid */}
          <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">
            {/* Brand */}
            <div>
              <a href="#hero" className="flex items-center gap-3 no-underline mb-4 group">
                <div className="w-9 h-9 border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                  <span className="text-gold text-sm">\u0950</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-[11px] tracking-[0.12em] uppercase text-gold leading-tight">
                    Arun Valley
                  </span>
                  <span className="text-[10px] text-cream-muted/60 tracking-wide">
                    Rudraksha
                  </span>
                </div>
              </a>
              <p className="text-[13px] text-cream-muted/50 leading-relaxed max-w-xs mb-6">
                Ethically harvested from the Arun Valley corridor between
                Everest and Makalu. Sourced directly from farming families in
                Sankhuwasabha and Bhojpur, Eastern Nepal.
              </p>
              {/* Social */}
              <a
                href="https://wa.me/9779860149199"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-cream-border/40 flex items-center justify-center hover:border-gold/40 hover:bg-gold/[0.04] transition-all duration-300 group/social"
              >
                <svg className="w-4 h-4 fill-cream-muted/40 group-hover/social:fill-gold transition-colors" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-heading text-[9px] tracking-[0.18em] uppercase text-gold/70 mb-5">
                  {title}
                </h4>
                <ul className="list-none flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-cream-muted/50 hover:text-gold transition-colors duration-300"
                        {...(link.href.startsWith("http") || link.href.startsWith("tel:")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Trust Row */}
          <div className="flex justify-center gap-6 lg:gap-10 flex-wrap py-6 border-t border-b border-cream-border/30 mb-8">
            {[
              "Authentic Nepal Origin",
              "Lab Certified",
              "Ethical & Sustainable",
              "Export Ready",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-[11px] text-cream-muted/30 tracking-wider"
              >
                <span className="w-1 h-1 rounded-full bg-gold/30" />
                {item}
              </span>
            ))}
          </div>

          {/* Bottom */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <span className="text-[11px] text-cream-muted/25 tracking-wide">
              &copy; 2025 Arun Valley Rudraksha. Sankhuwasabha, Nepal.
            </span>
            <span className="text-[11px] text-cream-muted/20 tracking-wide">
              Sacred beads, ethically sourced.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
