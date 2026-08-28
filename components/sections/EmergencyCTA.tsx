"use client";

const PHONE = "(555) 012-3456";
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

export default function EmergencyCTA() {
  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "#1c0a00" }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, #f97316 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: "rgba(249,115,22,0.2)", color: "#fb923c" }}
            >
              <IconAlertTriangle />
              Dental Emergency?
            </div>
            <h2
              className="text-4xl xl:text-5xl font-extrabold text-white mb-5"
              style={{
                letterSpacing: "-0.02em",
              }}
            >
              Need Urgent Dental Care?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
              Don't let dental pain wait. Contact our team to discuss your
              emergency and find out how we can help — we prioritize urgent
              cases.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                style={{
                  background: "#f97316",
                  color: "white",
                }}
              >
                <IconPhone />
                Call Now — {PHONE}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold border-2 text-white transition-all duration-200 hover:bg-white/10"
                style={{
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                Request an Appointment
              </a>
            </div>
          </div>
          <div className="lg:flex-shrink-0 flex flex-col items-center gap-6">
            <div
              className="w-40 h-40 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(249,115,22,0.15)",
                border: "2px solid rgba(249,115,22,0.3)",
              }}
            >
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center"
                style={{ background: "rgba(249,115,22,0.25)" }}
              >
                <span style={{ color: "#fb923c" }}>
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-14 h-14"
                  >
                    <path d="M24 4C14 4 6 12 6 22c0 4 1.5 7 3.5 9.5L8 40l9-2c2 1 4.5 2 7 2 10 0 18-8 18-18S34 4 24 4z" />
                    <line x1="24" y1="16" x2="24" y2="26" />
                    <circle cx="24" cy="31" r="1.5" fill="currentColor" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-lg">
                Same-Day Emergency
              </div>
              <div className="text-slate-400 text-sm">
                Appointments Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
