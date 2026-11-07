import { useEffect, useState } from "react";
import { Cookie, ShieldCheck, X } from "lucide-react";
import { Link } from "react-router-dom";

import {
  getCookiePreferences,
  saveCookiePreferences,
  type CookiePreferences,
} from "../analytics/consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem("alvantix-cookie-consent");

    if (!savedConsent) {
      setVisible(true);
    } else {
      setPreferences(getCookiePreferences());
    }

    const openSettings = () => {
      setPreferences(getCookiePreferences());
      setVisible(true);
      setShowPreferences(true);
    };

    window.addEventListener(
      "alvantix-open-cookie-settings",
      openSettings
    );

    return () => {
      window.removeEventListener(
        "alvantix-open-cookie-settings",
        openSettings
      );
    };
  }, []);

  const savePreferences = (selected: CookiePreferences) => {
    saveCookiePreferences(selected);

    setPreferences(selected);
    setVisible(false);
    setShowPreferences(false);
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectOptional = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const openPreferences = () => {
    setPreferences(getCookiePreferences());
    setShowPreferences(true);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">

        {!showPreferences ? (
          <div className="p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-blue-50 text-blue-600 items-center justify-center shrink-0">
                <Cookie className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                    Your Privacy Matters
                  </h2>

                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>

                <p className="text-sm leading-6 text-slate-600">
                  Alvantix uses essential technologies to support
                  website functionality. With your permission, we may
                  also use optional cookies and similar technologies
                  to understand website usage and improve your experience.
                  You can accept all, reject optional technologies,
                  or manage your preferences.
                </p>

                <div className="flex flex-wrap gap-2 mt-3 text-xs">
                  <Link
                    to="/privacy-policy"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>

                  <span className="text-slate-300">•</span>

                  <Link
                    to="/cookie-policy"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={acceptAll}
                className="px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Accept All
              </button>

              <button
                onClick={rejectOptional}
                className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Reject Optional
              </button>

              <button
                onClick={openPreferences}
                className="px-6 py-3 rounded-xl border border-blue-200 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Manage Preferences
              </button>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-7">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Cookie Preferences
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Choose which optional technologies you allow.
                </p>
              </div>

              <button
                onClick={() => setShowPreferences(false)}
                className="p-2 rounded-lg hover:bg-slate-100"
                aria-label="Close preferences"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 mb-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Essential Technologies
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    Required for core website functionality and security.
                  </p>
                </div>

                <span className="text-xs font-semibold text-green-600">
                  Always Active
                </span>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 mb-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Analytics Technologies
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    Help us understand website traffic and visitor activity.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      analytics: e.target.checked,
                    }))
                  }
                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                  aria-label="Allow analytics technologies"
                />
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 mb-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Marketing Technologies
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    Used for marketing and advertising measurement,
                    if implemented.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      marketing: e.target.checked,
                    }))
                  }
                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                  aria-label="Allow marketing technologies"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => savePreferences(preferences)}
                className="flex-1 px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Save My Preferences
              </button>

              <button
                onClick={rejectOptional}
                className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Reject Optional
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
