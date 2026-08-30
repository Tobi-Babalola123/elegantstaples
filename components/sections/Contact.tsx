"use client";

import { useState } from "react";
const PHONE = "361-850-8000";
const ADDRESS =
  "41177 South Staples Blvd Suite 300 Corpus Christi, Texas  78411";
const EMAIL = "elegantefrontdesk@gmail.com";

const BLUE = "#1a6fd4";
const NAVY = "#0f172a";

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

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    reason: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:border-blue-400";
  const inputStyle = {
    borderColor: "#e2e8f0",
    "--tw-ring-color": BLUE,
  } as React.CSSProperties;

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: "#e8f0fe", color: BLUE }}
          >
            <IconMapPin />
            Visit Us
          </div>
          <h2
            className="text-4xl font-extrabold mb-4"
            style={{
              color: NAVY,
              letterSpacing: "-0.02em",
            }}
          >
            Visit Our Dental Practice
          </h2>
          <p className="text-slate-500 text-lg">
            We make it easy to reach us <br className="sm:hidden" /> and book a
            convenient appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info + map */}
          <div className="space-y-6">
            <div
              className="bg-white rounded-2xl p-7 border"
              style={{ borderColor: "#e2e8f0" }}
            >
              <h3
                className="font-bold text-lg mb-5"
                style={{
                  color: NAVY,
                }}
              >
                Practice Information
              </h3>
              <div className="space-y-4">
                {[
                  { icon: <IconMapPin />, label: "Address", value: ADDRESS },
                  { icon: <IconPhone />, label: "Phone", value: PHONE },
                  { icon: <IconMail />, label: "Email", value: EMAIL },
                  {
                    icon: <IconClock />,
                    label: "Hours",
                    value: "Mon–Fri 8am–6pm · Sat 9am–3pm · Sun Closed",
                  },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="text-blue-500 mt-0.5 flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 mb-0.5">
                        {label}
                      </div>
                      <div className="text-sm text-slate-700">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href="#"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90"
                  style={{ background: BLUE }}
                >
                  <IconMapPin />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${PHONE}`}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold border-2 transition-colors hover:bg-blue-50"
                  style={{ borderColor: BLUE, color: BLUE }}
                >
                  <IconPhone />
                  <span>Call Office</span>
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: "#e2e8f0",
                height: 260,
              }}
            >
              <iframe
                title="Elegant Staples Dental Office Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  ADDRESS,
                )}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div
            className="bg-white rounded-2xl p-7 border"
            style={{ borderColor: "#e2e8f0" }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "#dcfce7" }}
                >
                  <span className="text-green-600">
                    <IconCheck />
                  </span>
                </div>
                <h3
                  className="font-bold text-xl mb-2"
                  style={{
                    color: NAVY,
                  }}
                >
                  Request Received!
                </h3>
                <p className="text-slate-500 text-sm">
                  Thank you — we'll be in touch shortly to confirm your
                  appointment.
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{
                    color: NAVY,
                  }}
                >
                  Have a Question?
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Fill in the form below and we'll get back to you promptly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="text-xs font-semibold text-slate-600 block mb-1.5"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        required
                        placeholder="Jane"
                        className={inputCls}
                        style={inputStyle}
                        value={form.firstName}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, firstName: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="text-xs font-semibold text-slate-600 block mb-1.5"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        required
                        placeholder="Smith"
                        className={inputCls}
                        style={inputStyle}
                        value={form.lastName}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, lastName: e.target.value }))
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="text-xs font-semibold text-slate-600 block mb-1.5"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        className={inputCls}
                        style={inputStyle}
                        value={form.phone}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, phone: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="text-xs font-semibold text-slate-600 block mb-1.5"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="jane@email.com"
                        className={inputCls}
                        style={inputStyle}
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="text-xs font-semibold text-slate-600 block mb-1.5"
                      htmlFor="reason"
                    >
                      Reason for Visit
                    </label>
                    <select
                      id="reason"
                      className={inputCls}
                      style={{ ...inputStyle, background: "white" }}
                      value={form.reason}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, reason: e.target.value }))
                      }
                    >
                      <option value="">Select a reason...</option>
                      <option>Routine Checkup / Cleaning</option>
                      <option>Emergency / Tooth Pain</option>
                      <option>Cosmetic Consultation</option>
                      <option>Fillings / Restorative</option>
                      <option>Dentures / Veneers</option>
                      <option>Teeth Whitening</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="text-xs font-semibold text-slate-600 block mb-1.5"
                      htmlFor="date"
                    >
                      Preferred Appointment Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      className={inputCls}
                      style={inputStyle}
                      value={form.date}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, date: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="text-xs font-semibold text-slate-600 block mb-1.5"
                      htmlFor="message"
                    >
                      Message (optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Any additional details..."
                      className={inputCls}
                      style={{ ...inputStyle, resize: "none" }}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                    style={{
                      background: BLUE,
                    }}
                  >
                    Request Appointment
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
