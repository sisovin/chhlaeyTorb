import { FacebookIcon, GithubIcon, Link2Icon, TwitchIcon } from "lucide-react";
function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Integrations", "Pricing", "Changelog", "Status"],
    },
    {
      title: "Resources",
      links: ["Blog", "Help Center", "Community", "Webinars", "API Docs"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Contact Us", "Partners", "Press"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookie Policy", "GDPR", "Security"],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <img src="/logo-white.svg" alt="chhlaeyTorb" className="h-8 mb-6" />
            <p className="mb-6">
              The all-in-one customer communication platform that helps
              businesses grow faster.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">{social}</span>
                  {/* Icon would go here */}
                  {social === "twitter" && <TwitchIcon />}
                  {social === "facebook" && <FacebookIcon />}
                  {social === "linkedin" && <Link2Icon />}
                  {social === "github" && <GithubIcon />}
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} chhlaeyTorb. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
