"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const BLUE = "#1a6fd4";
const NAVY = "#0f172a";

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

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Dentists", href: "#team" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMobileMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Mobile backdrop */}
      <div
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-[55] bg-[#0F1923]/45 backdrop-blur-[2px] lg:hidden transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-[#0F1923]/10"
            : "bg-white/90 backdrop-blur-md border-b border-[#0F1923]/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main navbar */}
          <div className="h-[80px] flex items-center justify-between gap-6">
            {/* Logo */}
            <a href="#" className="flex items-center flex-shrink-0">
              <Image
                src="/images/elegantstaples_logo.png"
                alt="Elegant Staples Dental Care"
                width={160}
                height={50}
                className="w-auto h-19 object-contain"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
              {/* Services dropdown */}

              {/* Other desktop links */}
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="relative text-[#0F1923]/75 hover:text-[#18A2DF] text-[13px] font-medium tracking-wide transition-colors duration-200 group"
                >
                  {label}

                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#18A2DF] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:361-850-8000"
                className="inline-flex items-center gap-2 text-[#0F1923]/70 hover:text-[#18A2DF] text-xs font-medium transition-colors"
              >
                <Phone size={14} className="text-[#18A2DF]" />

                <span>Call 361-850-8000</span>
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
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-[9px] border border-[#0F1923]/15 bg-[#0F1923]/5 text-[#0F1923] hover:border-[#18A2DF] hover:text-[#18A2DF] transition-all duration-200"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE RIGHT-SIDE DRAWER
      ===================================================== */}
      <aside
        id="mobile-navigation"
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[min(88vw,380px)] bg-[#0F1923] shadow-2xl lg:hidden transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="h-full flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 sm:px-6 h-[76px] border-b border-white/10">
            <a href="#" className="flex items-center flex-shrink-0">
              <Image
                src="/images/elegantstaples_logo.png"
                alt="Elegant Staples Dental Care"
                width={200}
                height={65}
                className="w-auto h-18 object-contain brightness-0 invert"
                priority
              />
            </a>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="w-10 h-10 rounded-[9px] border border-white/10 bg-white/5 text-white flex items-center justify-center hover:border-[#18A2DF] hover:text-[#18A2DF] transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 sm:px-6 py-5">
            {/* Services */}

            {/* Other Links */}
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between py-4 text-white/80 hover:text-[#18A2DF] text-base font-medium border-b border-white/10 transition-colors"
              >
                <span>{label}</span>

                <ArrowUpRight size={16} className="text-white/25" />
              </a>
            ))}
          </nav>

          {/* Drawer Footer / CTA */}
          <div className="px-5 sm:px-6 pb-6 pt-4 border-t border-white/10">
            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 hover:shadow-md"
              style={{
                background: BLUE,
              }}
            >
              <IconCalendar />
              Book an Appointment
            </a>

            <a
              href="tel:361-850-8000"
              className="flex items-center justify-center gap-2 text-white/60 hover:text-white text-sm mt-4 transition-colors"
            >
              <Phone size={15} className="text-[#18A2DF]" />
              <span>361-850-8000</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
