"use client";

const PHONE = "(555) 012-3456";
const ADDRESS = "123 Maple Street, Suite 200, Toronto, ON M5V 2T6";
const EMAIL = "hello@elegantstaples.ca";

const BLUE = "#1a6fd4";
const NAVY = "#0f172a";

const IconPhone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.42 2 2 0 0 1 3.62 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.1a16 16 0 0 0 6 6l1.61-1.61a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconCalendar = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function FinalCTA() {
  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: BLUE }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, white 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10"
        style={{ background: "white" }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2
          className="text-5xl font-extrabold text-white mb-5"
          style={{
            letterSpacing: "-0.02em",
          }}
        >
          Your Healthiest Smile Starts Here.
        </h2>
        <p className="text-blue-100 text-xl leading-relaxed mb-10">
          Take the next step toward comfortable, personalized dental care for
          you and your family.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-9 py-4.5 rounded-2xl text-base font-bold transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            style={{
              background: "white",
              color: BLUE,
            }}
          >
            <IconCalendar />
            Book an Appointment
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2.5 px-9 py-4.5 rounded-2xl text-base font-bold border-2 border-white/40 text-white transition-all duration-200 hover:bg-white/10"
          >
            <IconPhone />
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
