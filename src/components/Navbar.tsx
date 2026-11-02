import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Exactly five main navigation pages (strict requirement)
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "AI Solutions", path: "/ai-solutions" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(15,23,42,0.06)] border-b border-slate-150 py-2.5"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100/60 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          
          {/* LEFT: ORIGINAL CIRCULAR ALVANTIX LOGO + HORIZONTAL WORDMARK */}
          <div
            onClick={() => handleNavigate("/")}
            className="cursor-pointer group flex items-center gap-2.5 sm:gap-3 shrink-0"
            title="Alvantix — AI & Software Innovation Company"
          >
            {/* Original Circular Logo: Desktop 48–54px, Mobile 42–46px */}
            <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-102">
              <img
                src="/logo/alvantix logo.png"
                alt="Alvantix Circular AI Logo"
                className="h-[44px] sm:h-[48px] lg:h-[52px] w-auto object-contain"
              />
            </div>

            {/* Original Horizontal ALVANTIX Wordmark */}
            <div className="flex items-center">
              <img
                src="/logo/alvantix Name logo.png"
                alt="Alvantix"
                className="h-[22px] sm:h-[26px] lg:h-[28px] w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              />
            </div>
          </div>

          {/* RIGHT: EXACT FIVE NAVIGATION LINKS + LET'S TALK CTA */}
          <div className="flex items-center gap-3 sm:gap-6">
            
            {/* DESKTOP NAVIGATION (Exactly 5 Links, No Dropdowns) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((item) => {
                const isActive =
                  item.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.path);

                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavigate(item.path)}
                    className={`relative px-3.5 py-2 rounded-full text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-blue-600 bg-blue-50/70"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full border border-blue-200/80 -z-10"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* RIGHT-SIDE CTA: LET'S TALK ↗ (Never clipped, protected by shrink-0) */}
            <div className="flex items-center shrink-0">
              <button
                onClick={() => handleNavigate("/contact")}
                className="relative overflow-hidden px-4 sm:px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md hover:shadow-blue-600/20 transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* MOBILE HAMBURGER BUTTON (<1024px) */}
            <div className="lg:hidden flex items-center shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* MOBILE DRAWER (Exact 5 items + CTA) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1.5 text-left">
              {navLinks.map((item) => {
                const isActive =
                  item.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.path);

                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavigate(item.path)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                  </button>
                );
              })}

              <div className="pt-3 pb-1">
                <button
                  onClick={() => handleNavigate("/contact")}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
