"use client";

const PHONE = "(555) 012-3456";
const ADDRESS = "123 Maple Street, Suite 200, Toronto, ON M5V 2T6";
const EMAIL = "hello@elegantstaples.ca";
const BLUE = "#1a6fd4";

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

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconInstagram = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const IconMail = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconClock = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
export default function Footer() {
  const navLinks = [
    "Home",
    "About",
    "Services",
    "Our Dentists",
    "Reviews",
    "Contact",
  ];
  const serviceLinks = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Emergency Dentistry",
    "Dental Hygiene",
    "Dentures & Veneers",
    "Teeth Whitening",
  ];

  return (
    <footer style={{ background: "#070f1a" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: BLUE }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2C9 2 6 4 6 7c0 2 .5 3.5 1 5l1 6c.3 1.5 1.5 2 2 2h4c.5 0 1.7-.5 2-2l1-6c.5-1.5 1-3 1-5 0-3-3-5-6-5z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm text-white">
                  Elegant Staples
                </div>
                <div className="text-xs text-slate-500">Dental Care</div>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Comprehensive dental care for the whole family. Quality,
              compassion, and expertise in every appointment.
            </p>
            <div className="flex gap-3">
              {[IconFacebook, IconInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-blue-600"
                  style={{ background: "#1a2540", color: "#94a3b8" }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#services"
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Contact</h4>
            <div className="space-y-3">
              {[
                { icon: <IconMapPin />, value: ADDRESS },
                { icon: <IconPhone />, value: PHONE },
                { icon: <IconMail />, value: EMAIL },
                { icon: <IconClock />, value: "Mon–Fri 8am–6pm\nSat 9am–3pm" },
              ].map(({ icon, value }) => (
                <div
                  key={value}
                  className="flex items-start gap-2.5 text-xs text-slate-500"
                >
                  <span className="text-slate-600 mt-0.5 flex-shrink-0">
                    {icon}
                  </span>
                  <span className="whitespace-pre-line">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600"
          style={{ borderColor: "#1a2540" }}
        >
          <span>© 2026 Elegant Staples Dental Care. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
