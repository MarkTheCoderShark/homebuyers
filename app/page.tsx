import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import ProcessSection from "@/components/process-section";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";
import StickyNav from "@/components/sticky-nav";

export default function HomePage() {
  return (
    <>
      <StickyNav />
      <main className="min-h-screen">
        <HeroSection />
        <BenefitsSection />
        <ProcessSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  );
}
