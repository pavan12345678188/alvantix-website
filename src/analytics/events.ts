import {
  trackEvent,
  trackFormSubmission,
  trackButtonClick,
  trackServiceView,
  trackProductView,
  trackSocialClick,
  trackContactClick,
} from "./analytics";

/**
 * Contact form events
 */

export function trackContactFormStart() {
  trackEvent("form_start", {
    form_name: "contact_form",
  });
}

export function trackContactFormSuccess() {
  trackFormSubmission("contact_form");
}

/**
 * CTA and button events
 */

export function trackCTA(
  buttonName: string,
  location: string
) {
  trackButtonClick(buttonName, location);
}

/**
 * Service events
 */

export function trackServicePage(serviceName: string) {
  trackServiceView(serviceName);
}

export function trackServiceCTA(
  serviceName: string,
  location: string
) {
  trackEvent("service_cta_click", {
    service_name: serviceName,
    button_location: location,
  });
}

/**
 * Product events
 */

export function trackProductPage(productName: string) {
  trackProductView(productName);
}

/**
 * Social media events
 */

export function trackSocialLink(platform: string) {
  trackSocialClick(platform);
}

/**
 * Phone and email events
 */

export function trackPhoneClick() {
  trackContactClick("phone");
}

export function trackEmailClick() {
  trackContactClick("email");
}

/**
 * Navigation events
 */

export function trackNavigationClick(
  pageName: string
) {
  trackEvent("navigation_click", {
    page_name: pageName,
  });
}

/**
 * Generic custom event
 */

export function trackCustomEvent(
  eventName: string,
  parameters: Record<
    string,
    string | number | boolean | undefined
  > = {}
) {
  trackEvent(eventName, parameters);
}
