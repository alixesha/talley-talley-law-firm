import { createFileRoute } from "@tanstack/react-router";
import office from "@/assets/office.jpg";
import { CallButton, ClosingCTA, PageHero, RelatedPractices, Reveal, SectionHeading, seo } from "@/components/site";

export const Route = createFileRoute("/family-law")({
  head: () => seo(
    "Family Law & Divorce Attorney in Hobart, OK | Talley & Talley",
    "Divorce, child custody, and domestic law matters in Hobart and Southwest Oklahoma. Discreet, steady counsel. Call (580) 726-2251.",
    "/family-law",
  ),
  component: Family,
});

const TOPICS = [
  ["Divorce", "Guidance through the dissolution of a marriage, including division of property and debts."],
  ["Child Custody", "Arrangements centered on the well-being and stability of the children involved."],
  ["Support Matters", "Questions of child support and related financial obligations."],
  ["Domestic Agreements", "Documenting terms that spouses or parents have reached together."],
];

function Family() {
  return (
    <>
      <PageHero image={office} eyebrow="Family Law" title="Discreet counsel when family matters are difficult." intro="Domestic legal matters are personal. We handle them with confidentiality, patience, and a clear view of what matters most." />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <SectionHeading eyebrow="Our Approach" title="Calm, practical guidance through change." />
            <Reveal delay={200} className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>Family law matters touch every part of life — your home, your finances, and your children. Our role is to explain your options clearly and help you move forward with as much stability as possible.</p>
              <p>Where possible, we look for practical resolutions. Where a matter must go before the court, we prepare it carefully.</p>
            </Reveal>
          </div>
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {TOPICS.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 2) * 180} className="group flex gap-8 border-l-2 border-gold bg-card p-10 shadow-card transition-transform duration-700 hover:-translate-y-1">
                <span className="font-serif text-5xl italic text-gold/60">{String.fromCharCode(65 + i)}</span>
                <div>
                  <h3 className="text-3xl text-navy">{t}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy py-20">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div>
            <h2 className="text-3xl text-on-navy md:text-4xl">Your conversation stays confidential.</h2>
            <p className="mt-3 text-on-navy-muted">Call to speak privately about your situation.</p>
          </div>
          <CallButton />
        </Reveal>
      </section>
      <RelatedPractices current="/family-law" />
      <ClosingCTA title="Take the first step with confidence." text="A conversation with an attorney can help you understand where you stand." />
    </>
  );
}
