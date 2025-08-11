const ResourcesSection = () => (
  <div className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources</h2>
        <p className="text-xl text-gray-600">
          Learn how to get the most out of chhlaeyTorb
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Getting Started Guide",
            description:
              "Learn the basics of setting up your chhlaeyTorb account and connecting your channels",
            type: "Guide",
          },
          {
            title: "API Documentation",
            description:
              "Comprehensive documentation for developers to integrate chhlaeyTorb with your systems",
            type: "Documentation",
          },
          {
            title: "Best Practices Webinar",
            description:
              "Watch our experts share tips and tricks for maximizing your customer engagement",
            type: "Webinar",
          },
        ].map((resource, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                {resource.type}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {resource.title}
            </h3>
            <p className="text-gray-600 mb-6">{resource.description}</p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
            >
              Read more
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default ResourcesSection;