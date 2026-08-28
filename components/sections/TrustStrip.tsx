"use client";

const IconMapPin = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

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

const trustItems = [
  {
    icon: <IconShield />,
    title: "Experienced Care",
    desc: "20+ years of dental excellence",
  },
  {
    icon: <IconTooth />,
    title: "Comprehensive Services",
    desc: "General, cosmetic & emergency dentistry",
  },
  {
    icon: <IconHeart />,
    title: "Patient Focused",
    desc: "Comfortable, personalized care",
  },
  {
    icon: <IconMapPin />,
    title: "Convenient Location",
    desc: "Easy access for patients and families",
  },
];

const PHONE = "(555) 012-3456";
const ADDRESS = "123 Maple Street, Suite 200, Toronto, ON M5V 2T6";
const EMAIL = "hello@elegantstaples.ca";

const BLUE = "#1a6fd4";
const NAVY = "#0f172a";

export default function TrustStrip() {
  return (
    <section style={{ background: NAVY }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="text-blue-400 flex-shrink-0 mt-0.5">{icon}</div>
              <div>
                <div className="font-bold text-sm text-white mb-0.5">
                  {title}
                </div>
                <div className="text-xs text-slate-400">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
