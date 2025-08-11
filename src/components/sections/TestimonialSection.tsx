import exp from "constants";
import React from "react";
const TestimonialSection = () => (
  <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              A
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
              "Amazing product, Really over deliver! The product is amazing
              because they have a deep focus! Excellent, robust and easy to use
              core features with an amazing API! Furthermore very good
              documentation, so fully self service. And than, if you do overlook
              some settings, their support is truly amazing: Very knowledgeable
              and respond super fast. Implementation with their automated
              wizards and help texts are really a breeze. Integration is very
              good with in & outbound webhooks. Very happy!"
            </blockquote>
            <div>
              <div className="font-semibold text-gray-900">Alex Johnson</div>
              <div className="text-gray-600">CTO, TechInnovate Inc.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialSection;