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

export default function CosmeticSection() {
  return (
    <section
      className="py-24 px-6 overflow-hidden"
      style={{ background: NAVY }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: "rgba(99,102,241,0.15)", color: "#a5b4fc" }}
          >
            ✨ Cosmetic Dentistry
          </div>
          <h2
            className="text-4xl xl:text-5xl font-extrabold text-white mb-5"
            style={{
              letterSpacing: "-0.02em",
            }}
          >
            Love Your
            <br />
            <span style={{ color: "#a5b4fc" }}>Smile Again</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
            Explore cosmetic treatments designed to improve the appearance of
            your smile while maintaining a completely natural look. Veneers,
            whitening, and more — tailored to you.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            style={{
              background: "#6366f1",
              color: "white",
            }}
          >
            Explore Cosmetic Dentistry <IconArrowRight />
          </a>
        </div>
        <div className="relative">
          <div
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=800&h=600&fit=crop&auto=format"
              alt="Beautiful smiling patient after cosmetic dental treatment"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(120deg, rgba(99,102,241,0.15) 0%, transparent 60%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
