import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  trackNavigationClick,
  trackCTA,
} from "../analytics/events";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleNavigate = (
    path: string,
    label: string,
    type: "navigation" | "cta" = "navigation"
  ) => {
    // Track the interaction.
    if (type === "cta") {
      trackCTA(label, "Navbar");
    } else {
      trackNavigationClick(label);
    }

    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "AI Solutions", path: "/ai-solutions" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  const isActiveRoute = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(15,23,42,0.06)] border-b border-slate-200 py-2"
          : "bg-white/90 backdrop-blur-md border-b border-slate-100 py-2.5 sm:py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6">

          {/* LEFT: ALVANTIX BRANDING */}
          <button
            type="button"
            onClick={() =>
              handleNavigate("/", "Alvantix Logo - Home")
            }
            className="flex min-w-0 shrink items-center gap-2 sm:gap-3 text-left cursor-pointer"
            aria-label="Alvantix Home"
          >
            <img
              src="/logo/alvantix logo.png"
              alt="Alvantix Logo"
              className="h-[58px] sm:h-[64px] lg:h-[64px] shrink-0 object-contain"
            />

            <img
              src="/logo/alvantix Name logo.png"
              alt="Alvantix"
              className="h-[28px] sm:h-[32px] lg:h-[36px] max-w-[140px] sm:max-w-[170px] shrink object-contain object-left"
            />
          </button>

          {/* RIGHT: NAVIGATION AND ACTIONS */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">

            {/* DESKTOP NAVIGATION */}
            <nav
              className="hidden xl:flex items-center gap-0.5 2xl:gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((item) => {
                const active = isActiveRoute(item.path);

                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() =>
                      handleNavigate(item.path, item.label)
                    }
                    aria-current={active ? "page" : undefined}
                    className={`relative whitespace-nowrap px-3 2xl:px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      active
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}

                    {active && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full border border-blue-200 pointer-events-none"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* LET'S TALK CTA */}
            <button
              type="button"
              onClick={() =>
                handleNavigate("/contact", "Let's Talk", "cta")
              }
              className="hidden lg:flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-3 sm:px-5 py-2.5 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* TABLET AND MOBILE HAMBURGER */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              className="xl:hidden flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl text-slate-800 hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE AND TABLET NAVIGATION DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-full z-[-1] bg-slate-900/20 xl:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 xl:hidden overflow-hidden border-b border-slate-200 bg-white shadow-xl"
            >
              <div className="max-h-[calc(100dvh-75px)] overflow-y-auto w-full max-w-7xl mx-auto px-4 sm:px-6 py-4">

                <nav
                  className="flex flex-col gap-1.5"
                  aria-label="Mobile navigation"
                >
                  {navLinks.map((item) => {
                    const active = isActiveRoute(item.path);

                    return (
                      <button
                        key={item.path}
                        type="button"
                        onClick={() =>
                          handleNavigate(item.path, item.label)
                        }
                        aria-current={active ? "page" : undefined}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition-colors ${
                          active
                            ? "bg-blue-50 text-blue-600"
                            : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                        }`}
                      >
                        <span>{item.label}</span>

                        {active && (
                          <span className="h-2 w-2 rounded-full bg-blue-600" />
                        )}
                      </button>
                    );
                  })}
                </nav>

                <div className="mt-4 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigate("/contact", "Let's Talk", "cta")
                    }
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 text-sm font-semibold text-white transition-colors"
                  >
                    <span>Let's Talk</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
