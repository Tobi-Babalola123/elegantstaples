"use client";
const PHONE = "(555) 012-3456";
const ADDRESS = "123 Maple Street, Suite 200, Toronto, ON M5V 2T6";
const EMAIL = "hello@elegantstaples.ca";

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

const testimonials = [
  {
    quote:
      "I've been coming to Elegant Staples for years and the care is consistently outstanding. Dr. Mitchell takes the time to explain everything clearly and genuinely makes you feel at ease. My whole family comes here now.",
    name: "Maria T.",
    note: "Patient for 6 years",
  },
  {
    quote:
      "I had a dental emergency on a Monday and they fit me in the same morning. The team was calm, professional and made a really stressful situation completely manageable. I'm so grateful.",
    name: "David K.",
    note: "Emergency patient",
  },
  {
    quote:
      "The cosmetic work I had done here completely transformed my confidence. The veneer results look so natural — I constantly get compliments. The whole experience exceeded every expectation.",
    name: "Stephanie R.",
    note: "Cosmetic dentistry patient",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: "#fef9c3", color: "#a16207" }}
          >
            ⭐ Patient Reviews
          </div>
          <h2
            className="text-4xl font-extrabold mb-4"
            style={{
              color: NAVY,
              letterSpacing: "-0.02em",
            }}
          >
            What Our Patients Say
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real words from real patients who trust us with their smiles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {testimonials.map(({ quote, name, note }) => (
            <div
              key={name}
              className="rounded-2xl p-7 flex flex-col border transition-all duration-200 hover:shadow-lg"
              style={{ background: "#f8fafc", borderColor: "#e2e8f0" }}
            >
              <div className="flex text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <IconStar key={i} />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed text-sm flex-1 mb-5 italic">
                "{quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{
                    background: BLUE,
                  }}
                >
                  {name[0]}
                </div>
                <div>
                  <div
                    className="font-bold text-sm"
                    style={{
                      color: NAVY,
                    }}
                  >
                    {name}
                  </div>
                  <div className="text-xs text-slate-400">{note}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Post-testimonial CTA */}
        <div
          className="rounded-3xl p-8 text-center"
          style={{ background: "#f0f7ff", border: `1px solid #bfdbfe` }}
        >
          <p
            className="font-bold text-xl mb-5"
            style={{
              color: NAVY,
            }}
          >
            Ready for your next visit?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{
              background: BLUE,
            }}
          >
            Book an Appointment <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
