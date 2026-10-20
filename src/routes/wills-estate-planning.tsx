import { createFileRoute } from "@tanstack/react-router";
import { FileText, Users, Home, ShieldCheck } from "lucide-react";
import docs from "@/assets/documents.jpg";
import { ClosingCTA, PageHero, RelatedPractices, Reveal, SectionHeading, seo } from "@/components/site";

export const Route = createFileRoute("/wills-estate-planning")({
  head: () => seo(
    "Wills & Estate Planning Lawyer | Hobart, Oklahoma",
    "Wills and estate planning for families in Hobart and Southwest Oklahoma. Put your wishes in writing with Talley & Talley. Call (580) 726-2251.",
    "/wills-estate-planning",
  ),
  component: Wills,
});

const REASONS = [
  { icon: Users, title: "Provide for family", text: "Decide who receives your property and who will care for minor children." },
  { icon: Home, title: "Plan for land & home", text: "Address how a home, farm, or mineral interests should pass." },
  { icon: FileText, title: "Name who will act", text: "Choose the person you trust to carry out your wishes." },
  { icon: ShieldCheck, title: "Reduce uncertainty", text: "Clear documents can spare loved ones confusion and disputes." },
];

function Wills() {
  return (
    <>
      <PageHero image={docs} eyebrow="Wills & Estate Planning" title="Put your wishes in writing — clearly." intro="A thoughtful plan protects the people and property you care about, and makes a difficult time easier for those you leave behind." />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading center eyebrow="Why Plan" title="An estate plan is an act of care." intro="Without a will, Oklahoma law decides how your property is distributed. Planning ahead lets you make those decisions yourself." />
          <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 160} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center border border-gold/60 transition-colors duration-700 hover:bg-gold/10">
                  <r.icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
                </div>
                <h3 className="mt-6 text-2xl text-navy">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-navy-deep py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Planning Conversations</p>
            <h2 className="mt-4 text-4xl text-on-navy md:text-5xl">What we discuss when building your plan.</h2>
            <span className="gold-rule mt-6" />
            <ul className="mt-10 space-y-5 text-lg text-on-navy-muted">
              {["Your family and the people you wish to provide for", "Real property, farmland, and mineral interests", "Who should serve as your personal representative", "Guardianship for minor children", "When an existing will should be reviewed or updated"].map((x) => (
                <li key={x} className="flex gap-4 border-b border-on-navy/10 pb-5"><span className="mt-3 h-px w-6 shrink-0 bg-gold" />{x}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={250}><img src={docs} alt="Fountain pen resting on a signed will" width={1600} height={1072} loading="lazy" className="aspect-[4/5] w-full object-cover" /></Reveal>
        </div>
      </section>
      <RelatedPractices current="/wills-estate-planning" />
      <ClosingCTA title="Start your plan with a phone call." text="Whether you need a first will or want to review an existing one, the firm can help." />
    </>
  );
}
