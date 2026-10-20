import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone, ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-courthouse.jpg";
import { CallButton, PageHero, Reveal, seo } from "@/components/site";
import { FIRM } from "@/lib/firm";

export const Route = createFileRoute("/contact")({
  head: () => seo(
    "Contact Talley & Talley | 200 E 4th St, Hobart, OK",
    "Call Talley & Talley at (580) 726-2251 or visit 200 E 4th St, Hobart, Oklahoma 73651. Open Monday–Friday, 8 AM–4 PM.",
    "/contact",
  ),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero image={hero} eyebrow="Contact" title="Call the office." intro="The quickest way to reach Talley & Talley is by phone during business hours." />
      <section className="py-28">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          <Reveal className="flex flex-col bg-navy p-10 md:col-span-3 md:flex-row md:items-center md:justify-between">
            <div>
              <Phone className="h-7 w-7 text-gold" strokeWidth={1.25} />
              <p className="eyebrow mt-6">Telephone</p>
              <a href={FIRM.phoneHref} className="mt-3 block font-serif text-5xl text-on-navy transition-colors duration-500 hover:text-gold-soft md:text-7xl">{FIRM.phone}</a>
            </div>
            <CallButton className="mt-8 md:mt-0" />
          </Reveal>
          <Reveal delay={150} className="border border-border bg-card p-10 md:col-span-2">
            <MapPin className="h-7 w-7 text-gold" strokeWidth={1.25} />
            <p className="eyebrow mt-6">Office Address</p>
            <address className="mt-4 font-serif text-3xl not-italic leading-snug text-navy">{FIRM.street}<br />{FIRM.city}</address>
            <p className="mt-4 text-muted-foreground">Mailing: {FIRM.poBox}, {FIRM.city}</p>
            <a href={FIRM.mapsHref} target="_blank" rel="noreferrer" className="group mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-navy">Get directions <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </Reveal>
          <Reveal delay={300} className="border border-border bg-card p-10">
            <Clock className="h-7 w-7 text-gold" strokeWidth={1.25} />
            <p className="eyebrow mt-6">Office Hours</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-navy">Monday – Friday<br />8:00 AM – 4:00 PM</p>
            <p className="mt-3 text-muted-foreground">Closed Saturday &amp; Sunday</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
