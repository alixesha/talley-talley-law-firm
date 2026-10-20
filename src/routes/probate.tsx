import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-courthouse.jpg";
import office from "@/assets/office.jpg";
import { ClosingCTA, PageHero, RelatedPractices, Reveal, SectionHeading, seo } from "@/components/site";

export const Route = createFileRoute("/probate")({
  head: () => seo(
    "Probate & Estate Administration Attorney | Hobart, OK",
    "Talley & Talley guides personal representatives and families through Oklahoma probate and estate administration. Call (580) 726-2251.",
    "/probate",
  ),
  component: Probate,
});

const STEPS = [
  ["Initial consultation", "We review the circumstances, any will that exists, and the property involved."],
  ["Opening the estate", "Filing with the court and seeking appointment of a personal representative."],
  ["Notice & inventory", "Notifying interested parties and creditors, and identifying estate assets."],
  ["Claims & administration", "Addressing debts, claims, and the ongoing needs of the estate."],
  ["Distribution & closing", "Distributing property to heirs or beneficiaries and closing the estate."],
];

function Probate() {
  return (
    <>
      <PageHero image={hero} eyebrow="Probate & Estate Administration" title="Guidance through probate, one step at a time." intro="After the loss of a loved one, the legal process can feel unfamiliar. We help families and personal representatives understand what comes next." />
      <section className="py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Overview" title="Settling an estate with care and order." />
            <Reveal delay={200} className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>Probate is the court-supervised process of settling a person's estate — confirming who has authority to act, paying valid debts, and passing property to the right people.</p>
              <p>We assist with estates with and without a will, including estates involving land and mineral interests located in Oklahoma, even when family members live out of state.</p>
            </Reveal>
          </div>
          <Reveal delay={250}><img src={office} alt="Law books in a traditional office" width={1600} height={1072} loading="lazy" className="aspect-[4/3] w-full object-cover shadow-card" /></Reveal>
        </div>
      </section>
      <section className="bg-secondary py-28">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading center eyebrow="The Process" title="What a typical probate involves." intro="Every estate is different, but most follow a general path. Here is an overview of what to expect." />
          <ol className="relative mt-20 border-l border-gold/50 pl-10 md:pl-16">
            {STEPS.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 120} className="relative pb-14 last:pb-0">
                <span className="absolute -left-[3.05rem] flex h-10 w-10 items-center justify-center bg-navy font-serif text-lg text-gold md:-left-[5.3rem]">{i + 1}</span>
                <h3 className="text-3xl text-navy">{t}</h3>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <RelatedPractices current="/probate" />
      <ClosingCTA title="Named as a personal representative?" text="Call the firm to talk through your responsibilities and the steps ahead." />
    </>
  );
}
