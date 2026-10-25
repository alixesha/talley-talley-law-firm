export const FIRM = {
  name: "Talley & Talley",
  attorney: "Thomas W. Talley",
  phone: "(580) 726-2251",
  phoneHref: "tel:+15807262251",
  street: "200 E 4th St",
  poBox: "P.O. Box 841",
  city: "Hobart, Oklahoma 73651",
  hours: "Monday – Thursday, 8:00 AM – 5:00 PM · Friday, 8:00 AM – 12:00 PM · Weekends by appointment",
  hoursLines: [
    ["Monday – Thursday", "8:00 AM – 5:00 PM"],
    ["Friday", "8:00 AM – 12:00 PM"],
    ["Saturday & Sunday", "By appointment only"],
  ] as const,
  since: 1976,
  mapsHref: "https://www.google.com/maps/search/?api=1&query=200+E+4th+St+Hobart+OK+73651",
};

export const PRACTICES = [
  { to: "/real-estate-law", title: "Real Estate Law", blurb: "Deeds, title matters, transfers of land, and the documents behind Southwest Oklahoma property." },
  { to: "/probate", title: "Probate & Estate Administration", blurb: "Guiding families and personal representatives through the Oklahoma probate process." },
  { to: "/family-law", title: "Family Law", blurb: "Divorce, custody, and domestic matters handled with discretion and steady counsel." },
  { to: "/wills-estate-planning", title: "Wills & Estate Planning", blurb: "Clear, carefully drafted plans that put your wishes in writing." },
  { to: "/criminal-defense-law", title: "Criminal Defense Law", blurb: "Defense representation for those facing charges — steady guidance from first call through resolution." },
] as const;
