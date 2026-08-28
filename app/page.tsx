import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQ from "@/components/sections/FAQ";
import TrustBar from "@/components/sections/TrustStrip";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyUs";
import Promo from "@/components/sections/About";
import ReplacementSection from "@/components/sections/EmergencyCTA";
import HowItWorks from "@/components/sections/CosmeticSection";
import MaintenancePlan from "@/components/sections/MobileStickyBar";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Financing from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import CertifiedTrusted from "@/components/sections/CertifiedTrusted";
import Header from "@/components/sections/Header";
import TrustStrip from "@/components/sections/TrustStrip";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import EmergencyCTA from "@/components/sections/EmergencyCTA";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import WhyUs from "@/components/sections/WhyUs";
import CosmeticSection from "@/components/sections/CosmeticSection";
import MobileStickyBar from "@/components/sections/MobileStickyBar";
export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <TrustStrip />
      <AppointmentCTA />
      <Services />
      <EmergencyCTA />
      <About />
      <Team />
      <WhyUs />
      <Testimonials />
      <CosmeticSection />
      <Contact />
      <FinalCTA />

      <Footer />
      <MobileStickyBar />
      {/* <a
        href="#estimate"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-[9px] bg-amber-500 px-5 py-3 text-sm font-bold tracking-wide text-[#0F1923] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E2C06A]"
      >
        <MessageCircle size={17} />
        Let's Chat
      </a> */}
      <main></main>
    </>
  );
}
