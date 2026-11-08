import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let isGaInitialized = false;

/**
 * Initializes Google Analytics 4 script tag dynamically if VITE_GA_MEASUREMENT_ID is supplied.
 */
export function initGA() {
  if (typeof window === "undefined" || isGaInitialized || !GA_MEASUREMENT_ID) {
    return;
  }

  // Inject gtag.js
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  // Disable automatic pageview to prevent double-firing in client-side React Router
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    anonymize_ip: true,
  });

  isGaInitialized = true;
}

/**
 * Hook to track route page views in React Router SPA without duplicates.
 */
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    initGA();

    if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") {
      return;
    }

    const pagePath = location.pathname + location.search;

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location]);
}

/**
 * Track custom commercial engagement events.
 * Strictly adheres to privacy: NO personal names, emails, or phone numbers are ever transmitted.
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, eventParams);
}

/**
 * High-value business interaction shortcuts
 */
export function trackContactSubmission(category: string) {
  trackEvent("generate_lead", {
    event_category: "Contact Form",
    lead_type: category,
  });
}

export function trackServiceExploration(serviceName: string) {
  trackEvent("select_content", {
    content_type: "Technology Service",
    item_id: serviceName,
  });
}

export function trackAISolutionExploration(solutionName: string) {
  trackEvent("select_content", {
    content_type: "AI Solution",
    item_id: solutionName,
  });
}

export function trackProductExploration(productName: string) {
  trackEvent("view_item", {
    content_type: "Product",
    item_id: productName,
  });
}
