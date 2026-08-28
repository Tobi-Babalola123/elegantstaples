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

export default function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden border-t"
      style={{
        background: "white",
        borderColor: "#e2e8f0",
        boxShadow: "0 -4px 24px rgba(15,23,42,0.10)",
      }}
    >
      <div className="flex gap-3 px-4 py-3">
        <a
          href={`tel:${PHONE}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 text-sm font-bold transition-colors"
          style={{
            borderColor: BLUE,
            color: BLUE,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          <IconPhone /> Call
        </a>
        <a
          href="#contact"
          className="flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-colors"
          style={{
            background: BLUE,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          <IconCalendar /> Book Appointment
        </a>
      </div>
    </div>
  );
}
