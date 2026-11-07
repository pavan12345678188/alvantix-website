import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import AISolutionsView from "./components/AISolutionsView";
import AISolutionDetailView from "./components/AISolutionDetailView";
import ServicesView from "./components/ServicesView";
import ServiceDetailView from "./components/ServiceDetailView";
import ContactView from "./components/ContactView";
import ProductDetailView from "./components/ProductDetailView";

import PrivacyView from "./components/PrivacyView";
import TermsView from "./components/TermsView";
import CookieView from "./components/CookieView";
import CookieConsent from "./components/CookieConsent";
import NotFoundView from "./components/NotFoundView";

import { useEffect } from "react";

import useAnalytics from "./hooks/useAnalytics";
import { initializeGoogleTagManager } from "./analytics/GoogleTagManager";



export default function App() {
  const location = useLocation();
   // Initialize Google Tag Manager consent management.
  useEffect(() => {
    return initializeGoogleTagManager();
  }, []);

  // Automatically track page navigation.
  useAnalytics();

  // Keep the rest of your existing code.

  
  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans flex flex-col justify-between selection:bg-blue-600/10 selection:text-blue-600">

      <Navbar />

      <main className="flex-1">

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <Routes location={location}>

              {/* Main Website Pages */}
              <Route path="/" element={<HomeView />} />
              <Route path="/about" element={<AboutView standalone />} />

              {/* AI Solutions */}
              <Route path="/ai-solutions" element={<AISolutionsView />} />
              <Route
                path="/ai-solutions/:solutionId"
                element={<AISolutionDetailView />}
              />

              {/* Services */}
              <Route path="/services" element={<ServicesView standalone />} />
              <Route
                path="/services/:serviceId"
                element={<ServiceDetailView />}
              />

              {/* Products */}
              <Route
                path="/products/:productId"
                element={<ProductDetailView />}
              />

              {/* Contact */}
              <Route path="/contact" element={<ContactView />} />

              {/* Legal & Compliance Pages */}
              <Route
                path="/privacy-policy"
                element={<PrivacyView />}
              />

              <Route
                path="/terms-and-conditions"
                element={<TermsView />}
              />

              <Route
                path="/cookie-policy"
                element={<CookieView />}
              />

              {/* Backward Compatibility */}
              <Route
                path="/privacy"
                element={<Navigate to="/privacy-policy" replace />}
              />

              <Route
                path="/terms"
                element={<Navigate to="/terms-and-conditions" replace />}
              />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFoundView />} />

            </Routes>
          </motion.div>
        </AnimatePresence>

        {/* Cookie Consent - Persistent Across Routes */}
        <CookieConsent />

      </main>

      <Footer />

    </div>
  );
}
