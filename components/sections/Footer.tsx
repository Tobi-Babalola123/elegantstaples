"use client";
import Image from "next/image";

const PHONE = "361-850-8000";
const ADDRESS =
  "41177 South Staples Blvd Suite 300 Corpus Christi, Texas 78411";
const EMAIL = "elegantefrontdesk@gmail.com";
const BLUE = "#1a6fd4";

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
            <div className="flex items-center mb-4">
              <Image
                src="/images/elegantstaples_logo.png"
                alt="Elegant Staples Dental Care"
                width={200}
                height={65}
                className="w-auto h-22 object-contain brightness-0 invert"
              />
            </div>

            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Comprehensive dental care for the whole family. Quality,
              compassion, and expertise in every appointment.
            </p>

            <div className="flex gap-3">
              {[IconFacebook].map((Icon, i) => (
                <a
                  key={i}
                  href="https://web.facebook.com/elegantsmiles17/?_rdc=1&_rdr#"
                  target="_blank"
                  rel="noopener noreferrer"
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
                { id: "address", icon: <IconMapPin />, value: ADDRESS },
                { id: "phone", icon: <IconPhone />, value: PHONE },
                { id: "email", icon: <IconMail />, value: EMAIL },
                {
                  id: "hours",
                  icon: <IconClock />,
                  value: (
                    <div className="space-y-1">
                      <div>Monday – Friday&nbsp;&nbsp;09:00AM – 7:00PM</div>
                      <div>Saturday&nbsp;&nbsp;09:00AM – 4:00PM</div>
                      <div className="pt-2 text-xs font-medium">
                        Late evening appointments available, call for details
                      </div>
                    </div>
                  ),
                },
              ].map(({ id, icon, value }) => (
                <div
                  key={id}
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
