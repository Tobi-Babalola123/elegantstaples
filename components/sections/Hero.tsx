"use client";

const PHONE = "(555) 012-3456";

const BLUE = "#1a6fd4";
const NAVY = "#0f172a";

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

const IconShield = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

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
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconCheck = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-[72px]"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(26,111,212,0.12) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.12) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1a6fd4 1px, transparent 1px), linear-gradient(90deg, #1a6fd4 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-20 items-center min-h-[calc(100vh-152px)]">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="relative z-10 animate-fade-in-up">
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full mb-6"
              style={{
                background: "#eff6ff",
                color: BLUE,
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>

              <span className="text-xs sm:text-sm font-semibold">
                Now Accepting New Patients
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="font-extrabold tracking-[-0.035em] leading-[1.02] mb-6"
              style={{
                color: NAVY,
                fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
              }}
            >
              Your Smile Deserves
              <span className="block mt-1" style={{ color: BLUE }}>
                Exceptional Care.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl mb-8">
              Modern, compassionate dental care for you and your family from
              routine checkups to complete smile transformations.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-9">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 rounded-xl text-sm sm:text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: BLUE,
                }}
              >
                <IconCalendar />
                Book an Appointment
              </a>

              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 rounded-xl text-sm sm:text-base font-bold border-2 transition-all duration-200 hover:bg-blue-50"
                style={{
                  borderColor: "#dbeafe",
                  color: BLUE,
                }}
              >
                <IconPhone />
                Call Our Office
              </a>
            </div>

            {/* Trust points */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-6 sm:gap-y-3">
              {[
                "Experienced dental team",
                "Patient-first approach",
                "Family-friendly care",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-500"
                >
                  <span
                    className="flex items-center justify-center w-5 h-5 rounded-full"
                    style={{
                      background: "#dcfce7",
                      color: "#16a34a",
                    }}
                  >
                    <IconCheck />
                  </span>

                  {item}
                </div>
              ))}
            </div>

            {/* Mobile trust rating */}
            <div className="flex items-center gap-3 mt-8 lg:hidden">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <IconStar key={i} />
                ))}
              </div>

              <div className="h-5 w-px bg-slate-200" />

              <span className="text-sm font-medium text-slate-500">
                Trusted by thousands of families
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}
          <div className="relative lg:pl-4">
            {/* Decorative circle */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-[18px] opacity-20"
              style={{
                borderColor: BLUE,
              }}
            />

            {/* Main image */}
            <div
              className="relative overflow-hidden rounded-[2rem] shadow-2xl"
              style={{
                aspectRatio: "4 / 4.7",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1667133295315-820bb6481730?w=1000&h=1200&fit=crop&auto=format"
                alt="Dentist carefully examining patient"
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Image gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.65) 0%, transparent 45%)",
                }}
              />

              {/* Bottom trust card */}
              <div className="absolute bottom-5 left-5 right-5">
                <div
                  className="rounded-2xl p-4 sm:p-5 backdrop-blur-xl"
                  style={{
                    background: "rgba(255,255,255,0.94)",
                    boxShadow: "0 12px 40px rgba(15,23,42,0.18)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: "#eff6ff",
                        color: BLUE,
                      }}
                    >
                      <IconShield />
                    </div>

                    <div className="min-w-0">
                      <div
                        className="font-bold text-sm"
                        style={{ color: NAVY }}
                      >
                        20+ Years of Excellence
                      </div>

                      <div className="text-xs text-slate-500 mt-0.5">
                        Trusted by thousands of families
                      </div>
                    </div>

                    <div className="hidden sm:flex ml-auto text-yellow-400">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <IconStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating experience badge */}
            <div
              className="absolute -bottom-5 -left-4 sm:-left-6 lg:-left-8 rounded-2xl px-5 py-4 shadow-xl"
              style={{
                background: BLUE,
                color: "white",
              }}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-2xl font-extrabold leading-none">
                    20+
                  </div>

                  <div className="text-[10px] font-semibold uppercase tracking-wide text-blue-100 mt-1">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Floating appointment badge */}
            <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-3 rounded-2xl px-4 py-3 shadow-xl bg-white">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "#eff6ff",
                  color: BLUE,
                }}
              >
                <IconCalendar />
              </div>

              <div>
                <div className="text-xs font-bold" style={{ color: NAVY }}>
                  Easy Appointments
                </div>

                <div className="text-[11px] text-slate-500">
                  Flexible scheduling
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
