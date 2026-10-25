import { createFileRoute } from "@tanstack/react-router";
import court from "@/assets/criminal-defense.jpg";
import { CallButton, ClosingCTA, PageHero, RelatedPractices, Reveal, SectionHeading, seo } from "@/components/site";

export const Route = createFileRoute("/criminal-defense-law")({
  head: () => seo(
    "Criminal Defense Lawyer in Hobart, OK | Talley & Talley",
    "Defense representation for criminal charges in Hobart and Southwest Oklahoma. Steady, discreet counsel. Call (580) 726-2251.",
    "/criminal-defense-law",
  ),
  component: CriminalDefense,
});

const MATTERS = [
  ["Felony & Misdemeanor Charges", "Defense representation when you or a family member has been charged."],
  ["Pre-Charge Advice", "Guidance before anything is decided, so early choices don't create later problems."],
  ["Court Appearances", "Standing with you at each stage of the process, from the first appearance onward."],
  ["Traffic & Municipal Matters", "Representation on citations and municipal offenses that carry real consequences."],
  ["Negotiations & Resolutions", "Clear advice on the options available so you can decide with the full picture in view."],
  ["Questions After the Case", "What a charge means going forward, and the questions worth asking once the matter concludes."],
];

function CriminalDefense() {
  return (
    <>
      <PageHero image={court} eyebrow="Criminal Defense Law" title="A charge is not a verdict. It is the beginning of a defense." intro="Being charged is one of the most stressful things a person can face. You deserve representation that is steady, discreet, and prepared." />
      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-40 lg:self-start">
            <SectionHeading eyebrow="Overview" title="Steady counsel when it matters most." />
            <Reveal direction="right" delay={200}>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">Criminal matters move quickly, and early decisions can shape everything that follows. From our office in Hobart, we represent clients throughout Southwest Oklahoma who are facing charges — explaining the process plainly, protecting your rights at every stage, and preparing the case properly rather than rushing it.</p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Conversations with the firm are confidential, and every call is treated with discretion.</p>
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
          <p className="font-serif text-3xl italic leading-snug text-on-navy md:text-4xl">&ldquo;You have the right to remain silent. It is wise to use it until you have spoken with an attorney.&rdquo;</p>
          <p className="eyebrow mt-8">A rule worth knowing before anything else</p>
        </Reveal>
      </section>
      <RelatedPractices current="/criminal-defense-law" />
      <ClosingCTA title="Facing charges? Call today." text="The sooner the matter is discussed, the sooner it can be addressed. Conversations with the firm are confidential." />
    </>
  );
}
