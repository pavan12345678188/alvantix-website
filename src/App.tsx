import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePageTracking } from "./utils/analytics";

// Route-based code splitting for sub-500KB production chunks
const HomeView = lazy(() => import("./components/HomeView"));
const AboutView = lazy(() => import("./components/AboutView"));
const AISolutionsView = lazy(() => import("./components/AISolutionsView"));
const AISolutionDetailView = lazy(() => import("./components/AISolutionDetailView"));
const ServicesView = lazy(() => import("./components/ServicesView"));
const ServiceDetailView = lazy(() => import("./components/ServiceDetailView"));
const ProductDetailView = lazy(() => import("./components/ProductDetailView"));
const ContactView = lazy(() => import("./components/ContactView"));
const PrivacyView = lazy(() => import("./components/PrivacyView"));
const TermsView = lazy(() => import("./components/TermsView"));
const NotFoundView = lazy(() => import("./components/NotFoundView"));

function PageLoadingFallback() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-mono font-medium text-slate-400">Loading Alvantix...</span>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  // Track SPA pageviews on location changes (Google Analytics 4)
  usePageTracking();

  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans flex flex-col justify-between selection:bg-blue-600/10 selection:text-blue-600">
      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{
              duration: 0.18,
              ease: "easeInOut",
            }}
          >
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes location={location}>
                {/* Five Main Canonical Pages */}
                <Route path="/" element={<HomeView />} />
                <Route path="/about" element={<AboutView standalone />} />
                <Route path="/ai-solutions" element={<AISolutionsView />} />
                <Route path="/ai-solutions/:solutionId" element={<AISolutionDetailView />} />
                <Route path="/services" element={<ServicesView standalone />} />
                <Route path="/services/:serviceId" element={<ServiceDetailView />} />
                <Route path="/contact" element={<ContactView />} />

                {/* Genuine Product Detail Pages */}
                <Route path="/products/:productId" element={<ProductDetailView />} />

                {/* Compliance & Fallback */}
                <Route path="/privacy" element={<PrivacyView />} />
                <Route path="/terms" element={<TermsView />} />
                <Route path="*" element={<NotFoundView />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}