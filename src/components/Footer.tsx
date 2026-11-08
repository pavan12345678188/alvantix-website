import {
  Globe,
  ArrowUp,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackCTA } from "../analytics/events";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigate = (path: string, label: string) => {
    trackCTA(label, "Footer");
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const verifiedSocials = [
    {
      icon: Linkedin,
      url: "https://linkedin.com/company/alvantix",
      label: "Official LinkedIn",
    },
    {
      icon: Instagram,
      url: "https://instagram.com/alvantix_ai",
      label: "Official Instagram",
    },
    {
      icon: Youtube,
      url: "https://youtube.com/@alvantix",
      label: "Official YouTube",
    },
  ];

  const legalLinks = [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms-and-conditions" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 justify-between items-start">
          {/* BRAND COLUMN */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => handleNavigate("/", "Footer Logo - Home")}
              className="flex items-center gap-3 cursor-pointer group self-start text-left"
              aria-label="Alvantix home"
            >
              <img
                src="/logo/alvantix logo.png"
                alt="Alvantix Logo"
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-103"
              />

              <img
                src="/logo/alvantix Name logo.png"
                alt="Alvantix"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </button>

            <p className="text-xs font-mono font-bold tracking-widest uppercase text-blue-400">
              AI-First Systems &amp; Technologies.
            </p>

            <p className="text-sm font-sans text-slate-400 leading-relaxed max-w-sm">
              Building Intelligent Digital Solutions for the Future.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500">
              Think Bigger • Build Smarter • Create the Future.
            </div>
          </div>

          {/* COMPANY */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              Company
            </h4>

            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <button
                  onClick={() => handleNavigate("/", "Home")}
                  className="hover:text-white transition-colors block text-left font-sans text-slate-400 cursor-pointer"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigate("/about", "About")}
                  className="hover:text-white transition-colors block text-left font-sans text-slate-400 cursor-pointer"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              Solutions
            </h4>

            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <button
                  onClick={() => handleNavigate("/ai-solutions", "AI Solutions")}
                  className="hover:text-white transition-colors block text-left font-sans text-slate-400 cursor-pointer"
                >
                  AI Solutions
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigate("/services", "Services")}
                  className="hover:text-white transition-colors block text-left font-sans text-slate-400 cursor-pointer"
                >
                  Services
                </button>
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              Connect
            </h4>

            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <button
                  onClick={() => handleNavigate("/contact", "Contact")}
                  className="hover:text-white transition-colors block text-left font-sans text-slate-400 cursor-pointer"
                >
                  Contact
                </button>
              </li>

              {verifiedSocials.map((social) => {
                const Icon = social.icon;

                return (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      onClick={() =>
                        trackCTA(social.label, "Footer - Social Link")
                      }
                      className="hover:text-white transition-colors flex items-center gap-2 text-left font-sans text-slate-400"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* LEGAL */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              Legal
            </h4>

            <ul className="space-y-2.5 text-sm font-medium">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() =>
                      handleNavigate(link.path, link.label)
                    }
                    className="hover:text-white transition-colors block text-left font-sans text-slate-400 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2026 Alvantix. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <button
              onClick={() => handleNavigate("/privacy")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => handleNavigate("/terms")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>

          <div className="flex items-center space-x-2 text-slate-400 font-mono">
            <Globe className="w-3.5 h-3.5 text-blue-500" />
            <span>Built in India • Designed for the World</span>
          </div>

          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 bg-slate-800/80 hover:bg-slate-700 hover:text-white rounded-lg text-slate-400 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
