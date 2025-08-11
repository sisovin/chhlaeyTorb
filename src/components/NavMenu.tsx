import React from 'react';
import { Link } from 'react-router-dom';

type Section = {
  name: string;
  submenu?: { label: string }[];
};

const sections: Section[] = [
  { name: "home" },
  { name: "products" },
  { name: "industries" },
  { name: "resources" },
  { name: "pricing" },
  {
    name: "more",
    submenu: [{ label: "Option 1" }, { label: "Option 2" }],
  },
];

  interface NavMenuProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
  }

  function NavMenu({ activeSection, setActiveSection }: NavMenuProps) {
    return (
      <nav className="hidden md:flex ml-10 space-x-8">
        {sections.map((section) => (
          <div key={section.name} className="relative group">
            {section.submenu ? (
              <button
                className={`font-medium flex items-center transition-colors ${
                  activeSection === section.name
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveSection(section.name)}
              >
                {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ) : (
              <Link
                to={section.name === 'home' ? '/' : `/${section.name}`}
                className={`font-medium flex items-center transition-colors ${
                  activeSection === section.name
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveSection(section.name)}
              >
                {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
              </Link>
            )}
            {section.submenu && (
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-48">
                {section.submenu.map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    );
  }

export default NavMenu;
