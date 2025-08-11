import Breadcrumbs from "@/components/sections/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import ProductSection from "@/components/sections/ProductSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import MainLayout from "../components/layout/MainLayout";

const ProductPage = () => {
  return (
    <MainLayout>
      <>
        <div className="px-4 py-2 bg-gray-100 rounded-lg">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
            ]}
          />
        </div>
        <FeatureShowcase />
        <ProductSection />
        <TestimonialSection />
        <CTASection />
      </>
    </MainLayout>
  );
};

export default ProductPage;
