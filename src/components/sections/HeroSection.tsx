import React from "react";
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Customers ask on chat.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Call for details.
              </span>{" "}
              Confirm by email.{" "}
              <span className="block mt-2">Can you keep up?</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Most platforms can't. Unify all customer touchpoints and your CRM
              on chhlaeyTorb, the first truly omnichannel platform with built-in
              lead management and AI. Make sure the conversation never breaks,
              even when customers switch channels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
                Get started. It's FREE.
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                Free Forever. No credit card
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4.9/5</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <img
                      src="https://placehold.co/40x40/3B82F6/FFFFFF?text=C"
                      alt="Customer"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="bg-white rounded-lg px-4 py-3 shadow">
                      <p className="text-sm text-gray-800">
                        Hi, I need help with my order #12345
                      </p>
                      <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3 flex-row-reverse">
                    <img
                      src="https://placehold.co/40x40/8B5CF6/FFFFFF?text=A"
                      alt="Agent"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-4 py-3 shadow">
                      <p className="text-sm">
                        Hello! I can help you with that. Let me check your order
                        status.
                      </p>
                      <p className="text-xs mt-1 opacity-90">10:31 AM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <img
                      src="https://placehold.co/40x40/3B82F6/FFFFFF?text=C"
                      alt="Customer"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="bg-white rounded-lg px-4 py-3 shadow">
                      <p className="text-sm text-gray-800">
                        Great, thank you! Also, can I change the delivery
                        address?
                      </p>
                      <p className="text-xs text-gray-500 mt-1">10:32 AM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-4">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="Send message"
                    title="Send message"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
              <div className="text-sm">
                <div className="font-semibold text-gray-900">
                  Conversation continues seamlessly
                </div>
                <div className="text-gray-600">
                  Even when switching channels
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
