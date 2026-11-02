import { Routes, Route, useLocation } from "react-router-dom";
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
import NotFoundView from "./components/NotFoundView";

export default function App() {
  const location = useLocation();

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
              {/* Exactly the Five Main Canonical Pages */}
              <Route path="/" element={<HomeView />} />
              <Route path="/about" element={<AboutView standalone />} />
              <Route path="/ai-solutions" element={<AISolutionsView />} />
              <Route path="/ai-solutions/:solutionId" element={<AISolutionDetailView />} />
              <Route path="/services" element={<ServicesView standalone />} />
              <Route path="/services/:serviceId" element={<ServiceDetailView />} />
              <Route path="/products/:productId" element={<ProductDetailView />} />
              <Route path="/contact" element={<ContactView />} />

              {/* Compliance & Fallback */}
              <Route path="/privacy" element={<PrivacyView />} />
              <Route path="/terms" element={<TermsView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}