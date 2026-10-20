import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-courthouse.jpg";
import land from "@/assets/land.jpg";
import docs from "@/assets/documents.jpg";
import office from "@/assets/office.jpg";
import { ClosingCTA, PageHero, Reveal, SectionHeading, seo } from "@/components/site";
import { PRACTICES } from "@/lib/firm";

export const Route = createFileRoute("/practice-areas")({
  head: () => seo(
    "Practice Areas | Talley & Talley Attorneys, Hobart, OK",
    "Real estate law, probate and estate administration, family law, and wills and estate planning in Hobart and Southwest Oklahoma.",
    "/practice-areas",
  ),
  component: Practices,
});

const IMAGES = [land, office, hero, docs];

function Practices() {
  return (
    <>
      <PageHero image={hero} align="center" eyebrow="Practice Areas" title="Counsel across a general practice." intro="Four core areas of law, handled personally by the firm for clients throughout Southwest Oklahoma." />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What We Handle" title="Choose an area to learn more." intro="If your matter doesn't fit neatly into one category, call the office. Many client needs overlap, and a general practice is suited to that." />
          <div className="mt-20 space-y-24">
            {PRACTICES.map((p, i) => (
              <div key={p.to} className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal className="overflow-hidden">
                  <Link to={p.to} className="group block overflow-hidden">
                    <img src={IMAGES[i]} alt="" width={1600} height={1072} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
                  </Link>
                </Reveal>
                <Reveal delay={200}>
                  <span className="font-serif text-6xl text-gold/60">0{i + 1}</span>
                  <h2 className="mt-4 text-4xl text-navy md:text-5xl">{p.title}</h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{p.blurb}</p>
                  <Link to={p.to} className="group mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-navy">Explore {p.title} <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" /></Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ClosingCTA title="Not sure where your matter fits?" text="A short phone call is often the best way to find out how the firm can help." />
    </>
  );
}
