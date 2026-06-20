import { Globe, ArrowUp, Github, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";



export default function Footer() {
const navigate = useNavigate();
const currentYear =new Date().getFullYear()
const handleNavigate = (path: string) => {
  navigate(path);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  const socialLinks = [
    { icon: Twitter, url: 'https://twitter.com/alvantix', label: 'Twitter' },
    { icon: Linkedin, url: 'https://linkedin.com/company/alvantix', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/alvantix', label: 'GitHub' },
    { icon: Instagram, url: 'https://instagram.com/alvantix_ai', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-8 justify-between">
          
          {/* BRAND AND MISSION */}
          <div className="col-span-1 md:col-span-5 flex flex-col space-y-6 text-left">
            <div 
              onClick={() => handleNavigate('/')} 
              className="flex items-center space-x-2 cursor-pointer group self-start"
            >
            <div
  onClick={() => handleNavigate("/")}
  className="flex items-center gap-3 cursor-pointer group self-start"
>
  {/* Logo */}
  <img
    src="/logo/alvantix logo.png"
    alt="Alvantix Logo"
    className="h-16 md:h-18 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
  />

  {/* Text Logo */}
  <img
    src="/logo/alvantix Name logo.png"
    alt="Alvantix"
    className="h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
  />
</div> 
              <div className="flex flex-col">
               
              </div>
            </div>

            <p className="text-sm font-sans text-slate-400 leading-relaxed max-w-sm">
              Alvantix is an AI-first innovation and technology company. We design, develop, and deliver intelligent software, digital products, and advanced AI systems to help businesses innovate, automate, and grow.
            </p>

            <div className="flex items-center space-x-2.5">
              {socialLinks.map((social, sIdx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={sIdx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-blue-600 text-slate-400 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-span-1 md:col-span-3 text-left space-y-5">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              Sitemap Links
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Careers", path: "/careers" },
                { label: "Contact", path: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavigate(link.path)}
                    className="hover:text-white text-sm transition-colors duration-200 block text-left font-sans"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ADVANCED SECTOR LINKS */}
          <div className="col-span-1 md:col-span-4 text-left space-y-5">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              Core Capabilities
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "AI Solutions",
                "Website Development",
                "Web Application Development",
                "Mobile Application Development",
                "Desktop Application Development",
                "Data Analytics & Business Intelligence"
              ].map((cap, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-slate-400 font-sans text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 pb-4">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-slate-500">
            <span>© {currentYear} Alvantix. All rights reserved.</span>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => handleNavigate('/privacy')} 
                className="hover:text-white transition-colors underline underline-offset-4"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavigate('/terms')} 
                className="hover:text-white transition-colors underline underline-offset-4"
              >
                Terms of Use
              </button>
            </div>
          </div>

          {/* Built in India Badge */}
          <div className="flex items-center space-x-2.5 px-4 py-2 bg-slate-800/40 border border-slate-800 rounded-xl text-xs text-slate-300 font-mono">
            <Globe className="w-3.5 h-3.5 text-blue-500 animate-spin" style={{ animationDuration: '30s' }} />
            <span> Built in India • Designed for the World</span>
          </div>

          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2.5 bg-slate-800/60 hover:bg-slate-700 hover:text-white rounded-xl text-slate-400 transition-colors"
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
