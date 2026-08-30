"use client";
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

const PHONE = "(555) 012-3456";
const ADDRESS = "123 Maple Street, Suite 200, Toronto, ON M5V 2T6";
const EMAIL = "hello@elegantstaples.ca";

const BLUE = "#1a6fd4";
const NAVY = "#0f172a";

const whyUs = [
  {
    icon: <IconHeart />,
    title: "Patient-Centered Care",
    desc: "We take time to understand your needs and ensure every visit is comfortable and reassuring — never rushed.",
    color: "#ede9fe",
    accent: "#7c3aed",
  },
  {
    icon: <IconShield />,
    title: "Experienced Professionals",
    desc: "Our dental team brings decades of combined experience with a genuine commitment to quality and precision.",
    color: "#e8f0fe",
    accent: BLUE,
  },
  {
    icon: <IconTooth />,
    title: "Comprehensive Services",
    desc: "Convenient access to preventive, restorative, cosmetic and emergency dentistry under one roof.",
    color: "#f0fdf4",
    accent: "#16a34a",
  },
  {
    icon: <IconSparkle />,
    title: "Comfortable Environment",
    desc: "A welcoming, modern practice designed to make dental visits less stressful for patients of all ages.",
    color: "#fff7ed",
    accent: "#ea580c",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-6" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 px-4">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
            style={{
              color: NAVY,
              letterSpacing: "-0.02em",
            }}
          >
            Why Choose <br className="sm:hidden" />
            Elegant Staples?
          </h2>

          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            We combine clinical excellence with genuine warmth because great
            dental care is about more than just teeth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map(({ icon, title, desc, color, accent }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border transition-all duration-200 hover:shadow-lg"
              style={{ borderColor: "#e2e8f0" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: color, color: accent }}
              >
                {icon}
              </div>
              <h3
                className="font-bold text-base mb-2"
                style={{
                  color: NAVY,
                }}
              >
                {title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
