import { createFileRoute } from "@tanstack/react-router";
import office from "@/assets/office.jpg";
import land from "@/assets/land.jpg";
import { ClosingCTA, PageHero, Reveal, SectionHeading, seo } from "@/components/site";
import { FIRM } from "@/lib/firm";

export const Route = createFileRoute("/about")({
  head: () => seo(
    "About the Firm | Talley & Talley, Hobart, Oklahoma",
    "Talley & Talley has practiced law in Hobart, Oklahoma since 1976. Learn about attorney Thomas W. Talley and the firm's approach.",
    "/about",
  ),
  component: About,
});

const VALUES = [
  { n: "I", title: "Direct access", text: "Clients work with their attorney personally rather than being passed between departments." },
  { n: "II", title: "Plain explanations", text: "The law is explained in clear terms so you understand your options before making decisions." },
  { n: "III", title: "Local perspective", text: "Decades in Hobart mean a working familiarity with the community and the region we serve." },
];

function About() {
  return (
    <>
      <PageHero image={office} eyebrow="About the Firm" title={<>Practicing law in Hobart since {FIRM.since}.</>} intro="A general law practice serving individuals, families, and landowners throughout Southwest Oklahoma." />

      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our Story" title="A firm defined by continuity." />
          </div>
          <Reveal delay={200} className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7">
            <p className="font-serif text-3xl leading-snug text-navy">For nearly fifty years, Talley &amp; Talley has been a steady presence on East 4th Street in downtown Hobart.</p>
            <p>The firm began in {FIRM.since} as a general law practice, and that remains its character today. Clients come to us for help with buying and transferring property, settling the estate of a loved one, navigating domestic matters, and planning for the future.</p>
            <p>Those needs rarely arrive neatly separated. A general practice allows us to see how a deed, a will, and a family's circumstances connect, and to advise accordingly.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">The Attorney</p>
            <h2 className="mt-4 text-5xl text-on-navy md:text-6xl">{FIRM.attorney}</h2>
            <span className="gold-rule mt-6" />
            <p className="mt-8 text-lg leading-relaxed text-on-navy-muted">Thomas W. Talley is licensed to practice law in the State of Oklahoma and has practiced in Hobart since {FIRM.since}. He works with clients personally on real estate, probate, family law, and estate planning matters.</p>
            <p className="mt-5 text-lg leading-relaxed text-on-navy-muted">His invitation to prospective clients is simple: call the office. The sooner a matter is discussed, the sooner it can be addressed.</p>
          </Reveal>
          <Reveal delay={250}>
            <img src={land} alt="Southwest Oklahoma farmland at sunset" width={1600} height={1072} loading="lazy" className="aspect-[5/4] w-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading center eyebrow="How We Work" title="Principles that have guided the practice." />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i * 180} className="border border-border bg-card p-10 text-center transition-all duration-700 hover:border-gold">
                <span className="font-serif text-4xl italic text-gold">{v.n}</span>
                <h3 className="mt-5 text-2xl text-navy">{v.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA title="Meet with the firm." text="Call to discuss your matter and arrange a time to visit our Hobart office." />
    </>
  );
}
