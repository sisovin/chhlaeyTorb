import React from "react";
const FeatureShowcase = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Everything you need in one platform
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Powerful features designed to help you connect with customers across
          all channels
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Omnichannel Messaging",
            description:
              "Connect with customers on WhatsApp, Facebook, Instagram, SMS, and more from a single inbox",
            icon: "MessagesSquare",
          },
          {
            title: "AI-Powered Automation",
            description:
              "Smart bots that handle common queries and qualify leads 24/7 without human intervention",
            icon: "Sparkles",
          },
          {
            title: "Built-in CRM",
            description:
              "Complete customer profiles with conversation history, preferences, and purchase data",
            icon: "Users",
          },
          {
            title: "Lead Management",
            description:
              "Automatically capture, score, and route leads to the right sales team members",
            icon: "TrendingUp",
          },
          {
            title: "Analytics & Reporting",
            description:
              "Real-time insights into team performance, response times, and customer satisfaction",
            icon: "BarChart3",
          },
          {
            title: "API & Integrations",
            description:
              "Connect with your existing tools through our robust API and pre-built integrations",
            icon: "Zap",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <div className="text-white font-bold">⚡</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureShowcase;
