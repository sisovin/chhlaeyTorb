import exp from "constants";

const ProductSection = () => (
  <div className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product</h2>
        <p className="text-xl text-gray-600">
          Everything you need to connect with customers across all channels
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://placehold.co/600x400/3B82F6/FFFFFF?text=Product+Dashboard"
            alt="Product Dashboard"
            className="rounded-2xl shadow-xl"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900">Unified Inbox</h3>
          <p className="text-lg text-gray-600">
            Manage all your customer conversations from a single, intuitive
            interface. No more switching between apps or missing important
            messages.
          </p>
          <ul className="space-y-3">
            {[
              "Real-time messaging across 10+ channels",
              "Smart conversation routing",
              "Team collaboration tools",
              "Advanced search and filtering",
              "Customizable workflows",
            ].map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
            Explore Features
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ProductSection;

