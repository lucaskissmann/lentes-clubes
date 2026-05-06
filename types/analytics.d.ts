declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
    fbq: (
      command: "init" | "track" | "trackCustom",
      eventOrId: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq: unknown;
  }
}

export {};