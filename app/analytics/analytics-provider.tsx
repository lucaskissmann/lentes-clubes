"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { GA_MEASUREMENT_ID, META_PIXEL_ID } from "@/app/analytics/config";

// ─── Helpers de GA4 ────────────────────────────────────────
export function gaPageView(url: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}

export function gaEvent(
  action: string,
  params?: Record<string, string | number>
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, params);
}

// ─── Helpers de Meta Pixel ─────────────────────────────────
export function pixelTrack(
  event: string,
  params?: Record<string, string | number>
) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", event, params);
}

// ─── Componente principal ──────────────────────────────────
export function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Dispara page_view no GA4 a cada mudança de rota
  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    gaPageView(url);

    // Envia UTMs como evento customizado para segmentar por torcida
    const time = searchParams.get("time"); // ?time=inter | ?time=gremio
    if (time) {
      gaEvent("club_page_view", { club: time });
      pixelTrack("ViewContent", { content_name: `lentes_${time}` });
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* ── Google Analytics 4 ── */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>

      {/* ── Meta Pixel ── */}
      <Script id="meta-pixel-init" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Noscript fallback do Meta Pixel */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}