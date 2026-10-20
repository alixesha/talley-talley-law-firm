import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, Phone, X, MapPin, Clock, ArrowRight } from "lucide-react";
import { FIRM, PRACTICES } from "@/lib/firm";

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: { children: ReactNode; delay?: number; className?: string; as?: "div" | "section" | "li" }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    // @ts-expect-error polymorphic ref
    <Tag ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About the Firm" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/contact", label: "Contact" },
] as const;

export function CallButton({ variant = "gold", className = "" }: { variant?: "gold" | "outline" | "navy"; className?: string }) {
  const styles = {
    gold: "bg-gold text-navy-deep hover:bg-gold-soft",
    outline: "border border-gold/70 text-on-navy hover:bg-gold hover:text-navy-deep",
    navy: "bg-navy text-on-navy hover:bg-navy-deep",
  }[variant];
  return (
    <a href={FIRM.phoneHref} className={`inline-flex items-center gap-3 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-500 ${styles} ${className}`}>
      <Phone className="h-4 w-4" /> Call {FIRM.phone}
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled || open ? "bg-navy-deep/95 backdrop-blur shadow-card" : "bg-transparent"}`}>
      <div className="hidden border-b border-on-navy/10 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide text-on-navy-muted">
          <span>Serving Southwest Oklahoma since {FIRM.since}</span>
          <span className="flex items-center gap-6">
            <span>{FIRM.street}, Hobart, OK</span>
            <a href={FIRM.phoneHref} className="text-gold-soft transition-colors hover:text-gold">{FIRM.phone}</a>
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl text-on-navy md:text-3xl">Talley <span className="text-gold">&amp;</span> Talley</span>
          <span className="mt-1.5 text-[0.62rem] uppercase tracking-[0.35em] text-on-navy-muted">Attorneys at Law · Hobart</span>
        </Link>
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="group relative py-2 text-sm tracking-wide text-on-navy/85 transition-colors duration-500 hover:text-on-navy data-[status=active]:text-on-navy">
              {n.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
            </Link>
          ))}
          <a href={FIRM.phoneHref} className="inline-flex items-center gap-2 border border-gold/70 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-on-navy transition-all duration-500 hover:bg-gold hover:text-navy-deep">
            <Phone className="h-3.5 w-3.5" /> Call Now
          </a>
        </nav>
        <button className="text-on-navy lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      <div className={`overflow-hidden transition-all duration-700 lg:hidden ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col gap-1 border-t border-on-navy/10 px-6 pb-8 pt-4" aria-label="Mobile">
          {[...NAV.slice(0, 3), ...PRACTICES.map((p) => ({ to: p.to, label: p.title })), NAV[3]].map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b border-on-navy/10 py-3 font-serif text-xl text-on-navy data-[status=active]:text-gold">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep pb-28 pt-20 text-on-navy-muted md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl text-on-navy">Talley <span className="text-gold">&amp;</span> Talley</p>
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.35em]">Attorneys at Law</p>
          <p className="mt-6 max-w-sm leading-relaxed">A general law practice in Hobart, Oklahoma, serving clients across Southwest Oklahoma since {FIRM.since}.</p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">Practice Areas</p>
          <ul className="mt-5 space-y-3 text-sm">
            {PRACTICES.map((p) => (
              <li key={p.to}><Link to={p.to} className="transition-colors duration-500 hover:text-gold-soft">{p.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow">Visit or Call</p>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>{FIRM.street}<br />{FIRM.poBox}<br />{FIRM.city}</span></li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><a href={FIRM.phoneHref} className="text-on-navy transition-colors hover:text-gold-soft">{FIRM.phone}</a></li>
            <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>{FIRM.hours}</span></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-3 border-t border-on-navy/10 px-6 pt-8 text-xs md:flex-row">
        <span>© {new Date().getFullYear()} Talley &amp; Talley. All rights reserved.</span>
        <span>The information on this website is for general information only and is not legal advice. Contacting the firm does not create an attorney-client relationship.</span>
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  return (
    <a href={FIRM.phoneHref} className="fixed inset-x-3 bottom-3 z-50 flex items-center justify-center gap-3 bg-gold py-4 text-sm font-semibold uppercase tracking-[0.18em] text-navy-deep shadow-card md:hidden">
      <Phone className="h-4 w-4" /> Call Now · {FIRM.phone}
    </a>
  );
}

export function PageHero({ image, eyebrow, title, intro, align = "left" }: { image: string; eyebrow: string; title: ReactNode; intro: string; align?: "left" | "center" }) {
  return (
    <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-navy-deep">
      <img src={image} alt="" width={1600} height={1072} className="ken-burns absolute inset-0 h-full w-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className={`relative mx-auto w-full max-w-7xl px-6 pb-20 pt-48 ${align === "center" ? "text-center" : ""}`}>
        <p className="eyebrow hero-in">{eyebrow}</p>
        <h1 className={`hero-in mt-5 max-w-3xl text-5xl leading-[1.05] text-on-navy md:text-7xl ${align === "center" ? "mx-auto" : ""}`} style={{ animationDelay: "200ms" }}>{title}</h1>
        <p className={`hero-in mt-7 max-w-xl text-lg leading-relaxed text-on-navy-muted ${align === "center" ? "mx-auto" : ""}`} style={{ animationDelay: "450ms" }}>{intro}</p>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, center }: { eyebrow: string; title: ReactNode; intro?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-tight text-navy md:text-5xl">{title}</h2>
      <span className={`gold-rule mt-6 ${center ? "mx-auto" : ""}`} />
      {intro && <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}

export function ClosingCTA({ title, text }: { title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-navy py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="eyebrow">Speak With the Firm</p>
          <h2 className="mt-5 text-4xl leading-tight text-on-navy md:text-6xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-on-navy-muted">{text}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CallButton />
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-4 text-sm uppercase tracking-[0.18em] text-on-navy transition-colors duration-500 hover:text-gold-soft">
              Office Location <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function RelatedPractices({ current }: { current: string }) {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Related Services" title="Other ways we can help" />
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {PRACTICES.filter((p) => p.to !== current).map((p, i) => (
            <Reveal key={p.to} delay={i * 150}>
              <Link to={p.to} className="group flex h-full flex-col bg-background p-9 transition-colors duration-700 hover:bg-card">
                <h3 className="text-2xl text-navy">{p.title}</h3>
                <p className="mt-3 flex-1 text-muted-foreground">{p.blurb}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy">Learn more <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function seo(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
