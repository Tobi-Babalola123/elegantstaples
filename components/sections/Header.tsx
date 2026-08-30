"use client";

import { useEffect, useState } from "react";

const PHONE = "361-850-8000";
const ADDRESS = "123 Maple Street, Suite 200, Toronto, ON M5V 2T6";
const EMAIL = "hello@elegantstaples.ca";

const BLUE = "#1a6fd4";
const NAVY = "#0f172a";

const IconMenu = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconX = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
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
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Our Dentists",
    "Reviews",
    "Contact",
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "#ffffff",
        boxShadow: scrolled
          ? "0 1px 24px rgba(15,23,42,0.08)"
          : "0 1px 0 #e2e8f0",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
        style={{ height: 72 }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: BLUE }}
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M12 2C9 2 6 4 6 7c0 2 .5 3.5 1 5l1 6c.3 1.5 1.5 2 2 2h4c.5 0 1.7-.5 2-2l1-6c.5-1.5 1-3 1-5 0-3-3-5-6-5z" />
            </svg>
          </div>
          <div>
            <div
              className="font-bold text-sm leading-tight"
              style={{
                color: NAVY,
              }}
            >
              Elegant Staples
            </div>
            <div
              className="text-xs font-medium"
              style={{
                color: "#64748b",
              }}
            >
              Dental Care
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium transition-colors duration-150 hover:text-blue-600"
              style={{ color: "#475569" }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="hidden sm:flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-700"
            style={{ color: "#475569" }}
          >
            <IconPhone />
            <span className="hidden xl:inline">{PHONE}</span>
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 hover:shadow-md"
            style={{
              background: BLUE,
            }}
          >
            <IconCalendar />
            Book an Appointment
          </a>
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Mobile Menu Backdrop */}
      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm
    shadow-2xl transition-all duration-300 ease-out
    ${
      menuOpen
        ? "translate-x-0 opacity-100"
        : "translate-x-full opacity-0 pointer-events-none"
    }`}
        style={{
          backgroundColor: "#ffffff",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        {/* Drawer Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{
            borderBottom: "1px solid #e2e8f0",
            backgroundColor: "#ffffff",
          }}
        >
          <span className="text-lg font-bold" style={{ color: NAVY }}>
            Menu
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
            style={{
              backgroundColor: "#f8fafc",
              color: NAVY,
            }}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav
          className="px-6 py-6 flex flex-col gap-1"
          style={{
            backgroundColor: "#ffffff",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className="py-3 text-sm font-medium transition-colors"
              style={{
                color: "#334155",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}

          {/* CTA Section */}
          <div
            className="pt-5 mt-3 flex flex-col gap-3"
            style={{
              borderTop: "1px solid #f1f5f9",
            }}
          >
            {/* Call Button */}
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-slate-50"
              style={{
                border: `1px solid ${BLUE}`,
                color: BLUE,
                backgroundColor: "#ffffff",
              }}
            >
              <IconPhone />
              Call {PHONE}
            </a>

            {/* Appointment Button */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: BLUE,
              }}
              onClick={() => setMenuOpen(false)}
            >
              <IconCalendar />
              Book an Appointment
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
