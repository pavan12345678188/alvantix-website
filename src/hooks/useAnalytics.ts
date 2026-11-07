import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import {
  trackPageView,
} from "../analytics/analytics";

import {
  hasAnalyticsConsent,
} from "../analytics/consent";

const CONSENT_CHANGE_EVENT =
  "alvantix-cookie-consent-change";

export default function useAnalytics() {
  const location = useLocation();

  const pathnameRef = useRef(location.pathname);
  const lastTrackedPath = useRef<string | null>(null);

  const analyticsConsentRef = useRef(
    hasAnalyticsConsent()
  );

  // Keep the latest pathname available to event handlers.
  pathnameRef.current = location.pathname;

  // Track page navigation.
  useEffect(() => {
    if (!hasAnalyticsConsent()) {
      lastTrackedPath.current = null;
      return;
    }

    if (lastTrackedPath.current === location.pathname) {
      return;
    }

    trackPageView();
    lastTrackedPath.current = location.pathname;
  }, [location.pathname]);

  // React to cookie preference changes.
  useEffect(() => {
    const handleConsentChange = () => {
      const previousConsent =
        analyticsConsentRef.current;

      const currentConsent =
        hasAnalyticsConsent();

      // Track the current page when analytics
      // permission changes from denied to granted.
      if (!previousConsent && currentConsent) {
        trackPageView();
        lastTrackedPath.current =
          pathnameRef.current;
      }

      // Reset tracking state when consent is withdrawn.
      if (previousConsent && !currentConsent) {
        lastTrackedPath.current = null;
      }

      analyticsConsentRef.current = currentConsent;
    };

    window.addEventListener(
      CONSENT_CHANGE_EVENT,
      handleConsentChange
    );

    return () => {
      window.removeEventListener(
        CONSENT_CHANGE_EVENT,
        handleConsentChange
      );
    };
  }, []);
}
