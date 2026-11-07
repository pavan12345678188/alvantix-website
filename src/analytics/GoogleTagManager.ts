
import {
  getCookiePreferences,
  type CookiePreferences,
} from "./consent";

const GTM_ID = import.meta.env.VITE_GTM_ID?.trim();

const CONSENT_CHANGE_EVENT =
  "alvantix-cookie-consent-change";

const GTM_SCRIPT_ID = "alvantix-gtm-script";

type DataLayerEntry =
  | IArguments
  | Record<string, unknown>
  | unknown[];

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
  }
}

let dataLayerInitialized = false;

function initializeDataLayer() {
  if (dataLayerInitialized) return;

  window.dataLayer = window.dataLayer || [];

  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }

  // Set all optional consent categories to denied initially.
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });

  dataLayerInitialized = true;
}

function updateGoogleConsent(
  preferences: CookiePreferences
) {
  if (!window.dataLayer) return;

  window.dataLayer.push([
    "consent",
    "update",
    {
      analytics_storage: preferences.analytics
        ? "granted"
        : "denied",

      ad_storage: preferences.marketing
        ? "granted"
        : "denied",

      ad_user_data: preferences.marketing
        ? "granted"
        : "denied",

      ad_personalization: preferences.marketing
        ? "granted"
        : "denied",

      functionality_storage: "granted",
      security_storage: "granted",
    },
  ]);
}

function hasOptionalConsent(
  preferences: CookiePreferences
): boolean {
  return preferences.analytics || preferences.marketing;
}

function loadGoogleTagManager() {
  if (!GTM_ID) {
    console.info(
      "Alvantix: GTM ID not configured yet."
    );
    return;
  }

  // Prevent duplicate GTM scripts.
  if (document.getElementById(GTM_SCRIPT_ID)) {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });

  const script = document.createElement("script");

  script.id = GTM_SCRIPT_ID;
  script.async = true;

  script.src =
    `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(
      GTM_ID
    )}`;

  document.head.appendChild(script);
}

function handleConsentChange(
  preferences: CookiePreferences
) {
  updateGoogleConsent(preferences);

  if (hasOptionalConsent(preferences)) {
    loadGoogleTagManager();
  }
}

/**
 * Initialize Google Tag Manager consent management.
 *
 * Call this once when the application starts.
 */
export function initializeGoogleTagManager() {
  if (!GTM_ID) {
    console.info(
      "Alvantix: Add VITE_GTM_ID when your GTM account is ready."
    );
    return () => {};
  }

  initializeDataLayer();

  // Restore previously saved visitor preferences.
  const savedPreferences = getCookiePreferences();

  handleConsentChange(savedPreferences);

  // Listen for future consent changes.
  const onConsentChange = (event: Event) => {
    const customEvent =
      event as CustomEvent<CookiePreferences>;

    const preferences = customEvent.detail;

    if (!preferences) return;

    handleConsentChange(preferences);
  };

  window.addEventListener(
    CONSENT_CHANGE_EVENT,
    onConsentChange
  );

  // Cleanup listener when the application unmounts.
  return () => {
    window.removeEventListener(
      CONSENT_CHANGE_EVENT,
      onConsentChange
    );
  };
}
