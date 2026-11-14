import React from 'react';
import { CinematicHero } from '../components/home/CinematicHero';
import { PerformanceGlance } from '../components/home/PerformanceGlance';
import { TrustStats } from '../components/home/TrustStats';
import { LeadershipSpotlight } from '../components/home/LeadershipSpotlight';
import { EditorialAbout } from '../components/home/EditorialAbout';
import { ModuleTechShowcase } from '../components/home/ModuleTechShowcase';
import { ManufacturingQuality } from '../components/home/ManufacturingQuality';
import { ProductsAndServicesGrid } from '../components/home/ProductsAndServicesGrid';
import { SavingsCalculator } from '../components/home/SavingsCalculator';
import { SubsidyGuideSection } from '../components/home/SubsidyGuideSection';
import { SolarDosAndDonts } from '../components/home/SolarDosAndDonts';
import { SectorsWeServe } from '../components/home/SectorsWeServe';
import { SolarConundrum } from '../components/home/SolarConundrum';
import { SolutionsCards } from '../components/home/SolutionsCards';
import { WhyUsSection } from '../components/home/WhyUsSection';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { ResourceCenter } from '../components/home/ResourceCenter';
import { EsgCommitment } from '../components/home/EsgCommitment';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { TestimonialsSlider } from '../components/home/TestimonialsSlider';
import { SustainabilityImpact } from '../components/home/SustainabilityImpact';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

interface HomePageProps {
  onOpenQuote: () => void;
  onOpenQuoteWithDetails: (systemSize: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuote,
  onOpenQuoteWithDetails,
}) => {
  return (
    <main>
      {/* 1. Cinematic Hero with Floating Solar Cards */}
      <CinematicHero onOpenQuote={onOpenQuote} />

      {/* 2. Performance At A Glance (Inspired by Green Nations Power) */}
      <PerformanceGlance />

      {/* 3. Horizontal Statistics Counters */}
      <TrustStats />

      {/* 4. Leadership Spotlight (Vikas Shriram Bapaye & Siddharth Jagtap) */}
      <LeadershipSpotlight onOpenQuote={onOpenQuote} />

      {/* 5. Editorial About Sanmitra Solar */}
      <EditorialAbout />

      {/* 6. Vikram Solar Inspired Tier-1 Photovoltaic Module Technology Showcase */}
      <ModuleTechShowcase onOpenQuoteWithDetails={onOpenQuoteWithDetails} />

      {/* 7. Manufacturing Prowess & 6-Stage Rigorous Testing (Vikram Solar Standard) */}
      <ManufacturingQuality />

      {/* 8. Products & Services 8-Card Showcase */}
      <ProductsAndServicesGrid />

      {/* 9. Interactive Solar Rooftop Calculator (Clean cards & subsidy breakdown) */}
      <SavingsCalculator onOpenQuoteWithDetails={onOpenQuoteWithDetails} />

      {/* 10. Solar Safety Do's & Don'ts Section */}
      <SolarDosAndDonts />

      {/* 11. Central & State Rooftop Solar Subsidies (PM Surya Ghar Scheme) */}
      <SubsidyGuideSection onOpenQuoteWithDetails={onOpenQuoteWithDetails} />

      {/* 12. Sectors We Serve (Residential, Commercial, Industrial, Education, Healthcare, Agriculture) */}
      <SectorsWeServe />

      {/* 13. Solve The Solar Conundrum (6 customer dilemmas & engineering answers) */}
      <SolarConundrum />

      {/* 14. Deep Dive Solutions Overview */}
      <SolutionsCards />

      {/* 15. Why Choose Sanmitra Solar */}
      <WhyUsSection />

      {/* 16. Commissioned Projects Portfolio Showcase */}
      <FeaturedProjects />

      {/* 17. Vikram Solar-Inspired Vikicare Download & Technical Resource Hub */}
      <ResourceCenter />

      {/* 18. Corporate ESG & Sustainable Progress Roadmap */}
      <EsgCommitment />

      {/* 19. How Solar Works (4-Step Timeline) */}
      <ProcessTimeline onOpenQuote={onOpenQuote} />

      {/* 20. Client Testimonials */}
      <TestimonialsSlider />

      {/* 21. Sustainability Environmental Impact */}
      <SustainabilityImpact />

      {/* 22. Final Conversion CTA */}
      <FinalCtaSection onOpenQuote={onOpenQuote} />
    </main>
  );
};
