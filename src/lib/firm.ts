export const FIRM = {
  name: "Talley & Talley",
  attorney: "Thomas W. Talley",
  phone: "(580) 726-2251",
  phoneHref: "tel:+15807262251",
  street: "200 E 4th St",
  poBox: "P.O. Box 841",
  city: "Hobart, Oklahoma 73651",
  hours: "Monday – Friday, 8:00 AM – 4:00 PM",
  since: 1976,
  mapsHref: "https://www.google.com/maps/search/?api=1&query=200+E+4th+St+Hobart+OK+73651",
};

export const PRACTICES = [
  { to: "/real-estate-law", title: "Real Estate Law", blurb: "Deeds, title matters, transfers of land, and the documents behind Southwest Oklahoma property." },
  { to: "/probate", title: "Probate & Estate Administration", blurb: "Guiding families and personal representatives through the Oklahoma probate process." },
  { to: "/family-law", title: "Family Law", blurb: "Divorce, custody, and domestic matters handled with discretion and steady counsel." },
  { to: "/wills-estate-planning", title: "Wills & Estate Planning", blurb: "Clear, carefully drafted plans that put your wishes in writing." },
] as const;
