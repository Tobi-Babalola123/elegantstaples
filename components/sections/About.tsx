"use client";

const PHONE = "(555) 012-3456";
const ADDRESS = "123 Maple Street, Suite 200, Toronto, ON M5V 2T6";
const EMAIL = "hello@elegantstaples.ca";

const BLUE = "#1a6fd4";
const NAVY = "#0f172a";

const IconCheck = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <polyline points="20 6 9 17 4 12" />
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

export default function About() {
  const bullets = [
    "Preventive & routine dental care",
    "Restorative dentistry for all ages",
    "Cosmetic treatments & smile design",
    "Emergency dental care",
    "Patient-centered, unhurried appointments",
  ];

  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ background: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div className="relative">
          <div
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=600&fit=crop&auto=format"
              alt="Dental professionals providing patient care in a modern clinic"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            className="absolute -bottom-5 -right-5 rounded-2xl p-5 shadow-xl"
            style={{ background: "white", width: 180 }}
          >
            <div
              className="text-4xl font-extrabold mb-1"
              style={{
                color: BLUE,
              }}
            >
              98%
            </div>
            <div className="text-xs font-semibold text-slate-700">
              Patient satisfaction rate
            </div>
            <div className="flex text-yellow-400 mt-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <IconStar key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: "#e8f0fe", color: BLUE }}
          >
            About Our Practice
          </div>
          <h2
            className="text-4xl font-extrabold mb-5"
            style={{
              color: NAVY,
              letterSpacing: "-0.02em",
            }}
          >
            About Elegant Staples Dental Care
          </h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            At Elegant Staples Dental Care, we believe every patient deserves
            exceptional dental care delivered with compassion and expertise. For
            over two decades, we have been serving our community with integrity,
            providing comprehensive dental care for patients of all ages.
          </p>
          <p className="text-slate-600 leading-relaxed mb-7">
            Our modern practice combines the latest dental technology with a
            warm, welcoming environment — because we understand that a visit to
            the dentist should feel reassuring, not stressful.
          </p>
          <ul className="space-y-3 mb-8">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 text-sm font-medium text-slate-700"
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                  style={{ background: BLUE }}
                >
                  <IconCheck />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <a
            href="#our-dentists"
            className="inline-flex items-center gap-2 font-bold text-base transition-colors hover:opacity-80"
            style={{
              color: BLUE,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Meet Our Dental Team <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
