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
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] border-b border-slate-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer group -ml-3 lg:-ml-2"
          >
            <img
              src="/logo/alvantix logo.png"
              alt="Alvantix Logo"
              className="h-20 md:h-20 lg:h-28 w-auto object-contain"
            />
          </div>

          {/* Center Text Logo */}
<div
  className="absolute left-[46%] lg:left-[38%] -translate-x-1/2 ml-5 lg:ml-6"
  onClick={() => handleNavigate("/")}
>
            <img
              src="/logo/alvantix Name logo.png"
              alt="Alvantix"
              className="h-16 md:h-14 lg:h-16 w-auto object-contain"
            />
          </div>

          {/* DESKTOP NAVIGATION & ACTION BUTTONS (RIGHT SIDE) */}
          <div className="flex items-center justify-end space-x-3 z-10">
            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {isActive && (
                     <motion.div
  layoutId="navbar-indicator"
  className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
  transition={{
    type: "spring",
    stiffness: 400,
    damping: 35,
  }}
/>
                    )}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            
          {/* Desktop CTA Only */}
<button
  onClick={() => handleNavigate("/contact")}
  className="hidden lg:flex relative overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 group items-center"
>
  <span>Get Started</span>
  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
</button>

            {/* MOBILE INTERACTIVE CONTROLS */}
            <div className="md:hidden flex items-center space-x-1">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAV PANEL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />}
                    </div>
                  </button>
                );
              })}
              
              <div className="pt-4 border-t border-slate-150 flex flex-col space-y-3 px-4">
               
                
                <button
                  onClick={() => handleNavigate('/contact')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-center text-sm shadow-md flex items-center justify-center space-x-1"
                >
                  <div className="flex items-center">
                    <span>Get Started</span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
