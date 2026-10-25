import { createFileRoute } from "@tanstack/react-router";
import land from "@/assets/land.jpg";
import { CallButton, ClosingCTA, PageHero, RelatedPractices, Reveal, SectionHeading, seo } from "@/components/site";

export const Route = createFileRoute("/real-estate-law")({
  head: () => seo(
    "Real Estate Lawyer in Hobart, OK | Talley & Talley",
    "Real estate legal services in Hobart and Southwest Oklahoma: deeds, property transfers, title questions, and real estate documents.",
    "/real-estate-law",
  ),
  component: RealEstate,
});

const MATTERS = [
  ["Deeds & Conveyances", "Preparing and reviewing deeds so property passes as intended."],
  ["Property Transfers", "Assistance with buying, selling, and transferring residential, farm, and ranch land."],
  ["Title Questions", "Working through title concerns that can stand in the way of a clean transfer."],
  ["Inherited Property", "Clarifying ownership of land and interests passed down through a family."],
  ["Real Estate Documents", "Drafting and reviewing the agreements that accompany a transaction."],
  ["Foreclosures & Evictions", "Guidance for property owners facing contested real estate situations."],
];

function RealEstate() {
  return (
    <>
      <PageHero image={land} eyebrow="Real Estate Law" title="Land, title, and the paperwork that protects it." intro="In Southwest Oklahoma, property is often a family's most significant asset. We help make sure it is documented and transferred correctly." />
      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-40 lg:self-start">
            <SectionHeading eyebrow="Overview" title="Careful work on matters that last for generations." />
            <Reveal direction="right" delay={200}>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">Whether you are purchasing a home in Hobart, transferring farmland to the next generation, or sorting out who owns an inherited tract, real estate matters reward precision. A small error in a deed can create problems years later.</p>
              <div className="mt-10"><CallButton variant="navy" /></div>
            </Reveal>
          </div>
          <div className="grid gap-px self-start bg-border sm:grid-cols-2 lg:col-span-7">
            {MATTERS.map(([t, d], i) => (
              <Reveal key={t} direction="right" delay={(i % 2) * 150} className="bg-background p-9 transition-colors duration-700 hover:bg-card">
                <span className="gold-rule" />
                <h3 className="mt-6 text-2xl text-navy">{t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy py-24">
        <Reveal direction="right" className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-serif text-3xl italic leading-snug text-on-navy md:text-4xl">&ldquo;Before you sign, it is worth having an attorney read what you are agreeing to.&rdquo;</p>
          <p className="eyebrow mt-8">A sensible rule for any real estate transaction</p>
        </Reveal>
      </section>
      <RelatedPractices current="/real-estate-law" />
      <ClosingCTA title="Have a question about property?" text="Call the office to discuss a deed, a transfer, or a title concern." />
    </>
  );
}
