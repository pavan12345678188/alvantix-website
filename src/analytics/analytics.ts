
import { hasAnalyticsConsent } from "./consent";

type AnalyticsEventParams = Record<
  string,
  string | number | boolean | undefined
>;

/**
 * Push an analytics event to Google Tag Manager.
 * Events are ignored unless analytics consent is granted.
 */
export function trackEvent(
  eventName: string,
  params: AnalyticsEventParams = {}
): void {
  if (typeof window === "undefined") return;

  if (!hasAnalyticsConsent()) return;

  const dataLayer = (
    window as Window & {
      dataLayer?: Array<Record<string, string | number | boolean | undefined>>;
    }
  ).dataLayer;

  if (!dataLayer) return;

  dataLayer.push({
    ...params,
    event: eventName,
  });
}

/**
 * Track a page view.
 * Query parameters and URL fragments are excluded.
 */
export function trackPageView(): void {
  if (typeof window === "undefined") return;

  if (!hasAnalyticsConsent()) return;

  const pagePath = window.location.pathname;

  trackEvent("page_view", {
    page_path: pagePath,
    page_title: document.title,
    page_location: `${window.location.origin}${pagePath}`,
  });
}

/**
 * Track successful contact form submissions.
 */
export function trackFormSubmission(
  formName: string
): void {
  trackEvent("generate_lead", {
    form_name: formName,
  });
}

/**
 * Track important button clicks.
 */
export function trackButtonClick(
  buttonName: string,
  buttonLocation?: string
): void {
  trackEvent("button_click", {
    button_name: buttonName,
    button_location: buttonLocation,
  });
}

/**
 * Track service page visits.
 */
export function trackServiceView(
  serviceName: string
): void {
  trackEvent("service_view", {
    service_name: serviceName,
  });
}

/**
 * Track product page visits.
 */
export function trackProductView(
  productName: string
): void {
  trackEvent("product_view", {
    product_name: productName,
  });
}

/**
 * Track social media clicks.
 */
export function trackSocialClick(
  platform: string
): void {
  trackEvent("social_click", {
    social_platform: platform,
  });
}

/**
 * Track phone and email clicks.
 */
export function trackContactClick(
  contactType: "phone" | "email"
): void {
  trackEvent("contact_click", {
    contact_type: contactType,
  });
}
