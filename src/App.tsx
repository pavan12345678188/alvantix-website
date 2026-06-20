import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import CareersView from "./components/CareersView";
import ContactView from "./components/ContactView";
import PrivacyView from "./components/PrivacyView";
import TermsView from "./components/TermsView";
import NotFoundView from "./components/NotFoundView";



export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans flex flex-col justify-between selection:bg-blue-600/10 selection:text-blue-600">

      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
          >
            <Routes>

              <Route
                path="/"
                element={<HomeView />}
              />

              <Route
                path="/about"
                element={<AboutView standalone />}
              />

              <Route
                path="/services"
                element={<ServicesView standalone />}
              />

              <Route
                path="/careers"
                element={<CareersView />}
              />

              <Route
                path="/contact"
                element={<ContactView />}
              />

              <Route
                path="/privacy"
                element={<PrivacyView />}
              />

              <Route
                path="/terms"
                element={<TermsView />}
              />

              <Route
                path="*"
                element={<NotFoundView />}
              />

            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

    </div>
  );
}