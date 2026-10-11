"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import { analyticsConsentKey, subscribeToConsent } from "@/components/privacy/cookie-consent";

const measurementId = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalytics() {
  const hasConsent = useSyncExternalStore(
    subscribeToConsent,
    () => window.localStorage.getItem(analyticsConsentKey) === "accepted",
    () => false,
  );

  if (process.env.NODE_ENV !== "production" || !measurementId || hasConsent !== true) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
