import Breadcrumbs from "@/components/sections/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import TestimonialSection from "@/components/sections/TestimonialSection";
import MainLayout from "../components/layout/MainLayout";
import IndustriesSection from "@/components/sections/IndustriesSection";

const IndustriesPage = () => {
  return (
    <MainLayout>
      <>
        <div className="px-4 py-2 bg-gray-100 rounded-lg">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
            ]}
          />
        </div>
        <FeatureShowcase />
        <IndustriesSection />
        <TestimonialSection />
        <CTASection />
      </>
    </MainLayout>
  );
};

export default IndustriesPage;
