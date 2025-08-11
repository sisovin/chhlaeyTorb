import Breadcrumbs from "@/components/sections/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import TestimonialSection from "@/components/sections/TestimonialSection";
import MainLayout from "../components/layout/MainLayout";
import PricingSection from "@/components/sections/PricingSection";

const PricesPage = () => {
  return (
    <MainLayout>
      <>
        <div className="px-4 py-2 bg-gray-100 rounded-lg">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Pricing", href: "/pricing" },
            ]}
          />
        </div>
        <FeatureShowcase />
        <PricingSection />
        <TestimonialSection />
        <CTASection />
      </>
    </MainLayout>
  );
};

export default PricesPage;
