import IndustriesSection from "@/components/sections/IndustriesSection";
import PricingSection from "@/components/sections/PricingSection";
import ProductSection from "@/components/sections/ProductSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import CTASection from "../components/sections/CTASection";
import FeatureShowcase from "../components/sections/FeatureShowcase";
import HeroSection from "../components/sections/HeroSection";

function HomePage() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Render the appropriate section based on activeSection
  const renderSection = () => {
    switch (activeSection) {
      case "product":
        return <ProductSection />;
      case "industries":
        return <IndustriesSection />;
      case "resources":
        return <ResourcesSection />;
      case "pricing":
        return <PricingSection />;
      default:
        return (
          <>
            <HeroSection />
            <FeatureShowcase />
            <TestimonialSection />
            <CTASection />
          </>
        );
    }
  };

  return (
    <MainLayout>
      <div>
        {/* Example navigation UI for switching sections */}
        <nav className="flex gap-4 mb-6">
          <button onClick={() => setActiveSection("")}>Home</button>
          <button onClick={() => setActiveSection("product")}>Product</button>
          <button onClick={() => setActiveSection("industries")}>
            Industries
          </button>
          <button onClick={() => setActiveSection("resources")}>
            Resources
          </button>
          <button onClick={() => setActiveSection("pricing")}>Pricing</button>
        </nav>
        <main className="homepage-main">{renderSection()}</main>
      </div>
    </MainLayout>
  );
}

export default HomePage;
