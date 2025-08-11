import React, { useState, useEffect } from "react";
import { FacebookIcon, GithubIcon, Link2Icon, TwitchIcon } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div className="col-span-2 lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              chhlaeyTorb
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              The first truly omnichannel platform with built-in lead management
              and AI. Unify all customer touchpoints and your CRM in one place.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-xs hover:bg-blue-600 transition-colors">
                    <span className="sr-only">{social}</span>
                    {/* Icon would go here */}
                    {social === "twitter" && <TwitchIcon />}
                    {social === "facebook" && <FacebookIcon />}
                    {social === "linkedin" && <Link2Icon />}
                    {social === "github" && <GithubIcon />}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Customer Service",
                "Sales",
                "Marketing",
                "E-commerce",
                "Support",
                "Engagement",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              {[
                "WhatsApp API",
                "Facebook Messenger",
                "Instagram",
                "SMS",
                "Email",
                "Voice",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Blog",
                "Help Center",
                "API Documentation",
                "Webinars",
                "Case Studies",
                "Partners",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                "About",
                "Careers",
                "Contact",
                "Privacy Policy",
                "Terms of Service",
                "Security",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 chhlaeyTorb. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;