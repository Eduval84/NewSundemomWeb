"use client";

import { useSyncExternalStore } from "react";

export const analyticsConsentKey = "sundemon-analytics-consent";

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("sundemon-analytics-consent", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("sundemon-analytics-consent", callback);
  };
}

function hasStoredConsent() {
  return window.localStorage.getItem(analyticsConsentKey) !== null;
}

function hasNoStoredConsent() {
  return !hasStoredConsent();
}

export { subscribeToConsent };

export function CookieConsent() {
  const isVisible = useSyncExternalStore(
    subscribeToConsent,
    hasNoStoredConsent,
    () => false,
  );

  function chooseConsent(value: "accepted" | "rejected") {
    window.localStorage.setItem(analyticsConsentKey, value);
    window.dispatchEvent(
      new CustomEvent("sundemon-analytics-consent", { detail: value }),
    );
  }

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      role="dialog"
      aria-label="Preferencias de privacidad"
      className="fixed inset-x-4 bottom-4 z-[60] border border-sand-300 bg-white-warm p-5 shadow-[0_12px_30px_rgba(45,38,31,0.16)] sm:inset-x-auto sm:right-6 sm:max-w-md"
    >
      <p className="font-display text-xl text-earth-700">Tu privacidad importa</p>
      <p className="mt-2 font-sans text-sm leading-6 text-ink-900/70">
        Usamos Google Analytics para entender cómo se utiliza la web y mejorarla. Puedes aceptar o rechazar estas cookies analíticas.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => chooseConsent("accepted")}
          className="rounded-full bg-forest-700 px-5 py-2.5 font-sans text-sm font-semibold text-cta-text transition-colors hover:bg-forest-600 focus-visible:outline-2 focus-visible:outline-copper-500"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => chooseConsent("rejected")}
          className="rounded-full border border-earth-700/30 px-5 py-2.5 font-sans text-sm font-semibold text-earth-700 transition-colors hover:border-copper-500 focus-visible:outline-2 focus-visible:outline-copper-500"
        >
          Rechazar
        </button>
      </div>
    </aside>
  );
}
