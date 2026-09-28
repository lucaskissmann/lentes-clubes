"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { gaEvent, pixelTrack } from "@/app/analytics/analytics-provider";

export default function PillNav({ active }: { active: string }) {
  const router = useRouter();

  const items = [
    { id: "hub",    label: "Hub",    href: "/" },
    { id: "inter",  label: "Inter",  href: "/inter" },
    { id: "gremio", label: "Grêmio", href: "/gremio" },
    { id: "palmeiras", label: "Palmeiras", href: "/palmeiras" },
    { id: "corinthians", label: "Corinthians", href: "/corinthians" },
  ];

  function handleClubClick(id: string, href: string) {
    gaEvent("club_selected", {
      time: id,
      utm_source: "pill_nav",
      utm_medium: "internal",
      utm_campaign: "lentes_clubes",
    });

    pixelTrack("ViewContent", {
      content_name: `lentes_${id}`,
      content_category: "clube",
    });

    router.push(href);
  }

  const baseClass = "px-2 py-1.5 min-[425px]:px-3 sm:px-4 rounded-full text-[10px] min-[425px]:text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap";
  const activeClass = "bg-zinc-300 text-black shadow-sm";
  const inactiveClass = "text-white/50 hover:text-white hover:bg-white/10";

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-1.5 max-w-[calc(100vw-1rem)] rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-[0_4px_32px_rgba(0,0,0,0.6)]">      {items.map((item) =>
        item.id === "hub" ? (
          // Hub: Link simples, sem evento
          <Link
            key={item.id}
            href={item.href}
            className={`${baseClass} ${active === item.id ? activeClass : inactiveClass}`}
          >
            {item.label}
          </Link>
        ) : (
          // Inter / Grêmio: dispara evento antes de navegar
          <button
            key={item.id}
            onClick={() => handleClubClick(item.id, item.href)}
            className={`${baseClass} ${active === item.id ? activeClass : inactiveClass}`}
          >
            {item.label}
          </button>
        )
      )}
    </nav>
  );
}