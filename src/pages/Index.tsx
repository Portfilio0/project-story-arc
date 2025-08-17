import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import CaseStudiesSection from "@/components/ui/case-studies-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import ContactSection from "@/components/ui/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
