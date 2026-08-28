"use client";

const PHONE = "(555) 012-3456";
const ADDRESS = "123 Maple Street, Suite 200, Toronto, ON M5V 2T6";
const EMAIL = "hello@elegantstaples.ca";

const BLUE = "#1a6fd4";
const NAVY = "#0f172a";

const IconArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconUsers = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Principal Dentist",
    creds: "DDS, University of Toronto · 18 yrs experience",
    img: "https://images.unsplash.com/photo-1673865641073-4479f93a7776?w=400&h=480&fit=crop&auto=format",
    alt: "Dr. Sarah Mitchell, Principal Dentist at Elegant Staples Dental Care",
  },
  {
    name: "Dr. James Okonkwo",
    role: "Cosmetic Dentist",
    creds: "DMD, McGill University · 12 yrs experience",
    img: "https://images.unsplash.com/photo-1758691463393-a2aa9900af8a?w=400&h=480&fit=crop&auto=format",
    alt: "Dr. James Okonkwo, Cosmetic Dentist",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Emergency & Restorative",
    creds: "BDS, MDS · Oral Surgery · 10 yrs experience",
    img: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400&h=480&fit=crop&auto=format",
    alt: "Dr. Priya Sharma, Emergency and Restorative Dentist",
  },
];

function TeamCard({ name, role, creds, img, alt }: (typeof team)[0]) {
  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden border transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
      style={{ borderColor: "#e2e8f0" }}
    >
      <div
        className="overflow-hidden"
        style={{ aspectRatio: "3/3.5", background: "#e8f0fe" }}
      >
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-base mb-0.5" style={{ color: NAVY }}>
          {name}
        </h3>
        <div className="text-sm font-semibold mb-1" style={{ color: BLUE }}>
          {role}
        </div>
        <div className="text-xs text-slate-500 leading-relaxed mb-4">
          {creds}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
          style={{ color: BLUE }}
        >
          View Profile <IconArrowRight />
        </a>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="our-dentists" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: "#e8f0fe", color: BLUE }}
          >
            <IconUsers />
            Our Team
          </div>
          <h2
            className="text-4xl font-extrabold mb-4"
            style={{
              color: NAVY,
              letterSpacing: "-0.02em",
            }}
          >
            Meet Your Dental Team
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Experienced professionals dedicated to making every visit
            comfortable and personalized.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {team.map((t) => (
            <TeamCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
