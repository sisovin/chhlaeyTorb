import React, { useEffect, useState } from "react";
import NavMenu from "./NavMenu";

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate loading animation
    }, 1000);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const sections = {
    home: "home",
    product: "product",
    industries: "industries",
    resources: "resources",
    pricing: "pricing",
  };

  type SectionKey = keyof typeof sections;
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              chhlaeyTorb
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavMenu
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Login
            </button>
            <button className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Talk to Sales
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            title={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            {(Object.keys(sections) as SectionKey[]).map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(sections[section]);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col space-y-3 px-3">
                <button className="text-base text-gray-700 hover:text-blue-600">
                  Login
                </button>
                <button className="text-base text-gray-700 hover:text-blue-600">
                  Talk to Sales
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
