import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const stackSansNotch = localFont({
  src: [
    {
      path: "./fonts/StackSansNotch-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stack-sans-notch",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Elegant Staples | Trusted Dental Care & Services",

  icons: {
    icon: "/images/navlogo.png",
    shortcut: "/images/navlogo.png",
    apple: "/images/navlogo.png",
  },

  description:
    "Elegant Staples provides compassionate, professional dental care for patients and families. From routine cleanings and preventive care to restorative and cosmetic dentistry, our team is here to help you achieve a healthy, confident smile.",

  keywords: [
    "Elegant Staples",
    "Elegant Staples Dental",
    "Elegant Staples Dentistry",
    "Elegant Staples Dental Care",
    "dentist",
    "dental clinic",
    "dental office",
    "dentist near me",
    "dental care",
    "family dentist",
    "general dentistry",
    "preventive dentistry",
    "teeth cleaning",
    "dental checkup",
    "cosmetic dentistry",
    "restorative dentistry",
    "oral health",
    "professional dental care",
    "affordable dental care",
    "emergency dentist",
    "dental services",
    "dentist appointment",
  ],

  authors: [
    {
      name: "Elegant Staples",
    },
  ],

  creator: "Elegant Staples",
  publisher: "Elegant Staples",
  applicationName: "Elegant Staples",

  category: "Dental Services",

  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "Elegant Staples | Trusted Dental Care & Services",

    description:
      "Compassionate, professional dental care focused on your comfort, oral health, and confidence. Explore dental services and book an appointment with Elegant Staples.",

    url: "https://your-domain.com",

    siteName: "Elegant Staples",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Elegant Staples | Trusted Dental Care & Services",

    description:
      "Professional and compassionate dental care designed around your comfort, oral health, and confident smile.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export const viewport: Viewport = {
  themeColor: "#0F2744",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={stackSansNotch.variable}>
      <body className="antialiased bg-background font-sans">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
