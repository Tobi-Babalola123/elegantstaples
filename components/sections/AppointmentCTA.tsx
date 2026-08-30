"use client";

const BLUE = "#1a6fd4";
const NAVY = "#0f172a";
const PHONE = "361-850-8000";
const ADDRESS = "123 Maple Street, Suite 200, Toronto, ON M5V 2T6";
const EMAIL = "hello@elegantstaples.ca";

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
export default function AppointmentCTA() {
  return (
    <section className="py-16 px-6" style={{ background: "#f0f7ff" }}>
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4"
          style={{ background: "#dbeafe", color: BLUE }}
        >
          <IconCalendar />
          Schedule Your Visit
        </div>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
          style={{
            color: NAVY,
            letterSpacing: "-0.02em",
          }}
        >
          Ready to Take Care <br className="sm:hidden" /> of Your Smile?
        </h2>
        <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Whether you need a routine checkup, cosmetic treatment, or urgent
          dental care, our experienced team is here to help and welcoming new
          patients.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            style={{
              background: BLUE,
            }}
          >
            <IconCalendar />
            Book Your Appointment
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold border-2 transition-all duration-200 hover:bg-white"
            style={{
              borderColor: BLUE,
              color: BLUE,
            }}
          >
            <IconPhone />
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
