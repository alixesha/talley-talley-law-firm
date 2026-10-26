import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Landmark, Handshake, MapPin, ScrollText } from "lucide-react";
import court from "@/assets/criminal-defense.jpg";
import hero from "@/assets/hero-courthouse.jpg";
import land from "@/assets/land.jpg";
import docs from "@/assets/documents.jpg";
import office from "@/assets/office.jpg";
import { CallButton, ClosingCTA, Reveal, SectionHeading, seo } from "@/components/site";
import { FIRM, PRACTICES } from "@/lib/firm";

export const Route = createFileRoute("/")({
  head: () => seo(
    "Talley & Talley | Hobart, Oklahoma Attorney Thomas W. Talley",
    "Hobart, Oklahoma law firm serving Southwest Oklahoma since 1976. Real estate, probate, family law, and wills. Call (580) 726-2251.",
    "/",
  ),
  component: Home,
});

const PRACTICE_IMAGES = [land, office, hero, docs, court];

const REASONS = [
  { icon: Landmark, title: "Established in 1976", text: "Nearly five decades of practicing law from the same Southwest Oklahoma community." },
  { icon: Handshake, title: "Work with the attorney", text: "You speak directly with the lawyer handling your matter, from first call to final document." },
  { icon: MapPin, title: "Rooted in Hobart", text: "A downtown office on East 4th Street, close to the people and places our clients know." },
  { icon: ScrollText, title: "A practical general practice", text: "Real estate, probate, domestic matters, and estate planning under one roof." },
];

function Home() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-deep">
        <img
          src={hero}
          alt="Historic Oklahoma county courthouse at sunset"
          width={1920}
          height={1088}
          className="ken-burns absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-44">
          <p className="eyebrow hero-in-right">
            Attorneys at Law · Hobart, Oklahoma · Since {FIRM.since}
          </p>
          <h1
            className="hero-in-right mt-6 max-w-4xl text-5xl leading-[1.02] text-on-navy sm:text-6xl md:text-8xl"
            style={{ animationDelay: "250ms" }}
          >
            Steady counsel for <em className="text-gold-soft">life&rsquo;s</em> important matters.
          </h1>
          <p
            className="hero-in-right mt-8 max-w-xl text-lg leading-relaxed text-on-navy-muted md:text-xl"
            style={{ animationDelay: "500ms" }}
          >
            Attorney {FIRM.attorney} and Talley &amp; Talley have served families, landowners, and individuals across Southwest Oklahoma for nearly fifty years.
          </p>
          <div
            className="hero-in-right mt-11 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "750ms" }}
          >
            <CallButton />
            <Link
              to="/practice-areas"
              className="inline-flex items-center justify-center gap-2 border border-on-navy/30 px-7 py-4 text-sm uppercase tracking-[0.18em] text-on-navy transition-all duration-500 hover:border-gold hover:text-gold-soft"
            >
              Practice Areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Practice Areas"
              title="Focused on the matters that shape families and property."
            />
            <Reveal delay={200}>
              <Link
                to="/practice-areas"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy"
              >
                All practice areas
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>

          {/* First four practice areas: image-based premium cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRACTICES.slice(0, 4).map((p, i) => (
              <Reveal key={p.to} direction="right" delay={i * 140} className="h-full">
                <Link
                  to={p.to}
                  className="group relative flex h-full min-h-[430px] flex-col overflow-hidden bg-navy-deep shadow-card transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-52 shrink-0 overflow-hidden">
                    <img
                      src={PRACTICE_IMAGES[i]}
                      alt={p.title}
                      width={800}
                      height={500}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/10 to-transparent" />
                    <span className="absolute bottom-4 left-6 font-serif text-5xl text-gold-soft">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col p-6">
                    <div className="absolute left-6 right-6 top-0 h-px bg-gold/60 transition-all duration-700 group-hover:bg-gold" />
                    <h3 className="mt-3 font-serif text-2xl leading-snug text-on-navy transition-colors duration-500 group-hover:text-gold-soft">
                      {p.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-on-navy-muted">
                      {p.blurb}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Fifth practice area: large featured card */}
          <Reveal direction="left" delay={200} className="mt-8">
            <Link
              to={PRACTICES[4].to}
              className="group grid overflow-hidden bg-navy-deep shadow-card transition-shadow duration-700 hover:shadow-2xl md:min-h-[360px] md:grid-cols-2"
            >
              <div className="relative min-h-64 overflow-hidden md:min-h-full">
                <img
                  src={court}
                  alt={PRACTICES[4].title}
                  width={1600}
                  height={1072}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-navy-deep/30" />
              </div>

              <div className="relative flex flex-col justify-center p-8 md:p-14">
                <span className="font-serif text-5xl text-gold/70">05</span>
                <h3 className="mt-6 font-serif text-3xl leading-snug text-on-navy md:text-4xl">
                  {PRACTICES[4].title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-on-navy-muted">
                  {PRACTICES[4].blurb}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal direction="left" className="relative">
            <img
              src={office}
              alt="Traditional law office with leather-bound law books"
              width={1600}
              height={1072}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover shadow-card"
            />
            <div className="absolute -bottom-8 -right-4 hidden bg-navy px-10 py-8 md:block">
              <p className="font-serif text-6xl text-gold">
                {new Date().getFullYear() - FIRM.since}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-on-navy-muted">
                Years serving<br />Southwest Oklahoma
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="The Firm"
              title={<>A Hobart law practice built on <em>personal attention</em>.</>}
            />
            <Reveal direction="right" delay={200}>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                Talley &amp; Talley is a general law practice founded in {FIRM.since}. From our office on East 4th Street, we help clients with real estate, probate, domestic matters, estate planning, and criminal defense.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Our approach is straightforward: listen carefully, explain the law plainly, and see each matter through with the same attorney from start to finish.
              </p>
              <Link
                to="/about"
                className="group mt-10 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-navy"
              >
                About the firm
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            center
            eyebrow="Why Talley & Talley"
            title="Experience you can sit across the table from."
          />
          <div className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r, i) => (
              <Reveal
                key={r.title}
                direction="right"
                delay={i * 180}
                className="border-t border-gold/60 pt-8"
              >
                <r.icon className="h-7 w-7 text-gold" strokeWidth={1.25} />
                <h3 className="mt-6 text-2xl text-navy">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        title="Let&rsquo;s talk about your matter."
        text={`Call the office during business hours, ${FIRM.hours}, to speak with Talley & Talley.`}
      />
    </>
  );
            }
