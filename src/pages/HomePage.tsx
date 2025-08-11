import { useState } from "react";
import IndustriesSection from "@/components/sections/IndustriesSection";
import PricingSection from "@/components/sections/PricingSection";
import ProductSection from "@/components/sections/ProductSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import MainLayout from "../components/layout/MainLayout";
import CTASection from "../components/sections/CTASection";
import FeatureShowcase from "../components/sections/FeatureShowcase";
import HeroSection from "../components/sections/HeroSection";

function HomePage() {
  return (
    <MainLayout>
      <>
        <HeroSection />
        <FeatureShowcase />
        <ProductSection />
        <IndustriesSection />
        <ResourcesSection />
        <PricingSection />
        <TestimonialSection />
        <CTASection />
      </>
    </MainLayout>
  );
}

export default HomePage;
