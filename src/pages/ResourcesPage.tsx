import Breadcrumbs from "@/components/sections/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import TestimonialSection from "@/components/sections/TestimonialSection";
import MainLayout from "../components/layout/MainLayout";
import ResourcesSection from "@/components/sections/ResourcesSection";

const ResourcesPage = () => {
  return (
    <MainLayout>
      <>
        <div className="px-4 py-2 bg-gray-100 rounded-lg">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
            ]}
          />
        </div>
        <FeatureShowcase />
        <ResourcesSection />
        <TestimonialSection />
        <CTASection />
      </>
    </MainLayout>
  );
};

export default ResourcesPage;
