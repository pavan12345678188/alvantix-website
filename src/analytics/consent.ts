export type CookiePreferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

export const CONSENT_STORAGE_KEY = "alvantix-cookie-consent";

export const CONSENT_CHANGE_EVENT =
  "alvantix-cookie-consent-change";

export const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export function getCookiePreferences(): CookiePreferences {
  if (typeof window === "undefined") {
    return DEFAULT_PREFERENCES;
  }

  try {
    const saved = localStorage.getItem(CONSENT_STORAGE_KEY);

    if (!saved) {
      return { ...DEFAULT_PREFERENCES };
    }

    const parsed = JSON.parse(saved);

    return {
      essential: true,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
    };
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

export function hasAnalyticsConsent(): boolean {
  return getCookiePreferences().analytics;
}

export function hasMarketingConsent(): boolean {
  return getCookiePreferences().marketing;
}

export function saveCookiePreferences(
  preferences: CookiePreferences
): void {
  if (typeof window === "undefined") return;

  const consentData = {
    essential: true as const,
    analytics: preferences.analytics,
    marketing: preferences.marketing,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(
    CONSENT_STORAGE_KEY,
    JSON.stringify(consentData)
  );

  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGE_EVENT, {
      detail: consentData,
    })
  );
}