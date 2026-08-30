"use client";

const IconShield = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const BLUE = "#1a6fd4";
const NAVY = "#0f172a";
const IconSparkle = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
  </svg>
);
const IconHeart = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const IconTooth = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M12 2C9 2 6 4 6 7c0 2 .5 3.5 1 5l1 6c.3 1.5 1.5 2 2 2h4c.5 0 1.7-.5 2-2l1-6c.5-1.5 1-3 1-5 0-3-3-5-6-5z" />
  </svg>
);

const IconAlertTriangle = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconStar = ({ filled = true }: { filled?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.75"
    className="w-4 h-4"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
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
const services = [
  {
    icon: <IconShield />,
    title: "General Dentistry",
    desc: "Routine exams, cleanings, preventive care and comprehensive oral health services.",
    color: "#e8f0fe",
    accent: BLUE,
  },
  {
    icon: <IconSparkle />,
    title: "Dental Hygiene",
    desc: "Professional cleanings and preventive care to help maintain healthy teeth and gums.",
    color: "#ede9fe",
    accent: "#7c3aed",
  },
  {
    icon: <IconTooth />,
    title: "Dental Fillings",
    desc: "Comfortable treatment for cavities and tooth decay using durable, natural-looking materials.",
    color: "#e8f0fe",
    accent: BLUE,
  },
  {
    icon: <IconHeart />,
    title: "Dentures & Veneers",
    desc: "Restorative and cosmetic options designed to improve function and confidence.",
    color: "#ede9fe",
    accent: "#7c3aed",
  },
  {
    icon: <IconAlertTriangle />,
    title: "Emergency Dentistry",
    desc: "Prompt care for urgent dental problems and unexpected tooth pain.",
    color: "#fff7ed",
    accent: "#ea580c",
  },
  {
    icon: <IconStar />,
    title: "Teeth Whitening",
    desc: "Professional whitening treatments for a brighter, more confident smile.",
    color: "#e8f0fe",
    accent: BLUE,
  },
];

function ServiceCard({
  icon,
  title,
  desc,
  color,
  accent,
}: (typeof services)[0]) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-6 border transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
      style={{ borderColor: "#e2e8f0" }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200"
        style={{ background: color, color: accent }}
      >
        {icon}
      </div>
      <h3 className="font-bold text-base mb-2" style={{ color: NAVY }}>
        {title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">{desc}</p>
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150"
        style={{ color: accent }}
      >
        Learn More <IconArrowRight />
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: "#e8f0fe", color: BLUE }}
          >
            <IconTooth />
            Our Services
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
            style={{
              color: NAVY,
              letterSpacing: "-0.02em",
            }}
          >
            Dental Care for
            <br className="sm:hidden" /> Every Stage of Life
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From preventive care to cosmetic and emergency dentistry, we provide
            comprehensive dental services for the whole family.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
