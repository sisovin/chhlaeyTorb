import React, { useState } from "react";
const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to transform your customer experience?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of businesses that trust chhlaeyTorb to deliver
          exceptional customer service
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your business email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Start Free Trial
            </button>
          </div>
          <p className="text-blue-100 text-sm">
            No credit card required. Free forever plan available.
          </p>
        </form>

        {isSubmitted && (
          <div className="mt-4 bg-green-500 text-white px-6 py-3 rounded-full inline-block animate-pulse">
            Thank you! We'll be in touch shortly.
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
