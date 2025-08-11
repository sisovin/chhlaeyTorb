const PricingSection = () => (
  <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-600">
          No hidden fees. No long-term contracts.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          {
            name: "Free",
            price: "Free",
            description: "Perfect for getting started",
            features: [
              "Up to 100 messages/month",
              "Basic chatbot",
              "Email support",
              "Community access",
            ],
            cta: "Start for free",
            highlight: false,
          },
          {
            name: "Pro",
            price: "$49",
            description: "Best for growing businesses",
            features: [
              "Unlimited messages",
              "Advanced automation",
              "Priority support",
              "API access",
              "Custom integrations",
            ],
            cta: "Start 14-day trial",
            highlight: true,
          },
          {
            name: "Enterprise",
            price: "Custom",
            description: "For large organizations",
            features: [
              "All Pro features",
              "Dedicated account manager",
              "SLA guarantee",
              "On-premise options",
              "Custom development",
            ],
            cta: "Contact sales",
            highlight: false,
          },
        ].map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 ${
              plan.highlight
                ? "bg-gradient-to-b from-blue-600 to-purple-600 text-white transform scale-105"
                : "bg-gray-50"
            }`}
          >
            {plan.highlight && (
              <div className="text-center mb-6">
                <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            <div
              className={`text-center mb-8 ${
                plan.highlight ? "text-white" : "text-gray-900"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Free" && (
                  <span className="text-lg opacity-90">/month</span>
                )}
              </div>
              <p
                className={`text-sm ${
                  plan.highlight ? "text-blue-100" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <svg
                    className={`w-5 h-5 mr-3 ${
                      plan.highlight ? "text-white" : "text-blue-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span
                    className={
                      plan.highlight ? "text-blue-100" : "text-gray-700"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                plan.highlight
                  ? "bg-white text-blue-600 hover:shadow-lg transform hover:-translate-y-0.5"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PricingSection;
