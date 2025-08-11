const IndustriesSection = () => (
  <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Industries We Serve
        </h2>
        <p className="text-xl text-gray-600">
          Trusted by businesses across various sectors
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "E-commerce",
            description:
              "Boost sales and reduce cart abandonment with personalized messaging",
            icon: "ShoppingBag",
          },
          {
            name: "Healthcare",
            description:
              "Streamline patient communication and appointment scheduling",
            icon: "HeartPulse",
          },
          {
            name: "Finance",
            description:
              "Secure customer communication with compliance-ready messaging",
            icon: "DollarSign",
          },
          {
            name: "Education",
            description:
              "Engage students and parents with timely updates and support",
            icon: "GraduationCap",
          },
          {
            name: "Travel & Hospitality",
            description:
              "Enhance guest experience with seamless pre- and post-booking support",
            icon: "Plane",
          },
          {
            name: "Real Estate",
            description:
              "Convert leads faster with instant property inquiries and showings",
            icon: "Building2",
          },
        ].map((industry, index) => (
          <div
            key={index}
            className="text-center p-8 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-white font-bold text-2xl">
                {industry.icon === "ShoppingBag"
                  ? "🛍️"
                  : industry.icon === "HeartPulse"
                  ? "❤️"
                  : industry.icon === "DollarSign"
                  ? "💰"
                  : industry.icon === "GraduationCap"
                  ? "🎓"
                  : industry.icon === "Plane"
                  ? "✈️"
                  : "🏠"}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {industry.name}
            </h3>
            <p className="text-gray-600">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default IndustriesSection;